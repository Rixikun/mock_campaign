import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Parallax } from "react-parallax";

import SocialMedia from "../content/SocialMedia";
import { fetchVolunteers } from "../../redux";

const nyc = require("../../assets/images/nyc_sky.jpg");
const cloud1 = require("../../assets/images/cloud_01.png");
const egg = require("../../assets/images/egg.png");

const Home = ({ volunteerData, fetchVolunteers }) => {
  useEffect(() => {
    let isMounted = true;
    isMounted && fetchVolunteers();
    return () => (isMounted = false);
  }, [fetchVolunteers]);

  return (
    <div className="home">
      <div className="home__landing">
        <div className="parallax hero">
          <Parallax
            bgImage={nyc}
            strength={800}
            bgImageStyle={{
              width: "calc(100vw)",
              height: "100vh",
            }}
          >
            <div className="parallax__cloud">
              <Parallax
                bgImage={cloud1}
                renderLayer={(percentage) => (
                  <div
                    className="heroIcon"
                    style={{
                      opacity: `${percentage * 1.6}`,
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
            <button className="btn btn-primary" aria-label="Volunteer here">
              <NavLink to="/Volunteer">Volunteer here</NavLink>
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
              My name is Lin Xia. I am a JavaScript web developer. From art,
              animation, and coffee I made the transition into web development
              by attending a fullstack development bootcamp. After graduating I
              volunteered to help teach the foundations of web development to
              high schoolers in my city and worked as a frontend intern to a
              fitness start-up. This helped me discover that I really enjoy web
              development and would love to continue this path.
            </p>
            <div className="social__container">
              <div className="social__container__icons">
                <a href="https://github.com/rixikun/">
                  &ensp;
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/linyxia">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </div>
            </div>
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
          <div className="parallax featureImg">
            <Parallax
              bgImage={nyc}
              strength={300}
              bgImageStyle={{
                height: "100vh",
                width: "calc(100vw)",
              }}
            >
              <div style={{ height: "100vh" }}>
                {volunteerData && volunteerData.users && (
                  <h5 className="right__text">
                    <strong>{volunteerData.users.length}</strong> supporters and
                    growing!
                  </h5>
                )}
                <button
                  className="btn center__text btn-primary"
                  aria-label="Volunteer here"
                >
                  <NavLink to="/Volunteer">GET INVOLVED</NavLink>
                </button>
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
            <img className="photo" src={egg} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    volunteerData: state.people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVolunteers: () => dispatch(fetchVolunteers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
