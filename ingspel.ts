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
    "a": {"initial": "au", "init-checked": "o", "medial": "aw", "mid-checked": "o", "final": "ah", "free": false},
    "ej": {"initial": "a", "init-checked": "ei", "medial": "a", "mid-checked": "ei", "final": "ei", "free": true},
    "aj": {"initial": "i", "init-checked": "ai", "medial": "i", "mid-checked": "ai", "final": "ai", "free": true},
    "oj": {"initial": "oi", "init-checked": "oi", "medial": "oi", "mid-checked": "oi", "final": "oy", "free": true},
    "aw": {"initial": "ou", "init-checked": "ow", "medial": "ow", "mid-checked": "ow", "final": "ow", "free": true}
};

const substitutions = [
    ["k", "a"], ["c", "a"],
    ["k", "o"], ["c", "o"],
    ["k", "w", "a"], ["qu", "a"],
    ["k", "w", "e"], ["qu", "e"],
    ["k", "w", "i"], ["qu", "i"],
    ["k", "w", "o"], ["qu", "o"],
    ["a", "s", "i"], ["a", "c", "i"],
    ["a", "s", "e"], ["a", "c", "e"],
    ["e", "s", "i"], ["e", "c", "i"],
    ["e", "s", "e"], ["e", "c", "e"],
    ["i", "s", "i"], ["i", "c", "i"],
    ["i", "s", "e"], ["i", "c", "e"],
    ["o", "s", "i"], ["o", "c", "i"],
    ["o", "s", "e"], ["o", "c", "e"],
    ["u", "s", "i"], ["u", "c", "i"],
    ["u", "s", "e"], ["u", "c", "e"],
    ["ee", "s", "i"], ["ee", "c", "i"],
    ["ee", "s", "e"], ["ee", "c", "e"],
    ["oo", "s", "i"], ["oo", "c", "i"],
    ["oo", "s", "e"], ["oo", "c", "e"],
    ["oa", "s", "i"], ["oa", "c", "i"],
    ["oa", "s", "e"], ["oa", "c", "e"],
    ["au", "s", "i"], ["au", "c", "i"],
    ["au", "s", "e"], ["au", "c", "e"],
    ["aw", "s", "i"], ["aw", "c", "i"],
    ["aw", "s", "e"], ["aw", "c", "e"],
    ["ow", "s", "i"], ["ow", "c", "i"],
    ["ow", "s", "e"], ["ow", "c", "e"],
    ["ou", "s", "i"], ["ou", "c", "i"],
    ["ou", "s", "e"], ["ou", "c", "e"],
    ["oi", "s", "i"], ["oi", "c", "i"],
    ["oi", "s", "e"], ["oi", "c", "e"],
    ["ei", "s", "i"], ["ei", "c", "i"],
    ["ei", "s", "e"], ["ei", "c", "e"],
    ["g", "i"], ["gh", "i"],
    ["g", "e"], ["gh", "e"],
    ["jj", "e"], ["dg", "e"],
    ["jj"], ["j"]
];

// take a single XSAMPA string and convert it into a list of XSAMPA sounds to make for easier processing
function parseXsampa(xsampa: string) : string[] {
    return xsampa.split("");
}

// group recognized sequences of sounds into single sounds
// if the word starts with a vowel sound, put an empty string at the beginning of the consonant sequence
function groupSounds(phonemes: string[]) : string[] {
    return ["nothing", "here"];
}

// groups sounds into lists where each list is a sequence of sounds either checked or free
// adjacent vowels become separate lists, while adjacent consonants stack into the same list
// eg ["t", "a", "k", "o", "[", "s", "t", "r", "o"]
// -> [["", "t"], ["a", "k"], ["o"] ["{", "s", "t", "r"], ["o"]]
function getChunks(sounds: string[]) : string[][] {
    return [["", "b"], ["a", "t"], ["e"]];
}

// based on vowels' preferences and consonant vetos,
// determine whether each vowel should be checked (true) or free (false)
function getChecked(chunks: string[][]) : boolean[] {
    return [false, false, false];
}

// create a list of graphemes based on the sound sequences and 
function getUnits(chunks: string[][], checkSeq: boolean[]) : string[] {
    return ["nothing", "here"];
}

// for spelling rules unrelated to the freedom of vowels, apply lots of substitutions
function transform(units: string[]) : string[] {
    return ["nothing", "here"];
}

function spell(xsampa: string) : string {
    const phonemic = parseXsampa(xsampa);
    const sounds = groupSounds(phonemic);
    const chunks = getChunks(sounds);
    const checkSeq = getChecked(chunks);
    const units = getUnits(chunks, checkSeq);
    const prettyUnits = transform(units);
    return prettyUnits.join()
}