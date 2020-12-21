const HitPoints = (params) => {
  return (
    <div className="hp">
      <div className="regular">
        <div className="max">
          <label htmlFor="maxhp">Hit Point Maximum</label>
          <input name="maxhp" placeholder="10" type="text" />
        </div>
        <div className="current">
          <label htmlFor="currenthp">Current Hit Points</label>
          <input name="currenthp" type="text" />
        </div>
      </div>
      <div className="temporary">
        <label htmlFor="temphp">Temporary Hit Points</label>
        <input name="temphp" type="text" />
      </div>
    </div>
  );
};

export default HitPoints;
