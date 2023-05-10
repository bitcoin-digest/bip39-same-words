const bip39 = require("bip39");

// bip39库的词典长度
const wordlistLength = bip39.wordlists.english.length;

for (let i = 0; i < wordlistLength; i++) {
  const word = bip39.wordlists.english[i];
  const repeatedWord = Array(12).fill(word).join(" ");

  if (bip39.validateMnemonic(repeatedWord)) {
    console.log(`- ${repeatedWord}`);
  }
}

for (let i = 0; i < wordlistLength; i++) {
  const word = bip39.wordlists.english[i];
  const repeatedWord = Array(24).fill(word).join(" ");

  if (bip39.validateMnemonic(repeatedWord)) {
    console.log(`- ${repeatedWord}`);
  }
}
