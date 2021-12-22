import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from '.'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Icon',
  component: Icon,
  args: {
    //👇 Now all Icon stories will be primary.
    icon: 'coffee',
    size: '10x'
  }
} as ComponentMeta<typeof Icon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  theme: 'success'
}
