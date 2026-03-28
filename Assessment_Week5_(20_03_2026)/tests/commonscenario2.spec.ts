/* add products into cart */
import { test, expect } from "@playwright/test";
import home from "../project_object_model/commonscenario2home.ts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, "../utility/commonscenario2.json");
const file_details = JSON.parse(fs.readFileSync(filePath, "utf-8"));

test("Common Scenario - Add Products to Cart + Screenshot", async ({ page }) => {

  const h = new home();

  const screenshotDir = path.resolve(__dirname, "../screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  await h.load_page(page, file_details.url);

  await h.product1(page);
  await h.continueShopping(page);

  await h.product2(page);
  await h.continueShopping(page);

  await h.viewcart(page);

  await expect(page.locator("body")).toContainText(/Shopping Cart/i);

  const screenshotPath = path.join(
    screenshotDir,
    `commonscenario2.png`
  );

  await page.screenshot({
    path: screenshotPath,
    fullPage: true
  });

  console.log("Screenshot saved at:", screenshotPath);
});