const InfoBox = (props) => {
  return (
    <div className={props.className}>
      <div>
        <label htmlFor="inBox">{props.lableName}</label>
        <input name="inBox" placeholder={props.placeholder} type="text" />
      </div>
    </div>
  );
};

export default InfoBox;
