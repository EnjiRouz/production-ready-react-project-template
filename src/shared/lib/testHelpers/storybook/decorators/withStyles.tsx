import { type CSSProperties } from 'react';
import { type StoryFn } from '@storybook/react'

/**
 * Storybook-декоратор для добавления дополнительных стилей контейнеру истории
 * @param Story история с компонентом
 */
// eslint-disable-next-line react/display-name -- не требуется для декоратора
export const withStyles = (styles: CSSProperties = {}) => (Story: StoryFn) => (
    <div className="storybook-root-container" style={styles}>
        <Story />
    </div>
);
