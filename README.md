# IngSpel

This is a command-line program that converts a sequence of sounds for any made-up word into normal English spelling for easier reading. It could be used to create user-friendly output from a fantasy name generator that uses phonetics as its main tool.

If you wanted to, say, ensure that the vowel in "fleece" were half as frequent as the vowel in "strut" in the names created, a mere letter-based Markov chain or neural network isn't going to be amenable to that restriction. But at the same time, most people aren't willing and able to read what would be spit out if you used phonemes instead of letters to feed your generator.

This program is intended to close the gap, allowing the best of both worlds.

The rules used to generate spellings are informed by <i>The American Way of Spelling</i> by Richard L. Venezky and my own intuitions. Accents other than (my particular flavor of) General American will have trouble.

## Usage

Ingspel accepts an X-SAMPA string using a simple phonemic sound inventory.

### Consonants

| Sound | Example |
|--------:|:--------|
|"p"| <b>p</b>ond |
|"t"| <b>t</b>op |
|"k"| <b>c</b>ot |
|"b"| <b>b</b>ot |
|"d"| <b>d</b>ot |
|"g"| <b>g</b>ot |
|"m"| <b>m</b>at |
|"n"| <b>n</b>ot |
|"N"| so<b>ng</b> |
|"f"| <b>f</b>ought |
|"T"| <b>th</b>ought |
|"s"| <b>s</b>ought |
|"S"| <b>sh</b>ot |
|"h"| <b>h</b>ot |
|"v"| <b>v</b>ote |
|"D"| <b>th</b>at |
|"z"| <b>z</b>oo |
|"Z"| mea<b>s</b>ure |
|"w"| <b>w</b>ant |
|"r"| <b>r</b>ot |
|"l"| <b>l</b>ot |
|"j"| <b>y</b>aught |
|"tS"| <b>ch</b>op |
|"dZ"| <b>j</b>ot |

### Vowels

| Sound | Example |
|--------:|:--------|
|"i"| fl<b>ee</b>ce |
|"I"| k<b>i</b>t |
|"U"| f<b>oo</b>t |
|"u"| g<b>oo</b>se |
|"e"| dr<b>e</b>ss |
|"@"| str<b>u</b>t / <b>a</b>bout |
|"o"| g<b>oa</b>t |
|"{"| b<b>a</b>th |
|"a"| l<b>o</b>t / cl<b>o</b>th / p<b>a</b>lm / th<b>ough</b>t |
|"ej"| f<b>a</b>ce |
|"aj"| pr<b>i</b>ce |
|"oj"| ch<b>oi</b>ce |
|"aw"| m<b>ou</b>th |
|"@r"| n<b>ur</b>se |

## Limitations

- Only my own variety of General American is fully available. My accent merges the vowels in "lot", "cloth", "palm", and "thought", which might be inconvenient for those that don't. I don't have good intuitions about how to spell those sounds for those that have them, so I designed Ingspel to merge them like I do.

- I used `j` and `w` instead of the more proper `I_^` and `U_^` for dipthongs because they are easier to type. This *mostly* works fine, but it means that, for example, there is no way to distinguish between "lawyer" (like "law" plus "yer" in certain Southern American accents) and "liar".

- The postprocessing system used to add in a bunch of extra rules beyond the basics isn't able to remember what the original intent of a spelling choice was, nor is it able to notice whether a letter sequence is at the beginning or the end of a word, which sometimes matters. As is, this means weird situations can come up that can't be dealt with and spellings look odd or wrong with some frequency.
