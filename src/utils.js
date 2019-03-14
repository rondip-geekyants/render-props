/**
 * debounce function
 * use inDebounce to maintain internal reference of timeout to clear
 */
const debounce = (() => {
  let inDebounce;

  return function(func, delay) {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
    return inDebounce;
  };
})();

/**
 * throttle function that catches and triggers last invocation
 * use time to see if there is a last invocation
 */
const throttle = (() => {
  let lastFunc;
  let lastRan;
  return function(func, limit) {
    const context = this;
    const args = arguments;
    console.log("lsatRan at", lastRan);
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);

      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          return (lastRan = Date.now());
        }
      }, limit - (Date.now() - lastRan));
    }
  };
})();

module.exports = {
  debounce,
  throttle
};
