const fs = require('fs');


function memoize(f) {
	let cache: object = {}
	return (x: any) => {
		if (x in cache) return cache[x];
		let result = f(x);
		cache[x] = result;
		return result;
	}

}


function letterValue(c: string): number {
	return c.charCodeAt(0)-64;
}


function wordValue(word: string): number {
	let value: number = 0;
	for (let c of word) value += letterValue(c);
	return value;
}


function triangle(n: number): number {
	return 0.5*n*(n+1);
}


function isTriangleNumber(n: number): boolean {
	let i: number = 1;
	let t: number;
	do {
		t = triangle(i++);
		if (t == n) return true;
	} while (t < n)
	return false;
}


let memoizedIsTriangleNumber = memoize(isTriangleNumber);
let count:number = 0;
let data:string = fs.readFileSync('p042_words.txt', 'utf8');
let word:string;
for (let w of data.split("\,")) {
	word = w.replace(/\"/g, '');
	if (memoizedIsTriangleNumber(wordValue(word))) count += 1;
}
console.log(count);
