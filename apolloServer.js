const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const http = require("http");
const { sequelize } = require("./models");

async function startApolloServer(typeDefs, resolvers, app) {
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  const database = await sequelize.authenticate();

  if (database) {
    console.log("database is connected!");
  }

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

module.exports = startApolloServer;
