const consonantRules = {
    "p": {"initial": "p", "short": "p", "long": "pp", "final": "p"},
    "t": {"initial": "t", "short": "t", "long": "tt", "final": "t"},
    "k": {"initial": "k", "short": "k", "long": "ck", "final": "c"},
    "b": {"initial": "b", "short": "b", "long": "bb", "final": "b"},
    "d": {"initial": "d", "short": "d", "long": "dd", "final": "d"},
    "g": {"initial": "g", "short": "g", "long": "gg", "final": "g"},
    "m": {"initial": "m", "short": "m", "long": "mm", "final": "m"},
    "n": {"initial": "n", "short": "n", "long": "nn", "final": "n"},
    "N": {"initial": "ng", "short": "ng", "final": "ng"},
    "f": {"initial": "f", "short": "f", "long": "ff", "final": "f"},
    "T": {"initial": "th", "short": "th", "final": "th"},
    "s": {"initial": "s", "short": "s", "long": "ss", "final": "ss"},
    "S": {"initial": "sh", "short": "sh", "long": "sh", "final": "sh"},
    "h": {"initial": "h", "short": "h", "final": "h"},
    "v": {"initial": "v", "short": "v", "long": "vv", "final": "v"},
    "D": {"initial": "th", "short": "th", "final": "th"},
    "z": {"initial": "z", "short": "z", "long": "zz", "final": "z"},
    "Z": {"initial": "zh", "short": "zh", "long": "zh", "final": "zh"},
    "w": {"initial": "w", "short": "w", "final": "w"},
    "r": {"initial": "r", "short": "r", "long": "rr", "final": "r"},
    "l": {"initial": "l", "short": "l", "long": "ll", "final": "l"},
    "j": {"initial": "y", "short": "y", "final": "y"},
    "tS": {"initial": "ch", "short": "ch", "long": "ch", "final": "ch"},
    "dZ": {"initial": "j", "short": "j", "long": "jj", "final": "dge"},
    "Ng": {"initial": "ng", "long": "ng", "final": "ng"},
};

const vowelRules = {
    "i": {"initial": "e", "init-checked": "ee", "medial": "e", "mid-checked": "ee", "final": "ee", "free": true},
    "I": {"initial": "i", "init-checked": "i", "medial": "i", "mid-checked": "i", "final": "ih", "free": false},
    "U": {"initial": "oo", "init-checked": "oo", "medial": "oo", "mid-checked": "oo", "final": "oo", "free": false},
    "u": {"initial": "oo", "init-checked": "oo", "medial": "u", "mid-checked": "oo", "final": "oo", "free": true},
    "e": {"initial": "e", "init-checked": "e", "medial": "e", "mid-checked": "e", "final": "eh", "free": false},
    "@": {"initial": "a", "init-checked": "u", "medial": "u", "mid-checked": "u", "final": "a", "free": false},
    "o": {"initial": "o", "init-checked": "oa", "medial": "o", "mid-checked": "oa", "final": "o", "free": true},
    "{": {"initial": "a", "init-checked": "a", "medial": "a", "mid-checked": "a", "final": "eah", "free": false},
    "a": {"initial": "ough", "init-checked": "o", "medial": "aw", "mid-checked": "o", "final": "ah", "free": false},
    "ej": {"initial": "a", "init-checked": "ei", "medial": "a", "mid-checked": "ei", "final": "ei", "free": true},
    "aj": {"initial": "i", "init-checked": "ai", "medial": "i", "mid-checked": "ai", "final": "ai", "free": true},
    "oj": {"initial": "oi", "init-checked": "oi", "medial": "oi", "mid-checked": "oi", "final": "oy", "free": true},
    "aw": {"initial": "ou", "init-checked": "ow", "medial": "ow", "mid-checked": "ow", "final": "ow", "free": true}
};

function spell(xsampa) {
    const phonemic = parseXsampa(xsampa);
    const [consonants, vowels] = getChunks(phonemic);
    const checkSeq = getChecked(vowels, consonants);
    const vowelGraphemes = getVowelGraphemes(vowels, consonants);
    const consonantGraphemes = getConsonantGraphemes(consonants, checkSeq);
    const rough = getSpelling(consonantGraphemes,vowelGraphemes);
    return tidy(rough);
}