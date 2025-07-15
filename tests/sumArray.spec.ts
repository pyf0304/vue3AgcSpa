import { test, expect } from '@playwright/test';

test('数组求和测试', async ({ page }) => {
  await page.goto('/');
  const arrayText = await page.textContent('p:nth-of-type(1)');
  const sumText = await page.textContent('p:nth-of-type(2)');

  console.log('arrayText:', arrayText); // 打印实际内容
  console.log('sumText:', sumText); // 打印实际内容
  // 解决方案 1：使用正则表达式
  expect(arrayText).toMatch(/数组:\s*\[\s*1,\s*2,\s*3,\s*4,\s*5\s*\]/);

  // expect(arrayText).toBe('数组: 1,2,3,4,5');
  expect(sumText).toBe('和: 15');
});
