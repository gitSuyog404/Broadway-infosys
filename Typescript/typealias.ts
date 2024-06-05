type a = string;

type User = { id: number; username: a };

let getUser = (user: User): User => {
  return user;
};

let user: User = { id: 1, username: "John Doe" };

getUser(user);

export {};
