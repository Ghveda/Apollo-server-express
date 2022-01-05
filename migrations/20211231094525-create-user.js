"use strict";
module.exports = {
  up: async (queryInterface, DateTypes) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DateTypes.INTEGER,
      },
      uuid: {
        type: DateTypes.UUID,
        defaultValue: DateTypes.UUIDV4,
      },
      name: {
        type: DateTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DateTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DateTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DateTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DateTypes.DATE,
      },
    });
  },
  down: async (queryInterface, DateTypes) => {
    await queryInterface.dropTable("users");
  },
};
