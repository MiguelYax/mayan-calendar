import * as React from "react";

const SvgBase2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="1em"
    height="1em"
    {...props}
  >
    <rect
      x={25}
      y={25}
      width={150}
      height={110}
      fill="none"
      strokeWidth={10}
      stroke="#000"
      rx={15}
      ry={15}
    />
    <rect
      x={35}
      y={35}
      width={130}
      height={90}
      fill="none"
      strokeWidth={5}
      stroke="#000"
      rx={15}
      ry={15}
    />
    <path
      d="M80 140c0 50 40 50 40 0"
      stroke="#000"
      strokeWidth={10}
      fill="none"
    />
    <path
      d="M90 140c0 35 20 35 20 0"
      stroke="#000"
      strokeWidth={5}
      fill="none"
    />
    <path
      d="M40 135c-20 55 40 55 40 0"
      stroke="#000"
      strokeWidth={10}
      fill="none"
    />
    <path
      d="M50 135c-20 40 20 40 20 0"
      stroke="#000"
      strokeWidth={5}
      fill="none"
    />
    <path
      d="M120 135c0 55 60 55 40 0"
      stroke="#000"
      strokeWidth={10}
      fill="none"
    />
    <path
      d="M130 135c0 40 40 40 20 0"
      stroke="#000"
      strokeWidth={5}
      fill="none"
    />
  </svg>
);

export default SvgBase2;
