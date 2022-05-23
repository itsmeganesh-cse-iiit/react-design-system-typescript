import React from 'react'
import Button from './Button'
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'atoms/Button',
  component: Button,
  args: {
    children: 'Button'
  }
} as ComponentMeta<typeof Button>;


const Template:ComponentStory<typeof Button>  = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  // children: 'Primary Args',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  // children: 'Secondary Args',
}
