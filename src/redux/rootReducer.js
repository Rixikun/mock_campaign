import { combineReducers } from "redux";

import shirtReducer from "./merchandise/shirts/shirtReducer";
import stickerReducer from "./merchandise/stickers/stickerReducer";

const rootReducer = combineReducers({
  shirt: shirtReducer,
  sticker: stickerReducer,
});

export default rootReducer;
