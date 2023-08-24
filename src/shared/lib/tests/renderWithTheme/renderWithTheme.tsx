import { type ReactNode } from 'react';
import { type RenderResult, render } from '@testing-library/react';

import { ThemeProvider } from '../../theme';

export function renderWithTheme (component: ReactNode): RenderResult {
    return render(
        <ThemeProvider>
            {component}
        </ThemeProvider>
    );
}
