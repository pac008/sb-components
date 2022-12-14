import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/ MyLabel',
    component:MyLabel,
    argTypes: {
        size: { control: 'select'  },
        color: { control: 'select'  },
        fontColor: { control: 'color'  }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory< typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({});
Basic.args = {
    size: 'h3',
    allCaps: true
}
export const AllCaps  = Template.bind({});
AllCaps.args = {
    size: 'h1',
    allCaps: true 
}
export const Secondary = Template.bind({});
Secondary.args = {
    size: 'h1',
    color: 'secondary' 
}
export const Tertiary = Template.bind({});

Tertiary.args = {
    size: 'h1',
    color: 'tertiary' 
}
export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
    size: 'h1',
    // color: 'tertiary',
    fontColor: '#5517ac' 
}
