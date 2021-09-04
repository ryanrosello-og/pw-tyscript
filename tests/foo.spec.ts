import { test, expect } from '@playwright/test';
import { DevPage } from '../pages/devPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('basic test', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test('dev Page', async ({ page }) => {
  const pwDevPage = new DevPage(page);
  await pwDevPage.goto();
  await pwDevPage.clickGetStarted();
  // expect(await pwDevPage.getToc()).toEqual([
  //   'Installation',
  //   'Usage',
  //   'First script',
  //   'Record scripts',
  //   'TypeScript support',
  //   'System requirements',
  //   'Release notes',
  // ]);
});

test('Core Concepts table of contents', async ({ page }) => {
  // const playwrightDev = new DevPage(page);
  // await playwrightDev.goto();

  const pwDevPage = new DevPage(page);
  await pwDevPage.goto();
  // await playwrightDev.clickTradeOffs();
  //expect(await playwrightDev.whyPwIsShown()).toBeTruthy();
});