import React from 'react';

const FamilyIcon = props => {
  return (
      
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.7126 4.675C13.7126 6.7 12.0626 8.35 10.0001 8.35C7.9376 8.35 6.2876 6.7 6.2876 4.675C6.2876 2.65 7.9376 1 10.0001 1C12.0626 1 13.7126 2.65 13.7126 4.675Z" stroke="#828282" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 10.1125C5.0125 10.1125 1 14.0875 1 19H19C19 14.0875 14.9875 10.1125 10 10.1125Z" stroke="#828282" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

FamilyIcon.defaultProps = {
  width: '100',
  height: '200',
  stroke: '#828282',
};

export default FamilyIcon;
