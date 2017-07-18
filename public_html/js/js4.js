// dedicnost - inherance
// originalni objekt
function TextCell(text) {
    this.text = text;
    
    TextCell.prototype.minH = 40;
    TextCell.prototype.draw = function() 
    {
        console.log(text);
    };
}


function RTextCell (text){
    // volam konstruktor s novym kontextem
    TextCell.call(this,text);
    // vyrobim ze straeho prototype novy
    RTextCell.prototype = Object.create( TextCell.prototype );
} 

var rows=[];

for (var i=0;i<5;i++) {
    
var row =[];
    
// napln pole objeky TextCell
for (var j=0;i<5;i++) {
    
    row.push( new TextCell() );
}
 rows.push(row);
}

var i=0;

function rowH(rows)
{
    return(rows.map( function(row){
        // kazdy radek preved na cislo ktere ziskas
        return row.reduce( function (max, cell) {
            //  redukci pole, jez tento radek obsahuje (minimem)
            if (max<cell.minH) max = cell.minH;
        } );
    }));
}