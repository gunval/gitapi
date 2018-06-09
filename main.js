//const axios = require("axios");
'use strict';

let vm = new Vue ({
    el: "#github-api",
    data: {
        information: 'no information yet!'
    },
    methods: 
    {
        getIssues: function(){
            var url = "http://api.github.com/repos/gunval/test/issues";
            axios.get(url)
            .then(function(res) {
                vm.information = JSON.stringify(res);
            })
            .catch(function(err){
                console.log("error!!", err);
            });
        }
    }
});