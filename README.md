
# Subgraph Template

Example subgraph template using vault smart contract from https://github.com/renakaagusta/crypto-collaterized-stabelcoin

- Install Graph version: 0.73.0
- Run `graph codegen`
- Create the subgraph using `graph create --node GRAPH_NODE_URL GTIHUB_USERNAME/PROJECT_NAME`, for example: `graph create --node http://localhost:8020/ renakaagusta/vault`
- Deploy it using ` graph deploy --node GRAPH_NODE_URL --ipfs IPFS_URL GTIHUB_USERNAME/PROJECT_NAME`, for example: `graph deploy --node http://localhost:8020/ --ipfs http://localhost:5001/ renakaagusta/vault`