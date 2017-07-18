function Shape(){
  throw new Error("Abstract class")
};

Shape.prototype.printSurface = function () {
  throw new Error ("Not implemented");
};
//..........................
function Rect() {
  // constructor;
};

Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.printSurface = function() {
  // Rect implementation
  return 1;
};
//............................
function Circle() {
  // constructor;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.printSurface = function() {
  // Circle implementation
  return 2;
};
//...........................

var t  = [];
t[0] = new Rect();
t[1] = new Circle();

var d
var s = t.reduce( function(d,a) {return d + a.printReduce ;});

console.log(s);


