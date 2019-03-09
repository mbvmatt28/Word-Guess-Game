//Array of Pirate Words
var words = ["Captain", "Plank", "Parrot", "Treasure", "Hook", "Ship", "Buccaneer"]

//click to generate new word
document.getElementById("words").onclick = function() {
    
    var randomWord = Math.floor(Math.random()*words.length);
    document.getElementById("message").innerHTML = words[randomWord];
    console.log(randomWord);
    document.getElementById("message")

    
 //variables   
    rightWord = [];
    wrongWord = [];
    var underScore = [];
    var chosenWord = words[randomWord];

    underScore[chosenWord.indexOf('keypress', (event) => {
        docUnderScore[0] = document.getElementsByClassName('underscore');
    })]
    

//Create Underscores based on length of word
    generateUnderscore = () => {
        for(i = 0; i < chosenWord.length; i++) {
            underScore.push('_')
        }
        return underScore;       
    }
    console.log(generateUnderscore());
//Get User guess
    document.addEventListener('keyup', (event) =>{
        keycode = event.keyCode;
        keyword = String.fromCharCode(keycode);
//If User guess is right     
        if(chosenWord.indexOf(keyword) > -1) {
            rightWord.push(keyword);
            docUnderScore.innerHTML = underScore;
            underScore[chosenWord.indexOf(keyword)] = keyword;
            if(underScore.join('') == chosenWord) {
                alert('You Win!');
            }
        }
//If User guess is wrong        
        else{
            wrongWord.push(keyword);
        }
    });
    docunderScore[0].innerHTML = generateUnderscore().join(' ');
}





    


