import { FunctionComponent, memo } from "react";
import { getBemClasses } from "@/shared/lib/classNameUtils";
import classes from "./AboutPage.module.scss";

const AboutPage: FunctionComponent = memo(function AboutPage() {
  return <div className={getBemClasses(classes)}>AboutPage</div>;
});

export default AboutPage;
