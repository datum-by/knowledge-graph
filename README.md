# knowledge-graph
Federated auditable knowledge base and query engine

## Load into Jena

Install [docker](https://docs.docker.com/engine/installation/)
```
docker pull krivichaninds/loadintojena
docker run --rm -v "$PWD"/scripts:/scripts krivichaninds/loadintojena
```