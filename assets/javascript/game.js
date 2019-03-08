var words = ["Jack Sparrow", "Eye Patch", "Parrot", "Treasure", "Captain Hook", "Pirate Ship", "Buccaneer"]


document.getElementById("words").onclick = function() {
    
    var randomWord = Math.floor(Math.random()*words.length);
    document.getElementById("message").innerHTML = words[randomWord];
    console.log(randomWord);
    document.getElementById("message")
}




    


