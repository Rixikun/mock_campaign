import React from "react";
import { connect } from "react-redux";

import StickerContainer from "../merch/StickerContainer";
import ShirtContainer from "../merch/ShirtContainer";

interface MerchandiseProp {
  purchaseHistory: [];
}

const Merchandise: React.FunctionComponent<MerchandiseProp> = (props) => {
  return (
    <div className="merchandise">
      <div className="title">
        <h2>Merchandise</h2>
      </div>
      <div className="description">
        <p>Support us and spread the word by purchasing one of our goods!</p>
        <ol className="purchase-history">
          {props.purchaseHistory.map((purchase, idx) => (
            <li key={idx}>{purchase}</li>
          ))}
        </ol>
      </div>
      <div className="merchandise__container">
        <StickerContainer />
        <ShirtContainer />
      </div>
    </div>
  );
};

const mapStateToProps = (state: { general: MerchandiseProp }) => {
  return {
    purchaseHistory: state.general.purchaseHistory,
  };
};

export default connect(mapStateToProps, null)(Merchandise);
