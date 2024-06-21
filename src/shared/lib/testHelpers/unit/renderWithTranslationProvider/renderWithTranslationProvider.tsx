import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { type RenderResult, render } from '@testing-library/react';

import i18n from '@/shared/config/i18n/i18n.test.config';

/**
 * Обертка с переводами для тестирования компонентов
 * @param children дочерний компонент
 * @returns компонент, обернутый в провайдер переводов
 */
export function renderWithTranslationProvider (children: ReactNode): RenderResult {
    return render(
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}
