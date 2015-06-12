//Troy S. Wood
//06-12-2015
//
//Coderbyte Challenge - PermutationStep
//
//Using the JavaScript language, have the function PermutationStep(num)
//take the num parameter being passed and return the next number greater
//than num using the same digits. For example: if num is 123 return 132,
//if it's 12453 return 12534. If a number has no greater permutations,
//return -1 (ie. 999). 

function permutationStep(num) {
  var permArr = [],
      usedChars = [];

  function permute(numArr) {
    var i, ch;
    for (i = 0; i < numArr.length; i++) {
      ch = numArr.splice(i, 1)[0];
      usedChars.push(ch);
      if (numArr.length === 0) {
          permArr.push(usedChars.slice());
      }
      permute(numArr);
      numArr.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  }
  permute(String(num).split(""));

  for (var i = 0; i < permArr.length; i++) {
    permArr[i] = Number(permArr[i].join(''));
  }

  permArr = permArr.sort(function (a, b) {
    return a - b;
  });

  for (var j = 0; j < permArr.length; j++) {
    if (permArr[j] > num) {
      return permArr[j];
    }
  }

  return -1;
}

console.log('Before: 999 | After: ' + permutationStep(999));
console.log('Before: 123 | After: ' + permutationStep(123));
console.log('Before: 12534 | After: ' + permutationStep(12534));
console.log('Before: 11121 | After: ' + permutationStep(11121));
console.log('Before: 41352 | After: ' + permutationStep(41352));

