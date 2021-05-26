const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const templates = {
  component: name =>
    `
  import styled from 'styled-components/macro'
    
  export default function ${name} () {
      return <div>${name}</div>
  }
        `,
  spec: name =>
    `
  import {render, screen} from '@testing-library/react'
  import ${name} from './${name}'
    
  describe('${name}', () => {
      it('renders', () => {
          render(<${name} />)
          expect(screen.getByText('${name}')).toBeInTheDocument()
      })
  })
        `,
  stories: name =>
    `
  import ${name} from './${name}'
  export default {
      title: '${name}',
      component: ${name}
  }
    
  const Template = args => <${name} {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
        `,
}

const questions = [
  {
    type: 'input',
    name: 'name',
    message:
      'Which functions and files would you like to create? Plase seperate by comma.',
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

inquirer.prompt(questions).then(answers => {
  // answers = { name: 'Header', fileTypes: ['component', 'spec']}

  // iterate over fileTypes array from answer
  answers.fileTypes.forEach(fileType => {
    // get value (our template function) from each fileType
    const templateFunction = templates[fileType]
    // call function and save string
    const fileString = templateFunction(answers.name)
    writeFile(answers.name, fileType, fileString)
  })
})
