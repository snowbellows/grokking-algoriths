// infinite recursion until maximum call stack size exceeded
function countdown(i) {
  console.log(i);
  countdown(i - 1);
}

countdown(3);
