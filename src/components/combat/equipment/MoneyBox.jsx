const MoneyBox = (props) => {
  return (
    <>
      <li>
        <label htmlFor="money">{props.currency}</label>
        <input name="money" type="number" />
      </li>
    </>
  );
};

export default MoneyBox;
