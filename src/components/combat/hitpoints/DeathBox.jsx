const DeathBox = (props) => {
  return (
    <div className={"death" + props.rollType}>
      <label>{props.rollType}</label>
      <div className="bubbles">
        <input name={"death" + props.rollType + "1"} type="checkbox" />
        <input name={"death" + props.rollType + "2"} type="checkbox" />
        <input name={"death" + props.rollType + "3"} type="checkbox" />
      </div>
    </div>
  );
};

export default DeathBox;
