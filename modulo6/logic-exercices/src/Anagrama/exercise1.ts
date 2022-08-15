function isAnagram(s: string, t: string) {
	return s.split("").sort().join("") === t.split("").sort().join("")
}

console.log(isAnagram("anagrama", "nagarama"));
console.log(isAnagram("gato","toga"));
console.log(isAnagram("gato", "rato"));