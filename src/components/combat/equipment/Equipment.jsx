import MoneyBox from "./MoneyBox";

const Equipment = (props) => {
  return (
    <section className="equipment">
      <div>
        <label>Equipment</label>
        <div className="money">
          <ul>
            <MoneyBox currency="cp" />
            <MoneyBox currency="sp" />
            <MoneyBox currency="ep" />
            <MoneyBox currency="gp" />
            <MoneyBox currency="pp" />
          </ul>
        </div>
        <textarea placeholder="Equipment list here"></textarea>
      </div>
    </section>
  );
};

export default Equipment;
