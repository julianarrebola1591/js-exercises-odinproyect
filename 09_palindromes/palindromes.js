const palindromes = function (palindrome) {
    let bool = false
    let string = ""
    palindrome = palindrome.toLowerCase()
    palindrome = palindrome.replace(/[^a-z]/g, "")
    string = palindrome.toLowerCase()
    string = string.replace(/[^a-z]/g, "")
    //string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")

    let array = string.split("")
    array = array.reverse()
    string = array.join("")
    if (string == palindrome){
        bool = true
    }
    return bool
};

// Do not edit below this line
module.exports = palindromes;
