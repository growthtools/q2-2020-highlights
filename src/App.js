import React from "react";
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import { useImmer } from "use-immer";
import classnames from "classnames";

import "./App.css";
import "animate.css/animate.min.css";
import UASection from "./UASection";

function App() {
  const [showns, setShowns] = useImmer({});
  const show = elem =>
    setShowns(draft => {
      draft[elem] = true;
    });
  setTimeout(() => show("header"), 500);
  setTimeout(() => show("chevron"), 1000);

  const { keyframes, timing } = bounce;
  const { ref } = useWebAnimations({
    keyframes,
    timing: { ...timing, delay: 1000, duration: timing.duration * 1.5 },
  });

  return (
    <div className="App">
      <header>
        <h1 className={classnames({ shown: showns.header })}>
          Welcome to the Q2 2020 Growth Tools Engineering Highlights!
        </h1>
        <div
          className={classnames("chevron", { shown: showns.chevron })}
          ref={ref}
        >
          &or;
        </div>
      </header>
      <UASection />
    </div>
  );
}

export default App;
