//capitalize(‘a short sentence’) → ‘A Short Sentence’
let text1 = 'a short sentence';
let splitText1 = text1.split(' ');

let capSplitText1 = splitText1.map(word => {
    return word[0].toUpperCase() + word.slice(1);
})

let joinCapSplitText1 = capSplitText1.join(" ");

//console.log(joinCapSplitText1);

// capitalize(‘a lazy fox’) → ‘A Lazy Fox’
let text2 = 'a lazy fox';
let splitText2 = text2.split(" ");

let capSplitText2 = splitText2.map(word => {
    return word[0].toUpperCase() + word.slice(1);
})

let joinCapSplitText2 = capSplitText2.join(" ");

//console.log(joinCapSplitText2);

// capitalize(‘look, it is working!’) → ‘Look, It Is Working!’
let text3 = "look, it is working!"
let splitText3 = text3.split(" ");

let capSplitText3 = splitText3.map(word => {
    return word[0].toUpperCase() + word.slice(1);
})

let joinCapSplitText3 = capSplitText3.join(" ");

console.log(joinCapSplitText3);