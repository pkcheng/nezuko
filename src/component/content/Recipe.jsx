import React, { useEffect, useState } from "react";
import { getItemTitle } from "../../solution";
const Recipe = ({ item }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="screen-content">
      <p id="title">{getItemTitle(item.name)}</p>
      {loaded ? null : (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <img
        src={item.recipe}
        alt={item.recipe}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = item.error;
        }}
        id="recipe-img"
        style={loaded ? {} : { display: "none" }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Recipe;
