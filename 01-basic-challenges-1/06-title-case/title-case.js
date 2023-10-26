function titleCase(str) {
  const arr = str.toLowerCase().split(" ")
  const newStr = "";
  for(let i =0;i < arr.length;i++){
    let newI = arr[i].charAt(0).toUpperCase()
    + arr[i].slice(1)
    newStr.concat(newI)
  }

  return newStr
}

module.exports = titleCase;
