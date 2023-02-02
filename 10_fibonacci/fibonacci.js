const fibonacci = function(position) {
    if (position > 0){
    let fibonacciFirst = 0
    let fibonacciSecond = 1
    let acc = 0
    for (let i = 0; i < position; i++){
        acc = fibonacciFirst + fibonacciSecond
        fibonacciSecond = fibonacciFirst
        fibonacciFirst = acc
        
    }
    return acc
    }
    else
    {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
