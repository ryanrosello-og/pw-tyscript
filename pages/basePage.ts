import type { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(route: string, locatorToWaitFor: string) {
    await this.page.goto(route);
    // await this.page.waitForNavigation({ waitUntil: 'networkidle' });
    await this.page.waitForSelector(locatorToWaitFor);
  }
}
