import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const synth = window.speechSynthesis;
const voice = synth.getVoices()[83]; // 82 is carribean, 27 is US eng; 80 is scottish
const pitch = 0.4;
const rate = 0.8;

const utterThis = text => {
  let utter = new SpeechSynthesisUtterance(text);
  utter.pitch = pitch;
  utter.rate = rate;
  utter.voice = voice;
  synth.speak(utter);
};

const narrations = [
  "Welcome to the Q2, 2020, Growth Tools Engineering Team Highlights video!",
  "Unfair Advantage is the next evolution of Growth University. It will guide clients through the entire partnership process.",
  "Last Week's Wins helps our clients two-fold. First, we help future clients become more confident that they will succeed with us. Secondly, we can use our position to promote our clients and grow their business even more. Plus, it's super cool to see all these wins!",
  "Thank you for watching!",
];

let pages = Math.ceil(document.body.scrollHeight / window.innerHeight);
let playedNarrations = Array(pages).fill(false);
window.addEventListener("scroll", () => {
  const currentPage = Math.floor(window.scrollY / window.innerHeight);
  if (!playedNarrations[currentPage]) {
    utterThis(narrations[currentPage]);
    playedNarrations[currentPage] = true;
  }
});

ReactDOM.render(<App />, document.getElementById("root"));

const pageTop = page => page * window.innerHeight + 1;

setTimeout(() => {
  window.scroll({ top: 1, behavior: "smooth" });
  setTimeout(() => {
    window.scroll({ top: pageTop(1), behavior: "smooth" });
    setTimeout(() => {
      window.scroll({ top: pageTop(2), behavior: "smooth" });
      setTimeout(() => {
        window.scroll({ top: pageTop(3), behavior: "smooth" });
      }, 21500);
    }, 9500);
  }, 6500);
}, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
