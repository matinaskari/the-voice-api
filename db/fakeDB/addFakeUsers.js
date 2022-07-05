const { superUsers } = require("./superUsers.json");
const { Teams } = require("./teams.json");
const { Candidates } = require("./candidates.json");

const SuperUser = require("../models/superUser.model");
const Team = require("../models/team.model");
const Candidate = require("../models/candidate.model");

const addUsersToDb = (users, dbmodel) => {
  try {
    users.forEach(async (user) => {
      await dbmodel.create(user);
    });
  } catch (error) {
    console.log(error.message);
  }
};

(async function () {
  addUsersToDb(superUsers, SuperUser);
  addUsersToDb(Teams, Team);
  addUsersToDb(Candidates, Candidate);
})();
