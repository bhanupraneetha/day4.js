//print non repeated number
var array = [1, 1, 5, 4, 2, 8, 4, 4];
var nonRepeatingNumber = null;

for (var i = 0; i < array.length; i++) {
  var isRepeated = false;
  var num = array[i];

  for (var j = 0; j < array.length; j++) {
    if (i !== j && num === array[j]) {
      isRepeated = true;
      break;
    }
  }

  if (!isRepeated) {
    nonRepeatingNumber = num;
    break;
  }
}

if (nonRepeatingNumber !== null) {
  console.log("Non-repeated number:", nonRepeatingNumber);
}


//PRINT MIN NUMBER IN AN ARRAY[0,2,5,8,7,4,6,]


var array = [0, 2, 5, 8, 7, 4, 6];
var minNumber = array[0]; 

for (var i = 1; i < array.length; i++) {
  if (array[i] < minNumber) {
    minNumber = array[i]; 
  }
}

console.log("Minimum number:", minNumber);


// SUM OF ALL ELEMENTS IN ARRAY


var array = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < array.length; i++) {
  sum += array[i]; 
}

console.log("Sum of all elements:", sum);


//add the  INDEX OF  0,3,6,9  array=[5,9,5,8,7,3,6,8,6,4,]

var array = [5, 9, 5, 8, 7, 3, 6, 8, 6, 4];
var indices = [0, 3, 6, 9];
var sumOfIndices = 0;

for (var i = 0; i < indices.length; i++) {
  var index = indices[i];
  sumOfIndices += index; 
}

console.log("Sum of indices:", sumOfIndices);


//WRITE A PROGRAM TO COUNT  REPEATED numbers in array [1,2,3,1,2,3,4]
 let num;
 let count=0;
 for(i=0;i<array.length;i++){
  a[i]===
 }




















