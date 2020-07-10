import React from "react";
import classnames from "classnames";
import VisibilitySensor from "react-visibility-sensor";

import "./UASection.css";

const shots = [
  "https://placeimg.com/400/400/any.png",
  "https://placeimg.com/400/400/any.png",
  "https://placeimg.com/400/400/any.png",
  "https://placeimg.com/400/400/any.png",
  "https://placeimg.com/400/400/any.png",
  "https://placeimg.com/400/400/any.png",
];

const UASection = () => {
  const imageElems = shots.map((src, index) => (
    <VisibilitySensor
      key={`${src}-${index}`}
      offset={{ partialVisibility: true }}
    >
      {({ isVisible }) => (
        <img
          className={classnames(`shot shot-${index}`, { shown: isVisible })}
          src={src}
          alt="Screenshot of UA"
        />
      )}
    </VisibilitySensor>
  ));
  return (
    <div className="ua-section">
      <VisibilitySensor offset={{ bottom: 40 }}>
        {({ isVisible }) => (
          <h2 className={classnames({ shown: isVisible })}>Unfair Advantage</h2>
        )}
      </VisibilitySensor>
      {imageElems}
    </div>
  );
};

export default UASection;
