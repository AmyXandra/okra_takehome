import React from "react";
import RootModal from "./components/modals/RootModal";
import useModal from "./components/modals/UseModal";
import ModalRoute from "./components/ModalRoute";

function App(props) {
  const { isShowing, toggle } = useModal();
  console.log("props", props);
  // const subreddit = domElement.getAttribute("data-subreddit");
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <RootModal isShowing={isShowing} hide={toggle}>
        <ModalRoute />
      </RootModal>
    </div>
  );
}

export default App;
