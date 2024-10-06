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
// const { user, sayHello } = require('./file.js')
// console.log(user)

// or

// const obj = require('./file.js');
// console.log(obj.sayHello())
// console.log(obj.user)
