import { test, expect } from "vitest";

test.concurrent("NODE_ENV", () => {
  expect(process.env.NODE_ENV).toEqual("test");
});

test.concurrent(".env.test", () => {
  expect(process.env.FOO).toEqual("BAR");
});
