import { Component, Suspense, type ErrorInfo, type ReactNode } from 'react';
import { UnhandledErrorPage } from '@/pages/UnhandledErrorPage';

interface ErrorBoundaryProps {
    /**
     * Дочерние элементы
     */
    children: ReactNode;
}

interface ErrorBoundaryState {
    /**
     * Признак наличия отловленных ошибок
     */
    hasError: boolean;

    /**
     * Отловленная ошибка
     */
    error?: Error;

    /**
     * Дополнительная информация об ошибке
     */
    errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError (error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
        this.setState(state => ({
            ...state,
            errorInfo
        }));

        console.error(error, errorInfo?.componentStack);
    }

    render (): ReactNode {
        const { hasError, error, errorInfo } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense>
                    <UnhandledErrorPage error={error} errorInfo={errorInfo}/>
                </Suspense>
            );
        }

        return children;
    }
}
