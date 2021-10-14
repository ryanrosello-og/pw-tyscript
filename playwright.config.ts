// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'https://playwright.dev',
    trace:'on'
  },
};
export default config;
