function Graph() 
{
    this.v  =[];
    var e  =[];
    this.z = function() {return 5;};
    var w = function()  {return 5;};
};

function SuperGraph()
{
    Graph.call(this);
    this.navic = "jeto super";
};

function NewX(func) {
    var res = {}; //udelej novy objekt
    if (func.prototype !== null) {
        res.__proto__ = func.prototype; // nastav protyp na to co jsme fun
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return res;
}
 
// toto nezamenovat s prototype chain objektu !!
// jen pro klicove slovo new
//
var h = new SuperGraph();
 
 Graph.b = function() {return 5;};
 
 console.log( Graph.b() );
 
 console.log( g.a() );
 
 console.log( g.z() ); 
 
 
