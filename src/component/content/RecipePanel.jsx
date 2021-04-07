import React from "react";
import Recipe from "./Recipe";
import { generateFavorite } from "../../solution";

const RecipePanel = ({ item, auth, handleFavorites, favorites }) => {
  const currentItem = generateFavorite(item.category, item.name);
  const buttonStyle = favorites.includes(currentItem)
    ? "btn btn-danger mt-5"
    : "btn btn-outline-danger mt-5";
  return (
    <div className="recipe-panel">
      <div className="screen">
        <Recipe item={item} />
        {auth.currentUser && (
          <button
            type="button"
            className={buttonStyle}
            onClick={handleFavorites}
          >
            <i className="fa fa-heart"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipePanel;
