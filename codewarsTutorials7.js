// Training JS #7: if..else and ternary operator

// function saleHotdogs(n){
//     if (n < 5) 
//         return 100*n;
//     else if (n >=5 && n < 10)
//         return  95*n
//     else return n*90    
// }

// console.log(saleHotdogs(100)) // 9000



// function saleHotdogs(n) {
//     return (n < 5) 
//         ? 100*n 
//         : (n >=5 && n < 10) 
//         ? n*95 
//         : n*90
// }

// console.log(saleHotdogs(100)) // 9000



// function saleHotdogs(n) {
//     return n*(n < 5
//         ? 100
//         : n >=5 && n < 10
//         ? 95 
//         : 90)
// }

// console.log(saleHotdogs(100)) // 9000



// function saleHotdogs(n) {
//     switch(true) {
//         case (n < 5):
//             return n * 100
//         case (n >= 10):
//             return n * 90
//         default:
//             return n * 95        
//     }
// }

// console.log(saleHotdogs(100)) // 9000



// function saleHotdogs(n) {
//     let sum
//     switch(true) {
//         case (n < 5):
//             sum = n * 100
//             break
//         case (n >= 10):
//             sum = n * 90
//             break
//         default:
//             sum = n * 95        
//     }
//     return sum
// }

// console.log(saleHotdogs(100)) // 9000
// ------------------------------------  
