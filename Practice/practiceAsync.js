// Callback use gareko

// let area = (length, breadth, callback) => {
//   setTimeout(() => {
//     if (length < 0 || breadth < 0) {
//       let message = "Length or breadth cannot be negative";
//       callback(message, null);
//     } else {
//       let area = length * breadth;
//       callback(null, area);
//     }
//   }, 1000);

//   area(30, 40, (err, result) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(`The area of the given values are ${result}cmsquare`);
//     }
//   });
// };

// Promise use gareko

let calculateArea = (L,B)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(L<0 || B <0)
        })
    })
}