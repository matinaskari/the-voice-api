const { DataTypes } = require("sequelize");
const connection = require("../connection");
const Team = require("./team.model");

const Candidate = connection.define(
  "Candidate",
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
  },
  {
    tableName: "candidates",
    timestamps: false,
  }
);

Team.hasMany(Candidate, {
  onDelete: "CASCADE",
});
Candidate.belongsTo(Team);

module.exports = Candidate;
