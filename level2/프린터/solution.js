function solution(priorities, location) {
	var answer = 0
	let count = 0
	let running = true
	while (running) {
		let cur = priorities.shift()
		if (priorities.filter((el) => el > cur).length > 0) {
			priorities.push(cur)
		} else {
			count++
			if (location === 0) running = false
		}

		location--
		if (location === -1) location = priorities.length - 1
	}

	return count
}
