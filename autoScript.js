//Constructor 1
var Auto = function Auto(make, model, year, transmission) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.transmission = transmission;
}

//Car #1
var myHonda = new Auto("Honda", "Pilot", "2010", "automatic");
console.log(myHonda.make + " " + myHonda.model + " " + myHonda.year + " " + myHonda.transmission);

//Constructor 2
var Vehicle = function Vehicle(make, model, year, transmission, bodyStyle, feature, noOfDoors) {
    Auto.call(this, make, model, year, transmission);
    this.bodyStyle = bodyStyle;
    this.feature = feature;
    this.noOfDoors = noOfDoors;
}

//Car #2
var myAuto = new Vehicle("Toyota", "4Runner", "2017", "manual", "suv", "moon roof", 4);
console.log(myAuto.make + " " + myAuto.model + " " + myAuto.year + " "+ myAuto.transmission + " " + myAuto.bodyStyle + " " + myAuto.feature + " " + myAuto.noOfDoors);