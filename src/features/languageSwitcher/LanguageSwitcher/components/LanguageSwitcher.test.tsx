import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTranslationProvider } from '@/shared/lib/testHelpers/unit';

import { LanguageSwitcher } from './LanguageSwitcher';

describe('LanguageSwitcher', () => {
    beforeEach(() => {
        renderWithTranslationProvider(<LanguageSwitcher />);
    });

    test('Должен отображаться на странице', () => {
        const element = screen.getByTestId('LanguageSwitcher');
        expect(element).toBeInTheDocument();
    });

    test('Должен переключить язык с ru на en', async () => {
        const element = screen.getByTestId('LanguageSwitcher');
        expect(element).toHaveTextContent('🇷🇺');

        await userEvent.click(element);
        expect(element).toHaveTextContent('🇺🇸');
    });

    test('Должен переключить язык с en на ru', async () => {
        const element = screen.getByTestId('LanguageSwitcher');
        expect(element).toHaveTextContent('🇺🇸');

        await userEvent.click(element);
        expect(element).toHaveTextContent('🇷🇺');
    });
});
