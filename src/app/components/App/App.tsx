import { FC, memo } from "react";

import { NavigationBar } from "@/widgets/NavigationBar";
import { getBemClasses } from "@/shared/lib/classNameUtils";
import { useTheme } from "@/shared/lib/theme";
import "@/shared/styles";
import classes from "./App.module.scss";

import { AppRouter } from "../AppRouter";
import { Sidebar } from "@/widgets/Sidebar";

const loadingStub = <span>Loading...</span>;

export const App: FC = memo(function App() {
  const { theme } = useTheme();

  return (
    <div className={getBemClasses(classes, "", {}, [theme])}>
      <NavigationBar />
      <div className={getBemClasses(classes, "PageContent")}>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
});
