import Attack from "./Attack";
import AdditionalStats from "./hitpoints/AdditionalStats";
import Equipment from "./equipment/Equipment";

const Combat = (props) => {
  return (
    <section>
      <AdditionalStats />
      <Attack />
      <Equipment />
    </section>
  );
};

export default Combat;
