import React, { useRef, useState } from "react";
import "./overlay.css";
import SearchIcon from "../searchicon";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import { nodeName } from "jquery";

function SearchOverlay() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant="" ref={target} onClick={() => setShow(!show)}>
        <SearchIcon />
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: "white",
              textAlign: "center",
              width: "112.5%",
              height: "100vh",
              marginLeft: "-90%",
              color: "green",
              borderRadius: 3,
              ...props.style,
            }}
          >
            <button 
            
            style={{
                
              backgroundColor: "transparent",
              border: "none",
              marginRight: "21px"
            }}

            type="submit">
            
              <img
                alt="logo"
                className="search_logo"
                src={require("../../assets/icons/searchred.svg")}
              />
            </button>
            <input
            style={{
              width:"30%",
            }}
              className="searchInput"
              type="text"
              placeholder="What are you searching for?"
            />
          </div>
        )}
      </Overlay>
    </>
  );
}

export default SearchOverlay;
