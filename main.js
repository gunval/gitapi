

var vue = new Vue ({
    el: "#github-api",
    data: {
        information: 'no information yet!',
    },
    methods: 
    {
        getIssues: function(){
            var str = this.text1;
            this.message = 'You typed: <span style="color:white;background:red">' + str + '</span>.';
        }
    }
});