// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.



// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray) {
    for (i = 0; i < numArray.length; i++) {


        let swap = true
        for (k = 0; k < numArray.length-1-i; i++) {
            let first = numArray[k];
            let second = numArray[k+1];
            if(first>second){
                numArray[i] += k
            }
        }
    }
}


// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.



// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.



// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    if (someStr !== String || length !== number || offset !== number) {
        alert("Please enter the correct parameters as (String, Number, Number");
    }
    let newString = someStr.substring(length, (length + offset));
}



// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) {
    if (someNum % 2 === 0) {
        return (true)
    } else {
        return (false)
    }
}



// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    let strLength = Math.floor(someStr.length / 2);
    for (i = 0; i < strLength; i++) {
        if (someStr[i] !== someStr[strLength - i - 1]) {
            return false;

        } else {
            return true;
        }
    }
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character) {
    let item = [];
    let finalShape = '';
    switch (shape) {
        case "square": {
            for (i = 0; i < height; i++) {
                item.push(character);

            }
            for (i = 0; i < height; i++) {
                console.log(finalShape = item.join(""));//how to create a shape
            }

        } break;
        case "triangle": {
            for (i = 0; i < height; i++) {
                item.push(character);
                console.log(finalShape = item.join(""));

            }

        } break;
        case "diamond": {//currently a mountain, need to make it into a diamond

            let centerPoint = Math.floor(height / 2);
            for (i = 0; i < height; i++) {
                item.push(" ");
            }
            for (i = 0; i <= centerPoint; i++) {
                item[centerPoint - i] = character;
                item[i + centerPoint] = character;
                console.log(finalShape = item.join(""))
            }
            for (i = centerPoint; i >= 0; i--) {
                item[centerPoint - i] = " ";
                item[i + centerPoint] = " ";
                console.log(finalShape = item.join(""))
            }

        } break;
    }
}
// printShape('square',4,'*')
// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj) {

    const objArr = Object.entries(someObj);
    for (let [object, count] of someObj) {
        console.log(`the ${count} in this object is ${object}`)

    }
}



// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr) {
    console.log("array before deleting " + someArr.length);
    someArr.deleteElement(2, 1);
    console.log("array after 3rd element was deleted " + someArr.length);
}
let arr = [1, 2, 3, 4, 5, 6,];
deleteElement(arr);

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(arr) {
    arr.splice(2, 1);
    console.log("length of array after splice " + arr.length);
}
let newArray = [1, 2, 3, 4, 5, 6,]

console.log("length of array before splice " + newArray.length);
spliceElement(newArray);


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);
function Person(name, age) {
    this.firstName = name;
    this.age = age;
}
var person = new Person("John", 30);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);
// function getPerson(name,age){
//     let  person = new person 
//     {
//         "firstName":name, 
//         "ageOf": age,
// }
// }
// getPerson("John", 30);