//parent class
class Animal{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("Animal name:"+this.name);
    }
}
//child class
class Dog extends Animal{
    sound(){
        console.log(this.name + " says Bark!");
    }
}
//creating object
let dog=new Dog("Tommy");
//calling method
dog.display();
dog.sound();
