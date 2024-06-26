import { type StoryFn } from '@storybook/react'

import { Theme } from '@/shared/lib/theme';
import '@/shared/styles';

/**
 * Storybook-декоратор для передачи цветовой темы
 * @param theme цветовая тема
 * @returns контейнер истории с цветовой темой
 */
// eslint-disable-next-line react/display-name -- не требуется для декоратора
export const withTheme = (theme: Theme = Theme.LIGHT) => (Story: StoryFn) => (
    <div className={theme}>
        <Story />
    </div>
);
