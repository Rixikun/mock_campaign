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
          <Parallax
            bgImage={nyc}
            strength={800}
            bgImageStyle={{
              width: "100%",
              height: "100vh",
              top: "30vh",
            }}
          >
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
          <h3>Egg for President! 2020!</h3>
          <span>Representing an eggcellent nation!</span>
          <div className="submit">
            <button
              className="btn btn-primary"
              aria-label="button volunteer here"
            >
              Volunteer here
            </button>
          </div>
        </div>
      </div>
      <div className="home__container">
        <div className=" home__container__redirect">
          <div className="section__toAbout">
            <h4>#egg2020</h4>
            <p>
              This is a personal project to have fun building a stylish,
              responsive webapp using react hooks, react-redux, SASS, express,
              sequelize.
            </p>
            <span>Thank you for visiting! - Lin X.</span>
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
          <div className="parallax volunteer">
            <Parallax
              bgImage={nyc}
              strength={300}
              bgImageStyle={{
                height: "100vh",
                width: "100vw",
              }}
            >
              <div style={{ height: "100vh" }}>
                <div className="center__text">GET INVOLVED</div>
              </div>
            </Parallax>
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
