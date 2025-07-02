// import { test } from "@playwright/test"

// test("Bài tập 2", async ({ page }) => {
//     await test.step("Truy cập trang web và click Bài học 2", async () => {
//         await page.goto('https://material.playwrightvn.com/');
//         await page.locator('//a[@href="02-xpath-product-page.html"]').click();
//     });

//         await test.step("Thêm sản phẩm vào giỏ hàng", async () => {
//         await page.locator('//button[@data-product-id="1"]').dblclick();
//         for(let i = 0; i < 3; i++) {
//             await page.locator('//button[@data-product-id="2"]').click();
//         };
//         await page.locator('//button[@data-product-id="3"]').click();
//     });
// });