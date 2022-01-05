"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "some@some.com",
          uuid: "057903e0-f070-4874-9478-54f6a1355b86",
          role: "adminiara chemi yle",
          createdAt: "2022-01-04T08:56:04.376Z",
          updatedAt: "2022-01-04T08:56:34.565Z",
        },
        {
          name: "jemala",
          email: "some@some.com",
          uuid: "057903e0-f070-4874-9478-54f6a1355b80",
          role: "adminiara chemi yle",
          createdAt: "2022-01-04T08:56:04.376Z",
          updatedAt: "2022-01-04T08:56:34.565Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("users", null, {});
  },
};
