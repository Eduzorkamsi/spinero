import React, { useState } from "react";
import { useStep } from "react-hooks-helper";
import CartDeliveryInfo from "../../pages/CartDeliveryInfo";
import CartCardInfo from "../../pages/CartCardInfo";
import CartBillingInfo from "../../pages/CartBillingInfo";


const steps = [
  { id: "cartdeliveryinfo" },
  { id: "cartcardinfo" },
  { id: "cartbillinginfo" }
];



const MultiStepForm = ({ images }) => {
  const [shippingInformation, setShippingInformation] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    cityProvince: "",
    state: "",
    postalCode: "",
    saveShippingInformation: false
  });

  const [billingInformation, setBillingInformation] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    cityProvince: "",
    state: "",
    postalCode: "",
    saveBillingInformation: false
  });

  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const props = { navigation };

  const handleShippingInformationChange = (val, name) => {
    let addressInformation = { ...shippingInformation };
    addressInformation[name] = val;
    setShippingInformation(addressInformation);
  };

  const handleBillingInformationChange = (val, name) => {
    let addressInformation = { ...billingInformation };
    addressInformation[name] = val;
    setBillingInformation(addressInformation);
  };

  switch (id) {
    case "cartdeliveryinfo":
      return <CartDeliveryInfo {...props} shippingInformation={shippingInformation} billingInformation={billingInformation} handleInputChange={handleShippingInformationChange} />;
    case "cartcardinfo":
      return <CartCardInfo {...props} shippingInformation={shippingInformation} billingInformation={billingInformation} />;
    case "cartbillinginfo":
      return <CartBillingInfo {...props} shippingInformation={shippingInformation} billingInformation={billingInformation} handleInputChange={handleBillingInformationChange} />;
    default:
      return <></>;
  }
};

export default MultiStepForm;