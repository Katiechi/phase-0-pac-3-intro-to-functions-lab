function shout(string){
    return string.toUpperCase()
}
string("hello")

function whisper(string){
    return string.toLowerCase()
}
string("HELLO")

function logShout(string){
    console.log(string.toUpperCase())
}
logShout('hello')

function logWhisper(string){
    const smallLetters = string.toLowerCase()
    console.log(smallLetters)
}
logWhisper('HELLO')


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return `I can't hear you!`
    }
    else if (string ===string.toUpperCase()) {
      return `YES INDEED!`
    }
    else if (string === `Let's have dinner together!`) {
      return `I would love to!`
    }
  }
  console.log(sayHiToHeadphonedRoommate("hello"))