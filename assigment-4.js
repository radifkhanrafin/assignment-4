function mindGame(number) {
    let result= ((((number * 3)+10)/2)-5);
    console.log(result)
   return result;
   
}
mindGame(50)

// function evenodd(inputString) {
//     if (inputString.length % 2 === 0) { return 'even' }
//     else { return 'odd' }
// }

// function isLGSeven(inputNumber) {
//     const compareValue = 7;
//     if (inputNumber > compareValue) {
//         return inputNumber * 2
//     }
//     else if (inputNumber < compareValue) {
//         return inputNumber - compareValue
//     }
//     else {
//         return 'input a valid number'
//     }
// }


// function findingBadData(numbers) {
//   let totalBadData=0;
//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element<0) { totalBadData++; }
//   }
//   return totalBadData
// }


// function gemsToDiamond(friend1Gems, friend2gems, friend3Gems) {
//     const friend1JemsPower=21;
//     const friend2JemsPower=32;
//     const friend3JemsPower=43;
  
//     let friend1Diamond= friend1JemsPower*friend1Gems;
//     let friend2Diamond= friend2JemsPower*friend2gems;
//     let friend3Diamond= friend3JemsPower*friend3Gems;
  
//     let totalDiamond=friend1Diamond + friend2Diamond + friend3Diamond;
//     if (totalDiamond>(1000*2)) {
//       return totalDiamond-2000
//     }
//     else{
//       return totalDiamond
//     }
//   }
