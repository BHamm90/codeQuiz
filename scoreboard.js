// All variables in use
var pastScore = document.querySelector("#pastScore");
var clear = document.querySelector("#clear");
var returnLast = document.querySelector("#return");

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        pastScore.appendChild(createLi);

    }
}
// Event listener to move to index page
returnLast.addEventListener("click", function () {
    window.location.replace("./index.html");
});