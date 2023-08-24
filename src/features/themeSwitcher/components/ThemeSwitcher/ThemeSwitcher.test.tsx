import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '@/shared/lib/tests/renderWithTheme';

import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
    beforeEach(() => {
        renderWithTheme(<ThemeSwitcher />);
    });

    test('Должен отображаться на странице', () => {
        const element = screen.getByTestId('ThemeSwitcher');
        expect(element).toBeInTheDocument();
    });

    test('Должен переключить тему на темную', async () => {
        const element = screen.getByTestId('ThemeSwitcher');
        await userEvent.click(element);

        const themeIcon = screen.getByTestId('ThemeSwitcher.SunIcon');
        expect(themeIcon).toBeInTheDocument();
    });

    test('Должен переключить тему на светлую', async () => {
        const element = screen.getByTestId('ThemeSwitcher');

        // переключение на темную тему
        await userEvent.click(element);

        // переключение на светлую тему
        await userEvent.click(element);

        const themeIcon = screen.getByTestId('ThemeSwitcher.MoonIcon');
        expect(themeIcon).toBeInTheDocument();
    });
});
