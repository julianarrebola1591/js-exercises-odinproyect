const reverseString = function(phrase) 
{
    let string = phrase
    let reversed = ''
    for (let i = 1; i <= string.length; i++)
    {
        num = string.length - i
        reversed = reversed + phrase[num]
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
