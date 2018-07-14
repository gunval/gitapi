var assert = require("assert");

const GITAPI = require("../js/githubApi");

describe('getProjects', function () {
    const api = new GITAPI();
    const data = api.getProjects();
    //assert.equal(2, data.length);
    console.log(data.name);
});