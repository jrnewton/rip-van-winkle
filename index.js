const DEFAULT_INTERVAL = 2147483647; /* MAX INTEGER 32           */
let countdown = 631139040000;        /* 20 years in milliseconds */
let sleepTimeoutHandle = null;

const main = async (wakeAfter = 0) => {
  const promise = sleep(countdown);

  if (wakeAfter) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        clearTimeout(sleepTimeoutHandle);
        return reject('Huh... what... Are they still bowling?');
      }, wakeAfter);
    });
  }
  else {
    return promise;
  }
}

const sleep = async (countdown) => {
  if (countdown <= 0) {
    return Promise.resolve('<yawn>... Where\'s Wolf?');
  }

  let interval = DEFAULT_INTERVAL;

  if (countdown - interval <= 0) {
    interval = countdown;
  }

  const promise = new Promise((resolve) => {
    sleepTimeoutHandle = setTimeout(() => {
      resolve(sleep(countdown - interval));
    }, interval);
  });

  return promise;
};

module.exports.default = main;
