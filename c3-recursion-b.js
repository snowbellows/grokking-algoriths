// example a) with a base case
function countdown(i) {
  console.log(i);
  if (i <= 1) return;
  countdown(i - 1);
}

countdown(3);
