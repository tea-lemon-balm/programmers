function solution(participants, completions) {
	// O(n)
	const completionsObject = {}
	// 참가자를 카운트 합니다.
	for (const participant of participants) {
		if (completionsObject[participant]) completionsObject[participant] += 1
		else completionsObject[participant] = 1
	}
	// 완주자를 카운트 합니다.
	for (const completion of completions) {
		if (completionsObject[completion]) completionsObject[completion] -= 1
	}
	// 완주하지 못한 선수를 체크합니다.
	for (const participant of participants) {
		if (completionsObject[participant] === 1) return participant
	}
}
