import * as React from "react";

const Svg2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="1em"
    height="1em"
    {...props}
  >
    <circle fill="currentColor" r={15} cx={80} cy={170} />
    <circle fill="currentColor" r={15} cx={120} cy={170} />
  </svg>
);

export default Svg2;
