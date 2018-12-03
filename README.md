# BFS

Esse é um projeto [Node.js] no qual foi implementado uma busca por largura (Breadth-First Search) para o grafo representado pelo arquivo grafo.json. O script irá imprimir os ids dos nós na sequência em que foram visitados.

## Rodando localmente

Para rodar localmente garanta que tenha instalado o [Node.js].

Após, basta executar os seguintes comandos abaixo no seu terminal.

  ```sh
  $ git clone https://github.com/erickmenezes/bfs.git
  $ cd bfs
  ```

Como o projeto não requer nenhuma depêdencia, basta executar:

  ```sh
  $ npm start
  ```

#### Nós
O programa irá percorrer o arquivo-exemplo e preparar os nós para a busca, utilizando o seguinte formato:
* *id*: Identificador do Nó
* *visited*: Flag para representar se o nó já foi visistado ou não
* *links*: Array com os ids dos nós-filhos

   [Node.js]: <http://nodejs.org>
