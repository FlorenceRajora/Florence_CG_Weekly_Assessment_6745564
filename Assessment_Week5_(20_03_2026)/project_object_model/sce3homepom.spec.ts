class home {

    async load_page(page){
        await page.goto('https://automationexercise.com/');
    }

    async login(page){
        await page.locator('//a[@href="/login"]').click();
    }

    async viewmore(page){
        await page.locator('//a[@href="/product_details/1"]').click();
    }

    async reviewname(page, name){
        await page.locator('//input[@id="name"]').fill(name);
    }

    async reviewmail(page, mail){
        await page.locator('//input[@id="email"]').fill(mail);
    }

    async reviewtext(page, reviewdata){
        await page.locator('//textarea[@id="review"]').fill(reviewdata); // ✅ FIX
    }

    async reviewbutton(page){
        await page.locator('//button[@id="button-review"]').click();
    }
}

export default home;