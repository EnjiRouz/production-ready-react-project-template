import { BrowserRouter } from 'react-router-dom';
import { type Decorator } from '@storybook/react'

/**
 * Storybook-декоратор для работы React-Router
 * @param Story история с компонентом
 */
export const withRouter: Decorator = (Story) => (
    <BrowserRouter>
        <Story/>
    </BrowserRouter>
);
