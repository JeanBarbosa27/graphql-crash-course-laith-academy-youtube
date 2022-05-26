const { ApolloServer } = require("apollo-server");

const { typeDefinitions: typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  }
});

server.listen().then(({ url }) => console.log("Server ready at: %s", url));
