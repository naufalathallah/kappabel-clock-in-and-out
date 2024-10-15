import { test } from "@playwright/test";

test("Clock Out", async ({ page }) => {
  await page.goto("https://bit.ly/kappabel");

  await page.getByPlaceholder("User ID").fill(`${process.env.USER_ID}`);

  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill(`${process.env.PASSWORD}`);

  await page.getByRole("button", { name: "Sign In" }).click();

  await page.getByTitle("Web Clock").click();
  await page.getByRole("button", { name: "Check Out" }).click();

  await page.waitForTimeout(2000);

  const clockOutTime = new Date();
  const currentTime = clockOutTime.toLocaleTimeString();
  const currentDate = clockOutTime.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  console.log(`======\n${currentDate}`);
  console.log(`Berhasil Clock Out pada jam: ${currentTime}`);
});
