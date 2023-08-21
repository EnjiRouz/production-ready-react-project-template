module.exports = function (componentName) {
    return `import { FC, memo, useMemo, useCallback, useRef, useState } from "react";

    import { getBemClasses } from "@/shared/lib/classNameUtils";
    import { BaseProps } from "@/shared/components";
    
    import classes from "./${componentName}.module.scss";
    
    export type ${componentName}Props = BaseProps & {};
    
    export const ${componentName}: FC<${componentName}Props> = memo<${componentName}Props>(function ${componentName}({
      children,
      className,
      "data-testid": dataTestId = "${componentName}",
      ...otherProps
    }: ${componentName}Props) {
      return (
        <div className={getBemClasses(classes, "", {}, [className])} data-testid={dataTestId} {...otherProps}>
          {children}
        </div>
      );
    });
`;
};
