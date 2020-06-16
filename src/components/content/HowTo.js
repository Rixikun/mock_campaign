import React from "react";

const HowTo = () => {
  return (
    <div className="howto">
      <div className="title">
        <h2>How To Vote</h2>
      </div>
      <div className="photo photo5">(wide shot)</div>

      <div className="description">
        <h4>Make sure to vote by (date_here) !</h4>
        <a href="https://nyc.pollsitelocator.com/search">
          Where is my polling place in NYC?
        </a>
      </div>
      <div className="howto__container">
        <h5>What else should I be aware of ?</h5>
        <div className="item__container">
          <div className="item1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              dui turpis. Nunc ante arcu, euismod eu condimentum condimentum,
              eleifend in dui. Proin in ante non ipsum molestie efficitur. Donec
              ut felis vestibulum, volutpat lorem id, ultrices ante. Proin eros
              orci, hendrerit quis urna ut, maximus luctus nunc. Cras ut velit
              risus. Ut tincidunt vel enim sed posuere. Nunc venenatis ut nisi
              sed fermentum. Quisque non aliquam sem, id tristique sem.
              Suspendisse at hendrerit ante. Ut ipsum sem, fringilla sed
              elementum ac, egestas vel lorem. Sed tempor scelerisque lacus.
              Mauris pretium a est et ornare.
            </p>
            <div className="photo photo5">(accompanying img)</div>
          </div>
          <div className="item2">
            <p>
              Proin et arcu id libero elementum mattis et eget libero. Morbi vel
              urna vel tortor ultrices condimentum in eget nibh. Maecenas augue
              diam, gravida nec tempor pulvinar, accumsan sed purus. In hac
              habitasse platea dictumst. Donec feugiat est non finibus euismod.
              Phasellus vestibulum ornare mauris, quis posuere massa tempor ac.
              Ut facilisis tristique augue tempor suscipit. Ut gravida elit sed
              diam tristique tempus. Duis non odio dui. Vivamus a eleifend
              ipsum. Etiam vulputate quis elit in luctus. Mauris et orci sed
              nisi tempor sollicitudin. Proin quis elit quis tortor congue
              sodales.
            </p>
            <div className="photo photo5">(google map)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
