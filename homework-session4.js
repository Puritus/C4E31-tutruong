// 1. Why should we use function at all?:
// - You can reuse code: Define the code once, and use it many times.
// - You can use the same code many times with different arguments, to produce different results.

// 2. How to define/declare a function?
// - A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// - Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
// - The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)
// - The code to be executed, by the function, is placed inside curly brackets: {}

// 3. How to call/use a function?
// - A JavaScript function is executed when "something" invokes it (calls it).
    // When an event occurs (when a user clicks a button)
    // When it is invoked (called) from JavaScript code
    // Automatically (self invoked)
// Ex:
// function myFunction(a, b) {
//   return a * b;
// }
// myFunction(10, 2);

// 4. What is return, why & how we use it?
// - The return statement stops the execution of a function and returns a value from that function.
// - If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
// - Functions often compute a return value. The return value is "returned" back to the "caller":
// Ex:
    // var x = myFunction(4, 3);   // Function is called, return value will end up in x

    // function myFunction(a, b) {
    //   return a * b;             // Function returns the product of a and b
    // }

// 5. Do we have to use return in every function?
// - Yes:
// - The JS engine has to be notified that some function has finished its business, which is done by the function returning something. This is also why, instead of "finished", a function is said to "have returned".

// 6. What are function arguments/parameters, why and how we use it?
// - Function parameters are the names listed in the function definition.
// - Function arguments are the real values passed to (and received by) the function.

// - JavaScript functions have a built-in object called the arguments object.
// - The argument object contains an array of the arguments used when the function was called (invoked).

// 7. How to use function from a different file other than our currently working file?
// - You declare function fn1 in first.js, and then in second you can just have fn1();
// Ex:
    // - file1:
        // const calc = (x, y, randomOps) => {
        //     let result = 0;
        //     if (randomOps == '+'){
        //         result = x + y;
        //     } else if (randomOps == '-'){
        //         result = x - y;
        //     } else if (randomOps == '*'){
        //         result = x * y;
        //     } else if (randomOps == '/'){
        //         result = x / y;
        //     };
        //     return result;
        // }
    // - file2:
        //     window.onload = () => {
        //     let result = calc(x, y, randomOps);
        //     };

// 8. Turtle Exercise:
// a,
function helloworld(){
    let text = "Hello World";
    console.log(text);
}
helloworld();
helloworld();
helloworld();

// b,
function sum(x, y){
    let sumary = x + y;
    console.log(sumary);
};
sum(3, 5);

// c,
function drawSquare(clr, length){
    for (i = 0; i < 4; i++){
        color(clr);
        fd(length);
        rt(90);
    };
}
drawSquare();

// d,
function drawStar(length){
    for (i = 0; i < 5; i++){
        fd(length);
        rt(90);
    };
}
drawStar();

// Serious EXERCISE:
// 6.
function removeDollarSign(text){
    var ret = `${text}`.replace('$','');
    console.log(ret);
};
removeDollarSign('123$');

// 7,
// 8,
function getEvenList(list){
    let newList = [];
       for (let i = 0; i < list.length; i++){
         if (list[i] % 2 == 0){
            newList.push(list[i]);
        }
        }
        console.log(newList);
  };
  getEvenList([1, 2, 3, 4, 5]);

// 9,
  function getEvenList(list){
    let newList = [];
       for (let i = 0; i < list.length; i++){
         if (list[i] % 2 == 0){
            newList.push(list[i]);
        }
        }
        console.log(newList);
  };
getEvenList([1, 2, 5, 9, -10, 6]);

if (evenList == [2, -10, 6]){
    console.log("Your function is correct")}
else {
    console.log("Ooops, bugs detected")}

// 10,
function list([x, y], [a, b, c, d]){
    if (x >= a && x <= a + c){
        if(y >= b && y <= b + d){
        console.log("true");
        } else {
        console.log ("false");
        }
    } else {
        console.log ("false")
    }
};
list([12, 23], [34, 45, 56, 67]);

// 11,