const asyncFunctional = require('./spoof-async');

main(1000);

async function main(iterations) {
  try {
    for (let i = 0; i < iterations; i++) {
      console.log(`current index is ${i}`);
      const result = await asyncFunctional();
      console.log(`async result is ${result}`);
    }
  } catch(e) {
    console.log(`error ${e}`);
  }
}
