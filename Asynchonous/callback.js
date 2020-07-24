//2=> callback function example:
//================================
/*
console.log("Number-1");

function callBackFunc(name, callback) {
  setTimeout(() => {
    const fullName = "My name is " + name;
    callback(fullName);
  }, 1000);
}
callBackFunc("jahed", function name(name) {
  console.log(name);
});
console.log("Number-2");
*/

// advance callback example:
//===============================

function getUser(id, callback) {
  setTimeout(() => {
    callback({
      id: id,
      name: "jahed",
      profession: "web design",
    });
  }, 2000);
}

function enrollCourse(name, callback) {
  setTimeout(() => {
    callback(["javascript", "react", "nodeJs"]);
  }, 2000);
}

function getPrice(courseName, callback) {
  setTimeout(() => {
    callback("200$");
  }, 2000);
}
// new user create
getUser(10, function (user) {
  console.log(user);

  enrollCourse(user.name, function (crouch) {
    console.log(crouch);

    getPrice(crouch[0], function (price) {
      console.log(price);
    });
  });
});
