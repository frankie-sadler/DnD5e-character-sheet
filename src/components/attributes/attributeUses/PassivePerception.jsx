const PassivePerception = (props) => {
  return (
    <div className="passive-perception box">
      <div className="label-container">
        <label htmlFor="passiveperception">Passive Wisdom (Perception)</label>
      </div>
      <input name="passiveperception" placeholder="10" />
    </div>
  );
};

export default PassivePerception;
