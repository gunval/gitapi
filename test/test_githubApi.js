var assert = require("assert");

const GITAPI = require("../js/githubApi");

describe('getProjects', function () {
    const api = new GITAPI();
    const data = api.getProjects().then((data) => {
        assert.equal(2, data.length);
        assert.equal("sprint1", data[0].name);
        assert.equal("1509619", data[0].id);
    });
});

describe('getColumnList', function () {
    const api = new GITAPI();
    const data = api.getColumnList("1509619").then((data) => {
        assert.equal(4, data.length);
        assert.equal("Backlog", data[0].name);
        assert.equal("2715383", data[0].id);
        assert.equal("2018-05-15T02:07:27Z", data[0].created_at);
        assert.equal("2018-05-15T02:28:52Z", data[0].updated_at);
    });
});