let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {
  kone: new Set(['id', 'nv', 'ut']),
  ktwo: new Set(['wa', 'id', 'mt']),
  kthree: new Set(['or', 'nv', 'ca']),
  kfour: new Set(['nv', 'ut']),
  kfive: new Set(['ca', 'az']),
};
console.log(stations);
let finalStations = new Set();

while (statesNeeded.size > 0) {
  let bestStation = undefined;

  let statesCovered = new Set();

  Object.entries(stations).forEach(([station, statesForStation]) => {
    const covered = statesNeeded.intersection(statesForStation);
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  });
  statesNeeded = statesNeeded.difference(statesCovered);
  finalStations.add(bestStation);
}

console.log(finalStations);
