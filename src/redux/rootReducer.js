import { combineReducers } from "redux";

import shirtReducer from "./merchandise/shirts/shirtReducer";
import stickerReducer from "./merchandise/stickers/stickerReducer";
import merchReducer from "./merchandise/general/merchReducer";
import peopleReducer from "./people/peopleReducer";

const rootReducer = combineReducers({
  shirt: shirtReducer,
  sticker: stickerReducer,
  people: peopleReducer,
  general: merchReducer,
});

export default rootReducer;
