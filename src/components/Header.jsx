import "../styles/header.scss";

const Header = (props) => {
  return (
    <header>
      <section className="charname">
        <label htmlFor="charname">Character Name</label>
        <input name="charname" placeholder="Thoradin Fireforge" />
      </section>
      <section className="misc">
        <ul>
          <li>
            <label htmlFor="classlevel">Class & Level</label>
            <input name="classlevel" placeholder="Paladin 2" />
          </li>
          <li>
            <label htmlFor="background">Background</label>
            <input name="background" placeholder="Acolyte" />
          </li>
          <li>
            <label htmlFor="playername">Player Name</label>
            <input name="playername" placeholder="Player McPlayerface" />
          </li>
          <li>
            <label htmlFor="race">Race</label>
            <input name="race" placeholder="Half-elf" />
          </li>
          <li>
            <label htmlFor="alignment">Alignment</label>
            <input name="alignment" placeholder="Lawful Good" />
          </li>
          <li>
            <label htmlFor="experiencepoints">Experience Points</label>
            <input name="experiencepoints" placeholder="3240" />
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
