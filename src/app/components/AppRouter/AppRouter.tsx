import { type FC, Suspense, memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '@/shared/config/routeConfig';

const loadingStub = <span>Loading...</span>;

export const AppRouter: FC = memo(function AppRouter () {
    const routes = useMemo(() => {
        return Object.values(routeConfig).map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
        ));
    }, []);

    return (
        <Suspense fallback={loadingStub}>
            <Routes>{routes}</Routes>
        </Suspense>
    );
});
