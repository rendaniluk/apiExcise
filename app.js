//the Dom
var User = document.querySelector('.username');
var lookup = document.querySelector('#btn');
var outPut = document.querySelector('.massage')
//

// alert($)
//function to get the api
var putUser = function() {
    var input = User.value;
    var url = "https://api.github.com/users/" + input;
    $.get(url)
        .then(function(results) {
            var apiResults = "Hi, " + input + " you have " + JSON.stringify(results.public_repos) + " public repos in GitHub!";
console.log(apiResults);
            outPut.innerHTML = apiResults;
        });
    User.value = "";
};
//eventlistener to lookup button
lookup.addEventListener('click', putUser);
