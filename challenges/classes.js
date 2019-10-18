// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attr){
//     this.length = attr.length;
//     this.width = attr.width;
//     this.height = attr.height;
//   }

class CuboidMaker2{
    constructor(attr){
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }

    volume() {
        return (this.length * this.width * this.height);
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

//   CuboidMaker.prototype.volume = function() {
//     return (this.length * this.width * this.height);
//   }
  
//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }


  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  

class CubeMaker extends CuboidMaker2{
    constructor(cubeMakerAttr) {
        super(cubeMakerAttr);
        this.length = cubeMakerAttr.length;
        this.width = cubeMakerAttr.width;
        this.height = cubeMakerAttr.height;
    }

    volume() {
        return (Math.pow(this.length,3));
    }

    surfaceArea(){
        return (6 * Math.pow(this.length, 2));
    }
}

const cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3
})

// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

console.log(cube.volume());
console.log(cube.surfaceArea());