import React, { useState } from "react";
import "./style.css";
import Axios from "axios";
import constants from "../../constants";

const Filter = (props) => {

    const [filter, setFilter] = useState({});
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        Axios.get(`${constants.BASE_API}/api/category`).then(res => res.data && res.data.data).then((data = {}) => {
            setCategories(data.items);
        }).catch(error => {
            console.error(error);
        });
    };

    useState(() => {
        if (props.categoryType) {
            setFilter({ ...filter, categoryType: props.categoryType });
        }

        getCategories();

    }, []);

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
                                    {
                                        props.gender ?
                                            <li className="titlecase-text">{props.gender}</li> :
                                            <>
                                                <li><button className="no-border no-background" onClick={() => setFilter({ ...filter, categoryType: "Men" })} type="button">Men</button></li>
                                                <li><button className="no-border no-background" onClick={() => setFilter({ ...filter, categoryType: "Women" })} type="button">Women</button></li>
                                            </>
                                    }
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
                                    {
                                        categories.reduce((acc, category) => {
                                            if (props.categoryType === category?.type?._id || !props.categoryType) {
                                                acc.push(
                                                    <li key={category._id}>
                                                        <button
                                                            className="no-border no-background titlecase-text"
                                                            style={{ lineHeight: "18px", marginBottom: "20px", color: "#828282" }}
                                                            onClick={() => setFilter({ ...filter, category: category._id })}
                                                            type="button">
                                                            {category.name.toLowerCase()}
                                                        </button>
                                                    </li>)
                                            }
                                            return acc;
                                        }, [])
                                    }
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
                                    <li> <input type="checkbox" onChange={e => setFilter({ ...filter, size: e.target.value })} class="form-check-input" value="XS" id="exampleCheck1"></input>
                                        <label class="form-check-label" for="exampleCheck1">XS</label> </li>
                                    <li> <input type="checkbox" onChange={e => setFilter({ ...filter, size: e.target.value })} class="form-check-input" value="S" id="exampleCheck2"></input>
                                        <label class="form-check-label" for="exampleCheck2">S</label></li>
                                    <li> <input type="checkbox" onChange={e => setFilter({ ...filter, size: e.target.value })} class="form-check-input" value="M" id="exampleCheck3"></input>
                                        <label class="form-check-label" for="exampleCheck3">M</label></li>
                                    <li> <input type="checkbox" onChange={e => setFilter({ ...filter, size: e.target.value })} class="form-check-input" value="L" id="exampleCheck4"></input>
                                        <label class="form-check-label" for="exampleCheck4">L</label></li>
                                    <li> <input type="checkbox" onChange={e => setFilter({ ...filter, size: e.target.value })} class="form-check-input" value="XL" id="exampleCheck5"></input>
                                        <label class="form-check-label" for="exampleCheck5">XL</label></li>
                                    <li> <input type="checkbox" onChange={e => setFilter({ ...filter, size: e.target.value })} class="form-check-input" value="2XL" id="exampleCheck6"></input>
                                        <label class="form-check-label" for="exampleCheck6">2XL</label></li>
                                    <li> <input type="checkbox" onChange={e => setFilter({ ...filter, size: e.target.value })} class="form-check-input" value="3XL" id="exampleCheck7"></input>
                                        <label class="form-check-label" for="exampleCheck7">3XL</label></li>
                                    <li> <input type="checkbox" onChange={e => setFilter({ ...filter, size: e.target.value })} class="form-check-input" value="4XL" id="exampleCheck8"></input>
                                        <label class="form-check-label" for="exampleCheck8">4XL</label></li>
                                </ul>
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
                                    <li><input onChange={e => setFilter({ ...filter, minPrice: e.target.value })} class="form-control" type="number" min="10" placeholder="From"></input></li>
                                    <li><input onChange={e => setFilter({ ...filter, maxPrice: e.target.value })} class="form-control" type="number" min={filter.minPrice || 10} placeholder="To"></input></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="filter_button">
                        <button class="btn btn-outline-secondary" onClick={() => {
                            const filterKeys = Object.keys(filter);
                            let url = `${constants.BASE_API}/api/product/search/price?`;
                            filterKeys.forEach((key, i) => {
                                url += `${key}=${filter[key]}&`;
                            });

                            Axios.get(url).then(res => res.data && res.data.data).then((data = {}) => {
                                props.setProducts(data.items);
                            }).catch(error => {
                                console.error(error);
                            });

                        }} type="button">Apply Filters</button>

                        <button class="no-background no-border" onClick={() => {
                            const filter = {};
                            if (props.categoryType) {
                                filter["categoryType"] = props.categoryType;
                            }
                            setFilter(filter);
                        }} style={{ textDecorationLine: "underline", color: "#828282", marginBottom: "30px" }} type="button">Clear Filter</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;


