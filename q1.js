// var animal = document.getElementById("animals");


function Animal(name , type){
     this.animalName = name
    this.type = type
}
Animal.prototype.getAnimalName =function() {
    return this.animalName;
}
Animal.prototype.createElement = function () {
    return  this.type;
  }

  var inst = new Animal( "Lussy","dog")

document.write("<div>" + inst.getAnimalName() +"</div>");
document.write("<div>" + inst.createElement() + "</div>") /// here i cannot use jquery so rather than that i make createElement as a method
