const sumArgue = require("../src/Sum-Arguement");

const { it, expect, describe } = require("@jest/globals");

describe("Testing Sum Arguements", () => {
  it("Should work on all Posititive Numbers", () => {
    expect(sumArgue(3, 5)).toBe(8);
    expect(sumArgue(4, 1)).toBe(5);
    expect(sumArgue(5, 5)).toBe(10);
  });

  it("Should work on all Negative Numbers", () => {
    expect(sumArgue(-4, -3)).toBe(-7);
    expect(sumArgue(-20, -4)).toBe(-24);
    expect(sumArgue(-30, -4)).toBe(-34);
  });

  it("Should work with One Positive and One Negative Number", () => {
    expect(sumArgue(-3, 3)).toBe(0);
    expect(sumArgue(-3, 4)).toBe(1);
    expect(sumArgue(-10, 4)).toBe(-6);
  });

  it("Should work with all (+ve) and (-ve) Decimal Numbers", () => {
    expect(sumArgue(1.5, 1.5)).toBe(3);
    expect(sumArgue(-8.1, 8.1)).toBe(0);
    expect(sumArgue(-3.1, -4.9)).toBe(-8);
  });
});
