const fs = require('fs')

const functionName = process.argv[2] ?? 'myFunction'

fs.writeFileSync(
  `./${functionName}.js`,
  `function ${functionName}() {
  
}`
)
