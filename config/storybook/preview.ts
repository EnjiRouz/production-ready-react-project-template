import { withThemeByClassName } from '@storybook/addon-themes';
import { type Preview } from '@storybook/react';

import { withRouter, withStyles } from '../../src/shared/lib/testHelpers/storybook/decorators';
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
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: 'rgb(255 255 255);' // используется цвет var(--color-white-100)
                },
                {
                    name: 'dark',
                    value: 'rgb(27 32 43);' // используется цвет var(--color-gray-300)
                }
            ]
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
        withRouter,
        withStyles({ display: 'inline-block' })
    ]

};

export default preview;
