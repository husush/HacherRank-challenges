"use strict";

function plusMinus(arr) {
  // Write your code here
  let zeroCount = 0;
  let minusCount = 0;
  let plusCount = 0;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] < 0) {
      minusCount++;
    } else if (arr[i] > 0) {
      plusCount++;
    } else if (arr[i] == 0) {
      zeroCount++;
    }
  }
  let positive = plusCount / len;
  let negative = minusCount / len;
  let zero = zeroCount / len;
  console.log(
    positive.toFixed(6),
    "\n" + negative.toFixed(6),
    "\n" + zero.toFixed(6)
  );
}
plusMinus();
arr = [2, 54, 8, 7, 6, 5, 4, 44, 3, 2];
