import React from "react";
import classnames from "classnames";
import VisibilitySensor from "react-visibility-sensor";
import ScrollAnimation from "react-animate-on-scroll";

import "./UASection.css";

const shots = [
  "/ua-6.png",
  "/ua-2.png",
  "/ua-3.png",
  "/ua-4.png",
  "/ua-5.png",
  "/ua-1.png",
];

const UASection = () => {
  const imageElems = shots.map((src, index) => (
    <VisibilitySensor key={`${src}-${index}`} partialVisibility={true}>
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
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <h2>Unfair Advantage</h2>
      </ScrollAnimation>
      {imageElems}
    </div>
  );
};

export default UASection;
