import { combineReducers } from "redux";

import shirtReducer from "./merchandise/shirts/shirtReducer";
import stickerReducer from "./merchandise/stickers/stickerReducer";
import peopleReducer from "./people/peopleReducer";

const rootReducer = combineReducers({
  shirt: shirtReducer,
  sticker: stickerReducer,
  people: peopleReducer,
});

export default rootReducer;
