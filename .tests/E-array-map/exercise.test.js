describe('Variable Values', () => {
    test('should have correct values', () => {
      const {
        numberHundredMap,
        numberHundredName,
        numberHundredNoName,
        numberHundredArrow,
        numberHundredShort
      } = require('../../E-array-map/exercise');
  
      const expectedArray = [10, 20, 30, 40, 50];
  
      expect(numberHundredMap).toEqual(expectedArray);
      expect(numberHundredName).toEqual(expectedArray);
      expect(numberHundredNoName).toEqual(expectedArray);
      expect(numberHundredArrow).toEqual(expectedArray);
      expect(numberHundredShort).toEqual(expectedArray);
    });
  });
  