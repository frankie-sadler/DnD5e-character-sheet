const Attributes = (props) => {
  return (
    <section>
      <section className="attributes">
        <div className="scores">
          <ul>
            <li>
              <div className="score">
                <label htmlFor="Strengthscore">Strength</label>
                <input name="Strengthscore" placeholder="10" />
              </div>
              <div className="modifier">
                <input name="Strengthmod" placeholder="+0" />
              </div>
            </li>
            <li>
              <div className="score">
                <label htmlFor="Dexterityscore">Dexterity</label>
                <input name="Dexterityscore" placeholder="10" />
              </div>
              <div className="modifier">
                <input name="Dexteritymod" placeholder="+0" />
              </div>
            </li>
            <li>
              <div className="score">
                <label htmlFor="Constitutionscore">Constitution</label>
                <input name="Constitutionscore" placeholder="10" />
              </div>
              <div className="modifier">
                <input name="Constitutionmod" placeholder="+0" />
              </div>
            </li>
            <li>
              <div className="score">
                <label htmlFor="Wisdomscore">Wisdom</label>
                <input name="Wisdomscore" placeholder="10" />
              </div>
              <div className="modifier">
                <input name="Wisdommod" placeholder="+0" />
              </div>
            </li>
            <li>
              <div className="score">
                <label htmlFor="Intelligencescore">Intelligence</label>
                <input name="Intelligencescore" placeholder="10" />
              </div>
              <div className="modifier">
                <input name="Intelligencemod" placeholder="+0" />
              </div>
            </li>
            <li>
              <div className="score">
                <label htmlFor="Charismascore">Charisma</label>
                <input name="Charismascore" placeholder="10" />
              </div>
              <div className="modifier">
                <input name="Charismamod" placeholder="+0" />
              </div>
            </li>
          </ul>
        </div>
        <div className="attr-applications">
          <div className="inspiration box">
            <div className="label-container">
              <label htmlFor="inspiration">Inspiration</label>
            </div>
            <input name="inspiration" type="checkbox" />
          </div>
          <div className="proficiencybonus box">
            <div className="label-container">
              <label htmlFor="proficiencybonus">Proficiency Bonus</label>
            </div>
            <input name="proficiencybonus" placeholder="+2" />
          </div>
          <div className="saves list-section box">
            <ul>
              <li>
                <label htmlFor="Strength-save">Strength</label>
                <input name="Strength-save" placeholder="+0" type="text" />
                <input name="Strength-save-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Dexterity-save">Dexterity</label>
                <input name="Dexterity-save" placeholder="+0" type="text" />
                <input name="Dexterity-save-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Constitution-save">Constitution</label>
                <input name="Constitution-save" placeholder="+0" type="text" />
                <input name="Constitution-save-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Wisdom-save">Wisdom</label>
                <input name="Wisdom-save" placeholder="+0" type="text" />
                <input name="Wisdom-save-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Intelligence-save">Intelligence</label>
                <input name="Intelligence-save" placeholder="+0" type="text" />
                <input name="Intelligence-save-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Charisma-save">Charisma</label>
                <input name="Charisma-save" placeholder="+0" type="text" />
                <input name="Charisma-save-prof" type="checkbox" />
              </li>
            </ul>
            <div className="label">Saving Throws</div>
          </div>
          <div className="skills list-section box">
            <ul>
              <li>
                <label htmlFor="Acrobatics">
                  Acrobatics <span className="skill">(Dex)</span>
                </label>
                <input name="Acrobatics" placeholder="+0" type="text" />
                <input name="Acrobatics-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Animal Handling">
                  Animal Handling <span className="skill">(Wis)</span>
                </label>
                <input name="Animal Handling" placeholder="+0" type="text" />
                <input name="Animal Handling-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Arcana">
                  Arcana <span className="skill">(Int)</span>
                </label>
                <input name="Arcana" placeholder="+0" type="text" />
                <input name="Arcana-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Athletics">
                  Athletics <span className="skill">(Str)</span>
                </label>
                <input name="Athletics" placeholder="+0" type="text" />
                <input name="Athletics-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Deception">
                  Deception <span className="skill">(Cha)</span>
                </label>
                <input name="Deception" placeholder="+0" type="text" />
                <input name="Deception-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="History">
                  History <span className="skill">(Int)</span>
                </label>
                <input name="History" placeholder="+0" type="text" />
                <input name="History-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Insight">
                  Insight <span className="skill">(Wis)</span>
                </label>
                <input name="Insight" placeholder="+0" type="text" />
                <input name="Insight-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Intimidation">
                  Intimidation <span className="skill">(Cha)</span>
                </label>
                <input name="Intimidation" placeholder="+0" type="text" />
                <input name="Intimidation-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Investigation">
                  Investigation <span className="skill">(Int)</span>
                </label>
                <input name="Investigation" placeholder="+0" type="text" />
                <input name="Investigation-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Medicine">
                  Medicine <span className="skill">(Wis)</span>
                </label>
                <input name="Medicine" placeholder="+0" type="text" />
                <input name="Medicine-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Nature">
                  Nature <span className="skill">(Int)</span>
                </label>
                <input name="Nature" placeholder="+0" type="text" />
                <input name="Nature-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Perception">
                  Perception <span className="skill">(Wis)</span>
                </label>
                <input name="Perception" placeholder="+0" type="text" />
                <input name="Perception-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Performance">
                  Performance <span className="skill">(Cha)</span>
                </label>
                <input name="Performance" placeholder="+0" type="text" />
                <input name="Performance-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Persuasion">
                  Persuasion <span className="skill">(Cha)</span>
                </label>
                <input name="Persuasion" placeholder="+0" type="text" />
                <input name="Persuasion-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Religion">
                  Religion <span className="skill">(Int)</span>
                </label>
                <input name="Religion" placeholder="+0" type="text" />
                <input name="Religion-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Sleight of Hand">
                  Sleight of Hand <span className="skill">(Dex)</span>
                </label>
                <input name="Sleight of Hand" placeholder="+0" type="text" />
                <input name="Sleight of Hand-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Stealth">
                  Stealth <span className="skill">(Dex)</span>
                </label>
                <input name="Stealth" placeholder="+0" type="text" />
                <input name="Stealth-prof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Survival">
                  Survival <span className="skill">(Wis)</span>
                </label>
                <input name="Survival" placeholder="+0" type="text" />
                <input name="Survival-prof" type="checkbox" />
              </li>
            </ul>
            <div className="label">Skills</div>
          </div>
        </div>
      </section>
      <div className="passive-perception box">
        <div className="label-container">
          <label htmlFor="passiveperception">Passive Wisdom (Perception)</label>
        </div>
        <input name="passiveperception" placeholder="10" />
      </div>
      <div className="otherprofs box textblock">
        <label htmlFor="otherprofs">Other Proficiencies and Languages</label>
        <textarea name="otherprofs"></textarea>
      </div>
    </section>
  );
};

export default Attributes;
