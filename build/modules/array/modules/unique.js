var chunkSlice = (array, start, end) => {
		return mapArray(new arrayNative(mathNative.min(end, getLength(array)) - start), (item,index) => {
			return array[start + index];
		});
	},
	numericalCompare = (a, b) => {
		return a - b;
	},
	numericalCompareReverse = (a, b) => {
		return b - a;
	},
	xorBase = (a, b) => {
		return mapArray(concatArray(a, b), (item, index, array) => {
			if (!has(b, item) && indexOfCall(array, item) < 0) {
				return item;
			}
		});
	},
	onlyUnique = (value, index, self) => {
		return self.indexOf(value) === index;
	},
	uniqueArray = $.uniq = (array, isSorted) => {
		return (isSorted) ? mapArray(array, (item, index) => {
			if (item !== array[index - 1]) {
				return item;
			}
		}) : array.filter(onlyUnique);
	};
