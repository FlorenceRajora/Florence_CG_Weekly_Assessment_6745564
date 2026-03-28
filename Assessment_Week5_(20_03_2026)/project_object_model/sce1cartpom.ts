class cart {

    async checkout(page){
        await page.locator('//a[@class="btn btn-default check_out"]').click();
    }

    async placeorder(page){
        await page.locator('//a[@href="/payment"]').click();
    }

    async cardname(page, cardna){
        await page.locator('//input[@name="name_on_card"]').fill(cardna);
    }

    async cardnumber(page, cardno){
        await page.locator('//input[@name="card_number"]').fill(cardno);
    }

    async cvc(page, cvc){
        await page.locator('//input[@name="cvc"]').fill(cvc);
    }

    async expirymonth(page, month){
        await page.locator('//input[@name="expiry_month"]').fill(month);
    }

    async expiryyear(page, year){
        await page.locator('//input[@name="expiry_year"]').fill(year);
    }

    async pay(page){
        await page.locator('//button[@data-qa="pay-button"]').click();
    }
}

export default cart;