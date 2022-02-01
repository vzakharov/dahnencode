function encode(number) {
  const letters = [
    'bcdfghklmnpqrstvwxyz',
    'aeiou',
    'bcdfghklmnpqrstvwxyz'
  ]
  
  let index = letters.length - 1
  let divider = 1

  while ( number >= divider * letters[index].length ) {
    divider *= letters[index].length
    index = index ? index - 1 : letters.length - 1
  }

  let word = ''
  
  while ( divider >= 1) {
    let division = Math.floor( number / divider )
    let remainder = number % divider

    word += letters[index][division]
    number = remainder
    index = ( index + 1 ) % letters.length
    divider /= letters[index].length
  }

  let reverse = s => s.split("").reverse().join("")

  word = reverse(reverse(word).replace(/.{6}(?=.{2,}$)/g, '$&-'))

  return word
}

function decode(text) {
  const letters = [
    'bcdfghklmnpqrstvwxyz',
    'aeiou',
    'bcdfghklmnpqrstvwxyz'
  ]
  text = text.replace(/[^bcdfghklmnpqrstvwxyzaeiou]/,'')
  let index = 0  
  let multiplier = 1
  let number = 0
  for (let i = text.length - 1; i >= 0 ; i--) {
    number += letters[index].indexOf(text[i]) * multiplier
    multiplier *= letters[index].length
    index = ++index % letters.length
  }
  return number
}

export {
  encode, decode
}