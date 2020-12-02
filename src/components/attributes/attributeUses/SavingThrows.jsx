import SavingThrowBox from "./SavingThrowBox";

import "../../../styles/savingThrows.scss";

const SavingThrows = (props) => {
  return (
    <div className="saves list-section box">
      <ul>
        <SavingThrowBox attributeName="Strength" />
        <SavingThrowBox attributeName="Dexterity" />
        <SavingThrowBox attributeName="Constitution" />
        <SavingThrowBox attributeName="Wisdom" />
        <SavingThrowBox attributeName="Intelligence" />
        <SavingThrowBox attributeName="Charisma" />
      </ul>
      <div className="label">Saving Throws</div>
    </div>
  );
};

export default SavingThrows;
