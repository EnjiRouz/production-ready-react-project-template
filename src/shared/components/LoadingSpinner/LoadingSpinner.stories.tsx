import { type Meta, type StoryObj } from '@storybook/react';

import { withDisabledAnimations, withTheme } from '@/shared/lib/testHelpers/storybook/decorators';
import { Theme } from '@/shared/lib/theme';

import { LoadingSpinner, type LoadingSpinnerProps } from './LoadingSpinner';

const meta: Meta<LoadingSpinnerProps> = {
    title: 'shared/components/LoadingSpinner',
    component: LoadingSpinner,
    decorators: [withDisabledAnimations]
};

export default meta;
type Story = StoryObj<Meta<LoadingSpinnerProps>>;

// TODO создать скрипт генерации историй на основе BEM или props
export const ColorPrimarySizeM: Story = {
    args: {
        color: 'blue',
        size: 'm'
    }
};

// TODO написать генератор тестов по props компонента (анализируем props компонента и его возможные значения, а затем фигачим заготовки тестов и story на каждое его состояние)
// TODO сгенерировать истории для разных цветов и размеров
// TODO сгенерировать тесты для иконок
export const PrimaryDarkTheme: Story = {
    args: {
        color: 'blue',
        size: 'm'
    },
    decorators: [withTheme(Theme.DARK)],
    parameters: {
        backgrounds: { default: 'dark' }
    }
};

export const Secondary: Story = {
    args: {
        color: 'white',
        size: 'm'
    },
    parameters: {
        // фон добавлен, чтобы было видно компонент
        backgrounds: { default: 'dark' }
    }
};

export const SecondaryDarkTheme: Story = {
    args: {
        color: 'white',
        size: 'm'
    },
    decorators: [withTheme(Theme.DARK)],
    parameters: {
        backgrounds: { default: 'dark' }
    }
};
