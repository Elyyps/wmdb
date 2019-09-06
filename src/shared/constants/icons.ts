const SEARCH_ICON: string = require("@assets/icons/search.svg");
const CLOSE_ICON: string = require("@assets/icons/cross.svg");
const MENU_ICON: string = require("@assets/icons/menu.svg");
// const IMAGE_FEATURED: string = require("@assets/images/image-featured.jpg");
const CHEVRON_RIGHT: string = require("@assets/icons/chevron-right.svg");
const CHEVRON_LEFT: string = require("@assets/icons/chevron-left.svg");
const getArrow = (propsPrev?: boolean): string =>
  require(`${"@assets/icons/chevron-"}${propsPrev ? "left" : "right"}.svg`);
export { SEARCH_ICON, CLOSE_ICON, MENU_ICON, getArrow, CHEVRON_RIGHT, CHEVRON_LEFT };
