let area = (L, B) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (L < 0 || B < 0) {
        let msg = new Error("LEngth or breath cannot be negative");
        reject(msg);
      } else {
        let area = L * B;
        resolve(area);
      }
    }, 2000);
  });
};

// async function getResult() {
//   try {
//     let result = await area(10, 20);
//     console.log(result);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// getResult();

// IN arrow function syntax;

// let getResult = async () => {
//   try {
//     let result = await area(10, 20);
//     console.log(result);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// getResult();
