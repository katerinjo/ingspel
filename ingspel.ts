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
    "nd": {"initial": "nd", "short": "nd", "long": "nd", "final": "nd"}
};

const vowelRules = {
    "i": {"initial": "e", "init-checked": "ee", "medial": "e", "mid-checked": "ee", "final": "ee", "checked": false},
    "I": {"initial": "i", "init-checked": "i", "medial": "i", "mid-checked": "i", "final": "ih", "checked": false},
    "U": {"initial": "oo", "init-checked": "oo", "medial": "oo", "mid-checked": "oo", "final": "oo", "checked": true},
    "u": {"initial": "oo", "init-checked": "oo", "medial": "u", "mid-checked": "oo", "final": "oo", "checked": false},
    "e": {"initial": "e", "init-checked": "e", "medial": "e", "mid-checked": "e", "final": "eh", "checked": true},
    "@": {"initial": "a", "init-checked": "u", "medial": "u", "mid-checked": "u", "final": "a", "checked": true},
    "o": {"initial": "o", "init-checked": "oa", "medial": "o", "mid-checked": "oa", "final": "o", "checked": false},
    "{": {"initial": "a", "init-checked": "a", "medial": "a", "mid-checked": "a", "final": "eah", "checked": true},
    "a": {"initial": "au", "init-checked": "o", "medial": "aw", "mid-checked": "o", "final": "ah", "checked": true},
    "ej": {"initial": "a", "init-checked": "ei", "medial": "a", "mid-checked": "ei", "final": "ei", "checked": false},
    "aj": {"initial": "i", "init-checked": "ai", "medial": "i", "mid-checked": "ai", "final": "ai", "checked": false},
    "oj": {"initial": "oi", "init-checked": "oi", "medial": "oi", "mid-checked": "oi", "final": "oy", "checked": false},
    "aw": {"initial": "ou", "init-checked": "ow", "medial": "ow", "mid-checked": "ow", "final": "ow", "checked": false}
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
    ["jj"], ["j"],
    ["k", "s"], ["x"]
];

// take a single XSAMPA string and convert it into a list of XSAMPA sounds to make for easier processing
function parseXsampa(xsampa: string) : string[] {
    return xsampa.split(" ");
}

// group recognized sequences of sounds into single sounds
function groupSounds(phonemes: string[]) : string[] {
    return ["b", "{", "n", "dZ", "o"];
}

function findAllVowels(sounds: string[]): number[] {
    let outList = [];
    for (let i = 0; i < sounds.length; i++) {
        if (sounds[i] in vowelRules) {
            outList.push(i);
        }
    }
    return outList;
}

// groups sounds into lists where each list is a sequence of sounds either checked or free
// adjacent vowels become separate lists, while adjacent consonants stack into the same list
// eg ["t", "s", "a", "k", "o", "{", "s", "t", "r", "o"]
// -> {beginning: ["t", "s"], middle: [["a", "k"], ["o"] ["{", "s", "t", "r"]], end: ["o"]}
function getChunks(sounds: string[]) {
    const ixs = findAllVowels(sounds);
    if (ixs.length === 0) {
        return {beginning: sounds};
    } else if (ixs.length === 1) {
        return {
            beginning: sounds.slice(0, ixs[0]),
            ending: sounds.slice(ixs[0])
        }
    } else {
        const beginning = sounds.slice(0, ixs[0]);
        let middle = [];
        for (let i = 0; i < ixs.length - 1; i++) {
            middle.push(sounds.slice(ixs[i], ixs[i + 1]));
        }
        const ending = sounds.slice(ixs[ixs.length - 1]);
        return {beginning, middle, ending};
    }
}

// based on vowels' preferences and consonant vetos,
// determine whether each vowel should be checked (true) or free (false)
function getChecked(chunks) : boolean[] {
    let outList = [];
    if (chunks.middle != null) {
        for (let chunk of chunks.middle) {
            if (chunk.length > 2) {
                outList.push(true);
            } else {
                let wantsChecked = vowelRules[chunk[0]]["checked"];
                let preferType = wantsChecked ? "long" : "short";
                if (consonantRules[chunk[1]][preferType] != null) {
                    outList.push(wantsChecked);
                } else {
                    outList.push(!wantsChecked);
                }
            }
        }
    }
    if (chunks.end != null) {
        outList.push(chunks.end.length > 1);
    }
    return outList;
}

function getFirstUnits(chunk: string[]): string[] {
    return chunk.map(consonant => consonantRules[consonant]["initial"]);
}

function getMiddleUnits(middle: string[][], checkSeq: boolean[]): string[] {
    let outList = [];
    for (let i = 0; i < middle.length; i++) {
        if (checkSeq[i]) {
            outList.push(vowelRules[middle[i][0]]["mid-checked"]);
            outList.push(...middle[i].slice(1).map(consonant => consonantRules[consonant]["long"]));
        } else {
            outList.push(vowelRules[middle[i][0]]["medial"]);
            outList.push(...middle[i].slice(1).map(consonant => consonantRules[consonant]["short"]));
        }
    }
    return outList;
}

function getLastUnits(chunk: string[], checked: boolean): string[] {
    if (chunk.length === 1) {
        return [vowelRules[chunk[0]]["final"]];
    } else {
        if (checked) {
            return [
                vowelRules[chunk[0]]["mid-checked"],
                ...chunk.slice(1).map(consonant => consonantRules[consonant]["final"])
            ];
        } else {
            return [
                vowelRules[chunk[0]]["medial"],
                ...chunk.slice(1).map(consonant => consonantRules[consonant]["short"]),
                "e"
            ];
        }
    }
}

// create a list of graphemes based on the sound sequences, their position, and their checked status
function getUnits(chunks, checkSeq: boolean[]) : string[] {
    let outList = [];
    let {beginning, middle, ending} = chunks;
    if (beginning != null) {
        outList.push(...getFirstUnits(beginning));
    }
    if (middle != null) {
        outList.push(...getMiddleUnits(middle, checkSeq));
    }
    if (ending != null) {
        outList.push(...getLastUnits(ending, checkSeq[checkSeq.length - 1]));
    }
    return outList;
}

function arrEqs(a: string[], b: string[]): boolean {
    if (a.length === 0) {
        if (b.length === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        if (b.length === 0) {
            return false;
        } else {
            if (a[0] === b[0]) {
                return arrEqs(a.slice(1), b.slice(1));
            } else {
                return false;
            }
        }
    }
}

function replaceSequence(pattern: string[], insertion: string[], old: string[]) : string[] {
    let steps = pattern.length
    let current = old.slice();
    for (let i = 0; i < current.length - pattern.length; i++) {
        if (arrEqs(current.slice(i, i + steps), pattern)) {
            current.splice(i, steps, ...insertion);
        }
    }
    return current;
}


// for spelling rules unrelated to the freedom of vowels, apply lots of substitutions
function transform(raw: string[]) : string[] {
    let current = raw.slice();
    for (let i = 0; i < substitutions.length; i += 2) {
        current = replaceSequence(substitutions[i], substitutions[i + 1], current);
    }
    return current;
}

function spell(xsampa: string) : string {
    const phonemic = parseXsampa(xsampa);
    const sounds = groupSounds(phonemic);
    const chunks = getChunks(sounds);
    const checkSeq = getChecked(chunks);
    const units = getUnits(chunks, checkSeq);
    const prettyUnits = transform(units);
    return prettyUnits.join("");
}

console.log(spell("S @ b { N @ r { N"));
console.log(spell("I N s p e l"));
console.log(spell("p r I n t"));
console.log(spell("f i r f U l"));
console.log(spell("p r @ v a j d"));
console.log(spell("e s p e r a n t o"));
console.log(spell("d { { { { N"));
console.log(spell("D I s S { l m e n o"));