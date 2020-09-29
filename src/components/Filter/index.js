import React from "react";
import "./style.css";



// import { Link } from "react-router-dom";


const Filter = () => {
    return (
        <>

   <div className="filter_section">

   
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               Gender
        </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul className="gender_show">
                        <li>Men <span class="label-count">(6)</span></li>
                        <li>Women<span class="label-count">(6)</span></li>
                    </ul>
      </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Categories
        </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                           
                    <ul className="categ_show">
                        <li>Shirts <span class="label-count">(6)</span></li>
                        <li>Skirts <span class="label-count">(6)</span></li>
                        <li>Trousers <span class="label-count">(6)</span></li>
                        <li>Tops <span class="label-count">(6)</span></li>
                        <li>Gowns <span class="label-count">(6)</span></li>
                        <li>Vests <span class="label-count">(6)</span></li>
                    </ul>
      </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               Sizes
        </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul className="size_show">
                        <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">XS</label> <span class="label-count">(6)</span></li>
                        <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">S</label><span class="label-count">(6)</span></li>
                        <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">M</label><span class="label-count">(6)</span></li>
                        <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">L</label><span class="label-count">(6)</span></li>
                        <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">XL</label><span class="label-count">(6)</span></li>
                        <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">2XL</label><span class="label-count">(6)</span></li>
                        <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">3XL</label><span class="label-count">(6)</span></li>
                        <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">4XL</label><span class="label-count">(6)</span></li>
                    </ul >
      </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Price
        </button>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul className="price_show">
                        <li><input class="form-control" type="text" placeholder="From"></input></li>
                        <li><input class="form-control" type="text" placeholder="To"></input></li>
                    </ul>
      </div>
                    </div>
                </div>
                <div className="filter_button">
                        <button class="btn btn-outline-secondary" type="button">Apply Filters</button>

                        <a href="">Clear Filter</a>
                    </div>
            </div>

            </div>
        </>
    );
};

export default Filter;


