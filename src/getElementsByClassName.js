// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className, currentNode = document.body){
//   var results = [];
//   // check if classList && classList contains className
//     // push to results
//   // iterate over children and call the recursive function


//   return results;
// };


var getElementsByClassName = function(className, currentNode = document.body) {
  let children = Array.from(currentNode.children);
  let inClassChildren = children.reduce(function(acc, child) {
    return acc.concat(getElementsByClassName(className, child));
  }, []);
  if (currentNode.classList.contains(className)) {
    return [currentNode, ...inClassChildren];
  } else {
    return inClassChildren;
  }
};