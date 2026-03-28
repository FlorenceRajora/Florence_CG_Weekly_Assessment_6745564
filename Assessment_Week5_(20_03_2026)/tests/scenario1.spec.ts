/*------End-to-End=Register->add-items into cart->view cart -> complete checkout-------*/
import { test, expect } from "@playwright/test";
import home from "../project_object_model/sce1homepom.ts";
import login from "../project_object_model/sce1loginpom.ts";
import registration from "../project_object_model/sce1registerpom.ts";
import cart from "../project_object_model/sce1cartpom.ts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, "../utility/scenario1.json");
const file_details = JSON.parse(fs.readFileSync(filePath, "utf-8"));

test("E2E Shopping Flow with Screenshot", async ({ page }) => {

  const h = new home();
  const l = new login();
  const r = new registration();
  const c = new cart();
  const screenshotDir = path.resolve(__dirname, "../screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  const email = `user${Date.now()}@gmail.com`;

  const email = `user${Date.now()}@gmail.com`;

  await h.load_page(page);

  await h.login(page);

  await l.register1(page, file_details.newname);
  await l.register2(page, email);
  await l.registerbutton(page);

  await r.passwordreg(page, file_details.newpassword);
  await r.day(page);
  await r.month(page);
  await r.year(page);

  await r.regname(page, file_details.newname);
  await r.reglastname(page, file_details.newname);
  await r.regaddress(page, "Address Line 1");
  await r.regaddress2(page, "Address Line 2");
  await r.regstate(page, file_details.state);
  await r.regcity(page, file_details.city);
  await r.regcode(page, file_details.code);
  await r.mobileno(page, file_details.mobilenumber);

  await r.create(page);

  await expect(
    page.getByRole('heading', { name: /Account Created/i })
  ).toBeVisible();
  const continueBtn = page.getByRole('link', { name: /continue/i });

  if (await continueBtn.isVisible()) {
    await continueBtn.click();
  }

  await page.waitForLoadState("networkidle");

  await h.product1(page);
  await h.product2(page);

  await h.viewcart(page);

  await c.checkout(page);
  await c.placeorder(page);

  await c.cardname(page, file_details.cardname);
  await c.cardnumber(page, file_details.cardno);
  await c.cvc(page, file_details.cvcno);
  await c.expirymonth(page, "12");
  await c.expiryyear(page, "2026");
  await c.pay(page);

  await expect(page.locator("body")).toContainText(/Order/i);

  const screenshotPath = path.join(screenshotDir,`scenario1end-to-end.png`
  );

  await page.screenshot({
    path: screenshotPath,
    fullPage: true
  });

  console.log("Screenshot saved at:", screenshotPath);
});