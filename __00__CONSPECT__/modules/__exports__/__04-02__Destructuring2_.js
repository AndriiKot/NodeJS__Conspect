const user = {
  name: "Oxi",
  age: 40,
};

module.exports = {
  user,
  sayHello() {
    console.log(user.name);
  },
};

// Example
// Other file
// const { user, sayHello } = require('./__04___export__.js');
// console.log(user)

// or

// const obj = require('./__04___export__.js');
// console.log(obj.sayHello())
// console.log(obj.user)
