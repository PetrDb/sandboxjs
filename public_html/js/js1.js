var protoRabbit = {
    speak : function() {
        console.log("rabbit " + this.type + " says " + line  );
    }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
line = "nevime ale uvidime";
killerRabbit.speak();




function Rabbit(type) 
{
    this.type = type;
    this.hasOwnProperty = 42;
    
    this.speak = function() {
    console.log("rabbit " + this.type + " says " + line  );
    };
}

var kr = new Rabbit("blck");

Rabbit.prototype.dance = function() {return console.log(this.type+" dances jig");};

kr.speak();
kr.dance();

for (var name in kr)
    console.log(name);

var map = {};
console.log( "toString" in map);
map.toString();

var mapp = Object.create(null);
console.log( "toString" in mapp);
mapp.toString();
