class login {

    async register1(page, name){
        await page.locator('//input[@data-qa="signup-name"]').fill(name);
    }

    async register2(page, email){
        await page.locator('//input[@data-qa="signup-email"]').fill(email);
    }

    async registerbutton(page){
        await page.locator('//button[@data-qa="signup-button"]').click();
    }

    async loginmail(page, email){
        await page.locator('//input[@data-qa="login-email"]').fill(email);
    }

    async loginpassword(page, password){
        await page.locator('//input[@data-qa="login-password"]').fill(password);
    }

    async loginbutton(page){
        await page.locator('//button[@data-qa="login-button"]').click();
    }
}

export default login;