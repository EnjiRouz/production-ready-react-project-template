import { type FC, memo, useCallback, type ErrorInfo } from 'react';
import { useTranslation } from 'react-i18next';

import { getBemClasses } from '@/shared/lib/classNameUtils';
import { Button, type BaseProps } from '@/shared/components';

// импорт стилей на случай падения работы слоя App
import { useInvertedTheme } from '@/shared/lib/theme';
import '@/shared/styles';

import classes from './UnhandledErrorPage.module.scss';

export type UnhandledErrorPageProps = Omit<BaseProps, 'children'> & {
    /**
     * Отловленная ошибка
     * @default ''
     */
    error?: Error;

    /**
     * Дополнительная информация об ошибке
     * @default ''
     */
    errorInfo?: ErrorInfo;
};

export const UnhandledErrorPage: FC<UnhandledErrorPageProps> = memo<UnhandledErrorPageProps>(function UnhandledErrorPage ({
    error,
    errorInfo,
    className,
    'data-testid': dataTestId = 'UnhandledErrorPage'
}: UnhandledErrorPageProps) {
    const { theme } = useInvertedTheme();

    const { t: translate } = useTranslation();
    const buttonText = translate('Обновить страницу');

    const reloadPage = useCallback(() => {
        location.reload();
    }, []);

    const errorMessage = error.toString();
    const errorStackTrace = errorInfo?.componentStack;

    return (
        <div className={getBemClasses(classes, '', {}, [className, theme])} data-testid={dataTestId}>
            <h1 className={getBemClasses(classes, 'title')}>{translate('Произошла непредвиденная ошибка')}</h1>
            <details className={getBemClasses(classes, 'details')}>
                <summary>{translate('Подробнее об ошибке')}</summary>
                {errorMessage}
                <br />
                {errorStackTrace}
            </details>

            <Button title={buttonText} onClick={reloadPage}>{buttonText}</Button>
        </div>
    );
});
