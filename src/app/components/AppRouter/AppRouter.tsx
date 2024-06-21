import { type FC, Suspense, memo, useMemo, type ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoadingSpinner } from '@/shared/components';

const loadingStub = <LoadingSpinner size="l" color="blue" />;

type AppRouterRouteConfig = Record<string, {
    /**
     * Путь для перехода на страницу
     */
    path: string;

    /**
     * React-компонент для отображения страницы
     */
    element: ReactNode;
}>;

export interface AppRouterProps {
    /**
     * Страницы приложения
     */
    routeConfig: AppRouterRouteConfig,
}

export const AppRouter: FC<AppRouterProps> = memo<AppRouterProps>(
    function AppRouter ({
        routeConfig
    }: AppRouterProps) {
        const routes = useMemo(() => {
            return Object.values(routeConfig).map(({ path, element }) => (
                <Route path={path} element={element} key={path} />
            ));
        }, [routeConfig]);

        return (
            <Suspense fallback={loadingStub}>
                <Routes>{routes}</Routes>
            </Suspense>
        );
    }
);
