const writeFile = require('./writeFile')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Which functions and files would you like to create? Plase seperate by comma.',
  answer => {
    answer
      .split(',')
      .map(name => name.trim())
      .forEach(answer => writeFile(answer))

    rl.close()
  }
)
