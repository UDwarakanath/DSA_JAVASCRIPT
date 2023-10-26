function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  const loweredStr = str.toLowerCase()
  let count = 0;

  for (let i = 0; i < loweredStr.length; i++)
    if (vowels.includes(loweredStr[i])) {
      count++
    }

  return count
}

module.exports = countVowels;
