import { type ReactNode } from 'react';
import { type RenderResult, render } from '@testing-library/react';

import { ThemeProvider } from '../../../theme';

/**
 * Обертка с цветовой темой для тестирования компонентов
 * @param children дочерний компонент
 * @returns компонент, обернутый в провайдер цветовой темы приложения
 */
export function renderWithThemeProvider (children: ReactNode): RenderResult {
    return render(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}
