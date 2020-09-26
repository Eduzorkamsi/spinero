import React from "react";
import states from "../../states";
import "./style.css";

const CartForm = ({ addressInformation = {}, handleInputChange, children }) => {

  return (
    <>
      <div className="delivery_box2">
        <div class="form-column">
          <div class="form-group">
            <label for="inputName">First name</label>
            <input type="text" value={addressInformation.firstName} onChange={e => handleInputChange(e.target.value, "firstName")} class="form-control" id="inputName" placeholder="Ned" required></input>
          </div>
          <div class="form-group">
            <label for="inputName">Last name</label>
            <input type="text" value={addressInformation.lastName} onChange={e => handleInputChange(e.target.value, "lastName")} class="form-control" id="inputName" placeholder="Nwokolo" required></input>
          </div>
          <div class="form-group">
            <label for="inputNumber">Phone number</label>
            <input type="text" value={addressInformation.mobileNumber} onChange={e => handleInputChange(e.target.value, "mobileNumber")} class="form-control" id="inputNumber" placeholder="090xxxxxxx" required></input>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" value={addressInformation.address} onChange={e => handleInputChange(e.target.value, "address")} class="form-control" id="inputAddress" placeholder="1234 Main St" required></input>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" value={addressInformation.cityProvince} onChange={e => handleInputChange(e.target.value, "cityProvince")} class="form-control" id="inputCity" placeholder="San Fransisco" required></input>
          </div>
          <div class="form-group col-md-6">
            <label for="inputState">State</label>
            <select value={addressInformation.state} onChange={e => handleInputChange(e.target.value, "state")} id="inputState" class="form-control" required>
              <option value="" selected>Choose...</option>
              {
                states.map((state, i) => <option value={state} key={i}>{state}</option>)
              }
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputZip">Zip Postal Code</label>
            <input type="text" value={addressInformation.postalCode} onChange={e => handleInputChange(e.target.value, "postalCode")} class="form-control" id="inputZip" required></input>
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