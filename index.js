const writeFile = require('./writeFile')

const functionName = process.argv[2] ?? 'myFunction'

writeFile(functionName)
