const range = require('./range');

test('range from 0 to 5 with step 1', () => {
  const iterator = range(0, 5);
  expect(iterator.next()).toEqual({ value: 0, done: false });
  expect(iterator.next()).toEqual({ value: 1, done: false });
  expect(iterator.next()).toEqual({ value: 2, done: false });
  expect(iterator.next()).toEqual({ value: 3, done: false });
  expect(iterator.next()).toEqual({ value: 4, done: false });
  expect(iterator.next()).toEqual({ value: undefined, done: true });
});

test('range from 1 to 10 with step 2', () => {
  const iterator = range(1, 10, 2);
  expect(iterator.next()).toEqual({ value: 1, done: false });
  expect(iterator.next()).toEqual({ value: 3, done: false });
  expect(iterator.next()).toEqual({ value: 5, done: false });
  expect(iterator.next()).toEqual({ value: 7, done: false });
  expect(iterator.next()).toEqual({ value: 9, done: false });
  expect(iterator.next()).toEqual({ value: undefined, done: true });
});

test('range from -2 to 2 with step 1', () => {
  const iterator = range(-2, 2);
  expect(iterator.next()).toEqual({ value: -2, done: false });
  expect(iterator.next()).toEqual({ value: -1, done: false });
  expect(iterator.next()).toEqual({ value: 0, done: false });
  expect(iterator.next()).toEqual({ value: 1, done: false });
  expect(iterator.next()).toEqual({ value: undefined, done: true });
});
