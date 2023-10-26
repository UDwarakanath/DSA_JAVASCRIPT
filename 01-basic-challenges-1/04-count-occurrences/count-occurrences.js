function countOccurrences(str,char) {
  // let count =0;
  // solution 1
  // for(let i=0;i<str.length;i++){
  //   if(str[i] === char){
  //     count++
  //   }
  // }
  let count = str.split(char).length -1
  return count
}

module.exports = countOccurrences;
