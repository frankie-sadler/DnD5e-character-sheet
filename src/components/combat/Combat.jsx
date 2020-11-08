import Attack from "./Attack";
import HitPoints from "./hitpoints/HitPoint";
import Equipment from "./Equipment";

const Combat = (props) => {
  return (
    <section>
      <HitPoints />
      <Attack />
      <Equipment />
    </section>
  );
};

export default Combat;
