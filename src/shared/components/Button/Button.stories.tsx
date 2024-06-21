import { type Meta, type StoryObj } from '@storybook/react';

import { withTheme } from '@/shared/lib/testHelpers/storybook/decorators';
import { Theme } from '@/shared/lib/theme';

import { Button, type ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
    title: 'shared/components/Button',
    component: Button,
    args: {
        children: 'Button',
        title: 'Button',
        type: 'button'
    },
    argTypes: {
        onClick: { action: 'Clicked' }
    }
};

export default meta;
type Story = StoryObj<Meta<ButtonProps>>;

export const ColorWhite: Story = {
    args: {
        color: 'white',
        isDisabled: false
    },
    parameters: {
        // фон добавлен, чтобы было видно компонент
        backgrounds: { default: 'dark' }
    }
};

export const ColorWhiteDarkTheme: Story = {
    args: {
        color: 'white',
        isDisabled: false
    },
    decorators: [withTheme(Theme.DARK)],
    parameters: {
        // фон добавлен, чтобы было видно компонент
        backgrounds: { default: 'dark' }
    }
};

export const ColorWhiteDisabled: Story = {
    args: {
        color: 'white',
        isDisabled: true
    }
};

export const ColorWhiteDisabledDarkTheme: Story = {
    args: {
        color: 'white',
        isDisabled: true
    },
    decorators: [withTheme(Theme.DARK)],
    parameters: {
        backgrounds: { default: 'dark' }
    }
};

export const ColorBlue: Story = {
    args: {
        color: 'blue',
        isDisabled: false
    }
};

export const ColorBlueDarkTheme: Story = {
    args: {
        color: 'blue',
        isDisabled: false
    },
    decorators: [withTheme(Theme.DARK)],
    parameters: {
        backgrounds: { default: 'dark' }
    }
};

export const ColorBlueDisabled: Story = {
    args: {
        color: 'blue',
        isDisabled: true
    }
};

export const ColorBlueDisabledDarkTheme: Story = {
    args: {
        color: 'blue',
        isDisabled: true
    },
    decorators: [withTheme(Theme.DARK)],
    parameters: {
        backgrounds: { default: 'dark' }
    }
};
