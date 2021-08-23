import * as React from "react";

function Svg0(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="none" stroke="#000" d="M0 0h200v200H0z" />
      <ellipse
        rx={75}
        ry={40}
        cx={100}
        cy={100}
        fill="none"
        strokeWidth={10}
        stroke="#000"
      />
      <path
        d="M35 77q65 73 130 0M75 62q-15 18 0 46M102 59q-17 25 0 56M125 62q-10 18 0 46"
        stroke="#000"
        strokeWidth={10}
        fill="none"
      />
    </svg>
  );
}

export default Svg0;
