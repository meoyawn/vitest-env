import { test, expect } from "vitest";

test.concurrent(".env.test", () => {
  expect(process.env.FOO).toEqual("BAR");
});
