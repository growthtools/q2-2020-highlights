import React from "react";
import classnames from "classnames";
import VisibilitySensor from "react-visibility-sensor";
import ScrollAnimation from "react-animate-on-scroll";

import "./LastWeeksWinsSection.css";

const shots = [
  "https://placeimg.com/400/400/any.png",
  "https://placeimg.com/400/400/any.png",
  "https://placeimg.com/400/400/any.png",
  "https://placeimg.com/400/400/any.png",
  "https://placeimg.com/400/400/any.png",
  "https://placeimg.com/400/400/any.png",
];

const LastWeeksWinsSection = () => {
  const imageElems = shots.map((src, index) => (
    <VisibilitySensor key={`${src}-${index}`} partialVisibility={true}>
      {({ isVisible }) => (
        <img
          className={classnames(`shot shot-${index}`, { shown: isVisible })}
          src={src}
          alt="Screenshot of Last Week's Wins"
        />
      )}
    </VisibilitySensor>
  ));
  return (
    <div className="last-weeks-wins-section">
      <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
        <h2>Last Week&apos;s Wins</h2>
      </ScrollAnimation>
      {imageElems}
    </div>
  );
};

export default LastWeeksWinsSection;
