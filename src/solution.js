export function getItemSrc(category, item) {
  const newName = item.replace(/ /g, "").toLowerCase();
  const src = "item/" + category + "/img_" + newName + ".png";
  return src;
}

export function getItemTitle(item) {
  return item
    .replace(/[\W_]+/g, " ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

export function getRecipeSrcPNG(category, item) {
  const newName = item.replace(/ /g, "").toLowerCase();
  return "recipe/" + category + "/craft_" + newName + ".png";
}

export function getRecipeSrcGIF(category, item) {
  const newName = item.replace(/ /g, "").toLowerCase();
  return "recipe/" + category + "/craft_" + newName + ".gif";
}

export function generateFavorite(category, item) {
  const newName = category + ":" + item;
  return newName;
}
