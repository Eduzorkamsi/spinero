import React, { useEffect } from "react";
import MultiStepForm from "../../components/MultipleStepForm";

function CartMultiStepForm() {
  useEffect(() => {
    let token = localStorage.getItem('token'); //TODO you should really hit the endpoint to verify this token
    if (!token) {
      this.props.history.push('/login')
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
