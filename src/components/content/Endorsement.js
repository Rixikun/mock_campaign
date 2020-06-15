import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPeople } from "../../redux";

const Endorsement = ({ peopleData, fetchPeople }) => {
  useEffect(() => {
    fetchPeople();
  }, []);

  return peopleData.loading ? (
    <h3>Loading . . .</h3>
  ) : peopleData.error ? (
    <h4>{peopleData.error}</h4>
  ) : (
    <div>
      <h1>Endorsement</h1>
      <div className="endorsement__container">
        "hello"
        {console.log(">>>>>>>>>>", peopleData)}
        {peopleData &&
          peopleData.users &&
          peopleData.users.map((person) => (
            <p key={person.id}>
              {person.name} of {person.city}
              stands in support of this candidate!
            </p>
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
