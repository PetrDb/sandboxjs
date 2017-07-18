// vyzkousime get a set
var pile = {
    // v objektu je pole
    e : ["worm","pile","shit"],
    
    // jeden get vraci delku pole
    get height() {
        return this.e.length;
    },
    
    // nastavit delku pole nejde
    set height(h) {
        console.log("toto nastavovat nebudeme");
    }
    
};

pile.e.push("bullshit");
console.log(pile.height);
