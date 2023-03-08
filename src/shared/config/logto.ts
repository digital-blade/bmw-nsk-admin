import { LogtoConfig as LogtoConfigBase } from '@logto/react';

export type LogtoConfig = LogtoConfigBase & { baseUrl: string };

export const logtoConfig: LogtoConfig = {
  endpoint: import.meta.env.VITE_LOGTO_ENDPOINT,
  appId: import.meta.env.VITE_LOGTO_APP_ID,
  baseUrl: import.meta.env.VITE_LOGTO_BASE_URL,
};
