import helpersMock from "@/utils/helpers";
import { describe, expect, it } from "vitest";

describe("Helpers.isEmail()", () => {
  const email = {
    valids: ["xxxx@asd.com", "s@s.so"],
    invalids: ["asd", "asd.asd", "asd@asdasdsad", "a@b.a"],
  };

  it("isEmail is not valid", () => {
    for (let i = 0; i < email.invalids.length; i++)
      expect(helpersMock.isEmailAddress(email.invalids[i])).toBe(false);
  });

  it("isEmail is valid", async () => {
    for (let i = 0; i < email.valids.length; i++) {
      expect(helpersMock.isEmailAddress(email.valids[i])).toBe(true);
    }
  });
});
