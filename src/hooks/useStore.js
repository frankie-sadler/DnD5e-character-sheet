import create from "zustand";

// const useStoreExample = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }));

const useStore = create((set, get) => ({
  character: {
    name: "",
    class: "",
    level: 0,
    playerName: "",
    race: "",
    alignment: "",
    ExperiencePoints: 0,
    proficiency: 0,
    attributes: {
      strength: 0,
      dexterity: 0,
      consitution: 0,
      wisdom: 0,
      intelligence: 0,
      charsima: 0,
    },
    savingThrows: {
      strength: 0,
      dexterity: 0,
      consitution: 0,
      wisdom: 0,
      intelligence: 0,
      charsima: 0,
    },
    skills: {
      Acrobatics: 0,
      "Animal Handling": 0,
      Arcana: 0,
      Athletics: 0,
      Deception: 0,
      History: 0,
      Insight: 0,
      Intimidation: 0,
      Investigation: 0,
      Medicine: 0,
      Nature: 0,
      Perception: 0,
      Performance: 0,
      Persuasion: 0,
      Religion: 0,
      "Sleight of Hand": 0,
      Stealth: 0,
      Survival: 0,
    },
    inspiration: false,
    armourClass: 0,
    initiative: 0,
    speed: 0,
    hitPoints: {
      maximum: 0,
      current: 0,
      temporary: 0,
      hitDice: "",
      death: {
        saves: 0,
        fails: 0,
      },
    },
    attacks: [],
    equipment: {
      currency: {
        copper: 0,
        silver: 0,
        electrum: 0,
        gold: 0,
        platinum: 0,
      },
      equipment: [],
    },
    flavour: {
      personality: "",
      ideals: "",
      bonds: "",
      flaws: "",
    },
  },
  changeName: () => set((state) => ({ name: state.character.name })),
}));

export default useStore;
