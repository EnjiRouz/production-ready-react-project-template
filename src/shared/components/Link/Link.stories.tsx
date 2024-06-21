import { type Meta, type StoryObj } from '@storybook/react';

import { withTheme } from '@/shared/lib/testHelpers/storybook/decorators';
import { Theme } from '@/shared/lib/theme';

import { Link, type LinkProps } from './Link';

const meta: Meta<LinkProps> = {
    title: 'shared/components/Link',
    component: Link,
    args: {
        children: 'Link',
        to: '/',
        title: '/'
    },
    argTypes: {
        onClick: { action: 'Clicked' }
    }
};

export default meta;
type Story = StoryObj<Meta<LinkProps>>;

export const ColorWhite: Story = {
    args: {
        color: 'white'
    },
    parameters: {
        // фон добавлен, чтобы было видно компонент
        backgrounds: { default: 'dark' }
    }
};

export const ColorWhiteDarkTheme: Story = {
    args: {
        color: 'white'
    },
    decorators: [withTheme(Theme.DARK)],
    parameters: {
        // фон добавлен, чтобы было видно компонент
        backgrounds: { default: 'light' }
    }
};

export const ColorBlue: Story = {
    args: {
        color: 'blue'
    }
};

export const ColorBlueDarkTheme: Story = {
    args: {
        color: 'blue'
    },
    decorators: [withTheme(Theme.DARK)],
    parameters: {
        backgrounds: { default: 'dark' }
    }
};
