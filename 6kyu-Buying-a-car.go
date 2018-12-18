package kata

import "math"

func NbMonths(startPriceOld, startPriceNew, savingperMonth int, percentLossByMonth float64) [2]int {

	priceOld := float64(startPriceOld)
	priceNew := float64(startPriceNew)
	savingPerMonth := float64(savingperMonth)
	money := 0.0
	month := 0

	lossRate := percentLossByMonth / 100;

	for (money + priceOld) < priceNew {
		month += 1
		priceOld -= (priceOld * lossRate)
		priceNew -= (priceNew * lossRate)
		if month % 2 != 0 {
			lossRate += 0.005
		}
		money += savingPerMonth
	}

	left := int(math.Round(money + priceOld - priceNew))

	return [2]int{month, left}
}
