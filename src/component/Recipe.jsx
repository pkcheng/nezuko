import React, { useEffect, useState } from "react";

const Recipe = ({ item }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
    }, 150);
  }, [item]);
  return (
    <div className="screen-content">
      <p id="title">{item.name}</p>
      {loaded ? null : (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
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
