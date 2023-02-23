export function profit(days: number[]): number[] {
  let bestOffer: number[] = [];
  let maxProfit: number = 0;

  for (let buyDay = 0; buyDay < days.length; buyDay++) {
    for (let sellDay = buyDay + 1; sellDay < days.length; sellDay++) {
      let profit = days[sellDay] - days[buyDay];

      if (profit > maxProfit) {
        maxProfit = profit;
        bestOffer = [buyDay, sellDay];
      }
    }
  }

  return bestOffer;
}
