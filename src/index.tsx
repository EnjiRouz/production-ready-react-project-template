import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from '@/shared/lib/theme';
import { App } from "./app";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(    
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);