import React, { useState } from "react";
import Button from './Button.js';
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";

function StyleGuideHighlights() {

  const buttonTypes = ["primary", "secondary", "tertiary"];
  const brandNames = ["growthTools", "growthUniversity", "dripScripts", "goViral", "accelerators", "attract", "welcomely"];

  const [brandNameIndex, setBrandNameIndex] = useState(0);
  //const [brandName, setBrandName] = useState("growthTools");

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

  let brandName = brandNames[brandNameIndex];

  return (
    <div className="style-guide">
      <h2 ref={ref}>Style Guide Highlights</h2>
      <h3>Buttons for <span className={`${brandName} header`}>{brandName}</span></h3>
      <div className="types">
        {buttonTypes.map(btype => (
          <div key={btype}>
            <h5>{btype}</h5>
            <div className="buttons">
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
    </div >

  )
}

export default StyleGuideHighlights
