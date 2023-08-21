import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { type BaseProps, Button } from '@/shared/components';

export type LanguageSwitcherProps = Omit<BaseProps, 'children'>;

export const LanguageSwitcher: FC<LanguageSwitcherProps> =
  memo<LanguageSwitcherProps>(function LanguageSwitcher ({
      className,
      'data-testid': dataTestId = 'LanguageSwitcher'
  }: LanguageSwitcherProps) {
      const { t: translate, i18n } = useTranslation();

      const currentLanguage = i18n.language;
      const flag = currentLanguage === 'ru' ? '🇷🇺' : '🇺🇸';

      const onToggleLanguage = useCallback(() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises -- использование согласно документации i18next
          i18n.changeLanguage(currentLanguage === 'ru' ? 'en' : 'ru');
      }, [i18n, currentLanguage]);

      return (
          <Button
              title={translate('Переключить язык')}
              onClick={onToggleLanguage}
              className={className}
              data-testid={dataTestId}
          >
              {flag}
          </Button>
      );
  });
