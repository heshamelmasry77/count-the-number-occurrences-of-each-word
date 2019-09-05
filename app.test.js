const {countWordsInString} = require('./app');
test('output number of words in string', () => {
  const text = countWordsInString('a b a c aa aa aa    b');
  expect(text).toEqual({'a': 2, 'b': 2, 'c': 1, 'aa': 3});
});