const assert = require("assert")
function solution(phone_book) {
	const lens = phone_book.map((el) => el.length)
	const min = Math.min(...lens) - 1
	const checker = {}
	for (const phoneNumber of phone_book) {
		const len = phoneNumber.length
		for (let i = min + 1; i <= len; i++) {
			if (!checker[phoneNumber.slice(0, i)]) checker[phoneNumber.slice(0, i)] = 1
			else return false
		}
	}
	return true
}

let phone_book = ["119", "97674223", "1195524421"]
assert.equal(solution(phone_book), false)
phone_book = ["123", "456", "789"]
assert.equal(solution(phone_book), true)
phone_book = ["12", "123", "1235", "567", "88"]
assert.equal(solution(phone_book), false)
