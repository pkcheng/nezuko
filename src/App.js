import React, { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import MenuPanel from "./component/MenuPanel";
import RecipePanel from "./component/RecipePanel";

function App() {
  const [category, setCategory] = useState("basic");
  const [item, setItem] = useState({
    name: "Planks",
    recipe: "/recipe/basic/craft_planks.gif",
    error: "",
  });
  return (
    <div className="full-height">
      <NavBar changeCategory={setCategory} />
      <div className="container-fluid">
        <div className="row">
          <MenuPanel category={category} changeItem={setItem} />
          <RecipePanel item={item} />
        </div>
      </div>
    </div>
  );
}

export default App;
