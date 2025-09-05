import { updateOrderStatusServices } from "../../../services/orders/updateOrderStatusServices";
import { verifyPayment } from "./verifyPayment";

function loadRazorpayScript() {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      return resolve(true); // already loaded
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Razorpay SDK failed to load"));
    document.body.appendChild(script);
  });
}

export async function openRazorpayCheckout(
  order,
  user,
  key_id,
  onSuccess,
  onFailure
) {
  await loadRazorpayScript();

  const options = {
    key: key_id,
    amount: order.amount,
    currency: order.currency,
    name: "My E-Commerce",
    description: "Order Payment",
    order_id: order.id,
    prefill: {
      name: user?.name,
      email: user?.email,
      contact: user?.phone,
    },
    handler: async function (response) {
      try {
        console.log(response);

        const verifyRes = await verifyPayment(response);
        if (verifyRes.success) onSuccess?.(verifyRes);
        else {
          await updateOrderStatusServices({
            order_id: order.id,
            payment_status: "failed",
            // status: "payment_failed",
          });
          onFailure?.(verifyRes);
        }
      } catch (err) {
        await updateOrderStatusServices({
          order_id: order.id,
          payment_status: "failed",
          // status: "payment_failed",
        });
        onFailure?.(err);
      }
    },
    modal: {
      ondismiss: async () => {
        await updateOrderStatusServices({
          order_id: order.id,
          payment_status: "failed",
          // status: "payment_failed",
        });
        console.log("⚠️ Payment popup closed by user");
        onFailure?.({ success: false, message: "Payment cancelled by user" });
      },
    },
    theme: { color: "#000000" },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.on("payment.failed", async function (response) {
    console.log("❌ Payment Failed:", response.error);
    await updateOrderStatusServices({
      order_id: order.id,
      payment_status: "failed",
      // status: "payment_failed",
    });
    onFailure?.({
      success: false,
      message: response.error?.description || "Payment failed",
      error: response.error,
    });
  });
  razorpay.open();
}
