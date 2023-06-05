const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });

  return promise;
};

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

async function trackUserHandler() {
  let posData;
  let timerData;

  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }

  console.log(timerData, posData);

  // .then((posData) => {
  //   positionData = posData;
  //   return setTimer(2000);
  // })
  // .then((data) => {
  //   console.log(data, positionData);
  // })
  // .catch((err) => {
  //   console.log(err);
  //   console.log('On we go...')
  // });

  // setTimer(1000).then(() => console.log("Timer done!"));

  // console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

// Promise.race([getPosition(), setTimer(1000)])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Promise.all([getPosition(), setTimer(1000)]).then((promiseData) =>
//   console.log(promiseData)
// );

// let result = 0;
// for (let index = 0; index < 100000000; index++) {
//   result = result + index;
// }

// console.log(result);
