// function simpleArraySum(ar){
//   // console.log(ar)
//   var sum = 0;
//   ar.forEach(function(number){
//     sum += number;
//   })
//   console.log(sum);
// }

// simpleArraySum([1,2,3,4,10,11]);


// function compareTriplets(a,b){
//   var alice = 0;
//   var bob = 0;
//   for (var i = 0; i< 3; i++){
//   if (a > b){
//   alice ++;
//   // console.log(alice);
//   }
//   else if (b < a){
//   bob ++;
//   // console.log(bob);
//   }
//   console.log(alice, bob);
// }
// }

// compareTriplets([5,6,7],[3,6,10])


// function aVeryBigSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function(number){
//   sum +=number;
//     console.log(sum);
// })
// return(sum);
// }
// aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);


function diagonalDifference(arr) {
  // console.log(arr[0][0]);
  // console.log(arr[1][1]); 
  // console.log(arr[2][2]);
  // console.log(arr[0][0] + arr[1][1] + arr[2][2]);
  var primary = (arr[0][0] + arr[1][1] + arr[2][2]);

  console.log();
  // var secondary = (arr[0][2] + arr[1][1] + arr[2][0]);
  // console.log(Math.abs(primary - secondary));
  // return(Math.abs(primary - secondary));
}

diagonalDifference(
  [[11, 2, 4], 
  [4, 5, 6], 
  [10, 8, -12]]);