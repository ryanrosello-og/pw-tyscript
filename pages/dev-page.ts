import { BasePage } from './base-page';
import { WebElement } from './webelement';

export class DevPage extends BasePage {
  private toc = new WebElement(this.page, 'article ul');
  private getStarted = new WebElement(this.page, 'text=Get started');
  private tradeOffsLearnMore = new WebElement(this.page, 'a[href*=powerful]');
  private whyPlaywright = new WebElement(
    this.page,
    'h1:has-text("Why Playwright?")'
  );
  private coreConceptsHeading = new WebElement(
    this.page,
    'h1:has-text("Core concepts")'
  );

  async getToc() {
    const text = await this.toc.locator.innerText();
    return text.split('\n').filter((line) => !!line);
  }

  async whyPwIsShown() {
    return this.whyPlaywright.locator.isVisible();
  }

  async clickGetStarted() {
    await this.getStarted.locator.click();
    await this.page.waitForSelector(`text=Core concepts`);
  }

  async clickTradeOffs() {
    await this.tradeOffsLearnMore.locator.click();
    await this.whyPlaywright.waitForElement();
  }

  async goto() {
    super.goto('https://playwright.dev', 'text=Get started');
  }
}
