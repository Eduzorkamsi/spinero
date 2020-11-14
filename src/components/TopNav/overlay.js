import React, { useRef, useState } from "react";
import SearchIcon from "../searchicon";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import { useHistory } from "react-router-dom";
import { nodeName } from "jquery";

function SearchOverlay() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="overlay_search_mobile">
        <Button variant="" ref={target} onClick={() => setShow(!show)}>
          <SearchIcon />
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShow(false);
                history.push("/ProductSearch", { searchText });
              }}
            >
              <div
                {...props}
                style={{
                  backgroundColor: "white",
                  textAlign: "center",
                  width: "100%",
                  height: "100vh",
                  marginLeft: "-36%",
                  color: "green",
                  borderRadius: 3,
                  ...props.style,
                }}
              >
                <img style={{marginRight:"51px"}} src={require("../../assets/icons/backsearch.svg")} />
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    marginRight: "21px",
                  }}
                  type="submit"
                >
                  <img
                    alt="logo"
                    className="search_logo"
                    src={require("../../assets/icons/searchred.svg")}
                  />
                </button>
                <input
                  style={{
                    width: "60%",
                    border: "none",
                  }}
                  className="searchInput"
                  type="text"
                  placeholder="What are you searching for?"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </form>
          )}
        </Overlay>
      </div>
    </>
  );
}

export default SearchOverlay;
