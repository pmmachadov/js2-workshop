const everyone = require('../../G-array-methods/exercise2');

describe("Concat Arrays", () => {
  it("should concatenate the mentors and students arrays", () => {
    expect(everyone).toEqual([
      "Daniel",
      "Irina",
      "Rares",
      "Rukmini",
      "Abdul",
      "Austine",
      "Swathi"
    ]);
  });
});

