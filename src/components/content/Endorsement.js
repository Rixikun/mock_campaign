import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Media from "react-media";

import { fetchPeople } from "../../redux";

const logo_abc = require("../../assets/images/logo_abc.png");
const logo_msnbc = require("../../assets/images/logo_msnbc.jpg");
const logo_nyt = require("../../assets/images/logo_nyt.jpg");
const logo_wp = require("../../assets/images/logo_wp.jfif");
const logo_wsj = require("../../assets/images/logo_wsj.png");

const Endorsement = ({ peopleData, fetchPeople }) => {
  useEffect(() => {
    fetchPeople();
  }, []);

  const publicity = [
    logo_abc,
    logo_msnbc,
    logo_nyt,
    logo_wp,
    logo_wsj,
    logo_abc,
    logo_msnbc,
    logo_nyt,
    logo_wp,
    logo_wsj,
  ];

  return peopleData.loading ? (
    <h2>Loading . . .</h2>
  ) : peopleData.error ? (
    <h2>{peopleData.error}</h2>
  ) : (
    <div className="endorsement">
      <div className="title">
        <h2>Endorsement</h2>
      </div>
      <div className="endorsement__container">
        {peopleData &&
          peopleData.users &&
          peopleData.users.map((person) => (
            <div className="person" key={person.id}>
              <div className="photo__container">
                <div className="photo photo2">{person.name}</div>
                <Media query="(max-width: 37.5em">
                  <div
                    className="dropdown__container"
                    data-toggle="collapse"
                    data-target={`#description${person.id}`}
                    role="button"
                    aria-expanded="false"
                  >
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </Media>
              </div>
              <div
                id={`description${person.id}`}
                className="description collapse"
              >
                <p>
                  {person.name} of {person.address.city}
                  stands in support of this candidate!
                  <br />
                  {Number(person.id) % 2
                    ? `Fusce ligula mi, congue ut cursus nec, dapibus a arcu. Suspendisse sit amet leo arcu. Etiam vel ligula ut augue molestie sodales. Integer gravida sed lorem at efficitur. Maecenas non nulla eget orci convallis vulputate vitae non ex. Donec quis libero ut nulla posuere elementum nec a quam. Pellentesque arcu mi, maximus ac metus vitae, convallis porta nisl. Morbi laoreet, nisl at laoreet imperdiet, eros est egestas felis, sit amet consequat eros urna ullamcorper mauris. `
                    : `Donec suscipit nisi a dolor finibus mattis eget a elit. Nunc vel posuere lacus. Maecenas imperdiet sapien at pulvinar egestas. Vivamus lacinia orci sed orci sollicitudin, non vestibulum justo condimentum. Nam nec quam ultrices, sollicitudin tellus in, facilisis magna. Vivamus molestie posuere nisi, sed convallis dui fermentum sed. Phasellus ex elit, consequat at nunc et, pulvinar volutpat enim. Praesent efficitur felis id lobortis feugiat. Integer arcu velit, hendrerit tempus leo a, consequat efficitur lacus. Donec auctor quam non justo egestas, in commodo nulla tincidunt. Mauris nec est porttitor, viverra erat ac, varius nulla. Donec justo justo, feugiat non augue a, laoreet venenatis metus. Sed finibus velit felis, nec auctor neque maximus nec. Donec leo nunc, mattis a neque ac, auctor lacinia lacus. Cras nec augue et metus egestas lacinia. Donec tempor non odio at tempus.`}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="publicity__container">
        {publicity.map((logo) => (
          <div className="company">
            <img className="photo photo4" src={logo} alt="company logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    peopleData: state.people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeople: () => dispatch(fetchPeople()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Endorsement);
