import {test} from "@playwright/test"

test("task3",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('//input[@id="name"]').fill("Florence ");
    await page.locator('//input[@id="email"]').fill("florence@gmail.com");
    await page.locator('//input[@id="password"]').fill("Flora@15");
    await page.locator('button[type="submit"]').click();
    await page.locator('//input[@id="email"]').fill("florence@gmail.com");
    await page.locator('//input[@id="password"]').fill("Flora@15");
        await page.locator('button[type="submit"]').click();
        await page.screenshot({ path:'screenshot/task3.png'});

});