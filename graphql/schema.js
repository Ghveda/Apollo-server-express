const { gql } = require("apollo-server-express");

const typeDefs = gql(`
  type Query {
    setName(name: String!, age: String!): [User]!
    getUsers: [User]!
    getUser(uuid: String!): User! 
    }

    type Mutation{
        createUser(name: String!, email: String!, role: String!): String!
    }

    type User{
        id: Int!
        uuid: String!
        name: String!
        email: String!
        role: String!
    }

  
`);

module.exports = typeDefs;
