import MenuPanel from "./MenuPanel";
import RecipePanel from "./RecipePanel";

const CraftingGuide = ({
  category,
  setItem,
  item,
  favorites,
  handleFavorites,
  auth,
}) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <MenuPanel
            category={category}
            changeItem={setItem}
            favorites={favorites}
          />
          <RecipePanel
            item={item}
            auth={auth}
            favorites={favorites}
            handleFavorites={handleFavorites}
          />
        </div>
      </div>
    </div>
  );
};

export default CraftingGuide;
