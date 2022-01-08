function solution(progresses, speeds) {
	var answer = []
	while (progresses.length !== 0) {
		progresses = progresses.map((el, idx) => el + speeds[idx])
		let count = 0
		while (progresses[0] >= 100) {
			progresses.shift()
			speeds.shift()
			count += 1
		}
		if (count > 0) {
			answer.push(count)
		}
	}
	return answer
}
