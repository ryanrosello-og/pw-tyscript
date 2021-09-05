import { test, expect } from '@playwright/test';
import { DevPage } from '../pages/dev-page';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
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
