import { test, expect } from "@playwright/test"
import fs from "fs"
import path from "path"

test.setTimeout(120000)

let data = JSON.parse(
  fs.readFileSync(path.join(__dirname,"../testdata/bookUser.json"),"utf-8")
)

test("Login → Add Book → Verify → Logout", async ({ page }) => {

for (const d of data) {

await page.goto("https://demoqa.com/books")
await page.waitForLoadState("domcontentloaded")

await page.getByRole("button",{name:"Login"}).click()
await page.getByRole("button",{name:"New User"}).click()

await page.fill("#firstname", d.firstName)
await page.fill("#lastname", d.lastName)
await page.fill("#userName", d.username)
await page.fill("#password", d.password)

console.log("Solve captcha manually and click Register")

await page.pause()

await page.goto("https://demoqa.com/login")
await page.waitForLoadState("domcontentloaded")

await page.fill("#userName","testuser")
await page.fill("#password","Test@123")

await Promise.all([
  page.waitForNavigation(),
  page.click("#login")
])

await expect(page).toHaveURL(/profile/)
console.log("Login successful")

await page.goto("https://demoqa.com/books")
await page.waitForLoadState("domcontentloaded")

await page.fill("#searchBox", d.book)

const bookTitle = page.getByText(d.book).first()
await expect(bookTitle).toBeVisible()

await bookTitle.click()

page.once("dialog", async dialog => {
console.log(dialog.message())
await dialog.accept()
})

await page.getByRole("button",{name:"Add To Your Collection"}).click()

await page.goto("https://demoqa.com/profile")
await page.waitForLoadState("domcontentloaded")

const addedBook = page.locator("a").filter({hasText:d.book}).first()

await addedBook.waitFor({state:"visible", timeout:10000})
await expect(addedBook).toBeVisible()

console.log("Book added successfully:", d.book)

const logoutBtn = page.locator("#submit").first()

await page.mouse.wheel(0,2000)

await Promise.all([
  page.waitForNavigation(),
  logoutBtn.click()
])

await expect(page).toHaveURL(/login/)
console.log("Logout successful")

}
})