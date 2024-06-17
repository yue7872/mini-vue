/* eslint-disable quotes */
import { describe, expect, it } from "vitest";

import { effect, reactive } from "../src/index";
describe("reactive", () => {
  it("test reactive", () => {
    const obj = reactive({
      name: "yue",
    });
    let finalVar;
    effect(() => {
      finalVar = obj.name;
    });
    obj.name = "hello";
    expect(finalVar).toMatchInlineSnapshot('"hello"');
  });
});
