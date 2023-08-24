import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { App, ErrorBoundary } from '@/app';
import { ThemeProvider } from '@/shared/lib/theme';

import '@/shared/config/i18n';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>
);
