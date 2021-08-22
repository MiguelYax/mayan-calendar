import * as React from "react";

function Svg2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
      <circle r={15} cx={80} cy={170} />
      <circle r={15} cx={120} cy={170} />
    </svg>
  );
}

export default Svg2;