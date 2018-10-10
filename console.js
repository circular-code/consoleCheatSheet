console.log("-------------------------------------------------");
console.log("%cCLEAR", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("%cARGS: ()", "color: white; font-size: 15px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.log("clears the console");
// console.clear();

console.log("");
console.log("");

console.log("-------------------------------------------------");
console.log("%cCOUNT", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("%cARGS: (LABEL(optional:string))", "color: white; font-size: 15px; background-color: LightSeaGreen;padding: 5px");
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

console.log("-------------------------------------------------");
console.log("%cLOG", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("");

var car = {name: "firebird", brand: "pontiac", color: "red"};
var o = {test1: 1, test2: 2, test3: 3};

console.info("My first car was a", car, ". The object is:", o);

console.log("");
console.log("");

console.log("-------------------------------------------------");
console.log("%cTABLE", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
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

console.log("-------------------------------------------------");
console.log("%cTRACE", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
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
console.log("%cSTYLE", "color: white; font-size: 15px; background-color: cornflowerblue;padding: 5px");
console.log("");

console.log('%cHello world', 'font-size:40px;color:#fff;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
