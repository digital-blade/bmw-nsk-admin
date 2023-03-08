import flowRight from 'lodash/flowRight';

import { withLogto } from './with-logto';
import { withStrictMode } from './with-strict-mode';

export const withProviders = flowRight(withStrictMode, withLogto);
