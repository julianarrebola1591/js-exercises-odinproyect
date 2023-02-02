const add = function(a,b) {
  let sum = a + b
	return sum
};

const subtract = function(a,b) {
	let sub = a - b
  return sub
};

const sum = function(array) {
  let sum = 0
	array.forEach((item) => {
    sum = sum + item
  })
  return sum
};

const multiply = function(array) {
  let multiply = 1
	array.forEach((item) => {
    multiply = multiply * item
  })
  return multiply
};

const power = function(num, pow) {
	return num ** pow
};

const factorial = function(num) {
  let fac = 1
  
  for (let i = 1; i <= num; i++){
    fac = fac * i
  }

  return fac
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
