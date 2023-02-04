import React from "react";
import TextArea from "./TextArea";
import Navbar from "./Navbar";

function App() {
  return (
  <> 
    <Navbar/>
    <div className="container my-3">
      <TextArea heading="Analyze Your Text Here"></TextArea>
    </div>
  </>
  );
}

export default App;
