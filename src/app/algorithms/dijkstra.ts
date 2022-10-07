import Node from "../models/node";

export function runDijkstra(nodes: Array<Array<Node>>, initialNode: Node, finalNode: Node): Array<Node> {
  const visitedNodes: Array<Node> = []
  if (!initialNode || !finalNode || initialNode === finalNode) {
    console.log("Invalid params")
    return visitedNodes;
  }

  nodes[initialNode.row][initialNode.col].distance = 0;
  const unvisitedNodes = convertToOneArray(nodes);

  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);

    const closestNode = unvisitedNodes.shift();

    if (closestNode?.isWall) continue;
    if (closestNode?.distance === Infinity) return visitedNodes;

    closestNode!.isVisited = true;
    visitedNodes.push(closestNode!);

    if (closestNode?.isFinal === finalNode.isFinal) {
      console.log("Found");
      return visitedNodes;
    }

    updateNeighbors(closestNode!, nodes);
  }
  return visitedNodes;
}

function sortNodesByDistance(nodes: Array<Node>) {
  nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function convertToOneArray(nodes: Array<Array<Node>>): Array<Node> {
  const nodesArr: Array<Node> = [];
  nodes.forEach(row => {
    row.forEach(node => {
      nodesArr.push(node);
    })
  });

  return nodesArr;
}

function findNeighbors(node: Node, grid: Array<Array<Node>>): Array<Node> {
  const neighbors: Array<Node> = [];
  const {row, col} = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[row].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors.filter(neighbor => !neighbor.isVisited);
}

function updateNeighbors(node: Node, grid: Array<Array<Node>>) {
  const foundNeighbors = findNeighbors(node, grid);
  foundNeighbors.forEach(neighbor => {
    neighbor.distance = node.distance + 1;
    neighbor.prevNode = node;
  });
}

export function getShortestPath(initialNode: Node, finalNode: Node): Array<Node> {
  const nodesInOrder = [];
  let currentNode = finalNode;
  while (currentNode.prevNode !== undefined) {
    nodesInOrder.unshift(currentNode);
    currentNode = currentNode.prevNode;
  }
  nodesInOrder.unshift(initialNode);
  return nodesInOrder;
}
