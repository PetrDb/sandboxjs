//  POLYMORPHISM 
function Shape() {
    throw "abstract class";
}
 
 Shape.prototype.psurface = function() {
    //nothing here;
    throw "not implemented";};

//--
function ShapeRectangle(a)
{
    this.a = a;
    
    //ShapeRectangle.prototype = Object.create( Shape.prototype );
}
//ShapeRectangle.prototype = Object.create( Shape.prototype );   
//ShapeRectangle.prototype.psurface = function() {
    //nothing here;
  //  return ( ShapeRectangle.a * ShapeRectangle.a ); 
//};
 //--   
 
//-----------------

var rm = new ShapeRectangle(5);
//var rv = new ShapeRectangle(50);
 
 
console.log ( "plocha: " + rm.psurface());
//console.log ( "plocha: " + rv.psurface());