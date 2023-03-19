Object.prototype.a = function () {
    console.log('Object');
};
Function.prototype.b = function () {
    console.log('Function');
};
function test() { };

let T = test;
let t = new test();

console.log(test.prototype);
// T.a()
// T.b()
// t.a()
// t.b()

