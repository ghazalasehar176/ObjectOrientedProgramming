//Objects
const student = {
    fullName : "biya hafeez",
    marks: 94.4,
    printMarks: function(){
        console.log("Marks is: ",this.marks);
    }
};

//This keyword
let virtual = {
    batch: 2026,
    program: "SE",
    printProgram: function() {
        console.log("Program is: ",this.program);
    }
}

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
}
const b1 = {
    salary: 50000,
}
const b2 = {
    salary: 30000,
}
const b3 = {
    salary: 70000,
}
const b4 = {
    salary: 20000,
}
const b5 = {
    salary: 80000
}

b1.__proto__ = employee;
b2.__proto__ = employee;
b3.__proto__ = employee;
b4.__proto__ = employee;
b5.__proto__ = employee;


//if object and prototypes have same methods like :calculationTax()
//then object methods will be used ....

const employees = {
    calculationTax(){
        console.log("10% tax rate");
    }
}

const abc ={
    salary:30000,
    calculationTax() {
        console.log("20% tax rate");
    }
}

abc.__proto__ = employees;


//Classes:Prefer Jab hamay same template ke uper multiple objects banany ho..
class ToyotaCar{
        //same templates
        start() {
            console.log("Car start!...");
        }
        stop() {
            console.log("Car stop!...");
        }

        setbrand(brand){
            this.setbrand = brand;
        }
}

//multitple objects
fortuner = new ToyotaCar();
fortuner.setbrand("fortunerbrand");
bmw = new ToyotaCar();
bmw.setbrand("bmwbrand");


//Constructor
class Alphabet{
    constructor(name,num){
        console.log("Creating objects");
        this.name = name;
        this.num = num;
    }
    firstAlphabets(){
        console.log("first alphabets is A");
    }
    lastAlphabtes(){
        console.log("last alphabets is Z");
    }
}

let a1 = new Alphabet("a" , 1);
console.log(a1);
let a2 = new Alphabet("b" , 2);
console.log(a2);


//Constructor: Initialize object
class Stu{
    constructor(name , age){
        this.name = name;//object property set 'name'..object initialize
        this.age = age;//object property set 'age'..object initialize
    }
}

let s1 = new Stu("biya" , 20);//create new object 's1'
// console.log(s1.name);
// console.log(s1.age);


//Inheritance:Parent to Child
class Parent{
    hello(){
        console.log("hello!.....");
    }
}
class Child extends Parent{}

let obj1 = new Parent();
let obj2 = new Child();

//Inheritance :If parent and child have same function
// then the child function will be used then this is called (method overriding)
class Person{
    eat(){
        console.log("eating");
    }
    sleep(){
        console.log("Sleeping");
    }
    work(){
        console.log("Do nothing!....");
    }
}

class Enginner extends Person{
    work(){
        console.log("Solving problems!!");
    }
}
class Doctor extends Person{
    work(){
        console.log("treat Patients");
    }
}
let ob1 = new Enginner();
let ob2 = new Doctor();
let ob3 = new Person();

//Super Keyword:
class P {
    constructor(){
        this.s = "Home";
    }
    eat(){
        console.log("Eating");
    }
}
class E extends P{
    constructor(branch) {
        super();
        this.branch = branch;
    }
    work(){
        console.log("solving problems build something");
    }
}

let Engobj = new E("Software Enginner");

//Let's Practice
class User{
    constructor(name , email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("View the data here...");
    }
}
class Admin extends User{
    constructor(name , email){
        super(name , email);
    }
    editData(){
        console.log("Edit website data")
    }
}
let user1 = new User("Ali" , "ali123@gmail.com");
let user2 = new User("Ahmed" , "ahmed123@gmail.com");

let admin = new Admin("admin" , "admin123@gmail.com");

//Error handling

let a = 10;
let b = 5;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b " ,a+b);

try{
    console.log("a+b" , a+c);
}
catch(e){
    //console.log(err);
    console.log("Error Message:" , e);
}
console.log("a *b  = ",a*b);
console.log("a-b = ",a-b);
console.log("a/b " ,a/b); 