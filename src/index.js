module.exports = function towelSort (matrix) {
  let result = [];

  if (matrix === undefined) {
    return result;
  }

  matrix.forEach(element => {
    if (matrix.indexOf(element) % 2 !== 0) {
      element.reverse();
    }
    result.push(...element);
  });

  return result;
}