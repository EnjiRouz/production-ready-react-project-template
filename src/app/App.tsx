import { FunctionComponent, memo } from "react";

import classes from './App.module.css';

export const App: FunctionComponent = memo(function App() {  
      return <h1 className={classes.App}>APP</h1>;
    }
  );