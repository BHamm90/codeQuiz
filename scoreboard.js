// All variables in use
var pastScore = document.querySelector("#pastScore");
var clear = document.querySelector("#clear");
var returnLast = document.querySelector("#return");

// Event listener for clear button on scoreboard
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Provides files saved on local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        pastScore.appendChild(createLi);

    }
}
// Event listener for return button to go to index
returnLast.addEventListener("click", function () {
    window.location.replace("./index.html");
});