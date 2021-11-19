function solution(n, lost, reserve) {
	const lostPos = Array(n + 1).fill(false)
	const reservePos = Array(n + 1).fill(false)
	lost.forEach((el) => (lostPos[el] = true))
	reserve.forEach((el) => (reservePos[el] = true))
	for (let i = 1; i < lostPos.length; i++) {
		if (lostPos[i] === true) {
			if (reservePos[i]) {
				lostPos[i] = false
				reservePos[i] = false
			} else if (reservePos[i - 1]) {
				lostPos[i] = false
				reservePos[i - 1] = false
			} else if (reservePos[i + 1]) {
				lostPos[i] = false
				reservePos[i + 1] = false
			}
		}
	}
	return n - lostPos.filter((el) => el).length
}
