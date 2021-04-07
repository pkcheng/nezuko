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
          <div className="col-lg-9 col-md-9">
            <MenuPanel
              category={category}
              changeItem={setItem}
              favorites={favorites}
            />
          </div>
          <div className="col-lg-3 col-md-3 order-first order-sm-12 sticky-top mobile-50">
            <RecipePanel
              item={item}
              auth={auth}
              favorites={favorites}
              handleFavorites={handleFavorites}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftingGuide;
