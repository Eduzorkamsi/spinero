import React, { useRef, useState } from "react";
import SearchIcon from "../searchicon";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import { nodeName } from "jquery";

function SearchOverlay() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
    <div className="overlay_search_mobile">
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
              width: "100%",
              height: "100vh",
              marginLeft: "-36%",
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
              width:"60%",
            }}
              className="searchInput"
              type="text"
              placeholder="What are you searching for?"
            />
          </div>
        )}
      </Overlay>
    </div>
      
    </>
  );
}

export default SearchOverlay;
