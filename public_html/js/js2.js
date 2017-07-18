// priklad na MAP a na FOREACH

celsius =[10,20,30];

var far = celsius.map( function(elem) {return  Math.round((elem - 32) * 5 / 9) ;} );

far.forEach( function(elem) {console.log(elem);} );


// priklad na reduce

var mx = far.reduce( function(accumulator, current) {
    if (current<accumulator) accumulator = current;
    return current;
});

console.log("maximum bylo" + mx); 