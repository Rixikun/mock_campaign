import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchPeople } from "../../redux";

const Endorsement = ({ peopleData, fetchPeople }) => {
  useEffect(() => {
    fetchPeople();
  }, []);

  const publicity = new Array(10).fill("company logo");

  const [truncate, setTruncate] = useState(false);
  function toggle(e) {
    e.preventDefault();
    setTruncate(!truncate);
  }

  return peopleData.loading ? (
    <h3>Loading . . .</h3>
  ) : peopleData.error ? (
    <h4>{peopleData.error}</h4>
  ) : (
    <div className="endorsement">
      <div className="title">
        <h3>Endorsement</h3>
      </div>
      <div className="endorsement__container">
        {peopleData &&
          peopleData.users &&
          peopleData.users.map((person) => (
            <div className="person">
              <div className="photo__container">
                <div className="photo photo2">{person.name}</div>
              </div>
              <div className={`description ${truncate ? "expanded" : ""}`}>
                <p key={person.id} onClick={(e) => toggle(e)}>
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
            <div className="photo photo4">{logo}</div>
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
