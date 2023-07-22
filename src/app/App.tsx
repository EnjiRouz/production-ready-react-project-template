import { FunctionComponent, Suspense, memo } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { LazyMainPage } from "../pages/MainPage";
import { LazyAboutPage } from "../pages/AboutPage";

import { PageData } from "./types";
import classes from './App.module.css';

const pages: Record<string, PageData> = {
  main: {
    path: '/',
    element: <LazyMainPage />
  },
  about: {
    path: '/about',
    element: <LazyAboutPage />
  },
}

const loadingStub = <span>Loading...</span>;

export const App: FunctionComponent = memo(function App() {  
    return (
      <div className={classes.App}>
        <Link to={pages.main.path}>Main</Link>
        <Link to={pages.about.path}>About</Link>
        
        <Suspense fallback={loadingStub}>
          <Routes>
            <Route path={pages.about.path} element={pages.about.element} />
            <Route path={pages.main.path} element={pages.main.element} />
          </Routes>
        </Suspense>
      </div>
    );
  }
);