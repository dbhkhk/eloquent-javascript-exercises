/*
  One way to define whether a positive whole number is
  even or odd:
  - Zero is even.
  - One is odd.
  - For any other number N, its evenness is the same as
    N - 2.

  Define a recursive function isEven, which should accept
  a number parameter and return a Boolean.
*/

const isEven = number => {
  if (number < 0) return isEven(-number);
  if (number === 0) return true;
  if (number === 1) return false;
  return isEven(number - 2);
};