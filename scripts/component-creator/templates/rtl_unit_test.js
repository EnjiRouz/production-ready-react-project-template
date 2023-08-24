module.exports = function (componentName) {
    return `import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ${componentName} } from './${componentName}';

let onClick = jest.fn();

describe('${componentName}', () => {
    beforeEach(() => {
        onClick = jest.fn();

        const props = {
        };

        render(<${componentName} onClick={onClick} {...props} />);
    });

    test('Должен TODO', async () => {
        const element = screen.getByTestId('${componentName}');
        expect(element).toBeInTheDocument();

        await userEvent.click(element);
        expect(onClick).toBeCalledTimes(1);
    });
});
`;
};
