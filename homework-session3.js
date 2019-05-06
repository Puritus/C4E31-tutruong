// 1. A nested list is a list that appears as an element in another list. In this list,
// the element with index 3 is a nested list.
// 2. Yes, a list store both integers and strings in it.

// Ex1.
let inventory = {
    gold: 500,
    pouch: ['flint', 'twine', 'gemstone'],
    backpack: ['xylophone', 'dagger', 'bedroll', 'bread loaf'],
};
inventory.pocket = ['seashel', 'strange berry', 'lint'];
delete inventory.backpack[1];
inventory.gold = inventory.gold + 50;
console.log(inventory.gold);

// Ex2.
let prices ={
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3,
};

let stocks ={
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15,
};
let total = 0;
Object.keys(prices).forEach(key => {    
    let price = prices[key];
    let stock = stocks[key];
    total += price * stock;
    console.log(`${key} \n price: ${price} \n stock: ${stock}`);
});
console.log(`${total}`);

// Ex3.
let ourItems = ["T-Shirt", "Sweater"];
let welcome = prompt("Welcome to our shop! What do U want (C,R,U or D)?");
if(welcome.toLocaleUpperCase() === "R"){
    console.log(`Our items: ${ourItems}`);
} else if(welcome.toLocaleUpperCase() === "C"){
    let newItem = prompt("Enter new item:");
    ourItems.push(newItem);
    console.log(`Our items: ${ourItems}`);
} else if(welcome.toLocaleUpperCase() === "U"){
    let updateItem = prompt("Update position?");
    let newItem = prompt("Enter new item:");
    ourItems[updateItem - 1] = newItem;
    console.log(`Our items: ${ourItems}`);
} else if(welcome.toLocaleUpperCase() === "D"){
    let deleteItem = prompt("Delete position?");
    delete ourItems[deleteItem - 1]
    console.log(`Our items: ${ourItems}`);
};

// Ex4.
let flock = [34, 45, 24, 76, 84, 32];
console.log(`Hello! My name is Tu! There are my sheep sizes: ${flock}`);

let maxSize = Math.max.apply(Math, flock);
console.log(`Now my biggest sheep has size ${maxSize} let's shear it`);

delete flock[maxSize];
console.log(`After sheering, There are my sheep sizes: ${flock}`);

for(i = 0; i < flock.length; i++){
    const flockGr = flock[i];
    flockGr = flock[i] + 50;
}
console.log(`After growed, There are my sheep sizes: ${flockGr}`);

let totalSize = 0;
for( let x = 0; x < flock.length; x++){
totalSize += flock[x];
}
console.log(`My flock has size in total: ${totalSize}`);

let totalProfit = 0;
totalProfit = totalSize * 2;
console.log(`My total profit is: ${totalProfit}`);