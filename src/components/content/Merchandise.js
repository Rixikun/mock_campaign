import React from "react";

import StickerContainer from "../merch/StickerContainer";
import ShirtContainer from "../merch/ShirtContainer";

const Merchandise = () => {
  return (
    <div className="merchandise">
      <div className="title">
        <h2>Merchandise</h2>
      </div>
      <div className="description">
        Support us and spread the word by purchasing one of our goods!
      </div>
      <div className="merchandise__container">
        <StickerContainer />
        <ShirtContainer />
      </div>
    </div>
  );
};

export default Merchandise;
