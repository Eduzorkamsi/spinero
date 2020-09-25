import React from "react";
import { useStep } from "react-hooks-helper";
import CartDeliveryInfo from "../../pages/CartDeliveryInfo";
import CartCardInfo from "../../pages/CartCardInfo";
import CartBillingInfo from "../../pages/CartBillingInfo";


const steps = [
  { id: "cartdeliveryinfo" },
  { id: "cartcardinfo" },
  { id: "cartbillinginfo" },
 
];



const MultiStepForm = ({ images }) => {
   const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { navigation };

  switch (id) {
    case "cartdeliveryinfo":
      return <CartDeliveryInfo {...props} />;
    case "cartcardinfo":
      return <CartCardInfo {...props} />;
    case "cartbillinginfo":
      return <CartBillingInfo {...props} />;
     
    default:
      return null;
  }
};

export default MultiStepForm;