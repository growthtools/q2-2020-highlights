import React, { useState } from "react";
import Button from './Button.js';

function StyleGuideHighlights() {

  const buttonTypes = ["primary", "secondary", "tertiary"];
  const brandNames = ["growthTools", "growthUniversity", "dripScripts", "goViral", "accelerators", "attract", "welcomely"];

  const [brandNameIndex, setBrandNameIndex] = useState(1);
  const [brandName, setBrandName] = useState("growthTools");

  function handleButtonChange() {
    for (let x = 0; x < brandNames.length; x++) {
      setBrandNameIndex(brandNameIndex + 1)
      setBrandName(brandNames[brandNameIndex]);
    }
  }

  return (
    <div className="style-guide">
      <h2>Style Guide Highlights</h2>
      <h3>Buttons for {brandName}</h3>
      <div className="types">
        {buttonTypes.map(btype => (
          <div key={btype}>
            <h5>{btype}</h5>
            <div className="buttons">
              <Button
                buttonType={btype}
                brandName={brandName}
                handleButtonChange={handleButtonChange}
                pseudoClass="Default"
              />
              <Button
                buttonType={btype}
                brandName={brandName}
                handleButtonChange={handleButtonChange}
                pseudoClass="Hover"
              />
              <Button
                buttonType={btype}
                brandName={brandName}
                handleButtonChange={handleButtonChange}
                pseudoClass="Focus"
              />
              <Button
                buttonType={btype}
                brandName={brandName}
                handleButtonChange={handleButtonChange}
                pseudoClass="Pressed"
              />
              <Button
                buttonType={btype}
                brandName={brandName}
                handleButtonChange={handleButtonChange}
                pseudoClass="Disabled"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default StyleGuideHighlights
