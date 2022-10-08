import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
        + '                Consequatur quisquam accusamus odio vero, sed similique quaerat\n'
        + '                doloribus quae quod voluptatem, sapiente eveniet at totam magni\n'
        + '                minus? Sequi itaque sapiente est.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
        + '                Consequatur quisquam accusamus odio vero, sed similique quaerat\n'
        + '                doloribus quae quod voluptatem, sapiente eveniet at totam magni\n'
        + '                minus? Sequi itaque sapiente est.',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];