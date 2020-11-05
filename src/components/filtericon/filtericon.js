import React from "react";

const FilterIcon = (props) => {
  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2.36364L4.5 2.36364M6.5 2.36364L10 2.36364M1 6L5.5 6M7.5 6L10 6M1 9.63636L3.5 9.63636M5.5 9.63636L10 9.63636M4.5 1L4.5 3.72727M7.5 4.63636L7.5 7.36364M3.5 8.27273L3.5 11"
        stroke={props.active ? '#FF0000' : props.stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

FilterIcon.defaultProps = {
  width: "100",
  height: "200",
  stroke: "#828282",
};

export default FilterIcon;
