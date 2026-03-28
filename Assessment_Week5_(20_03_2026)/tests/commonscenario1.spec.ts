import { test, expect } from "@playwright/test";
import registers from "../project_object_model/commonscenario1register.ts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, "../utility/commonscenario1.json");
const file_details = JSON.parse(fs.readFileSync(filePath, "utf-8"));

test("Common Scenario - User Registration", async ({ page }) => {
  const r = new registers();

  const screenshotDir = path.resolve(__dirname, "../screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  const email = `user${Date.now()}@gmail.com`;

  await r.load_page(page);
  await r.login(page);

  await r.register1(page, file_details.newname);
  await r.register2(page, email);
  await r.registerbutton(page);

  await r.passwordreg(page, file_details.newpassword);
  await r.day(page);
  await r.month(page);
  await r.year(page);

  await r.regname(page, file_details.newname);
  await r.reglastname(page, file_details.newname);
  await r.regaddress(page, "Address1");
  await r.regaddress2(page, "Address2");
  await r.regstate(page, file_details.state);
  await r.regcity(page, file_details.city);
  await r.regcode(page, file_details.code);
  await r.mobileno(page, file_details.mobilenumber);

  await r.create(page);

  await expect(
    page.getByRole("heading", { name: /Account Created/i })
  ).toBeVisible();

  const screenshotPath = path.join(
    screenshotDir,
    `commonscenario1.png`
  );

  await page.screenshot({
    path: screenshotPath,
    fullPage: true,
  });

  console.log("Screenshot saved at:", screenshotPath);

  const continueBtn = page.getByRole("link", { name: /continue/i });

  await expect(continueBtn).toBeVisible();

  await Promise.all([
    page.waitForNavigation(),
    continueBtn.click(),
  ]);

  await expect(page.getByText(/Logged in as/i)).toBeVisible();
});