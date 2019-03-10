//Array of Pirate Words
var words = ["captain", "plank", "parrot", "treasure", "hook", "ship", "buccaneer"];

//generate new word

    
    
    //document.getElementById("message").innerHTML = words[randomWord];
   // document.getElementById("message");

    
 //variables 
    var randomWord = Math.floor(Math.random()*words.length);  
    rightLetter = []; 
    wrongLetter = [];
    var underScore = [];
    var chosenWord = words[randomWord];

//DOM Manipulation
   // underScore[chosenWord.indexOf('keypress', (event) => {
       
        docUnderScore = document.getElementsByClassName('underscore');
        docRightGuess = document.getElementsByClassName('rightGuess');
        docWrongGuess = document.getElementsByClassName('wrongGuess');
   // })]
    

//Create Underscores based on length of word
    generateUnderscore = () => {
        for(let i = 0; i < chosenWord.length; i++) {
            underScore.push('_');
        }
        return underScore;    
        
    }
    document.write(generateUnderscore);
    console.log(generateUnderscore());
//Get User guess
    document.addEventListener('keypress', (event) => {
        keyword = String.fromCharCode(event.keyCode);
//If User guess is right     
        if(chosenWord.indexOf(keyword) > -1) {
//Add to right letter array
            rightLetter.push(keyword);
            docUnderScore[0].innerHTML = underScore.join(' ');
            docRightGuess[0].innerHTML = rightLetter;
//Replace underscore with right letter
            underScore[chosenWord.indexOf(keyword)] = keyword;

            
           docRightGuess[0].innerHTML = rightLetter;
            console.log(rightLetter);
            
            if(underScore.join('') == chosenWord) {
                alert('You Win!');
            }
        }
//If User guess is wrong        
        else{
            wrongLetter.push(keyword);
            console.log(wrongLetter);
           docWrongGuess[0].innerHTML = wrongLetter;
           
        }
        //docUnderScore[0].innerHTML = generateUnderscore().join(' ');
    });
    






    


