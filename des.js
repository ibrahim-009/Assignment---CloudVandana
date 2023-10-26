var arr = [7, 8, 4, 9, 1, 5];

// Sorting in descending order
arr.sort(function(a, b) {
  return b - a;
});

console.log(arr); // Output: [ 9, 8, 7, 5, 4, 1 ]
