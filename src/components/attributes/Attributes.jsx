import AttributeScores from "./AttributeScores";
import SavingThrows from "./SavingThrows";
import SkillScores from "./SkillScores";

const Attributes = (props) => {
  return (
    <section>
      <section className="attributes">
        <AttributeScores />
        <div className="attr-applications">
          <div className="inspiration box">
            <div className="label-container">
              <label htmlFor="inspiration">Inspiration</label>
            </div>
            <input name="inspiration" type="checkbox" />
          </div>
          <div className="proficiencybonus box">
            <div className="label-container">
              <label htmlFor="proficiencybonus">Proficiency Bonus</label>
            </div>
            <input name="proficiencybonus" placeholder="+2" />
          </div>
          <SavingThrows />
          <SkillScores />
        </div>
      </section>
      <div className="passive-perception box">
        <div className="label-container">
          <label htmlFor="passiveperception">Passive Wisdom (Perception)</label>
        </div>
        <input name="passiveperception" placeholder="10" />
      </div>
      <div className="otherprofs box textblock">
        <label htmlFor="otherprofs">Other Proficiencies and Languages</label>
        <textarea name="otherprofs"></textarea>
      </div>
    </section>
  );
};

export default Attributes;
