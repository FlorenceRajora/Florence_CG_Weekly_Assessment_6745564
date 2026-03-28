class contact {

    async supportname(page, name){
        await page.locator('//input[@data-qa="name"]').fill(name);
    }

    async supportemail(page, email){
        await page.locator('//input[@data-qa="email"]').fill(email);
    }

    async supportsubject(page, subject){
        await page.locator('//input[@data-qa="subject"]').fill(subject);
    }

    async supportmessage(page, message){
        await page.locator('//textarea[@data-qa="message"]').fill(message);
    }

    async uploadfile(page, filepath){
        await page.locator('//input[@name="upload_file"]').setInputFiles(filepath);
    }

    async suppsubmit(page){
        await page.locator('//input[@data-qa="submit-button"]').click();
    }
}

export default contact;