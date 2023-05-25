describe('exercise', () => {
  test('should not throw an error', () => {
    expect(() => {
       require('../../D-array-filter/exercise')
    }).not.toThrowError();
  });
  test('should only keep the correct and complete pairs', () => {
    // Verify the pairs is equal to the expected output
    const {pairs} = require('../../D-array-filter/exercise')
    expect(pairs).toEqual([["Islam", "Luke"], ["Lesley", "Mozafar"], ["Harun", "Irina"]]);
  });
});