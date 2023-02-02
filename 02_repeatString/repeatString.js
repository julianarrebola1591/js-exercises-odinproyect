
const repeatString = function(phrase, time) 
{
    let string = ''
    if (time < 0)
    {
        return 'ERROR'
    }
    else
    {
    for(let i = 1; i <= time; i++)
    {
        string = string + phrase
    }
    return string
    }
};

// Do not edit below this line
module.exports = repeatString;
