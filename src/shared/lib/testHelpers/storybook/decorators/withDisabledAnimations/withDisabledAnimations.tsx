import { type StoryFn, type Decorator } from '@storybook/react';

import './withDisabledAnimations.scss';

/**
 * Storybook-декоратор для отключения анимаций компонентов и каретки в полях ввода
 * @param Story история с компонентом
 * @returns контейнер истории с отключенными анимациями
 */
export const withDisabledAnimations: Decorator = (Story: StoryFn) => (
    <Story />
);
