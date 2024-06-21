import { type CSSProperties } from 'react';
import { type StoryFn } from '@storybook/react'

/**
 * Storybook-декоратор для добавления дополнительных стилей контейнеру истории
 * @param styles CSS-стили
 * @returns контейнер истории с дополнительными стилями
 */
// eslint-disable-next-line react/display-name -- не требуется для декоратора
export const withStyles = (styles: CSSProperties = {}) => (Story: StoryFn) => (
    <div className="storybook-root-container" style={styles}>
        <Story />
    </div>
);
