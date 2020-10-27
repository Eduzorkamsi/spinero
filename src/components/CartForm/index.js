import React from "react";
import states from "../../states";
import "./style.css";

const CartForm = ({ addressInformation = {}, handleInputChange, children }) => {

  return (
    <>
      <div className="delivery_box2 col-sm-12 col-xs-12 mt-5 mt5forform">
        <div className="form-column mx-sm-4 mb-2 px-5 px5forform">
          <div className="form-group ">
            <label className="input_label_text" for="inputName">First name <span class="_dot_color">*</span></label>
            <input type="text" value={addressInformation.firstName} onChange={e => handleInputChange(e.target.value, "firstName")} className="form-control" id="inputName" placeholder="Ned" required></input>
          </div>
          <div className="form-group ">
            <label className="input_label_text" for="inputName">Last name <span class="_dot_color">*</span></label>
            <input type="text" value={addressInformation.lastName} onChange={e => handleInputChange(e.target.value, "lastName")} className="form-control" id="inputName" placeholder="Nwokolo" required></input>
          </div>
          <div className="form-group ">
            <label className="input_label_text" for="inputNumber">Phone number <span class="_dot_color">*</span></label>
            <input type="text" value={addressInformation.mobileNumber} onChange={e => handleInputChange(e.target.value, "mobileNumber")} className="form-control col-md-6" id="inputNumber" placeholder="090xxxxxxx" required></input>
          </div>
        </div>
        <div className="form-neither mx-sm-4 mb-2 px-5 px5forform">
        <div className="form-group ">
          <label className="input_label_text" for="inputAddress">Address <span class="_dot_color">*</span></label>
          <input type="text" value={addressInformation.address} onChange={e => handleInputChange(e.target.value, "address")} className="form-control" id="inputAddress" placeholder="1234 Main St" required></input>
        </div>
        </div>
       
        <div className="form-row mx-sm-4 mb-2 px-5 px5forform">
          <div className="form-group col-md-6">
            <label className="input_label_text" for="inputCity">City <span class="_dot_color">*</span></label>
            <input type="text" value={addressInformation.cityProvince} onChange={e => handleInputChange(e.target.value, "cityProvince")} className="form-control" id="inputCity" placeholder="San Fransisco" required></input>
          </div>
          <div className="form-group col-md-6">
            <label className="input_label_text" for="inputState">State <span class="_dot_color">*</span></label>
            <select value={addressInformation.state} onChange={e => handleInputChange(e.target.value, "state")} id="inputState" className="form-control" required>
              <option value="" selected>Choose...</option>
              {
                states.map((state, i) => <option value={state} key={i}>{state}</option>)
              }
            </select>
          </div>
          <div className="form-group col-md-6">
            <label className="input_label_text" for="inputZip">Zip Postal Code </label>
            <input type="text" value={addressInformation.postalCode} onChange={e => handleInputChange(e.target.value, "postalCode")} className="form-control" id="inputZip" required></input>
          </div>
        </div>
        {
          children
        }
      </div>
    </>
  )
}
export default CartForm;