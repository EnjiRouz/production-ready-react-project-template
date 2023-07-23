import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { BaseProps, Button } from "@/shared/components";

export type LanguageSwitcherProps = Omit<BaseProps, "children"> & {};

export const LanguageSwitcher: FC<LanguageSwitcherProps> =
  memo<LanguageSwitcherProps>(function LanguageSwitcher({
    className,
    "data-testid": dataTestId = "LanguageSwitcher",
    ...otherProps
  }) {
    const { t: translate, i18n } = useTranslation();

    const currentLanguage = i18n.language;
    const flag = currentLanguage === "ru" ? "🇷🇺" : "🇺🇸";

    const onToggleLanguage = useCallback(() => {
      i18n.changeLanguage(currentLanguage === "ru" ? "en" : "ru");
    }, [i18n, currentLanguage]);

    return (
      <Button
        title={translate("Переключить язык")}
        onClick={onToggleLanguage}
        className={className}
        data-testid={dataTestId}
        {...otherProps}
      >
        {flag}
      </Button>
    );
  });
