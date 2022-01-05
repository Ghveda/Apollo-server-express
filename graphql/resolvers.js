const { User } = require("../models");

const resolvers = {
  Query: {
    getUsers: async () => {
      const users = await User.findAll();
      return users;
    },

    getUser: async (_, { uuid }) => {
      const user = await User.findOne({
        where: { uuid },
        include: "posts",
      });
      return user;
    },
  },
  Mutation: {
    createUser: async (_, { name, email, role }) => {
      console.log(name, email, role);
      await User.create({ name, email, role });
      return "created";
    },
  },
};

module.exports = resolvers;
