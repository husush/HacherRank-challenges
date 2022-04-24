"use strict";

function miniMaxSum(arr) {
  // Write your code here
  let minValue = 0;
  let maxValue = 0;
  const n = arr.length;
  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0, j = n - 1; i < n - 1, j > 0; i++, j--) {
    minValue += arr[i];
    maxValue += arr[j];
  }
  console.log(minValue + " " + maxValue);
}
