const writeFile = require('./writeFile')
const inquirer = require('inquirer')
const templates = require('./templates')
const questions = require('./questions')

inquirer.prompt(questions).then(answers => {
  answers.fileTypes.forEach(fileType => {
    const templateFunction = templates[fileType]
    const fileString = templateFunction(answers.name)
    writeFile(answers.name, fileType, fileString)
  })
})
