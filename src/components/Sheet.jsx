import Header from "./Header";
import Attributes from "./attributes/Attributes";
import Combat from "./combat/Combat";
import Flavour from "./flavour/Flavour";

import "../styles/sheet.sass";

const Sheet = (props) => {
  return (
    <form className="charsheet">
      <Header />
      <main>
        <Attributes />
        <Combat />
        <Flavour />
      </main>
    </form>
  );
};

export default Sheet;
