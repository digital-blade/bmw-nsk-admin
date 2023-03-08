import { FC, useMemo } from 'react';

import { LogtoProvider } from '@logto/react';
import { logtoConfig } from 'shared/config/logto';

export const withLogto = (App: FC) => {
  const WithProvider = (props: Record<string, unknown>) => {
    const MemoApp = useMemo(() => App, []);

    return (
      <LogtoProvider config={logtoConfig}>
        <App {...props} />
      </LogtoProvider>
    );
  };

  WithProvider.displayName = 'WithLogtoProvider';

  return WithProvider;
};
