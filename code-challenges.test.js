// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.
 

describe("capSentence", () => {

  // a test method, nested within the describe block, that in plain words, describes that the function does.
  test("returns an array with a sentence about each person with their names capitalized", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect("capSentence"()).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."])
  })
})

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."]



// b) Create the function that makes the test pass.

// Declare a function named capSentence
// input array of objects
// initiate  variable as a place holder
// iterate through array and capitilize the first character in the name
// output a sentence.

const capSentence = (array) => {
  let newSentence = array.map(index => index.charAt([0]).toUpperCase())
}
return newSentence

//or return `${people.name} is a ${people.occupation}`?

console.log(capSentence(people));


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("divideThree", () => {

  test("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {

    expect("divideThree"()).toEqual([ 2, 0, -1, 0 ])
    expect("divideThree"()).toEqual([ 2, 1, -1 ])
  })
})


var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]





// b) Create the function that makes the test pass.

// declare function taking in an array
// input mixed data array
// initiate new variable 
// use filter method using modulo to get remainders divided by 3


const divideThree = array.filter(value => {
  value % 2 !== 0
})
return array / 3

console.log(divideThree(hodgepodge1));

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// a) Create a test with an expect statement using the variables provided.

describe("sumAll", () => {

  test("returns the sum of all the numbers cubed.", () => {

    expect("sumAll"()).toEqual(99)
    expect("sumAll"()).toEqual(1125)
  })
})



// b) Create the function that makes the test pass.

// declare function named sumAll taking in an array
// intitiate let called sumAll to map through the numbers
// return the variable.
// log the code

const sumAll = array => {
  let cubed = array.map(value => {
    value ** 2
  })
  return cubed
}

console.log(sumAll(cubedAndSum1));

//THIS WAS HARD!