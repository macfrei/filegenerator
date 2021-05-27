const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your component?',
    validate(answer) {
      const commaSeperated = answer.split(',')
      const spaceSeperated = answer.split(' ')
      if (commaSeperated.length > 1 || spaceSeperated.length > 1) {
        return 'You can only create one component at a time.'
      }
      const firstLetter = answer.trim().split('')[0]
      if (firstLetter !== firstLetter.toUpperCase()) {
        return 'The first letter of a react component needs to be in upper case.'
      }
      return true
    },
  },
  {
    type: 'checkbox',
    message: 'Plase select a file type',
    name: 'fileTypes',
    choices: [{ name: 'component' }, { name: 'spec' }, { name: 'stories' }],
    validate(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one file type.'
      }
      return true
    },
  },
]

module.exports = questions
