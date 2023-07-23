import { FC, memo } from "react";

import { NavigationBar } from "@/widgets/NavigationBar";
import { mixClassNames } from "@/shared/lib/classNameUtils";
import { useTheme } from "@/shared/lib/theme";
import "@/shared/styles";

import { AppRouter } from "./AppRouter/AppRouter";

const loadingStub = <span>Loading...</span>;

export const App: FC = memo(function App() {
  const { theme } = useTheme();

  return (
    <div className={mixClassNames("App", theme)}>
      <NavigationBar />
      <AppRouter />
    </div>
  );
});
