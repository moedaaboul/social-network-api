const formatDate = require('../utils/helpers');

test('should return 1st with 1', () => {
  let testString = 'Mar 1, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 1st, 2022 at 03:04 pm');
});

test('should return 2nd with 2', () => {
  let testString = 'Mar 2, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 2nd, 2022 at 03:04 pm');
});

test('should return 3rd with 3', () => {
  let testString = 'Mar 3, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 3rd, 2022 at 03:04 pm');
});

test('should return 4th with 4', () => {
  let testString = 'Mar 4, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 4th, 2022 at 03:04 pm');
});

test('should return 5th with 5', () => {
  let testString = 'Mar 5, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 5th, 2022 at 03:04 pm');
});

test('should return 6th with 6', () => {
  let testString = 'Mar 6, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 6th, 2022 at 03:04 pm');
});

test('should return 7th with 7', () => {
  let testString = 'Mar 7, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 7th, 2022 at 03:04 pm');
});

test('should return 8th with 8', () => {
  let testString = 'Mar 8, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 8th, 2022 at 03:04 pm');
});

test('should return 9th with 9', () => {
  let testString = 'Mar 9, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 9th, 2022 at 03:04 pm');
});

test('should return 10th with 10', () => {
  let testString = 'Mar 10, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 10th, 2022 at 03:04 pm');
});

test('should return 11th with 11', () => {
  let testString = 'Mar 11, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 11th, 2022 at 03:04 pm');
});

test('should return 12th with 12', () => {
  let testString = 'Mar 12, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 12th, 2022 at 03:04 pm');
});

test('should return 13th with 13', () => {
  let testString = 'Mar 13, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 13th, 2022 at 03:04 pm');
});

test('should return 14th with 14', () => {
  let testString = 'Mar 14, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 14th, 2022 at 03:04 pm');
});

test('should return 15th with 15', () => {
  let testString = 'Mar 15, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 15th, 2022 at 03:04 pm');
});

test('should return 16th with 16', () => {
  let testString = 'Mar 16, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 16th, 2022 at 03:04 pm');
});

test('should return 17th with 17', () => {
  let testString = 'Mar 17, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 17th, 2022 at 03:04 pm');
});

test('should return 18th with 18', () => {
  let testString = 'Mar 18, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 18th, 2022 at 03:04 pm');
});

test('should return 19th with 19', () => {
  let testString = 'Mar 19, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 19th, 2022 at 03:04 pm');
});

test('should return 20th with 20', () => {
  let testString = 'Mar 20, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 20th, 2022 at 03:04 pm');
});

test('should return 21st with 21st', () => {
  let testString = 'Mar 21, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 21st, 2022 at 03:04 pm');
});

test('should return 22nd with 22nd', () => {
  let testString = 'Mar 22, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 22nd, 2022 at 03:04 pm');
});

test('should return 23rd with 23', () => {
  let testString = 'Mar 23, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 23rd, 2022 at 03:04 pm');
});

test('should return 24th with 24', () => {
  let testString = 'Mar 24, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 24th, 2022 at 03:04 pm');
});

test('should return 25th with 25', () => {
  let testString = 'Mar 25, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 25th, 2022 at 03:04 pm');
});

test('should return 26th with 26', () => {
  let testString = 'Mar 26, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 26th, 2022 at 03:04 pm');
});

test('should return 27th with 27', () => {
  let testString = 'Mar 27, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 27th, 2022 at 03:04 pm');
});

test('should return 28th with 28', () => {
  let testString = 'Mar 28, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 28th, 2022 at 03:04 pm');
});

test('should return 29th with 29', () => {
  let testString = 'Mar 29, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 29th, 2022 at 03:04 pm');
});

test('should return 30th with 30', () => {
  let testString = 'Mar 30, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 30th, 2022 at 03:04 pm');
});

test('should return 31st with 31', () => {
  let testString = 'Mar 31, 2022, 3:04 PM';
  expect(formatDate(testString)).toEqual('Mar 31st, 2022 at 03:04 pm');
});
