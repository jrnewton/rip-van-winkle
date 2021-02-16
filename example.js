const sleep = require('./index').default;
(async() => {
  try {
    console.log('Hmmm.  What\'s this liquor...');
    await sleep(5000);
    console.log('Where\'s Wolf?');
  }
  catch (error) {
    console.log('Huh what... Is the bowling over?');
  }
})();
