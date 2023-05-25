const { firstFive, lastFive } = require('../../H-array-methods-2/exercise');

describe("Slice Array", () => {
  it("should return the first five items of the array", () => {
    expect(firstFive).toEqual(["Daniel", "Irina", "Rares", "Rukmini", "Abdul"]);
  });

  it("should return the last five items of the array", () => {
    expect(lastFive).toEqual(["Rares", "Rukmini", "Abdul", "Austine", "Swathi"]);
  });
});

