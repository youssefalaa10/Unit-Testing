function range(start, end, step = 1) {
    let current = start;
    return {
      next() {
        if (current < end) {
          const result = { value: current, done: false };
          current += step;
          return result;
        } else {
          return { value: undefined, done: true };
        }
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  }
  
  module.exports = range;
  