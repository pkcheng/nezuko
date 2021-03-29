import { itemList } from "../../asset/data";
import { getItemSrc, getRecipeSrcPNG, getRecipeSrcGIF } from "../../solution";

const MenuPanel = ({ category, changeItem, favorites }) => {
  let currentList = [...favorites];
  if (category !== "favorite") {
    currentList = itemList[category];
  }
  return (
    <div className="col-9 menu-panel">
      {category !== "favorite"
        ? currentList.map((item) => {
            return (
              <button
                key={item}
                className="item-btn"
                onClick={() =>
                  changeItem({
                    name: item,
                    category: category,
                    recipe: getRecipeSrcPNG(category, item),
                    error: getRecipeSrcGIF(category, item),
                  })
                }
              >
                <img src={getItemSrc(category, item)} alt="Icon" id="btn-img" />
              </button>
            );
          })
        : currentList.map((item) => {
            let [category, itemName] = item.split(":");
            return (
              <button
                key={item}
                className="item-btn"
                onClick={() =>
                  changeItem({
                    name: itemName,
                    category: category,
                    recipe: getRecipeSrcPNG(category, itemName),
                    error: getRecipeSrcGIF(category, itemName),
                  })
                }
              >
                <img
                  src={getItemSrc(category, itemName)}
                  alt="Icon"
                  id="btn-img"
                />
              </button>
            );
          })}
    </div>
  );
};

export default MenuPanel;
