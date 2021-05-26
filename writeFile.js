const fs = require('fs')

function writeFile(name, fileType, fileString) {
  const fileName =
    fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`

  fs.writeFileSync(fileName, fileString)
}

module.exports = writeFile
