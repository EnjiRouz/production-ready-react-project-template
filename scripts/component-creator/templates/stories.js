module.exports = function (componentName, componentFilePath) {
    return `import { type Meta, type StoryObj } from '@storybook/react';

    import { withTheme } from '@/shared/lib/testHelpers/storybook/decorators';
    import { Theme } from '@/shared/lib/theme';
    
    import { ${componentName}, type ${componentName}Props } from './${componentName}';
    
    const meta: Meta<${componentName}Props> = {
        title: '${componentFilePath}/${componentName}',
        component: ${componentName},
        argTypes: {
            onClick: { action: 'Clicked' }
        }
    };
    
    export default meta;
    type Story = StoryObj<Meta<${componentName}Props>>;
    
    export const Primary: Story = {
        args: {
            primary: true,
        },
        decorators: [withTheme(Theme.DARK)],
        parameters: {
            backgrounds: { default: 'dark' }
        }
    };
`;
};
