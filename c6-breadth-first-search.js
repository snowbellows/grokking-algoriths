let graph = new Map();

graph.set('you', ['alice', 'bob', 'claire']);
graph.set('bob', ['anuj', 'peggy']);
graph.set('alice', ['peggy']);
graph.set('claire', ['thom', 'jonny']);
graph.set('anuj', []);
graph.set('peggy', []);
graph.set('thom', []);
graph.set('jonny', []);

function breadthFirstSearch(personIsSeller) {
  let searchQueue = [];
  searchQueue = graph.get('you');
  let searched = [];
  while (searchQueue.length > 0) {
    const [person, ...rest] = searchQueue;
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      } else {
        searchQueue = [...rest, ...graph.get(person)];
      }
    }
  }
  return false;
}

breadthFirstSearch((person) => person === 'thom');
