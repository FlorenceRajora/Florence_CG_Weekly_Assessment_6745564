/*------End-to-End = Register-> open slect product-> open product page -> write complete review and submit it------*/
import { test, expect } from "@playwright/test";
import home from "../project_object_model/sce3homepom.spec";
import login from "../project_object_model/sce3loginpom.spec";
import registration from "../project_object_model/sce3registerpom.spec";
import fs from "fs";
import path from "path";
const filePath = path.resolve(__dirname, "../utility/scenario3.json");
const file_details = JSON.parse(fs.readFileSync(filePath, "utf-8"));

test("Scenario3 - Register + Product Review + Screenshot", async ({ page }) => {

  const h = new home();
  const l = new login();
  const r = new registration();
  const screenshotDir = path.resolve(__dirname, "../screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }
  const email = `user${Date.now()}@gmail.com`;
  await h.load_page(page);
  await h.login(page);
  await l.register1(page, file_details.name);
  await l.register2(page, email);
  await l.registerbutton(page);

  await r.passwordreg(page, file_details.password);
  await r.day(page);
  await r.month(page);
  await r.year(page);

  await r.regname(page, file_details.name);
  await r.reglastname(page, file_details.name);
  await r.regaddress(page, "Address1");
  await r.regaddress2(page, "Address2");
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
  await h.viewmore(page);
  await h.reviewname(page, file_details.reviewname);
  await h.reviewmail(page, email);
  await h.reviewtext(page, file_details.review);
  await h.reviewbutton(page);
  await expect(page.locator("body")).toContainText(/Thank you/i);
  const screenshotPath = path.join(
    screenshotDir,
    `scenario3end-to-end.png`
  );

  await page.screenshot({
    path: screenshotPath,
    fullPage: true
  });

  console.log("Screenshot saved at:", screenshotPath);
});