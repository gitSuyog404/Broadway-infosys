// Consider you have an array which stores user’s information and an array with the details of the blogs posted by the users. Please create an asynchronous function implementing setTimeout function in javascript which will get the user id based on the user email and then use that userid to fetch the blogs posted by that particular user.

let users = [
  { userId: 1, email: "john@example.com" },
  { userId: 2, email: "Max@example.com" },
];

let blogs = [
  { blogId: 1, text: "blog1", postedBy: 1 },
  { blogId: 2, text: "blog2", postedBy: 2 },
];


let  getUserId =(email)=>{
    return new Promise (resolve, reject) =>{
        setTimeout(()=>{
            if(users.includes(users.email)){
                return userId = users.userId; 
            }
        },2000)
    }
}

