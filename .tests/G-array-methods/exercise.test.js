const sortedNumbers = require('../../G-array-methods/exercise');

describe("Sort Array", () => {
  it("should sort the array in ascending order", () => {
    expect(sortedNumbers).toEqual([1, 2, 3]);
  });
});
