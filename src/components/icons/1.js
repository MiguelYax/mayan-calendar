import * as React from "react";

function Svg1(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="1em"
      height="1em"
      {...props}
    >
      <circle r={15} cx={100} cy={170} />
    </svg>
  );
}

export default Svg1;
