console.log("-------------------------------------------------");
console.log("%cassert", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("%cargs: (assertion:bool, obj1 ... objN:object || msg:string && subst1...substN:object)", "color: white; font-size: 15px; background-color: LightSeaGreen;padding: 5px");
console.log("");

var errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
    console.log('the # is ' + number);
    //console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    //remove comment to test assertion
}

console.log("");
console.log("");

console.log("-------------------------------------------------");
console.log("%cclear", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("%cargs: ()", "color: white; font-size: 15px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.log("clears the console");
// console.clear();

console.log("");
console.log("");

console.log("-------------------------------------------------");
console.log("%ccount", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("%cargs: (label(optional):string)", "color: white; font-size: 15px; background-color: LightSeaGreen;padding: 5px");
console.log("actualy does not strictly have to be string even though the documentation says string, you can use other values as well, but string makes the most sense I guess");
console.log("");

(function() {
var user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
})();

console.countReset()

console.log("");
console.log("");

(function() {
var user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");
})();

console.log("");
console.log("");

console.countReset("bob");
console.countReset("alice");

console.count("alice");
console.countReset("alice");

console.log("");
console.log("");

console.log("-------------------------------------------------");
console.log("%cdir", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("%cargs: (object:object)", "color: white; font-size: 15px; background-color: LightSeaGreen;padding: 5px");
console.log("");

var car = {name: "firebird", brand: "pontiac", color: "red"};
console.dir(car);

console.log("");
console.log("");

console.log("-------------------------------------------------");
console.log("%cdirxml", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("%cargs: (object:object)", "color: white; font-size: 15px; background-color: LightSeaGreen;padding: 5px");
console.log("");

var car = {name: "firebird", brand: "pontiac", color: "red"};
console.dirxml(car);

console.log("");
console.log("");

console.log("-------------------------------------------------");
console.log("%clog", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("");

var car = {name: "firebird", brand: "pontiac", color: "red"};
var o = {test1: 1, test2: 2, test3: 3};

console.info("My first car was a", car, ". The object is:", o);

console.log("");
console.log("");

console.log("-------------------------------------------------");
console.log("%ctable", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("");

console.log("an array of arrays");

var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]];
console.table(people);

console.log("");
console.log("");

console.log("an object whose properties are objects");

var family = {};
var Person = function(firstname, lastname) {this.firstname = firstname;this.lastname = lastname;}

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);

console.log("");
console.log("");

console.log("array containing object with subObjects of a class, and a string");

var family = {};
var Person = function(firstname, lastname) {this.firstname = firstname;this.lastname = lastname;}

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table([{blub:family}, "test"]);

console.log("");
console.log("");

console.log("object containing object with subObjects of a class, and a string");

var family = {};
var Person = function(firstname, lastname) {this.firstname = firstname;this.lastname = lastname;}

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table({blub:family});

console.log("as we can see this can only be used to a certain degree of depth, but its still very nice");
console.log("");
console.log("");

console.log("-------------------------------------------------");
console.log("%ctrace", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("");

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();

console.log("");
console.log("");

console.log("-------------------------------------------------");
console.log("%cstyle", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("");

console.log('%cHello world', 'font-size:40px;color:#fff;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');


//TODO: error, group, info, log, profile, time, warn, You may use string substitution and additional arguments with this method.
