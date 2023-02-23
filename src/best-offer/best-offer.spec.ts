import { profit } from "./index";

describe("profit", () => {
  it("should return empty array for waning days", () => {
    const days = [17, 16, 15, 14, 13, 12];

    expect(profit(days)).toEqual([]);
  });

  it("should return best offer [bestBuyDay, bestSellDay]", () => {
    const days = [4, 3, 5, 6, 7, 10];
    const bestBuyDayIndex = 1;
    const bestSellDayIndex = 5;

    expect(profit(days)).toEqual([bestBuyDayIndex, bestSellDayIndex]);
  });
});
