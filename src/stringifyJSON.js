// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // undefined
  // null
  // string
  // boolean
  // number
  // array
  // obj
  if (obj === undefined) {
    return undefined;
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'number') {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    let result = [];
    obj.forEach(function(elem) {
      if (elem === undefined) {
        return result.concat[0];
      } else {
        return '[' + result.concat(stringifyJSON(elem)).join(',') + ']';
      }
    });
  } else if (obj.constructor === 'Object') {
    let keys = Object.keys(obj);
    let result = [];
    for (let key in keys) {
      if (obj[key] === undefined) {
        return result;
      } else {
        result.push('"' + key + '":'); // 'key:'
        result.push(stringifyJSON(obj));
      }
    }
    result = '{' + result.join(',') + '}';
  }
};
