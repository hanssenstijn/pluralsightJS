// try {
// // some code that could fail
// }
// catch (error){
// // do something with error
// }
// finally {
//  // this code always runs
// }

function simpleTryCatch() {
  let result

  try {
    result = x / 10;
  } catch (error) {
    throw {
      "message": "simpleTryCatch()" + error.message,
      "name": "CustomError"
    }
  } finally {
    console.log('In the finally block');
  }
}