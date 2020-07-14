import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./Thanks.css";

const Thanks = () => {
  return (
    <div className="thanks">
      <ScrollAnimation animateIn="jackInTheBox" animateOut="hinge">
        <h2>Thank you for watching!!</h2>
      </ScrollAnimation>
    </div>
  );
};

export default Thanks;
