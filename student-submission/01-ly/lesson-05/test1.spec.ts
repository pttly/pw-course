// import { test } from "@playwright/test"

// test("Bài tập 1", async ({ page }) => {
//     await test.step("Truy cập trang web và click Bài học 1", async () => {
//         await page.goto('https://material.playwrightvn.com/');
//         await page.locator('//a[@href="01-xpath-register-page.html"]').click();
//     });

//         await test.step("Nhập đầy đủ thông tin", async () => {
//         await page.locator('//input[@id="username"]').fill("Thảo Ly");
//         await page.locator('//input[@id="email"]').pressSequentially("thaoly.phan@gmail.com", {delay: 200});
//         await page.locator('//input[@id="female"]').check();
//         await page.locator('//input[@id="traveling"]').check();
//         await page.locator('//input[@id="cooking"]').check();
//         await page.locator('//select[@id="interests"]').selectOption({value: "music"});
//         await page.locator('//select[@id="country"]').selectOption({value: "uk"});
//         await page.locator('//input[@id="dob"]').fill("1993-07-19");
//         await page.locator('//input[@id="profile"]').setInputFiles("tests\\lesson-5\\images\\node1.png"); //replace \ by \\
//         await page.locator('//textarea[@id="bio"]').fill("Đây là bài tập 1 của buổi học thứ 5 của lớp K15. Nhập đoạn text dài trong textarea");
//         await page.locator('//input[@id="rating"]').fill("7");
//         await page.locator('//input[@id="favcolor"]').fill("#d82c99");
//         await page.locator('//input[@id="newsletter"]').click();
//         await page.locator('//span[@class="slider round"]').click();
//         await page.locator('//button[@type="submit"]').click();
//     });
// });