const axios = require("axios");
const JSON = require("circular-json");
const setting = require("./setting.json");

function githubApi() {
    const organization = setting.organization;
    const repository = setting.repository;
    const access_token = setting.access_token;

    const headers = {
        "Accept" : "application/vnd.github.inertia-preview+json"
    };

    const options = {
        "headers" : headers
    };

    const headers2 = {
        "Accept" : "application/vnd.github.mockingbird-preview+json"
    };

    const options2 = {
        "headers" : headers2
    };

    const getValues =  (url, option) => {
        return new Promise((resolve, reject) => {
            axios.get(url, option).then((response) => {
                resolve(response.data);
            }).catch((err) => {
                reject(err);
            });
        });
    };

    this.getIssueList = async () => {
        const url = "https://api.github.com/repos/" + organization + "/" + repository + "/issues?filter=all&state=all&sort=created&direction=asc";
        return await getValues(url, options).catch((err) => {console.log(err)});
    };

    this.getIssue = async (number) => {
        const url = "https://api.github.com/repos/" + organization + "/" + repository + "/issues/" + number + "?filter=all&state=all&sort=created&direction=asc";
        return await getValues(url, options).catch((err) => {console.log(err)});
    };

    this.getIssueComments = async (number) => {
        const url = "https://api.github.com/repos/" + organization + "/" + repository + "/issues/" + number + "/comments?access_token=" + access_token;
        return await getValues(url, options).catch((err) => {console.log(err)});
    };

    this.getIssueEvents = async (number) => {
        const url = "https://api.github.com/repos/" + organization + "/" + repository + "/issues/" + number + "/events?access_token=" + access_token;
        return await getValues(url, options).catch((err) => {console.log(err)});
    };

    this.getIssueTimeline = async (number) => {
        const url = "https://api.github.com/repos/" + organization + "/" + repository + "/issues/" + number + "/timeline?access_token=" + access_token;
        return await getValues(url, options2).catch((err) => {console.log(err)});
    };

    this.getProjects = async () => {
        const url = "https://api.github.com/repos/" + organization + "/" + repository + "/projects?access_token=" + access_token;
        return await getValues(url, options).catch((err) => {console.log(err)});
    };

    this.getColumnList = async (project_id) => {
        const url =  "https://api.github.com/projects/" + project_id + "/columns?access_token=" + access_token;
        return await getValues(url, options).catch((err) => {console.log(err)});
    };

    this.getCardList = async (column_id) => {
        const url =  "https://api.github.com/projects/columns/" + column_id + "/cards?access_token=" + access_token;
        return await getValues(url, options).catch((err) => {console.log(err)});
    };

    this.getCard = async (card_id) => {
        const url =  "https://api.github.com/projects/columns/cards/" + card_id + "?access_token=" + access_token;
        return await getValues(url, options).catch((err) => {console.log(err)});
    };
}

module.exports = githubApi;