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

    const getValues =  (url, option) => {
        return new Promise((resolve, reject) => {
            axios.get(url, options).then((response) => {
                resolve(response.data);
            }).catch((err) => {
                reject(err);
            });
        });
    };

    this.getIssue = async () => {
        const url = "https://api.github.com/repos/" + organization + "/" + repository + "/issues?filter=all&state=all&sort=created&direction=asc";
        return await getValues(url, options).catch((err) => {console.log(err)});
    };

    this.getProjects = async () => {
        const url = "https://api.github.com/repos/" + organization + "/" + repository + "/projects?access_token=" + access_token;
        return await getValues(url, options).catch((err) => {console.log(err)});
    };

    this.getColumnList = async (project_id) => {
        const url =  "https://api.github.com/projects/" + project_id + "/columns?access_token=" + access_token;
        return await getValues(url, options).catch((err) => {console.log(err)});
    };
}

module.exports = githubApi;