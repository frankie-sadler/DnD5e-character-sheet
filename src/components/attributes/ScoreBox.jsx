const ScoreBox = (props) => {
  return (
    <>
      <li>
        <div className="score">
          <label htmlFor="scoreBox">{props.attributeName}</label>
          <input name="scoreBox" placeholder="10" />
        </div>
        <div className="modifier">
          <input name="attributeModifier" placeholder="+0" />
        </div>
      </li>
    </>
  );
};

export default ScoreBox;
