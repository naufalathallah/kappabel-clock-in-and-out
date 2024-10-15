import { test } from "@playwright/test";

test("Clock In", async ({ page }) => {
  await page.goto("https://bit.ly/kappabel");

  await page.getByPlaceholder("User ID").fill(`${process.env.USER_ID}`);

  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill(`${process.env.PASSWORD}`);

  await page.getByRole("button", { name: "Sign In" }).click();

  await page.getByTitle("Web Clock").click();
  await page.getByRole("button", { name: "Check In" }).click();

  await page.waitForTimeout(2000);

  const clockInTime = new Date();
  const currentTime = clockInTime.toLocaleTimeString();
  const currentDate = clockInTime.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const clockOutTime = new Date(clockInTime.getTime() + 9 * 60 * 60 * 1000);
  const estimatedClockOut = clockOutTime.toLocaleTimeString();

  console.log(`======\n${currentDate}`);
  console.log(`Berhasil Clock In pada jam: ${currentTime}`);
  console.log(`Estimasi Clock Out pada jam: ${estimatedClockOut}`);
});
