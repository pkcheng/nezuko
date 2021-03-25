import { itemList } from "../data";
import {
  getItemSrc,
  getItemTitle,
  getRecipeSrcPNG,
  getRecipeSrcGIF,
} from "../solution";

const MenuPanel = ({ category, changeItem }) => {
  const currentList = itemList[category];
  return (
    <div className="col-9 menu-panel">
      {currentList.map((item) => {
        return (
          <button
            key={item}
            className="item-btn"
            onClick={() =>
              changeItem({
                name: getItemTitle(item),
                recipe: getRecipeSrcPNG(category, item),
                error: getRecipeSrcGIF(category, item),
              })
            }
          >
            <img src={getItemSrc(category, item)} alt="Icon" id="btn-img" />
          </button>
        );
      })}
    </div>
  );
};

export default MenuPanel;
