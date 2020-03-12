
/*
In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

    1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).

It is possible to make £2 in the following way:

    1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

How many different ways can £2 be made using any number of coins?

*/

/**
 * Returns the count of ways 'n' can be made with 'demons'
 * @param n target amount
 * @param denoms available denominations of currency (sorted from lowest to highest)
 * @returns count of ways 'n' can be made with 'denoms'
 */
function solve(n: number, denoms: number[]): number {
	let ways: number[] = new Array(n+1).fill(0);
	ways[0] = 1;
	for (let i: number = 0; i < denoms.length; i++) {
		for (let j: number = denoms[i]; j <= n; j++) {
			ways[j] += ways[j - denoms[i]];
		}
	}
	return ways[n];
}

console.log(solve(200, [1, 2, 5, 10, 20, 50, 100, 200]));
