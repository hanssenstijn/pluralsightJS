function myIterator(start, finish) {
  let index = start;
  let count = 0;

  return {
    next() {
      let result;
      if (index < finish) {
        result = { value: index, done: false }
        index += 1;
        count++;
        return result;
      }
      return {
        value: count,
        done: true
      }
    }
  }
}

const it = myIterator(0, 10);
let res = it.next();
while (!res.done) {
  console.log(res.value)
  res = it.next()
}

const arr = [0, 3, 4, 6];
const it = arr[Symbol.iterator]();
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())