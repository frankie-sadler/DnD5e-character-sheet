import ScoreBox from "./ScoreBox";

import "../../styles/attributeScores.scss";

const AttributeScores = (props) => {
  return (
    <div className="scores">
      <ul>
        <ScoreBox attributeName="Strength" />
        <ScoreBox attributeName="Dexterity" />
        <ScoreBox attributeName="Constitution" />
        <ScoreBox attributeName="Wisdom" />
        <ScoreBox attributeName="Intelligence" />
        <ScoreBox attributeName="Charisma" />
      </ul>
    </div>
  );
};

export default AttributeScores;
