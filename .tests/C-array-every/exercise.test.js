describe('exercise', () => {
  test('should log the message "The group has at least one intruder"', () => {
    // Create a spy on console.log
    const consoleLogSpy = jest.spyOn(console, 'log');

    // Execute the file
    require('../../C-array-every/exercise');

    // Verify the expected message is logged
    expect(consoleLogSpy).toHaveBeenCalledWith('The group has at least one intruder');

    // Restore the original console.log function
    consoleLogSpy.mockRestore();
  });
});