import { test, expect } from '@playwright/test';
import { DevPage } from '../pages/devPage';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('basic test', async ({ page }) => {
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
  const pwDevPage = new DevPage(page);
  await pwDevPage.goto();
  await pwDevPage.clickTradeOffs();
  expect(await pwDevPage.whyPwIsShown()).toBeTruthy();
});
