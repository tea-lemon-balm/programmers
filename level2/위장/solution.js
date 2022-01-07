function findCombs(set, n) {
	const combs = []
	function pushCombs(set, comb = []) {
		if (comb.length === n) {
			combs.push(comb)
			return 0
		}
		for (let i = 0; i < set.length; i++) {
			pushCombs(set.slice(i + 1), comb.concat(set[i]))
		}
	}
	pushCombs(set)
	return combs
}

function solution(clothes) {
	var answer = 0
	const hash = {}
	for (let cloth of clothes) {
		if (!hash[cloth[1]]) {
			hash[cloth[1]] = []
		}
		hash[cloth[1]].push(cloth[0])
	}

	const kinds = Object.keys(hash)
	for (let i = 1; i <= kinds.length; i++) {
		const set = findCombs(kinds, i)
		for (let todayStyle of set) {
			let count = 1
			for (let kind of todayStyle) {
				count *= hash[kind].length
			}
			answer += count
		}
	}
	return answer
}

let clothes = [
	["yellowhat", "headgear"],
	["bluesunglasses", "eyewear"],
	["green_turban", "headgear"],
]

console.log(solution(clothes))
