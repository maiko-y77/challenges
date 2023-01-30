//ex1.js
const number = 3;
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

//ex2.js
const musicians = 5;
if (musicians < 0) {
    console.lod("not a group")
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet")
} else {
    console.log("this is a large group")
}

//ex3.js

let room = "ballroom";
let weapon = "poison";
let suspect = "Mr. Kalehoff";

if (room === "ballroom" && weapon === "poison" && suspect === "Mr. Kalehoff") {
    return true;
} else if (room === "gallery" && weapon === "trophy" && suspect === "Ms. Van Cleve") {
    return true;
} else if (room === "billiards roomm" && weapon === "pool stick" && suspect === "Mrs. Sparr") {
    return true;
} else if (room === "dining room" && weapon === "knife" && suspect === "Mr. Parke") {
    return true:
}

console.log(`${suspect} did it in the ${weapon} with the ${room} !`)

//ex4.js

function iceCream(flavor, vessel, toppings) {
    if (flavor === "vanilla" || flavor === "chocolate") {
        if (vessel === "cone" || vessel === "bowl") {
            if (toppings === "sprinkles" || toppings === "peanuts") {
                return `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`;
            }
        }
    } else {
        return `Sold out!!`
    }
}

let result = iceCream("something", "cone", "sprinkles");
console.log(result);

//ex5.js

function sizeOfShirt(shirtWidth, shirtLength, shirtSleeve) {
    if (shirtWidth === 18 && shirtLength === 28 && shirtSleeve === 8.13) {
        console.log("S");
    } else if (shirtWidth === 20 && shirtLength === 29 && shirtSleeve === 8.38) {
        console.log("M");
    } else if (shirtWidth === 22 && shirtLength === 30 && shirtSleeve === 8.63) {
        console.log("L");
    } else if (shirtWidth === 24 && shirtLength === 31 && shirtSleeve === 8.88) {
        console.log("XL");
    } else if (shirtWidth === 26 && shirtLength === 33 && shirtSleeve === 9.63) {
        console.log("2XL");
    } else if (shirtWidth === 28 && shirtLength === 34 && shirtSleeve === 10.13) {
        console.log("3XL");
    } else {
        console.log("N/A");
    }
}

let sizeConfirm = sizeOfShirt(18, 28, 8.13)

//ex6.js

function foodChain(eatsPlants, eatsAnimals) {
    if (eatsPlants === true && eatsAnimals === false) {
        console.log("herbivore");
    } else if (eatsPlants === false && eatsAnimals === true) {
        console.log("eatsAnimals");
    } else if (eatsPlants === true && eatsAnimals === true) {
        console.log("undefined");
    }
}

let kindOfAnimals = foodChain(false, true);

//ex7.js

let case1 = "no high school diploma"

switch (case1) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree ":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84396;
        break;
}
console.log(`In 2015, a person with ${case1} earned an average of $${salary.toLocaleString()}/year.`)

//ex8.js

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

//ex9.js

let i = 61;

while (i > 0) {
    i--;
    if (i === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (i === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (i === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (i === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (i === 6) {
        console.log("Main engine start ");
    } else if (i === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log(`T-${i} seconds`);
    }
}

//ex10.js

for (let x = 9; x >= 1; --x) {
    console.log(`hello${x}`);
}

//ex11.js

for (let x = 5; x < 10; x++) {
    console.log(x);
}

//ex12.js

for (let k = 0; k < 200; k++) {
    console.log(k);
}