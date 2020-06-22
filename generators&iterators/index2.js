//ES6 introduced a new way of working with functions and iterators in the form of Generators (or generator functions). A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator

function* timestampGenerator() {
  var ts = Date.now();
  yield ts;
  var additionalTime = yield;
  console.log(additionalTime);
  if (additionalTime) {
    ts = ts + additionalTime
  }
  console.log(ts)
}

const it = timestampGenerator();
const originalTimestamp = it.next()
it.next()
it.next(1000 * 60)

