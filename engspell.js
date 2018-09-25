
const phonemes = new Set([
    "p", "t", "k",
    "b", "d", "g",
    "m", "n", "N",
    "f", "T", "s", "S", "h",
    "v", "D", "z", "Z",
    "w", "r", "l", "j",
    "i", "I", "U", "u",
    "e", "@", "o",
    "{", "a"
])


function spell(xsampa) {
    const phonemic = parseXsampa(xsampa);
    const [consonants, vowels] = getChunks(phonemic);
    const checkSeq = getChecked(vowels, consonants);
    const vowelGraphemes = getVowelGraphemes(vowels, consonants);
    const consonantGraphemes = getConsonantGraphemes(consonants, checkSeq);
    const rough = getSpelling(consonantGraphemes,vowelGraphemes);
    return tidy(rough);
}