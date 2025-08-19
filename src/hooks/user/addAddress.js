import { useForm, Controller } from "react-hook-form";
// import { addProductToDBServices } from "../../services/products/addProductService";
// import { useProductsContext } from "../../context/productContext";
import { addAddressServices } from "../../services/user/addAddressServices";
// import { runHook } from "../plugins/registry";

export const addAddress = () => {
  //   const { addProduct } = useProductsContext();
  const methods = useForm({ mode: "onSubmit" });

  const onSubmit = async ({ data, extra }) => {
    // console.log("in");

    // const modifiedData = await runHook("onBeforeProductAdd", data);
    const { data: result, error } = await addAddressServices({
      ...data,
      type: extra.type,
      user_id: extra.userId,
    });
    // console.log(result);
    // console.log(error);

    // if (result?.success) methods.reset();
    // await runHook("onAfterProductAdd", result);
    // if (!error) {
    //   addProduct(result.product);
    // }
    return { result, error };
  };

  return {
    ...methods,
    Controller,
    onSubmit,
  };
};
