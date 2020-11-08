const Combat = (props) => {
  return (
    <section>
      <section className="combat">
        <div className="armorclass">
          <div>
            <label htmlFor="ac">Armor Class</label>
            <input name="ac" placeholder="10" type="text" />
          </div>
        </div>
        <div className="initiative">
          <div>
            <label htmlFor="initiative">Initiative</label>
            <input name="initiative" placeholder="+0" type="text" />
          </div>
        </div>
        <div className="speed">
          <div>
            <label htmlFor="speed">Speed</label>
            <input name="speed" placeholder="30" type="text" />
          </div>
        </div>
        <div className="hp">
          <div className="regular">
            <div className="max">
              <label htmlFor="maxhp">Hit Point Maximum</label>
              <input name="maxhp" placeholder="10" type="text" />
            </div>
            <div className="current">
              <label htmlFor="currenthp">Current Hit Points</label>
              <input name="currenthp" type="text" />
            </div>
          </div>
          <div className="temporary">
            <label htmlFor="temphp">Temporary Hit Points</label>
            <input name="temphp" type="text" />
          </div>
        </div>
        <div className="hitdice">
          <div>
            <div className="total">
              <label htmlFor="totalhd">Total</label>
              <input name="totalhd" placeholder="2d10" type="text" />
            </div>
            <div className="remaining">
              <label htmlFor="remaininghd">Hit Dice</label>
              <input name="remaininghd" type="text" />
            </div>
          </div>
        </div>
        <div className="deathsaves">
          <div>
            <div className="label">
              <label>Death Saves</label>
            </div>
            <div className="marks">
              <div className="deathsuccesses">
                <label>Successes</label>
                <div className="bubbles">
                  <input name="deathsuccess1" type="checkbox" />
                  <input name="deathsuccess2" type="checkbox" />
                  <input name="deathsuccess3" type="checkbox" />
                </div>
              </div>
              <div className="deathfails">
                <label>Failures</label>
                <div className="bubbles">
                  <input name="deathfail1" type="checkbox" />
                  <input name="deathfail2" type="checkbox" />
                  <input name="deathfail3" type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <tr>
                <td>
                  <input name="atkname1" type="text" />
                </td>
                <td>
                  <input name="atkbonus1" type="text" />
                </td>
                <td>
                  <input name="atkdamage1" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <input name="atkname2" type="text" />
                </td>
                <td>
                  <input name="atkbonus2" type="text" />
                </td>
                <td>
                  <input name="atkdamage2" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <input name="atkname3" type="text" />
                </td>
                <td>
                  <input name="atkbonus3" type="text" />
                </td>
                <td>
                  <input name="atkdamage3" type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <textarea></textarea>
        </div>
      </section>
      <section className="equipment">
        <div>
          <label>Equipment</label>
          <div className="money">
            <ul>
              <li>
                <label htmlFor="cp">cp</label>
                <input name="cp" />
              </li>
              <li>
                <label htmlFor="sp">sp</label>
                <input name="sp" />
              </li>
              <li>
                <label htmlFor="ep">ep</label>
                <input name="ep" />
              </li>
              <li>
                <label htmlFor="gp">gp</label>
                <input name="gp" />
              </li>
              <li>
                <label htmlFor="pp">pp</label>
                <input name="pp" />
              </li>
            </ul>
          </div>
          <textarea placeholder="Equipment list here"></textarea>
        </div>
      </section>
    </section>
  );
};

export default Combat;
