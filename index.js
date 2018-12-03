'use strict';

const fs = require('fs');

let nodes = [];

let graph = JSON.parse(fs.readFileSync('./grafo.json', 'utf8'));
let graphLinks = graph.links;

graph.nodes.forEach(function(node) {
  let data = {
    id: node.id,
    visited: false
  };

  let nodeLinks = [];
  node.ports.forEach(function(port) {
    port.links.forEach(function(link) {
      let child = graphLinks.find(function(l) { return l.id === link; });

      nodeLinks.push(child.target);
    });
  });
  data.links = nodeLinks;

  nodes.push(data);
});

function bfs(_nodes) {
  let firstNode = _nodes[0]; 
  let listToExplore = [firstNode];

  console.log(firstNode.id);
  firstNode.visited = true;
  while (listToExplore.length > 0) {
    let node = listToExplore.shift();
    let links = node.links;

    links.forEach(function(id) {
      let child = _nodes.find(function(c) { return c.id === id; });

      if (!child.visited) {
        console.log(child.id);
        child.visited = true;

        listToExplore.push(child);
      }
    });
  }
}

bfs(nodes);
