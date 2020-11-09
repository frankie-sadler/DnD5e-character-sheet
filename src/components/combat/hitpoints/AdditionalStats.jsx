import InfoBox from "./InfoBox";
import HitPoints from "./HitPoints";
import HitDice from "./HitDice";
import DeathThrows from "./DeathThrows";

const AdditionalStats = (props) => {
  return (
    <section className="combat">
      <InfoBox
        className="armorclass"
        lableName="Armour Class"
        placeholder="10"
      />
      <InfoBox className="initiative" lableName="Initiative" placeholder="+0" />
      <InfoBox className="speed" lableName="Speed" placeholder="30" />
      <HitPoints />
      <HitDice />
      <DeathThrows />
    </section>
  );
};

export default AdditionalStats;
