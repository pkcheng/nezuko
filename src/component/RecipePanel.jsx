const RecipePanel = ({ item }) => {
  return (
    <div className="col-3 recipe-panel">
      <div className="screen">
        <div className="screen-content">
          <p id="title">{item.name}</p>
          <img
            src={item.recipe}
            alt={item.recipe}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = item.error;
            }}
            id="recipe-img"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipePanel;
