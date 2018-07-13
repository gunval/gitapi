const axios = require("axios");
const JSON = require("circular-json");
const setting = require("setting.json");

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

    const getValues = async (url, option) => {
        return new Promise((resolve, reject) => {
            axios.get(url, options).then((response) => {
                resolve(response.data);
            }).catch((err) => {
                reject(err);
            });
        });
    };

    this.getIssue = () => {
        const url = "https://api.github.com/repos/" + organization + "/" + repository + "/issues?filter=all&state=all&sort=created&direction=asc";

        const data = await getValues(url, options);
        console.log(JSON.stringify(data));
    };

    this.getProjects = async () => {
        const url = "https://api.github.com/repos/" + organization + "/" + repository + "/projects?access_token=" + access_token;

        const data = await getValues(url, options);
        console.log(JSON.stringify(data));
    };

    this.getColumnList = (project_id) => {
        const url =  "https://api.github.com/projects/" + project_id + "/columnss?access_token=" + access_token;
        
        const data = await getValues(url, options);
        console.log(JSON.stringify(data));
    };
}

module.exports = githubApi;

var tt = new githubApi();

tt.getProjects();