const writeFile = require('./writeFile')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Hello, how are you?', answer => {
  console.log(answer)
  rl.close()
})
