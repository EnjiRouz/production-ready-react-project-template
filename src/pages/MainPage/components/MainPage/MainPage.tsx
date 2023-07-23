import { FunctionComponent, memo } from "react";
import { getBemClasses } from "@/shared/lib/classNameUtils";
import classes from "./MainPage.module.scss";

const MainPage: FunctionComponent = memo(function MainPage() {
  return <div className={getBemClasses(classes)}>MainPage</div>;
});

export default MainPage;
