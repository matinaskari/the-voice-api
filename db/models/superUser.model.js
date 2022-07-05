const { DataTypes } = require("sequelize");
const connection = require("../connection");

const SuperUser = connection.define(
  "SuperUser",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "first name is required",
        },
        notNull: {
          msg: "first name can not be null",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "last name is required",
        },
        notNull: {
          msg: "last name is required",
        },
      },
    },
    gender: {
      type: DataTypes.STRING,
      defaultValue: "male",
      validate: {
        isIn: {
          args: [["male", "female", "other"]],
          msg: "gender must be male or female or other",
        },
      },
    },
    role: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        isIn: {
          args: [["admin", "mentor"]],
          msg: "super user must be admin or mentor",
        },
      },
    },
  },
  {
    tableName: "superUsers",
    timestamps: false,
  }
);

module.exports = SuperUser;
