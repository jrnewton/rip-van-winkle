const MAX_SIGNED_INT = 2147483647;
const TWENTY_YEARS = 631139040000;
let count = 0;

const rip = async (wakeAfter) => {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      count += MAX_SIGNED_INT;
      if (count >= TWENTY_YEARS) {
        resolve('Yawn.  Where\'s my musket?');
      }
      else {
        resolve(rip);
      }
    }, MAX_SIGNED_INT);

    if (wakeAfter) {
      setTimeout(() => {
        clearTimeout(id);
        reject();
      }, wakeAfter);
    }
  });
};
module.exports.default = rip;