const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { sequelize, User, Post } = require("./models");
const usersRoute = require("./routes/userRoutes");
const postsRoute = require("./routes/postsRoutes");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const startApolloServer = require("./apolloServer");

const app = express();
app.use(express.json());

app.use(usersRoute);
app.use(postsRoute);

startApolloServer(typeDefs, resolvers, app);
