import Features from "./Features";
import FlavourBox from "./FlavourBox";

const Flavour = (props) => {
  return (
    <section>
      <section className="flavor">
        <FlavourBox flavourName="personality" />
        <FlavourBox flavourName="ideals" />
        <FlavourBox flavourName="bonds" />
        <FlavourBox flavourName="flaws" />
      </section>
      <Features />
    </section>
  );
};

export default Flavour;
