const timeConversion = require("../src/Time-conversion");

const { it, expect, describe } = require("@jest/globals");

describe("Testing Time-Conversion", () => {
  it("should convert time - positive numbers in string form ex-[Given Number - 5200000 - Output - (1 hours 26 minutes 40 seconds)]", () => {
    expect(timeConversion(5200)).toBe("5 seconds");
    expect(timeConversion(60000)).toBe("1 minute");
    expect(timeConversion(180000)).toBe("3 minutes");
    expect(timeConversion(200000)).toBe("3 minutes 20 seconds");
    expect(timeConversion(5200000)).toBe("1 hours 26 minutes 40 seconds");
  });
});
