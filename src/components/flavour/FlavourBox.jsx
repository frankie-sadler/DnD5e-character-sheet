const FlavourBox = (props) => {
  return (
    <div className={props.flavourName}>
      <label htmlFor={props.flavourName}>{props.flavourName}</label>
      <textarea name={props.flavourName}></textarea>
    </div>
  );
};

export default FlavourBox;
