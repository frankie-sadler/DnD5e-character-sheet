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
      <section className="features">
        <div>
          <label htmlFor="features">Features & Traits</label>
          <textarea name="features"></textarea>
        </div>
      </section>
    </section>
  );
};

export default Flavour;
