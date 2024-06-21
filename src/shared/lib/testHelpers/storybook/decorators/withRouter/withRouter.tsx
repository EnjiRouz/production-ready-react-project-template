import { BrowserRouter } from 'react-router-dom';
import { type Decorator } from '@storybook/react'

/**
 * Storybook-декоратор для работы React-Router
 * @param Story история с компонентом
 * @returns контейнер истории с Router
 */
export const withRouter: Decorator = (Story) => (
    <BrowserRouter>
        <Story/>
    </BrowserRouter>
);
