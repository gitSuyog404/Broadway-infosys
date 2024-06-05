// Consider you have an array which stores user’s information and an array with the details of the blogs posted by the users. Please create an asynchronous function implementing setTimeout function in javascript which will get the user id based on the user email and then use that userid to fetch the blogs posted by that particular user.

let users = [
  { userid: 1, email: "johnwick@gmail.com" },
  { userid: 2, email: "maxpayne@gmail.com" },
];

let blogs = [
  { blogid: 1, text: "blog1", postedBy: 1 },
  { blogid: 2, text: "blog2", postedBy: 2 },
];

let getBlog = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userId = null;

      for (let user of users) {
        if (user.email === email) {
          userId = user.userid;
          break;
        }
      }

      if (userId === null) {
        reject(new Error("USER NOT FOUND"));
        return;
      }

      setTimeout(() => {
        let usrBlog = [];

        for (let blog of blogs) {
          if (blog.postedBy === userId) {
            usrBlog.push(blog.text);
          }
        }
        resolve(usrBlog[0]);
      }, 2000);
    }, 2000);
  });
};

getBlog("johnwick@gmail.com")
  .then((blogs) => {
    console.log("Blogs by johnwick@gmail.com: ", blogs);
  })
  .catch((error) => {
    console.error(error.message);
  });
