import React from "react";
import SocialMedia from "../content/SocialMedia";
import { Parallax } from "react-parallax";

const nyc = require("../../assets/images/nyc_sky.jpg");
const cloud1 = require("../../assets/images/cloud_01.png");
const cloud2 = require("../../assets/images/cloud_02.png");

const Home = () => {
  return (
    <div className="home">
      <div className="home__landing">
        <div className="parallax splash">
          <Parallax bgImage={nyc} strength={800}>
            <div className="parallax__splash">
              <Parallax
                bgImage={cloud1}
                renderLayer={(percentage) => (
                  <div
                    className="testimg"
                    style={{
                      position: "absolute",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      opacity: `${percentage}`,
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) scale(${
                        percentage * 5
                      })`,
                    }}
                  ></div>
                )}
              >
                <div style={{ height: "100vh" }}></div>
              </Parallax>
            </div>
          </Parallax>
        </div>
        <div className="home__landing__info">
          <h3>Candidate A for your party!</h3>
          <span>Representing District-1 , District-2 , District-3</span>
          <div className="submit">
            <button className="btn btn-primary">Volunteer here</button>
          </div>
        </div>
      </div>
      <div className="home__container">
        <div className=" home__container__redirect">
          <div className="section__toAbout">
            <h4>X, Y, Z</h4>
            <p>
              Short summary Proin in ante non ipsum molestie efficitur. Donec ut
              felis vestibulum, volutpat lorem id, ultrices ante.
            </p>
            <span>Join us to help our district</span>
          </div>
          <div className="section__toSocialMedia">
            <SocialMedia />
          </div>
        </div>
        <div className="grid__container">
          <div className="section section1">
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
          </div>
          <div className="section section2">
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
          </div>
          <div className="section section3">
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
          </div>
          <div className="section section4">
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
          </div>
        </div>
        <div className="section__toVolunteer">
          <div className="photo__container">
            <div className="photo photo5">(dazzling community photo here)</div>
          </div>
        </div>
        <div className="home__press">
          <div className="description">
            <h3>Press</h3>
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
          </div>
          <div className="photo__container">
            <div className="photo"> Accompanying shot </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
