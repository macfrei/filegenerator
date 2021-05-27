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

module.exports = templates
