var counter = 0;
var listWords = Array();

function addNewWord() {
    listWords[counter] = document.getElementById("newWord").value;
    counter++;
    document.getElementById("newWord").value = "";
}

function checkWord() {
    var checkNewWord = document.getElementById("existingWord").value;
    if(listWords.includes(checkNewWord)) {
        alert("Your word is in the dictionary!")
    } else {
        alert("Sorry! I can't find this word!")
    }
    document.getElementById("existingWord").value = "";
}