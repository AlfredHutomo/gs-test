import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './Divider';

export default {
    title: 'Bootstrap/Divider',
    component: Divider,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
    <Divider {...args} />
);

export const Default = Template.bind({});

Default.args = {
    children: 'Label',
    align: 'center',
    lineStyle: 'solid',
    lineWeight: 'regular',
};
