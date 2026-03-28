class registers {

    async load_page(page){
        await page.goto('https://automationexercise.com/');
    }

    async login(page){
        await page.locator('//a[@href="/login"]').click();
    }

    async register1(page, name){
        await page.locator('//input[@data-qa="signup-name"]').fill(name);
    }

    async register2(page, email){
        await page.locator('//input[@data-qa="signup-email"]').fill(email);
    }

    async registerbutton(page){
        await page.locator('//button[@data-qa="signup-button"]').click();
    }

    async passwordreg(page, password){
        await page.locator('//input[@data-qa="password"]').fill(password);
    }

    async day(page){
        await page.locator('//select[@id="days"]').selectOption({ value: "1" });
    }

    async month(page){
        await page.locator('//select[@id="months"]').selectOption({ value: "1" });
    }

    async year(page){
        await page.locator('//select[@id="years"]').selectOption({ value: "2001" });
    }

    async regname(page, name){
        await page.locator('//input[@data-qa="first_name"]').fill(name);
    }

    async reglastname(page, name){
        await page.locator('//input[@data-qa="last_name"]').fill(name);
    }

    async regaddress(page, address){
        await page.locator('//input[@data-qa="address"]').fill(address);
    }

    async regaddress2(page, address){
        await page.locator('//input[@data-qa="address2"]').fill(address);
    }

    async regstate(page, state){
        await page.locator('//input[@data-qa="state"]').fill(state);
    }

    async regcity(page, city){
        await page.locator('//input[@data-qa="city"]').fill(city);
    }

    async regcode(page, code){
        await page.locator('//input[@data-qa="zipcode"]').fill(code);
    }

    async mobileno(page, mobileno){
        await page.locator('//input[@data-qa="mobile_number"]').fill(mobileno);
    }

    async create(page){
        await page.locator('//button[@data-qa="create-account"]').click();
    }

    async continuebutton(page){
        await page.locator('//button[@data-qa="continue-button"]').click();
    }
}

export default registers;