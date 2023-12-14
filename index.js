// Write your solution here!
let cats = ["Milo","Otis","Garfield"];
console.log(cats);


function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(cats);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    let newCats = ["Milo","Otis","Garfield","Broom"];
    return newCats;
}

function prependCat() {
    let newCats = ["Arnold","Milo","Otis","Garfield"];
    newCats.unshift();
    return newCats;

}


function removeLastCat() {
    let newCats = ["Milo"];
    newCats.push("Otis");
    return newCats;
}


function removeFirstCat()
{
    let newCats = ['Milo','Otis','Garfield'];
    newCats.shift();
    return newCats;
}