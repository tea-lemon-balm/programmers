function solution(array, commands) {
	const result = []
	for (const command of commands) {
		const newArr = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)
		result.push(newArr[command[2] - 1])
	}
	return result
}
