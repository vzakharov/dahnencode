# About

Convert numbers into easy-to-pronounce phrases with the following characteristics:
* A phrase consists of one more more words separated by dashes.
* Each word consists of up to six letters. (Only the last word can consist of seven letters.)
* Each word is formed of CONSONANT-VOWEL-CONSONANT trigrams.
* Consonants are: `[bcdfghklmnpqrstvwxyz]` (note the absence of `j`).
* Vowels are `[aeiou]`.

Thus, every trigram stores 2000 possible combinations.

# Installation

```
npm install dahnencode
```

# Usage

## Encode

```
import { encode, decode } from 'dahnencode'

console.log( encode(1234567890) )
// 'fam-rufyup'

console.log( encode(new Date('2022-02-01T12:00:00.000Z')) )
// 'dahnen-gabbab'
```

## Decode

```
console.log( decode('dahnen-wowsom') )
// 1643719353368

console.log( new Date(decode('mother-fucker')) )
// Sat Aug 20 2191 16:32:42 GMT+0300 (Moscow Standard Time)
// (Mark the date!)
```

## Why the fuck?

When building/testing, you can now generate IDs that you can actually pronounce. You can also find out which IDs were generated when, either roughly (“Oh, it’s dahne, I remember it was somewhere last month”) or precisely (using decode).

## What does “dahnen”

According to Wikipedia, [Dahnen](https://en.wikipedia.org/wiki/Dahnen) is a municipality in the district of Bitburg-Prüm, in Rhineland-Palatinate, western Germany. However, in this case, the name was chosen just because it was the first word encoded at the time of creation (see second example above).