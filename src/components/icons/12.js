import * as React from "react";

const Svg12 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="1em"
    height="1em"
    {...props}
  >
    <circle r={15} cx={75} cy={77} />
    <circle r={15} cx={125} cy={77} />
    <path d="M25 108h150v30H25zm0 47h150v30H25z" />
  </svg>
);

export default Svg12;
