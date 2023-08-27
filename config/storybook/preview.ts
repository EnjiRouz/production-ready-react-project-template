import { withThemeByClassName } from '@storybook/addon-themes';
import { type Preview } from '@storybook/react';

import { withRouter } from '../../src/shared/lib/testHelpers/storybook/decorators';
import { Theme } from '../../src/shared/lib/theme';
import '../../src/shared/styles';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            },
            expanded: true,
            sort: 'requiredFirst'
        },
        docs: {
            toc: true,
            source: {
                state: 'open',
                excludeDecorators: true
            }
        }
    },
    decorators: [
        withThemeByClassName({
            themes: {
                light: Theme.LIGHT,
                dark: Theme.DARK
            },
            defaultTheme: 'light'
        }),
        withRouter
    ]

};

export default preview;
