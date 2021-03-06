import React from "react";

const Donate = () => {
  return (
    <div className="donate">
      <div className="title">
        <h2>Donate</h2>
      </div>
      <div className="description">
        <h6>This is a mock-website, don't complete donation transaction..</h6>
      </div>
      <div className="donate__container">
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="XHXEPCG2RGPV4" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </div>
  );
};

export default Donate;
