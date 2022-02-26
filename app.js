const EventEmitter = require ("events");
const eventEmitter = new EventEmitter;

eventEmitter.on("tutorial",(num1,num2)=>{
    console.log(num1 + num2);

});
eventEmitter.emit("tutorial", 200,700);

class person extends EventEmitter{
    constructor(name){
    super();
    this._name = name;

    }
    get name(){
        return this._name;

    }

}
var kabala = new person ("kabala");
var Domie = new person ("Domie");
Domie.on("name",()=>{
    console.log("my name is " + Domie.name);
})
kabala.on("name",()=>{
    console.log("my name is " + kabala.name);

})
kabala.emit("name");
Domie.emit("name");

