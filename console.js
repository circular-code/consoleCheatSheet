console.clear();

console.log("%cBasic Output", "color: white; font-size: 15px; background-color: DarkOrange;padding: 5px;margin-top: 40px;");
console.log("You may use string substitution with these methods. See chapter 'String Substitution' below.");

console.group("log");
console.log("%clog", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c(obj1 ... objN:object || (msg:string, subst1...substN:object))", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

var car = {name: "firebird", brand: "pontiac", color: "red"};
var o = {test1: 1, test2: 2, test3: 3};

console.log("Standard console log without semantic meaning.");
console.log(car);
console.log(car, o);

console.log("");
console.log("");

console.groupEnd("log");
console.group("info");

console.log("%cinfo", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c(obj1 ... objN:object || (msg:string, subst1...substN:object))", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.info("You should know about this, so here have some information.");
console.info(car);
console.info(car, o);

console.log("");
console.log("");

console.groupEnd("info");
console.group("warn");

console.log("%cwarn", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c(obj1 ... objN:object || (msg:string, subst1...substN:object))", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.warn("There might be a risky thing here. Please check it out.");
console.warn(car);
console.warn(car, o);

console.log("");
console.log("");

console.groupEnd("warn");
console.group("error, exception (deprecated)");

console.log("%cerror, exception (deprecated)", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px;");
console.log("%c(obj1 ... objN:object || (msg:string, subst1...substN:object))", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.error("Something went horribly wrong! :(");
console.error("%cSomething went very horribly wrong! :(", "color: white; background-color: red;", car);
console.error(car);
console.error(car, o);

console.log("");
console.log("");

console.groupEnd("error, exception (deprecated)");

console.log("%cString Substitution", "color: white; font-size: 15px; background-color: DarkOrange;padding: 5px;margin-top: 40px;");

console.group("style");

console.log("%cstyle", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("");

console.log('%cHello world', 'font-size:40px;color:#fff;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');

console.groupEnd("style");

console.log("%cLogging Objects", "color: white; font-size: 15px; background-color: DarkOrange;padding: 5px;margin-top: 40px;");

console.group("dir");

console.log("%cdir", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c(object:object)", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.dir(car);

console.log("");
console.log("");

console.groupEnd("dir");
console.group("dirxml");

console.log("%cdirxml", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c(object:object)", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.dirxml(car);

console.log("");
console.log("");

console.groupEnd("dirxml");
console.group("table");

console.log("%ctable", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
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

console.table([{blub:family}, "test"]);

console.log("");
console.log("");

console.log("object containing object with subObjects of a class, and a string");

console.table({blub:family});

console.log("as we can see this can only be used to a certain degree of depth, but its still very nice");
console.log("");
console.log("");

console.groupEnd("table");

console.log("%cUtility", "color: white; font-size: 15px; background-color: DarkOrange;padding: 5px;margin-top: 40px;");


console.group("group");

console.log("%cgroup, groupCollapsed, groupEnd", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c(label(optional):string)", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.group("outer level");
console.groupCollapsed("inner level (collapsed)");
console.warn("warning inside inner level");
console.groupEnd("inner level (collapsed)");
console.groupEnd("outer level");

console.log("");
console.log("");

console.groupEnd("group");
console.group("trace");

console.log("%ctrace", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
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

console.groupEnd("trace");

console.group("assert");

console.log("%cassert", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c(assertion:bool, obj1 ... objN:object || (msg:string, subst1...substN:object))", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

var errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
    console.log('the # is ' + number);
    //console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    //remove comment indicator above to test assertion
}

console.log("");
console.log("");

console.groupEnd("assert");
console.group("clear");

console.log("%cclear", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c()", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.log("clears the console");
// console.clear();

console.log("");
console.log("");

console.groupEnd("clear");

console.log("%cPerformance", "color: white; font-size: 15px; background-color: DarkOrange;padding: 5px;margin-top: 40px;");

console.group("count");

console.log("%ccount, countReset", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c(label(optional):string)", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
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

console.groupEnd("count");
console.group("time");

console.log("%ctime, timeLog, timeEnd", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c(label(optional):string)", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.time();
console.time("my time");
console.timeEnd("my time");
console.timeEnd();

console.log("");
console.log("");

console.groupEnd("time");
console.group("profile, profileEnd");

console.log("%cNot standardized", "color: white; font-size: 12px; background-color: crimson;padding: 5px");
console.log("%cprofile, profileEnd", "color: white; font-size: 12px; background-color: cornflowerblue;padding: 5px");
console.log("%c(label(optional):string)", "color: white; font-size: 12px; background-color: LightSeaGreen;padding: 5px");
console.log("");

console.profile();
console.profile("My Performance Profile");
console.profileEnd("My Performance Profile");
console.profileEnd();

console.log("");
console.log("");

console.groupEnd("profile, profileEnd");

//TODO: string substitution, table & trace params, error handling when methods not available in browser, add index file
