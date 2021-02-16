const sleep = require('./index').default;
(async() => {
  try {
    console.log('Hmmm.  What\'s this liquor...');
    const firstWords = await sleep(60000); //wake after 1 minute
    console.log(firstWords);
  }
  catch (rudeAwakening) {
    console.log(rudeAwakening);
  }
})();
