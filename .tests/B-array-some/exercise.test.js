describe('exercise', () => {
  test('Should exit with the error code 1!', () => {
    const mockExit = jest.spyOn(process, 'exit')
    .mockImplementation((number) => { throw new Error('process.exit: ' + number); });
    expect(() => {
      require('../../B-array-some/exercise');
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });
});

