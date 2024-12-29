import { fileURLToPath } from "node:url";
import { url } from "@nuxt/test-utils";
import { createPage, setup } from "@nuxt/test-utils/e2e";
import { describe, expect, it } from "vitest";

describe("nuxt-locker", async () => {
  await setup({
    server: true,
    browser: true,
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  });

  it("handles form submission and redirects", async () => {
    const page = await createPage();
    await page.goto(url("/"));

    await page.fill("input[type=\"password\"]", "password");
    await page.click("button[type=\"submit\"]");

    await page.waitForURL(url("/"));

    expect(page.url()).toBe(url("/"));

    await page.context().clearCookies();

    await page.reload();

    await page.waitForURL(url("/nuxt-locker?redirect=/"));
    expect(page.url()).toBe(url("/nuxt-locker?redirect=/"));
  });

  it("handles form submission with wrong password", async () => {
    const page = await createPage();
    await page.goto(url("/"));

    await page.fill("input[type=\"password\"]", "wrong-password");
    await page.click("button[type=\"submit\"]");

    const errorMessage = await page.textContent(".nuxt-locker-error");
    expect(errorMessage).toContain("Invalid password");
  });
});
