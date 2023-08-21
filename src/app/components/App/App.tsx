import { type FC, memo } from 'react';

import { Sidebar } from '@/widgets/Sidebar';
import { NavigationBar } from '@/widgets/NavigationBar';
import { getBemClasses } from '@/shared/lib/classNameUtils';
import { useTheme } from '@/shared/lib/theme';
import '@/shared/styles';

import { AppRouter } from '../AppRouter';
import classes from './App.module.scss';

export const App: FC = memo(function App () {
    const { theme } = useTheme();

    return (
        <div className={getBemClasses(classes, '', {}, [theme])}>
            <NavigationBar />
            <div className={getBemClasses(classes, 'PageContent')}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
});
