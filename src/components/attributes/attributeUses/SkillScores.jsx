import SkillScoreBox from "./SkillScoreBox";

import "../../../styles/skills.scss";

const SkillScores = (props) => {
  return (
    <div className="skills list-section box">
      <ul>
        <SkillScoreBox skillName="Acrobatics" shortAttributeName="Dex" />
        <SkillScoreBox skillName="Animal Handling" shortAttributeName="Wis" />
        <SkillScoreBox skillName="Arcana" shortAttributeName="Int" />
        <SkillScoreBox skillName="Athletics" shortAttributeName="Str" />
        <SkillScoreBox skillName="Deception" shortAttributeName="Cha" />
        <SkillScoreBox skillName="History" shortAttributeName="Int" />
        <SkillScoreBox skillName="Insight" shortAttributeName="Wis" />
        <SkillScoreBox skillName="Intimidation" shortAttributeName="Cha" />
        <SkillScoreBox skillName="Investigation" shortAttributeName="Int" />
        <SkillScoreBox skillName="Medicine" shortAttributeName="Wis" />
        <SkillScoreBox skillName="Nature" shortAttributeName="Int" />
        <SkillScoreBox skillName="Perception" shortAttributeName="Wis" />
        <SkillScoreBox skillName="Performance" shortAttributeName="Cha" />
        <SkillScoreBox skillName="Persuasion" shortAttributeName="Cha" />
        <SkillScoreBox skillName="Religion" shortAttributeName="Int" />
        <SkillScoreBox skillName="Sleight of Hand" shortAttributeName="Dex" />
        <SkillScoreBox skillName="Stealth" shortAttributeName="Dex" />
        <SkillScoreBox skillName="Survival" shortAttributeName="Wis" />
      </ul>
      <div className="label">Skills</div>
    </div>
  );
};

export default SkillScores;
