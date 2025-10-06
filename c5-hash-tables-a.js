const voted = new Map();

function checkVoter(voterName) {
  if (voted.has(voterName)) {
    console.log('kick them out!');
  } else {
    voted.set(voterName, true);
    console.log('let them vote!');
  }
}

checkVoter('tom');
checkVoter('mike');
checkVoter('mike');
