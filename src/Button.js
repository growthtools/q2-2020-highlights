import React, { useState } from "react";
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";
import classnames from "classnames";

const Button = ({
  buttonType,
  brandName,
  handleButtonChange,
  pseudoClass
}) => {

  const { ref } = useWebAnimations({ ...rubberBand });

  let initialClass = "button " + pseudoClass.toLowerCase();

  let classes = classnames(initialClass, {
    primary: buttonType === "primary",
    secondary: buttonType === "secondary",
    tertiary: buttonType === "tertiary",
    growthTools: brandName === "growthTools",
    growthUniversity: brandName === "growthUniversity",
    dripScripts: brandName === "dripScripts",
    goViral: brandName === "goViral",
    accelerators: brandName === "accelerators",
    attract: brandName === "attract",
    welcomely: brandName === "welcomely",

  })

  return (

    <div
      className={classes}
      onClick={handleButtonChange}
      ref={ref}>
      {buttonType === "tertiary" && (
        <div className="checkIcon"></div>
      )}
      {pseudoClass}
    </div>

  )
}

export default Button
