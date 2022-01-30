

// Caesar Cipher Function ---------------------------------------------------

const caesar = function(str, key) {
    const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let newArray = [];
    let strArray = Array.from(str);

    // If key is negative, fix it.
    if(key < 0) { key = 26 + (key % 26);};

    // Allow this bad boy to be case sensitive.
    const isLowerCase = function(str){
        return str == str.toLowerCase() && str != str.toUpperCase();
    };
    const isUpperCase = function(str){
        return str == str.toUpperCase() && str != str.toLowerCase();
    };
    
    // strArray = ["h","i"]. Each letter of strArray is passed through as letter.
    for(let letter of strArray){
        let newLetter;

        if(isLowerCase(letter)){
            newLetterIndex = (lowerCase.indexOf(letter) + key) % 26;
            newLetter = lowerCase[newLetterIndex];
        } else if (isUpperCase(letter)){
            newLetterIndex = (upperCase.indexOf(letter) + key) % 26;
            newLetter = upperCase[newLetterIndex];
        } else {
            newLetter = letter;
        };

        newArray.push(newLetter);
    };


    return newArray.join('');
};
// --------------------------------------------------------------------------------

const phrase = document.getElementById("phrase");
const key = document.getElementById("key");
const output = document.getElementById("output");

const updateOutput = function(){
    output.textContent = caesar(phrase.value, key.value);
}
phrase.addEventListener("keyup", updateOutput);
key.addEventListener("keyup", updateOutput);