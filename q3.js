/*

## Question 3:
* 1. Using notation of es6 and arrow function , make a function that filters an array of strings, the array filter depending 
on the length of the string, all the length above 4 should be excluded.

- `filter array(['Food','Pasta','Pizza','Eat'])` - return ['food','Pasta','Eat']

*/
var pasta = (arr) =>{
    return arr.filter(i => {
        if (i.length <= 4) {
            return i;
        }
    });
}
console.log( pasta(['Food','Pasta','Pizza','Eat']));