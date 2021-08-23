import * as React from "react";

function Svg7(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="1em"
      height="1em"
      {...props}
    >
      <circle r={15} cx={75} cy={123} />
      <circle r={15} cx={125} cy={123} />
      <path d="M25 155h150v30H25z" />
    </svg>
  );
}

export default Svg7;
