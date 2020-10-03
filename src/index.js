
exports.min = function min (array) {
if (array== undefined || array.length==0) {
  return 0;
}
  let minEl=array[0];
for (let index = 0; index < array.length; index++) {
  if (minEl>array[index]) {
    minEl=array[index]
  }
}
  return minEl;
}

exports.max = function max (array) {
  if (array== undefined || array.length==0) {
    return 0;
  }
  let maxEl=array[0];
  for (let index = 0; index < array.length; index++) {
    if (maxEl<array[index]) {
      maxEl=array[index]
    }
  }
    return maxEl;

}

exports.avg = function avg (array) {
  if (array== undefined || array.length==0) {
    return 0;
  }
  let sum= 0;
  for (let index = 0; index < array.length; index++) {
    sum = sum+array[index]
  }
  return sum/array.length;
}
