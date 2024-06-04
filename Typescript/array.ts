// let numbers: Array<number>;
// let colors: string[];

// colors = ["red", "yellow"];

// Using unions

let numbers: Array<number | string>;

let colors: (string | number)[];

numbers = [1, 2, "three"];

colors = ["red", "blue", "green"];

export {};
