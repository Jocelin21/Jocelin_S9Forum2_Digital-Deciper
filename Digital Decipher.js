function digitalDechipher(eMessage, key) {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var finalNum = [];
    var word = [];
    //Spliting the key to get the length
    var keys = key.toString().split('');
    var keyList = keys.map(Number);

    //If the number of key is not enough
    if (keyList.length < eMessage.length){
        number = eMessage.length - keyList.length;
        for (let i = 0; i < number; i++){
            keyList.push(keyList[i]);
        }
    }

    //The deciphered number finalized
    for (i = 0; i < eMessage.length; i++){
        finalNum.push(eMessage[i]-keyList[i]);
    } 
    
    //Deciphering the number to letters
    for (i = 0; i < finalNum.length; i++){
        letter = alphabet[finalNum[i]-1];
        word.push(letter);
    } 

    return word.join('')

}
    console.log(digitalDechipher([20, 12, 18, 30, 21], 1939))
    console.log(digitalDechipher([14, 30, 11, 1, 20, 17, 18, 18], 1990))
    console.log(digitalDechipher([6, 4, 1, 3, 9, 20], 100))
