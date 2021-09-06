import type { Locator, Page } from '@playwright/test';

export class WebElement {
  public readonly locator: Locator;
  private selector: string;
  private page: Page;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.locator = page.locator(selector);
    this.selector = selector;
  }

  getSelector() {
    return this.selector;
  }

  async waitForElement(timeout: number = 10000) {
    await this.page.waitForSelector(this.selector, { timeout: timeout });
  }
}
