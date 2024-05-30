// Promise

// Write a program to find the area of the given values using promise

let area = (l, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (l < 0 || b < 0) {
        let message = new Error("Length or breadth cannot be negative");
        reject(message);
      } else {
        let area = l * b;
        resolve(area);
      }
    }, 2000);
  });
};

area(10, -20)
  .then((result) => {
    console.log(result);
  })

  .catch((err) => {
    console.log(err.message);
  });
