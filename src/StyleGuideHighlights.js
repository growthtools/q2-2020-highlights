import React, { useState } from "react";
import Button from './Button.js';
import CheckboxControl from './CheckboxControl.js';
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";

function StyleGuideHighlights() {

  const buttonTypes = ["primary", "secondary", "tertiary"];
  const brandNames = ["growthTools", "growthUniversity", "dripScripts", "goViral", "accelerators", "attract", "welcomely"];

  const [brandNameIndex, setBrandNameIndex] = useState(0);
  const [checkboxValue1, setCheckboxValue1] = useState(false);
  const [checkboxValue2, setCheckboxValue2] = useState(false);

  const { keyframes, timing } = rubberBand;
  const { ref } = useWebAnimations({
    keyframes,
    timing: { ...timing, delay: 3000, duration: timing.duration * 1.5 },
  });

  function setNextColor() {
    if (brandNameIndex === brandNames.length - 1) {
      setBrandNameIndex(0)
      return
    }
    setBrandNameIndex(brandNameIndex + 1)
    //setBrandName(brandNames[brandNameIndex]);
    //}
  }

  function handleCheckbox1() {
    if (checkboxValue1 === false) {
      setCheckboxValue1(true);
    }
    if (checkboxValue1 === true) {
      setCheckboxValue1(false);
    }
  }

  function handleCheckbox2() {
    if (checkboxValue2 === false) {
      setCheckboxValue2(true);
    }
    if (checkboxValue2 === true) {
      setCheckboxValue2(false);
    }
  }

  let brandName = brandNames[brandNameIndex];

  return (
    <div className="style-guide">
      <h2 ref={ref}>Style Guide Highlights</h2>
      <h3>Buttons for <span className={`${brandName} header`}>{brandName}</span></h3>
      <div className="btn-types">
        {buttonTypes.map(btype => (
          <div key={btype}>
            <h5>{btype}</h5>
            <div className="all-buttons">
              <Button
                buttonType={btype}
                brandName={brandName}
                setNextColor={setNextColor}
                pseudoClass="Default"
              />
              <Button
                buttonType={btype}
                brandName={brandName}
                setNextColor={setNextColor}
                pseudoClass="Hover"
              />
              <Button
                buttonType={btype}
                brandName={brandName}
                setNextColor={setNextColor}
                pseudoClass="Focus"
              />
              <Button
                buttonType={btype}
                brandName={brandName}
                setNextColor={setNextColor}
                pseudoClass="Pressed"
              />
              <Button
                buttonType={btype}
                brandName={brandName}
                setNextColor={setNextColor}
                pseudoClass="Disabled"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="checkbox-types">
        <h3>Checkbox Control</h3>
        <CheckboxControl
          checked={checkboxValue1}
          label="Check Me Out"
          onChange={handleCheckbox1} />
        <CheckboxControl
          checked={checkboxValue2}
          label="Or Check Me Out"
          onChange={handleCheckbox2} />
      </div>
    </div >

  )
}

export default StyleGuideHighlights
