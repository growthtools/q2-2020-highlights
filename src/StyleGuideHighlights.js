import React, { useState } from "react";
import Button from './Button.js';

function StyleGuideHighlights() {

  const buttonTypes = ["primary", "secondary", "tertiary"];
  const brandNames = ["growthTools", "growthUniversity", "dripScripts", "goViral", "accelerators", "attract", "welcomely"];

  const [brandNameIndex, setBrandNameIndex] = useState(1);
  const [brandName, setBrandName] = useState("growthTools");

  function handleButtonChange() {
    setBrandNameIndex(brandNameIndex + 1)
    setBrandName(brandNames[brandNameIndex]);
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
                handleButtonChange={handleButtonChange}
                pseudoClass="default"
              />
              <Button
                buttonType={btype}
                handleButtonChange={handleButtonChange}
                pseudoClass="hover"
              />
              <Button
                buttonType={btype}
                handleButtonChange={handleButtonChange}
                pseudoClass="focus"
              />
              <Button
                buttonType={btype}
                handleButtonChange={handleButtonChange}
                pseudoClass="pressed"
              />
              <Button
                buttonType={btype}
                handleButtonChange={handleButtonChange}
                pseudoClass="disabled"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default StyleGuideHighlights
