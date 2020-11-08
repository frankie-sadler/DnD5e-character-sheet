import AttackRow from "./AttackRow";

const Attack = (props) => {
  return (
    <section className="attacksandspellcasting">
      <div>
        <label>Attacks & Spellcasting</label>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Atk Bonus</th>
              <th>Damage/Type</th>
            </tr>
          </thead>
          <tbody>
            <AttackRow />
            <AttackRow />
            <AttackRow />
          </tbody>
        </table>
        <textarea></textarea>
      </div>
    </section>
  );
};

export default Attack;
