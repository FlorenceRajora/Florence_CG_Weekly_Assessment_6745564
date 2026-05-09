import {test,expect} from "@playwright/test";
class home {

    async load_page(page){
        await page.goto('https://automationexercise.com/');
    }

    async login(page){
        await page.locator('//a[@href="/login"]').click();
    }

    async product1(page){
        await page.locator('(//a[contains(text(),"Add to cart")])[1]').click();
    }

    async product2(page){
        await page.locator('(//a[contains(text(),"Add to cart")])[3]').click();
    }

    async product3(page){
        await page.locator('(//a[@data-product-id="3"])[1]').click();
    }

    async viewcart(page){
        await page.locator('(//a[@href="/view_cart"])[1]').click();
    }
}

export default home;