const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'file',
    message:
      'Which functions and files would you like to create? Plase seperate by comma.',
  },
]

inquirer.prompt(questions).then(answers => {
  // answers is an object: { file: 'header, footer' }
  const files = answers['file'].split(',').map(el => el.trim())
  files.forEach(file => writeFile(file))
  console.log(files)
})
