import React from "react";
import "./style.css"

const CardForm = () => {

  return (
    <>
      <div className="delivery_box2">
        <form>
          <div class="form-column">
            <div class="form-group">
              <label for="inputName">First name</label>
              <input type="text" class="form-control" id="inputName" placeholder="Ned"></input>
            </div>
            <div class="form-group">
              <label for="inputName">Last name</label>
              <input type="text" class="form-control" id="inputName" placeholder="Nwokolo"></input>
            </div>
            <div class="form-group ">
              <label for="inputEmail4">Email Address</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="nednwokolo@us.com"></input>
            </div>

            <div class="form-group">
              <label for="inputNumber">Phone number</label>
              <input type="number" class="form-control" id="inputNumber" placeholder="090xxxxxxx"></input>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputTown">Town</label>
              <select id="inputTown" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <select id="inputCity" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-6">
                                        <label for="inputZip">Zip Postal Code</label>
                                        <input type="text" class="form-control" id="inputZip"></input>
                                    </div>


          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"></input>
            <label class="form-check-label" for="gridCheck">
              Same as Billing Address
      </label>
          </div>
        </form>
      </div>
    </>
  )
}
export default CardForm;