const without = function(source, itemsToRemove) {
  let newArray = source.filter((element) => !itemsToRemove.includes(element)); 
  return newArray
}

module.exports = without;