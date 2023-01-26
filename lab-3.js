/*Q: Declare a variable x and assign it the value 10. Write a program that will check if the variable is 
greater than 5 and print "x is greater than 5" if it is, otherwise print "x is not greater than 5"*/

let x = 10;
if (x > 5) {
    console.log("x is greater than 5")
} else {
    "x is not greater than 5"
}

/*Declare a variable name and assign it a string value. Write a program that will check if the length of the string is greater than 5 and print 
"The name is longer than 5 characters" if it is, otherwise print "The name is 5 characters or less".*/

let y = "somwhing";
if (y.length > 5) {
    console.log("The name is longer than 5 characters")
} else {
    console.log("The name is 5 characters or less")
}
/*Declare a variable age and assign it a number. Write a program that will check if the age is between 18 and 65 (inclusive) and print 
"You are an adult" if it is, otherwise print "You are not an adult".*/

let age = 30;
if (age >= 18 && age <= 65) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult")
}

/*Declare a function multiply that takes two numbers as arguments and returns the product of the two numbers. Test the function by calling 
it with the numbers 4 and 5, and store the result in a variable result and print the variable.*/

function numbers(a, b) {
    console.log(a * b);
}
numbers(4, 5);

let result = numbers(4, 5);

/*Declare a function greet that takes a name as an argument and returns the string "Hello, [name]!". Test the function by calling it with 
the name "John", and store the result in a variable greeting and print the variable.*/

function greet(name) {
    console.log(`Hello, ${name}`);
}

greet("Maiko");

/*Declare a variable numbers with an array of numbers. Write a program that will use a for loop to iterate over the array and print each number.*/

let secondNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i < secondNumbers.length; i++) {
    console.log(secondNumbers[i]);
}

/*Declare a variable counter with a value of 0. Write a program that will use a while loop to increment 
the counter by 1, and print the counter, as long as the counter is less than 10.*/

let counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++
}

/*Declare a variable numbers with an array of numbers. Write a program that will use a for loop to iterate 
over the array and find the sum of all the numbers.*/

let variableNumbers = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < variableNumbers.length; i++) {
    sum += variableNumbers[i];
}

console.log(sum);

/*Declare a variable numbers with an array of numbers. Write a program that will use a while loop to iterate 
over the array and find the maximum number.*/

let variableNumbers2 = [10, 20, 30, 40];
let i = 1;
let largest = variableNumbers2[0];
while (i < variableNumbers2.length) {

    if (variableNumbers2[i] > largest) {
        largest = variableNumbers2[i]
    }
    i++;
}

console.log(largest);

/*Declare a function reverseString that takes a string as an argument and returns the string reversed. Test the function by calling it with the string "hello", 
and store the result in a variable reversedString and print the variable.*/

function reversedString(string) {
    return string.split("").reverse().join("");
}

console.log(reversedString("Maiko"));