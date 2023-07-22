import { FC, Suspense, memo } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { useTheme } from "../theme";
import { PAGES } from "./constants";
import '../styles/index.scss';

const loadingStub = <span>Loading...</span>;

export const App: FC = memo(function App() { 
    const { main, about } = PAGES;
    const { theme, toggleTheme } = useTheme();
  
    return (
      // TODO подключить BEM
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>Изменить тему</button>

        <Link to={main.path}>Main</Link>
        <Link to={about.path}>About</Link>

        <Suspense fallback={loadingStub}>
          <Routes>
            <Route path={about.path} element={about.element} />
            <Route path={main.path} element={main.element} />
          </Routes>
        </Suspense>
      </div>
    );
  }
);