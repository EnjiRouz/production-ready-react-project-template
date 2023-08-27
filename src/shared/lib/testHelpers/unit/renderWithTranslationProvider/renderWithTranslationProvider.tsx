import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { type RenderResult, render } from '@testing-library/react';

import i18n from '@/shared/config/i18n/i18n.test.config';

export function renderWithTranslationProvider (component: ReactNode): RenderResult {
    return render(
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>
    );
}
