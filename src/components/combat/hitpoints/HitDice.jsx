const HitDice = (props) => {
  return (
    <div className="hitdice">
      <div>
        <div className="total">
          <label htmlFor="totalhd">Total</label>
          <input name="totalhd" placeholder="2d10" type="text" />
        </div>
        <div className="remaining">
          <label htmlFor="remaininghd">Hit Dice</label>
          <input name="remaininghd" type="text" />
        </div>
      </div>
    </div>
  );
};

export default HitDice;
