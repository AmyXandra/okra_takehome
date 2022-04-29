import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Find all widget divs
// const WidgetDivs = document.querySelector("#okra_target");
// // Inject our React App into each
// WidgetDivs.forEach((Div) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App options={Div.dataset.options} />
//     </React.StrictMode>,
//     Div
//   );
// });

export class Okra {
  constructor() {}

  /**
   * Create the html tag for the okra
   */
  create() {
    // document.getElementById("okra").innerHTML = `<div id="okra_target"></div>`;
    console.log("got create");
  }

  /**
   * find the html tag for the okra and open it
   */
  open(data) {
    // document.getElementById("okra_target");
  }
}
