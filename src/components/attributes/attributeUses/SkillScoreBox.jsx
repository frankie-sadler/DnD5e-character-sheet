const SkillScoreBox = (props) => {
  return (
    <li>
      <label htmlFor="skillBox">
        {props.skillName}{" "}
        <span className="skill">({props.shortAttributeName})</span>
      </label>
      <input name="skillBox" placeholder="+0" type="text" />
      <input name="profBox" type="checkbox" />
    </li>
  );
};

export default SkillScoreBox;
