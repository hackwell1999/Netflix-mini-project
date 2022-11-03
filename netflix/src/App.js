import React from "react";
import {actions,originals,comedy} from "./Components/urls"
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={actions} title="Action" isSmall={true}/>
      <RowPost url={comedy} title="Comedy" isSmall={true}/>
    </div>
  );
}

export default App;
