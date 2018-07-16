var assert = require("assert");
var JSON = require("circular-json");

const GITAPI = require("../js/githubApi");
/*
describe('getProjects', () => {
    const api = new GITAPI();
    const data = api.getProjects().then((data) => {
        assert.equal(2, data.length);
        assert.equal("sprint1", data[0].name);
        assert.equal("1509619", data[0].id);
    });
});

describe('getColumnList', () => {
    const api = new GITAPI();
    api.getColumnList("1509619").then((data) => {
        assert.equal(4, data.length);
        assert.equal("Backlog", data[0].name);
        assert.equal("2715383", data[0].id);
        assert.equal("2018-05-15T02:07:27Z", data[0].created_at);
        assert.equal("2018-05-15T02:28:52Z", data[0].updated_at);
    });
});

describe('getCardList', () => {
    const api = new GITAPI();
    api.getCardList("2715380").then((data) => {
        assert.equal(2, data.length);
        assert.equal("11339121", data[0].id);
        assert.equal("https://api.github.com/repos/gunval/test/issues/7", data[0].content_url);
        assert.equal("9764708", data[1].id);
        assert.equal(undefined, data[1].content_url);
    });
});

describe('getCard', () => {
    const api = new GITAPI();
    api.getCard("11339121").then((data) => {
        assert.equal("11339121", data.id);
        assert.equal("https://api.github.com/repos/gunval/test/issues/7", data.content_url);
    });
});

describe('getIssueList', () => {
    const api = new GITAPI();
    api.getIssueList().then((data) => {
    });
});

describe('getIssue', () => {
    const api = new GITAPI();
    api.getIssue("7").then((data) => {
    });
});

describe('getIssueComments', () => {
    const api = new GITAPI();
    api.getIssueComments("7").then((data) => {
    });
});

describe('getIssueEvents', () => {
    const api = new GITAPI();
    api.getIssueEvents("7").then((data) => {
    });
});
*/
describe('getIssueTimeline', () => {
    const api = new GITAPI();
    api.getIssueTimeline("7").then((data) => {
        console.log(JSON.stringify(data));
    });
});