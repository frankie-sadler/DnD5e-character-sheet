import Attacks from "./attacks/Attacks";
import AdditionalStats from "./hitpoints/AdditionalStats";
import Equipment from "./equipment/Equipment";

const Combat = (props) => {
  return (
    <section>
      <AdditionalStats />
      <Attacks />
      <Equipment />
    </section>
  );
};

export default Combat;
