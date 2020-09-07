import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import axios from "axios";

import markerIcon from "../../assets/images/map-marker-alt-solid.svg";
const poll = require("../../assets/images/polls.jpg");
const poll_sign = require("../../assets/images/poll_sign.jpg");

const HowTo = () => {
  const [polls, setPolls] = useState([]);
  const getPolls = async () => {
    const { data } = await axios.get(
      "https://data.cityofnewyork.us/resource/mifw-tguq.json"
    );
    setPolls(data.filter((pt) => pt.longitude));
  };

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 40.753685,
    longitude: -73.999161,
    zoom: 11,
  });
  const [userMarker, setUserMarker] = useState("");
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 14,
      });
      setUserMarker(
        <Marker latitude={pos.coords.latitude} longitude={pos.coords.longitude}>
          <button type="button" className="marker user-marker">
            <img src={markerIcon} alt="map marker of user" />
          </button>
        </Marker>
      );
    });
  };
  const [selected, setSelected] = useState(null);
  getUserLocation();
  useEffect(() => {
    getPolls();
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => window.removeEventListener("keydown", listener);
  }, []);

  function markerHandler(e, pt) {
    e.preventDefault();
    setSelected(pt);
  }
  return (
    <div className="howto">
      <div className="title">
        <h2>How To Vote</h2>
      </div>
      <div className="photo__container">
        <img
          className="photo photo5"
          src={poll}
          alt="Row of people at voting booths"
        />
      </div>

      <div className="description">
        <h3>Make sure to vote by November 3rd!</h3>
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
            <div className="photo__container">
              <img
                className="photo photo3"
                src={poll_sign}
                alt="Poll sign saying vote here"
              />
            </div>
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

            <div className="map__container">
              <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/linyxia/ckeoxvnnw127r19r84s35dwf7"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => {
                  setViewport(viewport);
                }}
              >
                {polls.length
                  ? polls.map((pt, idx) => (
                      <Marker
                        key={idx}
                        latitude={Number(pt.latitude)}
                        longitude={Number(pt.longitude)}
                      >
                        <button
                          type="button"
                          className="marker"
                          onClick={(e) => markerHandler(e, pt)}
                        >
                          <img src={markerIcon} alt="map marker" />
                        </button>
                      </Marker>
                    ))
                  : ""}
                {userMarker}

                {selected && (
                  <Popup
                    latitude={Number(selected.latitude)}
                    longitude={Number(selected.longitude)}
                    onClose={() => {
                      setSelected(null);
                    }}
                  >
                    <div className="popup-details">
                      <h4>{selected.site_name}</h4>
                      <p>
                        {selected.voter_entrance}, {selected.zip_code},{" "}
                        {selected.city}, {selected.borough}
                        <br />
                        Council District: {selected.council_district}
                      </p>
                    </div>
                  </Popup>
                )}
              </ReactMapGL>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
