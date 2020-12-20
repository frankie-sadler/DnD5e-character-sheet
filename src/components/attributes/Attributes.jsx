import AttributeScores from "./AttributeScores";
import SavingThrows from "./attributeUses/SavingThrows";
import SkillScores from "./attributeUses/SkillScores";
import OtherProficiencies from "./attributeUses/OtherProficiencies";
import PassivePerception from "./attributeUses/PassivePerception";
import ProfieciencyBonus from "./attributeUses/ProfieciencyBonus";
import Inspiration from "./attributeUses/Inspiration";

import "../../styles/attributes.scss";
import "../../styles/attributeUses.scss";

const Attributes = (props) => {
  return (
    <section>
      <section className="attributes">
        <AttributeScores />
        <div className="attr-applications">
          <Inspiration />
          <ProfieciencyBonus />
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
