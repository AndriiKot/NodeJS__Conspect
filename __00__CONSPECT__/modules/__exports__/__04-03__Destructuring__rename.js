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
// const { user: userInfo, sayHello: HelloUser } = require('./__04___export__.js');
// console.log(user)

