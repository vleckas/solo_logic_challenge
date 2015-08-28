1. 
var output = [];
var primes = [2, 3, 5, 7, 11, 13, 17, 19];
var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];
var nonPrimesReverse = nonPrimes.reverse();

function numSum() {
	for (var i = 0; i < primes.length; i++) {
	output.push(primes[i] + nonPrimesReverse[i])   ;
	};
};
	numSum();

	console.log(output);

2.
var output = []
var numbers1 = [4, 1, 6, 5, 8];
var numbers2 = [7, 3, 2, 9, 10];

function numMerge() {
	for (var i = 0; i < numbers1.length; i++) {
	output.push(numbers1[i]);
	output.push(numbers2[i]);
	};

};
	numMerge();

	output.sort(function(a,b) {
		return a - b;
});

	console.log(output);

3. 
function rightTriangle (a, b){

this.a = a;
this.b = b;
this.c = 0;

   }

rightTriangle.prototype.hypotenuse = function() {
    return this.c = Math.sqrt((this.a * this.a) + (this.b * this.b));
}

var triangle = new rightTriangle(3,4);

triangle.hypotenuse();

console.log(triangle.c);

4. 
function numberReturn(num) {
	if (num <= 0)
	return 0;}
	// } else {
	// 	return num * 5;
	// }
console.log(numberReturn(0));

