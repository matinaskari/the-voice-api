const { DataTypes } = require("sequelize");
const connection = require("../connection");
const Candiadte = require("./candidate.model");

const Performance = connection.define(
  "Performance",
  {
    songName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "song name is required",
        },
        notNull: {
          msg: "song name can not be null",
        },
      },
    },
    dateOfPerformance: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "date of performance is required",
        },
        notNull: {
          msg: "date of performance can not be null",
        },
        isDate: true,
      },
    },
    mentor_a_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "mentor a score is required",
        },
        notNull: {
          msg: "mentor a score can not be null",
        },
        max: 100,
        min: 0,
      },
    },
    mentor_b_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "mentor a score is required",
        },
        notNull: {
          msg: "mentor a score can not be null",
        },
        max: 100,
        min: 0,
      },
    },
    averageScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "average score is required",
        },
        notNull: {
          msg: "mentor a score can not be null",
        },
      },
    },
  },
  {
    tableName: "performances",
    timestamps: false,
  }
);

Candiadte.hasMany(Performance, {
  onDelete: "CASCADE",
});
Performance.belongsTo(Candiadte);

module.exports = Performance;
