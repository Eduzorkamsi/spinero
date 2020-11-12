import React, { useState } from "react";
import "./mobilefilter.css";
import Axios from "axios";
import constants from "../../constants";
import FilterImage from "../../assets/icons/filter.svg"
import FilterIcon from "../filtericon/filtericon";

const MobileFilter = (props) => {
  const initialFilter = {};
  if (props.category) {
    initialFilter["category"] = props.category;
  }

  const [filter, setFilter] = useState(initialFilter);
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    Axios.get(`${constants.BASE_API}/api/category`)
      .then((res) => res.data && res.data.data)
      .then((data = {}) => {
        setCategories(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const filterProducts = (filter = {}) => {
    if (props.findProducts) {
      const params = Object.values(filter);
      props.findProducts(...params);
    } else {
      const filterKeys = Object.keys(filter);
      let url = `${constants.BASE_API}/api/product/search/price?`;
      filterKeys.forEach((key, i) => {
        url += `${key}=${filter[key]}&`;
      });

      Axios.get(url)
        .then((res) => res.data && res.data.data)
        .then((data = {}) => {
          props.setProducts(data.items);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useState(() => {
    if (props.categoryType) {
      setFilter({ ...filter, categoryType: props.categoryType });
    }
    getCategories();
    filterProducts();
  }, []);

  return (
    <>
      <div className="filters_section">
        <button
          class="btn btn-primary mobfilterbutton"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Filter <FilterIcon/>
        </button>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
          <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Gender
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="gender_show">
                  {props.gender ? (
                    <li className="titlecase-text">{props.gender}</li>
                  ) : (
                    <>
                      <li className={filter.categoryType === "Men" ? "active__filter" : ""}>
                        <button
                          className="no-border no-background"
                          onClick={() =>
                            setFilter({ ...filter, categoryType: "Men" })
                          }
                          type="button"
                        >
                          Men
                        </button>
                      </li>
                      <li className={filter.categoryType === "Women" ? "active__filter" : ""}>
                        <button
                          className="no-border no-background"
                          onClick={() =>
                            setFilter({ ...filter, categoryType: "Women" })
                          }
                          type="button"
                        >
                          Women
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Categories
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="categ_show">
                  {categories.reduce((acc, category) => {
                    if (
                      props.categoryType === category?.type?._id ||
                      !props.categoryType
                    ) {
                      acc.push(
                        <li key={category._id} className={filter.category === (category[props.categorySelector] || category._id) ? "active__filter" : ""}>
                          <button
                            className="no-border no-background titlecase-text"
                            style={{
                              marginBottom: "20px",
                              color: "#828282",
                            }}
                            onClick={() =>
                              setFilter({
                                ...filter,
                                category:
                                  category[props.categorySelector] ||
                                  category._id,
                              })
                            }
                            type="button"
                          >
                            {category.name.toLowerCase()}
                          </button>
                        </li>
                      );
                    }
                    return acc;
                  }, [])}
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Sizes
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="size_show">
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setFilter({ ...filter, size: e.target.value })
                      }
                      className="form-check-input"
                      value="XS"
                      id="exampleCheck1"
                    ></input>
                    <label className="form-check-label" for="exampleCheck1">
                      XS
                    </label>{" "}
                  </li>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setFilter({ ...filter, size: e.target.value })
                      }
                      className="form-check-input"
                      value="S"
                      id="exampleCheck2"
                    ></input>
                    <label className="form-check-label" for="exampleCheck2">
                      S
                    </label>
                  </li>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setFilter({ ...filter, size: e.target.value })
                      }
                      className="form-check-input"
                      value="M"
                      id="exampleCheck3"
                    ></input>
                    <label className="form-check-label" for="exampleCheck3">
                      M
                    </label>
                  </li>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setFilter({ ...filter, size: e.target.value })
                      }
                      className="form-check-input"
                      value="L"
                      id="exampleCheck4"
                    ></input>
                    <label className="form-check-label" for="exampleCheck4">
                      L
                    </label>
                  </li>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setFilter({ ...filter, size: e.target.value })
                      }
                      className="form-check-input"
                      value="XL"
                      id="exampleCheck5"
                    ></input>
                    <label className="form-check-label" for="exampleCheck5">
                      XL
                    </label>
                  </li>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setFilter({ ...filter, size: e.target.value })
                      }
                      className="form-check-input"
                      value="2XL"
                      id="exampleCheck6"
                    ></input>
                    <label className="form-check-label" for="exampleCheck6">
                      2XL
                    </label>
                  </li>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setFilter({ ...filter, size: e.target.value })
                      }
                      className="form-check-input"
                      value="3XL"
                      id="exampleCheck7"
                    ></input>
                    <label className="form-check-label" for="exampleCheck7">
                      3XL
                    </label>
                  </li>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setFilter({ ...filter, size: e.target.value })
                      }
                      className="form-check-input"
                      value="4XL"
                      id="exampleCheck8"
                    ></input>
                    <label className="form-check-label" for="exampleCheck8">
                      4XL
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Price
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="price_show">
                  <li>
                    <input
                      onChange={(e) =>
                        setFilter({ ...filter, minPrice: e.target.value })
                      }
                      className="form-control"
                      type="number"
                      min="10"
                      placeholder="From"
                    ></input>
                  </li>
                  <li>
                    <input
                      onChange={(e) =>
                        setFilter({ ...filter, maxPrice: e.target.value })
                      }
                      className="form-control"
                      type="number"
                      min={filter.minPrice || 10}
                      placeholder="To"
                    ></input>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="filter_button">
            <button
              className="btn btn-outline-secondary"
              onClick={() => filterProducts(filter)}
              type="button"
            >
              Apply Filters
            </button>

            <button
              className="no-background no-border"
              onClick={() => {
                const filter = {};
                if (props.categoryType) {
                  filter["categoryType"] = props.categoryType;
                }
                setFilter(filter);
                filterProducts(filter);
              }}
              style={{
                textDecorationLine: "underline",
                color: "#828282",
                marginBottom: "30px",
              }}
              type="button"
            >
              Clear Filter
            </button>
          </div>
        </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default MobileFilter;
