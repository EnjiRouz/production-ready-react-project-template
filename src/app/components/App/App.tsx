import { type FC, memo } from 'react';

import { routeConfig } from '@/app/configs';
import { getBemClasses } from '@/shared/lib/classNameUtils';
import { useTheme } from '@/shared/lib/theme';
import { NavigationBar } from '@/widgets/NavigationBar';
import { Sidebar } from '@/widgets/Sidebar';
import '@/shared/styles';

import { AppRouter } from '../AppRouter';

import classes from './App.module.scss';

export const App: FC = memo(function App () {
    const { theme } = useTheme();

    return (
        <div className={getBemClasses(classes, '', {}, [theme])}>
            <NavigationBar routeConfig={routeConfig} />
            <div className={getBemClasses(classes, 'PageContent')}>
                <Sidebar />
                <AppRouter routeConfig={routeConfig} />
            </div>
        </div>
    );
});
