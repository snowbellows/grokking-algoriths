const graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    fin: 1,
  },
  b: {
    a: 3,
    fin: 5,
  },
  fin: {},
};

let costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

let parents = {
  a: 'start',
  b: 'start',
  fin: undefined,
};

let processed = [];

let node = findLowestCostNode(costs);

while (node) {
  const cost = costs[node];
  const neighbours = graph[node];
  Object.keys(neighbours).forEach((n) => {
    const newCost = cost + neighbours[n];
    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }
  });
  processed.push(node);
  node = findLowestCostNode(costs);
}

function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = undefined;
  Object.keys(costs).forEach((node) => {
    const cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
}

console.log(parents);
