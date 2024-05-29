let area = (L, B, callback) => {
  setTimeout(() => {
    if (L < 0 || B < 0) {
      let msg = "Length or breadth cannot be negative";
      callback(msg, null);
    } else {
      let area = L * B;
      callback(null, area);
    }
  }, 2000);
};

area(10, 20, (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`The area of the given values are ${result} cmsquare`);
  }
});
