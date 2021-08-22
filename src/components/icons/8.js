import * as React from "react";

function Svg8(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
      <circle r={15} cx={50} cy={123} />
      <circle r={15} cx={100} cy={123} />
      <circle r={15} cx={150} cy={123} />
      <path d="M25 155h150v30H25z" />
    </svg>
  );
}

export default Svg8;
