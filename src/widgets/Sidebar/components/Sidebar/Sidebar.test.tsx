import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    beforeEach(() => {
        render(<Sidebar />);
    });

    test('Должен отображаться на странице', () => {
        const element = screen.getByTestId('Sidebar');
        expect(element).toBeInTheDocument();
    });

    test('Должен свернуть панель / изменить иконку на свернутое состояние', async () => {
        const element = screen.getByTestId('Sidebar.CollapseSwitcher');
        await userEvent.click(element);

        const buttonArrow = screen.getByTestId('Sidebar.CollapseSwitcher.ArrowRightIcon');
        expect(buttonArrow).toBeInTheDocument();
    });

    test('Должен свернуть панель и развернуть ее обратно / изменить иконку на свернутое состояние, а затем на развернутое', async () => {
        const element = screen.getByTestId('Sidebar.CollapseSwitcher');

        // сворачивание панели
        await userEvent.click(element);
        let buttonArrow = screen.getByTestId('Sidebar.CollapseSwitcher.ArrowRightIcon');
        expect(buttonArrow).toBeInTheDocument();

        // разворачивание панели
        await userEvent.click(element);
        buttonArrow = screen.getByTestId('Sidebar.CollapseSwitcher.ArrowLeftIcon');
        expect(buttonArrow).toBeInTheDocument();
    });
});
