"use strict";

function timeConversion(s) {
  // Write your code here
  let lastTwo = s.substring(8);
  let fullTime = s.substring(0, 8);
  let times = fullTime.split(":");

  if (lastTwo === "PM") {
    if (times[0] !== "12") {
      times[0] = parseInt(times[0]) + 12;
    }
  } else {
    if (times[0] === "12") {
      times[0] = "00";
    }
  }
  return times.join(":");
}
