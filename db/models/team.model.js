const { DataTypes } = require("sequelize");
const connection = require("../connection");
const SuperUser = require("./superUser.model");

const Team = connection.define(
  "Team",
  {
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "team name is required",
        },
        notNull: {
          msg: "team name can not be null",
        },
      },
    },
  },
  {
    tableName: "teams",
    timestamps: false,
  }
);

SuperUser.hasMany(Team, {
  onDelete: "CASCADE",
});
Team.belongsTo(SuperUser);

module.exports = Team;
