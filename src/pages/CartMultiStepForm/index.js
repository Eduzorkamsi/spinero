import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import MultiStepForm from "../../components/MultipleStepForm";

function CartMultiStepForm() {
  const history = useHistory(); 
  useEffect(() => {
    let token = localStorage.getItem('token'); //TODO you should really hit the endpoint to verify this token
    if (!token) {
   
    }
  }, []);

  return (
    <div className="Cart_Multi_Step_Form">
      <div>
        <MultiStepForm />
      </div>
    </div>
  );
}

export default CartMultiStepForm;
