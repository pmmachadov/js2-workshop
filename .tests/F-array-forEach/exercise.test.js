const fizzBuzz = require('../../F-array-forEach/exercise');

const expectedOutput = [
  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  14,
  'FizzBuzz'
];

test('FizzBuzz output is correct', () => {
  expect(fizzBuzz).toEqual(expectedOutput);
});


