import { BasePage } from '../pages/basePage';

export class DevPage extends BasePage {
  private toc = this.page.locator('article ul');
  private getStarted = this.page.locator('text=Get started');
  private tradeOffsLearnMore = this.page.locator('a[href*=powerful]');
  private whyPlaywright = this.page.locator('h1:has-text("Why Playwright?")');
  private coreConceptsHeading = this.page.locator(
    'h1:has-text("Core concepts")'
  );

  async getToc() {
    const text = await this.toc.innerText();
    return text.split('\n').filter((line) => !!line);
  }

  async whyPwIsShown() {
    return this.whyPlaywright.isVisible();
  }

  async clickGetStarted() {
    await this.getStarted.click();
    await this.page.waitForSelector(`text=Core concepts`);
  }

  async clickTradeOffs() {
    await this.tradeOffsLearnMore.click();
    await this.page.waitForSelector(`h1:has-text("Why Playwright?")`);
  }

  async goto() {
    super.goto('https://playwright.dev', 'text=Get started');
  }
}
