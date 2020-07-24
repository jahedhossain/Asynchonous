//Working with promise
//===============================
/*
const result = new Promise((resolve, reject) => {
  console.log("first print");
  setTimeout(() => {
    resolve("hello promise");
    reject(new Error("custom error"));
  }, 2000);
});

result
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.log(err);
  });
*/

//Working with promise advance
//==========================
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: "jahed",
        profession: "web design",
      });
    }, 2000);
  });
}

function enrollCourse(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["javascript", "react", "nodeJs"]);
    }, 2000);
  });
}

function getPrice(courseName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("200$");
    }, 3000);
  });
}
// new user create
// getUser(10, function (user) {
//   console.log(user);

//   enrollCourse(user.name, function (crouch) {
//     console.log(crouch);

//     getPrice(crouch[0], function (price) {
//       console.log(price);
//     });
//   });
// });

// getUser(10).then((user) => {
//   console.log(user);
// });

Promise.all([
  getUser(10)
    .then((user) => {
      console.log(user);
      return enrollCourse(user.name);
    })
    .then((crouch) => {
      console.log(crouch);
      return getPrice(crouch[0]);
    })
    .then((price) => {
      console.log(price);
    })
    .catch((err) => {
      console.log(err);
    }),
]).then((data) => {
  console.log(data);
});
