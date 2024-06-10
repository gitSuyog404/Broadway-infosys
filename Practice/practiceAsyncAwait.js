// Write a program to find the area of the given length or breadth

let area = (length, breadth) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (length < 0 || breadth < 0) {
        let message = new Error("Length or breadth cannot be negative");
        reject(message);
      } else {
        let area = length * breadth;
        resolve(area);
      }
    }, 3000);
  });
};

let getResult = async () => {
  try {
    let result = await area(50, 50);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

getResult();
