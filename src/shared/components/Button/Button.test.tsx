import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button', () => {
    test('Должен отображаться на странице', () => {
        const onClick = jest.fn();
        render(<Button title="Button" onClick={onClick} />);

        const element = screen.getByTestId('Button');
        expect(element).toBeInTheDocument();
    });

    test('Должно отрабатывать нажатие на кнопку, если она активна', async () => {
        const onClick = jest.fn();
        render(<Button title="Button" onClick={onClick}/>);

        const element = screen.getByTestId('Button');
        await userEvent.click(element);

        expect(onClick).toBeCalledTimes(1);
    });

    test('Не должно отрабатывать нажатие на кнопку, если включено свойство isDisabled', async () => {
        const onClick = jest.fn();
        render(<Button title="Button" onClick={onClick} isDisabled/>);

        const element = screen.getByTestId('Button');
        await userEvent.click(element);

        expect(onClick).toBeCalledTimes(0);
    });
});
