import React from "react";
import classnames from "classnames";

const Button = ({
  buttonType,
  brandName,
  setNextColor,
  pseudoClass
}) => {

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
      onClick={setNextColor}>
      {buttonType === "tertiary" && (
        <div className="checkIcon"></div>
      )}
      {pseudoClass}
    </div>

  )
}

export default Button
