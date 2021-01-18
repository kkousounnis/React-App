import React from "react";

import StyledButton from "./CalculatorKey.css";

function CalculatorKey(props) {
  return (
    <StyledButton
      className={`${props.className}`}
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </StyledButton>
  );
}

export default CalculatorKey;
