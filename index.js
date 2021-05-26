const writeFile = require('./writeFile')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Which functions and files would you like to create? Plase seperate by comma.',
  answer => {
    // 'answer' is a string with comma seperated words
    // for each word we want to execute writeFile
    //writeFile(answer)

    console.log(answer)
    rl.close()
  }
)
