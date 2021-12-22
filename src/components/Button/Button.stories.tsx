import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  args: {
    //👇 Now all Button stories will be primary.
    children: 'Button'
  }
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  btnType: 'default'
}
export const Primary = Template.bind({})
Primary.args = {
  btnType: 'primary'
}

export const circle = Template.bind({})
circle.args = {
  size: 'lg',
  circle: true
}
export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: '123',
  btnType: 'link'
}
export const Small = Template.bind({})
Small.args = {
  size: 'sm'
}
