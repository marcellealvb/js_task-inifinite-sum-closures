'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let x = 0
  return function myAdder(y) {
    if(y === undefined){
      x = 0;
      return x;
    }
     x = x + y;
    return myAdder;

  }
  return myAdder;



}

const adder = makeAdder();



  adder(), // 0
  adder(4)(5)(), // 9
  adder(), // 0
  adder(5)(5)(5),
  adder(4),
  adder(), // 19
  adder(), // 0



module.exports = makeAdder;
