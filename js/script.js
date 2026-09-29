console.log("hello world");


let user = {
    name: "Somebody",
    age: 25,
    hobby: "coding",
    job: "web developer"
}
console.log(user);

let a = 10;
let b = 20;
let c = a + b;
console.log(c);

let x = 10;
let y = "10";

if (x === y) {
    console.log("x is equal to y");
} else {
    console.log("x is not equal to y");
}

// =============Loop================

let numb = 26;
for (let i = 1; i <= 10; i++) {
    console.log(`${numb} x ${i} = ${numb * i}`);
}

let i = 1;

while (i <= 10) {
    console.log(i)
    i++
}
// =============Loop================


// =============Function================
function num() {
    console.log(10 + 30)
}

num();

let min = (a = 0, b = 0) => {
    console.log(a - b)
}

min(20, 10)
// =============Function================

const products = [
    {
        id: 0,
        name: "iPhone",
        price: 100,
        description: "This is a smartphone",
    },
    {
        id: 1,
        name: "iPad",
        price: 200,
        description: "This is a tablet"
    },
    {
        id: 2,
        name: "MacBook",
        price: 300,
        description: "This is a laptop"
    }
]

products.map((product) => {
    console.log(product.name);
    console.log(product.price);
});

console.log(products[1]);


const items = [
    {
        id: 0,
        name: "apple",
        price: 100,
        description: "This is a fruit",
    },
    {
        id: 1,
        name: "banana",
        price: 200,
        description: "This is a fruit"
    },
    {
        id: 2,
        name: "ginger",
        price: 300,
        description: "This is a vegetable"
    }
]

const letter = ['a', 'b', 'c', 'd', 'e', 'f' ];

letter.shift();
console.log(letter);

items.forEach((item) => {
    console.log(item.name);
    console.log(item.price);
    console.log(item.description);
})

// =============Array================
const vegetables = ["carrot", "potato", "onion"];

const fruit = ["apple", "banana", "orange"];

let newWord = vegetables.concat(fruit);

console.log(newWord);

const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

let m = letters.copyWithin(2, 0,);
console.log(m);
// =============Array================



// =============Splice================


const flavours = ["vanilla", "chocolate", "strawberry"];

flavours.splice( 1, 0 , "mint");

console.log(flavours);

const numbers = [1, 2, 3, 4, 5];

numbers.splice(1, 1);

console.log(numbers);

// =============Splice================

// =============Slice================
const vegs = ["carrot", "potato", "onion", "ginger"];

const forSale = vegs.slice(3)

console.log(forSale);
// =============Slice================
