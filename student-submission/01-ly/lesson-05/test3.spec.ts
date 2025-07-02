import { test } from "@playwright/test"

test("Bài tập 3", async ({ page }) => {
    await test.step("Truy cập trang web và click Bài học 3", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    });

        await test.step("Thêm mới 100 todo có nội dung 'Todo <1>'", async () => {
        for(let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill("Todo " + i);
            await page.locator('//button[@id="add-task"]').click();
        };
    });

        await test.step("Xóa các todo có số lẻ", async () => {
        let XPath = "";
        for(let i = 1; i <= 100; i++) {
            if (i % 2 == 1) {
                page.on('dialog', async dialog => dialog.accept());
                XPath = `//button[@id="todo-${i}-delete"]`
                await page.locator(XPath).click();
            };
        };
    });
});