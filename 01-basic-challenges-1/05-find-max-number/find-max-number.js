function findMaxNumber(arr) {
  // solution 1
  // let newArr = arr.sort((a,b)=>a-b)

  // return newArr[newArr.length-1]

  // Solution 2

  // const maxValue = Math.max(...arr)

  // return maxValue

  // Solution 3
  let maxValue = arr[0]

  for(let i =1;i< arr.length;i++){
    if(arr[i] > maxValue){
      maxValue = arr[i]
    }
  }

  return maxValue
}

module.exports = findMaxNumber;
