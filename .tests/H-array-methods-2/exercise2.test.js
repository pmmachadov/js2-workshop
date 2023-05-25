const capitalise = require('../../H-array-methods-2/exercise2');

describe("Capitalise", () => {
  it("should capitalise the first letter of 'daniel'", () => {
    expect(capitalise("daniel")).toEqual("Daniel");
  });

  it("should capitalise the first letter of 'hello'", () => {
    expect(capitalise("hello")).toEqual("Hello");
  });
});

