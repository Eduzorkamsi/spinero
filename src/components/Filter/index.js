import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";


const Filter = () => {
    return (
        <>
            <div className="filter_section">
                <ul>
                    <li className="filter_li">Gender
                    <i class="fas fa-plus"></i>
                    </li>

                    {/* <i class="fal fa-minus"></i> */}
                    <ul className="gender_category">
                        <li>Men</li>
                        <li>Women</li>
                    </ul>
                    <li className="filter_li">Categories
                    <i class="fas fa-plus"></i>
                    </li>

                    <ul className="categories_category">
                        <li>Shirts</li>
                        <li>Skirts</li>
                        <li>Trousers</li>
                        <li>Tops</li>
                        <li>Gowns</li>
                        <li>Vests</li>
                    </ul>
                    <li className="filter_li">Sizes
                    <i class="fas fa-plus"></i>
                    </li>
                    <ul>
                        <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">XS</label></li>
                            <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">S</label></li>
                            <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">M</label></li>
                            <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">L</label></li>
                            <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">XL</label></li>
                            <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">2XL</label></li>
                            <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">3XL</label></li>
                            <li> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">4XL</label></li>
                    </ul>
                        <li className="filter_li">Price
                    <i class="fas fa-plus"></i>
                        </li>
                        <ul>
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


