import "../../../styles/passivePerception.scss";

const ProficiencyBonus = (props) => {
  return (
    <div className="proficiency-bonus box">
      <div className="label-container">
        <label htmlFor="profieciencybonus">Proficiency Bonus</label>
      </div>
      <input name="profieciencybonus" placeholder="10" />
    </div>
  );
};

export default ProficiencyBonus;
