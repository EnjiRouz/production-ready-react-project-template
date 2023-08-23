module.exports = function (componentName) {
    return `import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ${componentName} } from './${componentName}';

let onChange = jest.fn();

describe('${componentName}', () => {
    beforeEach(() => {
        onChange = jest.fn();

        const props = {
        };

        render(<${componentName} onChange={onChange} {...props} />);
    });

    it('Должен TODO', () => {
        const element = document.querySelector('.${componentName}') as Element;
        expect(element).toBeInTheDocument();
    });
});
`;
};
