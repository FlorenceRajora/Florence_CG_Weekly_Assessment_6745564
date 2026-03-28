class home {

    async load_page(page){
        await page.goto('https://automationexercise.com/');
    }

    async login(page){
        await page.locator('//a[@href="/login"]').click();
    }

    async product1(page){
        await page.locator('(//a[@data-product-id="1"])[1]').click();
    }

    async product2(page){
        await page.locator('(//a[@data-product-id="2"])[1]').click();
    }

    async product3(page){
        await page.locator('(//a[@data-product-id="3"])[1]').click();
    }

    async contactus(page){
        await page.locator('//a[@href="/contact_us"]').click();
    }
}
export default home;