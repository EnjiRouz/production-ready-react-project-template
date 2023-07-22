import { FC, memo } from "react";

import { NavigationBar } from "@/widgets/NavigationBar";
import { classNames } from "@/shared/lib/classNames";
import { useTheme } from "@/shared/lib/theme";
import '@/shared/styles';

import { AppRouter } from "./AppRouter";

const loadingStub = <span>Loading...</span>;

export const App: FC = memo(function App() { 
    const { theme, toggleTheme } = useTheme();
  
    return (
      <div className={classNames("App", {}, [theme])}>
        <button onClick={toggleTheme}>Изменить тему</button>
        <NavigationBar />
        <AppRouter/>
      </div>
    );
  }
);