import DeathBox from "./DeathBox";

const DeathThrows = (props) => {
  return (
    <div className="deathsaves">
      <div>
        <div className="label">
          <label>Death Saves</label>
        </div>
        <div className="marks">
          <DeathBox rollType="sucessess" />
          <DeathBox rollType="fails" />
          {/* <div className="deathsuccesses">
            <label>Successes</label>
            <div className="bubbles">
              <input name="deathsuccess1" type="checkbox" />
              <input name="deathsuccess2" type="checkbox" />
              <input name="deathsuccess3" type="checkbox" />
            </div>
          </div> */}
          {/* <div className="deathfails">
            <label>Failures</label>
            <div className="bubbles">
              <input name="deathfail1" type="checkbox" />
              <input name="deathfail2" type="checkbox" />
              <input name="deathfail3" type="checkbox" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DeathThrows;
