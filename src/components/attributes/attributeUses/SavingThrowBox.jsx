const SavingThrowBox = (props) => {
  return (
    <>
      <li>
        <label htmlFor="saveBox">{props.attributeName}</label>
        <input name="saveBox" placeholder="+0" type="text" />
        <input name="saveBox-prof" type="checkbox" />
      </li>
    </>
  );
};

export default SavingThrowBox;
