const {findLongNameThatStartsWithA} = require('../../A-array-find/exercise');

describe('findLongNameThatStartsWithA', () => {
  test('should return the first name starting with "A" and having length > 7', () => {
    const names = ['Alice', 'Bob', 'Andrew', 'Amy', 'Alexandra'];
    const result = findLongNameThatStartsWithA(names);
    expect(result).toBe('Alexandra');
  });
});