const isInUK = require('../../H-array-methods-2/exercise3');

describe("isInUK", () => {
  it("should return false for 'France'", () => {
    expect(isInUK("France")).toBe(false);
  });

  it("should return false for 'Republic of Ireland'", () => {
    expect(isInUK("Republic of Ireland")).toBe(false);
  });

  it("should return true for 'England'", () => {
    expect(isInUK("England")).toBe(true);
  });
});
