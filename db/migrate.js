const Candidate = require("./models/candidate.model");
const Performance = require("./models/performance.model");
const SuperUser = require("./models/superUser.model");
const Team = require("./models/team.model");

(async function () {
  try {
    await SuperUser.sync();
    await Team.sync();
    await Candidate.sync();
    await Performance.sync();
  } catch (error) {
    console.error("[-] sync DB tables> ", error.message);
    process.exit(1);
  }
})();
