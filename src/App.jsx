import React from "react";
import JsonDataDisplay from "./components/List";

function App() {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>My List !! </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <JsonDataDisplay />
      </div>
    </React.Fragment>
  );
}

export default App;
