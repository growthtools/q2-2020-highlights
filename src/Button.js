import React, { useState } from "react";
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";
import classnames from "classnames";

const Button = ({
  buttonType,
  handleButtonChange,
  pseudoClass
}) => {

  const { ref } = useWebAnimations({ ...rubberBand });

  let classes = classnames("button", {
    primary: buttonType === "primary",
    secondary: buttonType === "secondary",
    tertiary: buttonType === "tertiary"
  })

  return (

    <div
      className={classes}
      onClick={handleButtonChange}
      ref={ref}>
      {pseudoClass}
    </div>

  )
}

export default Button
