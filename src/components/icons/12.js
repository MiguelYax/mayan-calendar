import * as React from "react";

function Svg12(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
      <circle r={15} cx={75} cy={77} />
      <circle r={15} cx={125} cy={77} />
      <path d="M25 108h150v30H25zM25 155h150v30H25z" />
    </svg>
  );
}

export default Svg12;
