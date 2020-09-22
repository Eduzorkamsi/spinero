import React from "react";
import "./style.css";



// import { Link } from "react-router-dom";


const Filter = () => {
    return (
        <>

            <div className="filter_section">
           
                <ul>
                    
                    <li className="filter_li" >Gender
                    <i class="fas fa-plus first"></i>
                    </li>

                    {/* <i class="fal fa-minus"></i> */}
                    <ul className="gender_show">
                        <li>Men <span class="label-count">(6)</span></li>
                        <li>Women<span class="label-count">(6)</span></li>
                    </ul>
                    <li className="filter_li2">Categories
                    <i class="fas fa-plus second"></i>
                    </li>

                    <ul className="categ_show">
                        <li>Shirts <span class="label-count">(6)</span></li>
                        <li>Skirts <span class="label-count">(6)</span></li>
                        <li>Trousers <span class="label-count">(6)</span></li>
                        <li>Tops <span class="label-count">(6)</span></li>
                        <li>Gowns <span class="label-count">(6)</span></li>
                        <li>Vests <span class="label-count">(6)</span></li>
                    </ul>
                    <li className="filter_li3">Sizes
                    <i class="fas fa-plus third"></i>
                    </li>
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
                    <li className="filter_li4">Price
                    <i class="fas fa-plus fourth"></i>
                    </li>
                    <ul className="price_show">
                        <li><input class="form-control" type="text" placeholder="From"></input></li>
                        <li><input class="form-control" type="text" placeholder="To"></input></li>
                    </ul>
                    <div className="filter_button">
                        <button class="btn btn-outline-secondary" type="button">Apply Filters</button>

                        <a href="">Clear Filter</a>
                    </div>

                </ul>

            </div>
        </>
    );
};

export default Filter;


