import AttributeScores from "./AttributeScores";
import SavingThrows from "./SavingThrows";
import SkillScores from "./SkillScores";
import OtherProficiencies from "./OtherProficiencies";
import PassivePerception from "./PassivePerception";
import Inspiration from "./Inspiration";

const Attributes = (props) => {
  return (
    <section>
      <section className="attributes">
        <AttributeScores />
        <div className="attr-applications">
          <Inspiration />
          <PassivePerception />
          <SavingThrows />
          <SkillScores />
        </div>
      </section>
      <PassivePerception />
      <OtherProficiencies />
    </section>
  );
};

export default Attributes;
