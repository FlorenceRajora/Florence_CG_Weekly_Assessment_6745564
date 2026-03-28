class home {

    async load_page(page, url){
        await page.goto(url);
    }

    async product1(page){
        await page.locator('(//a[@data-product-id="1"])[1]').click();
    }

    async product2(page){
        await page.locator('(//a[@data-product-id="2"])[1]').click();
    }

    async continueShopping(page){
        const btn = page.getByRole('button', { name: 'Continue Shopping' });
        await btn.waitFor();
        await btn.click();
    }

    async viewcart(page){
        await page.locator('(//a[@href="/view_cart"])[1]').click();
    }
}

export default home;