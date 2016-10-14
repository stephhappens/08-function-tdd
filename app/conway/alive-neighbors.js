export default function aliveNeighbors(neighbors) {
  // if (aliveNeighbors) {
  //   return false;
  // }
  let dead = 0;

  for (let i = 0; i < neighbors.length; i++) {
    if (neighbors[i]) {
      dead = dead + 1;
    }
  }

  return dead;
}
