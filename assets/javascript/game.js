var words = ["Jack Sparrow", "Eye Patch", "Parrot", "Treasure", "Captain Hook", "Pirate Ship", "Buccaneer"]

var chosenWord = math.floor(math.random() * words.length);
console.log(chosenWord)

function words() {
    var randomword = math.floor(math.random()*(words.length));
    document.getElementById("message").innerHTML = words[randomword];
}