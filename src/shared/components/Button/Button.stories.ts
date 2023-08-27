import { type Meta, type StoryObj } from '@storybook/react';

import { withTheme } from '@/shared/lib/testHelpers/storybook/decorators';
import { Theme } from '@/shared/lib/theme';

import { Button, type ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
    title: 'shared/components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'Clicked' }
    }
};

export default meta;
type Story = StoryObj<Meta<ButtonProps>>;

export const Primary: Story = {
    args: {
        children: 'Button',
        title: 'Button',
        color: 'primary',
        isDisabled: false,
        type: 'button'
    }
};

export const PrimaryDarkTheme: Story = {
    args: {
        children: 'Button',
        title: 'Button',
        color: 'primary',
        isDisabled: false,
        type: 'button'
    },
    decorators: [withTheme(Theme.DARK)]
};

export const PrimaryDisabled: Story = {
    args: {
        children: 'Button',
        title: 'Button',
        color: 'primary',
        isDisabled: true,
        type: 'button'
    }
};

export const PrimaryDisabledDarkTheme: Story = {
    args: {
        children: 'Button',
        title: 'Button',
        color: 'primary',
        isDisabled: true,
        type: 'button'
    },
    decorators: [withTheme(Theme.DARK)]
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        title: 'Button',
        color: 'secondary',
        isDisabled: false,
        type: 'button'
    }
};

export const SecondaryDarkTheme: Story = {
    args: {
        children: 'Button',
        title: 'Button',
        color: 'secondary',
        isDisabled: false,
        type: 'button'
    },
    decorators: [withTheme(Theme.DARK)]
};

export const SecondaryDisabled: Story = {
    args: {
        children: 'Button',
        title: 'Button',
        color: 'secondary',
        isDisabled: true,
        type: 'button'
    }
};

export const SecondaryDisabledDarkTheme: Story = {
    args: {
        children: 'Button',
        title: 'Button',
        color: 'secondary',
        isDisabled: true,
        type: 'button'
    },
    decorators: [withTheme(Theme.DARK)]
};
