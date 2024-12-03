function StringScramble(source, target) {
  // Create a frequency map for characters in the source string
  const charFrequency = {};

  for (const char of source) {
    charFrequency[char] = (charFrequency[char] || 0) + 1; // Count occurrences
  }

  for (const char of target) {
    // Exit early if a required character is missing or insufficient
    if (!charFrequency[char]) {
      return "false";
    }
    charFrequency[char]--;
  }

  return "true"; // Return true if all characters in target are validated
}

console.log(StringScramble(readline()));
