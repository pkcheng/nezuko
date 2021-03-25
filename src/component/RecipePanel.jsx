import React from "react";
import Recipe from "./Recipe";

const RecipePanel = ({ item }) => {
  return (
    <div className="col-3 recipe-panel">
      <div className="screen">
        <Recipe item={item} />
      </div>
    </div>
  );
};

export default RecipePanel;
