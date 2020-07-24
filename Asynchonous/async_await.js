/*
function promise() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("hello bangladesh");
    }, 3000);
  });
}

async function getResult() {
  console.log("hello-1");
  const name = await promise();
  console.log(name);
  console.log("hello-2");
}
getResult();

*/
//=====================================

// async function f() {
//   console.log("hello-1");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   console.log("hello-2");
//   let result = await promise; // wait until the promise resolves (*)
//   console.log(result);
//   console.log("hello-3");
// }

f();

async function f() {
  let promise = Promise.resolve(1);
  let result = await promise;
  console.log(result);
}
