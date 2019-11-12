module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},

	print: function(range) {

		for(let i = 0; i < range.length; i++){
			console.log(range[i]);

		}
	
	}
	
}

