// src/sdk/payments/processOrderPayment.js
// import { createOrderServices } from "../../../services/payments/razorpay/createOrderServices";
import { addOrderItems } from "../../orders";
import { createOrder } from "./createOrder";
import { openRazorpayCheckout } from "./openRazorpay";
import { verifyPayment } from "./verifyPayment";

/**
 * Handles full order payment end-to-end
 * @param {Object} params
 * @param {number} params.amount - Amount in smallest currency unit (paise)
 * @param {string} params.currency - Currency code (default "INR")
 * @param {Object} params.user - {name, email, phone}
 * @param {Object} params.billing_address - JSON object for billing address
 * @param {Object} params.shipping_address - JSON object for shipping address
 * @param {function} params.onSuccess - Callback for successful payment
 * @param {function} params.onFailure - Callback for failed payment
 */
export const processOrderPayment = async ({
  amount,
  currency = "INR",
  user,
  billing_address,
  key_id,
  shipping_address,
  order_items,
  onSuccess,
  onFailure,
}) => {
  try {
    // 1️⃣ Create order in backend with addresses
    const { data, error } = await createOrder({
      amount,
      currency,
      user_id: user.user_id,
      billing_address,
      shipping_address,
    });
    if (error) throw new Error(error);
    // console.log(data);
    await addOrderItems({ order_id: data.dbOrder.order_id, order_items });
    // 2️⃣ Call your existing openRazorpayCheckout function
    await openRazorpayCheckout(
      data.order,
      user,
      key_id,
      async (response) => {
        try {
          //   const verification = await verifyPayment(response);
          onSuccess?.(response);
        } catch (err) {
          onFailure?.(err);
        }
      },
      onFailure
    );
  } catch (err) {
    onFailure?.(err);
  }
};
