import ErrorRepository from '../errorRepository';

const storage = new ErrorRepository([
  [1, 'error1'],
  [2, 'error2'],
  [3, 'error3'],
]);
test('first test', () => {
  const testcase = storage.translate(1);
  expect(testcase).toBe('error1');
});

test('second test', () => {
  const testcase = storage.translate(2);
  expect(testcase).toBe('error2');
});

test('error test', () => {
  expect(() => {
    storage.translate(4);
  }).toThrow('Unknown error');
});
