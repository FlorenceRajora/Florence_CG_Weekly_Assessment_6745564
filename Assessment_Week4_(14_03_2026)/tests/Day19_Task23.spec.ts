import { test, expect } from "@playwright/test";
import jsondata from "../testdata/products.json";

test("Amazon product search validation", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  const search = page.locator("input#twotabsearchtextbox");
  const data = Object.values(jsondata);

  for (const item of data) {
    await search.fill(item);
    await page.keyboard.press("Enter");

    const firstItem = page
      .locator('//div[@data-component-type="s-search-result"]//img')
      .first();

    const [page2] = await Promise.all([
      page.waitForEvent("popup"),
      firstItem.click(),
    ]);

    const prodTitle = page2.locator('//span[@id="productTitle"]');

    const prodRating = page2
      .locator('//*[@id="acrPopover"]/span/a/span')
      .first();

    const prodPrice = page2
      .locator(
        '//div[@class="a-section a-spacing-none aok-align-center aok-relative apex-core-price-identifier"]//span[@class="a-price-whole"]'
      )
      .first();

    await expect(prodTitle).toBeVisible();
    await expect(prodRating).toBeVisible();
    await expect(prodPrice).toBeVisible();

    console.log(await prodTitle.textContent());
    console.log(await prodRating.textContent());
    console.log(await prodPrice.textContent());

    await page2.close();
  }
});