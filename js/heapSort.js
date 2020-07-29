var len;

function swap(array, i, j) {
	let tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}

function buildMinHeap(array, key) {
	len = array.length;
	for(let i = array.length / 2 - 1;i >= 0;i--) {
		heapify(array, i);
	}
}

function heapify(array, i, key) {
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	let min = i;
	if(left < len && array[left][key] > array[min][key]) {
		min = left;
	}
	if(right < len && array[right][key] > array[min][key]) {
		min = right;
	}
	if(min != i) {
		swap(array, i, min);
		heapify(array, min, key);
	}
}

function heapSort(array, key) {
	buildMinHeap(array, key);
	for(let i = array.length - 1;i > 0;i--) {
		swap(array, 0, i);
		len--;
		heapify(array, 0, key);
	}
	return array;
}

function sink(array, k, tail, key) {
	while(2 * k + 1 <= tail) {
		let idx = 2 * k + 1;
		if(idx < tail && array[idx][key] > array[idx + 1][key]) {
			idx = 2 * k + 2;
		}
		if(array[k][key] <= array[idx][key]) {
			break;
		}
		swap(array, k, idx);
		k = idx;
	}
}

function topK(array, k, key) {
	let ans = [];
	// 复制 k 个元素
	for(let i = 0;i < k;i++) {
		ans.push(k);
	}
	// 构造一个小顶堆
	for(let i = (k - 2) / 2;i >= 0;i--) {
		sink(ans, i, k - 1, key);
	}
	// 遍历array，每次和堆顶元素比较，如果大于堆顶元素则替换堆顶元素并下沉
	for(let i = k;i < array.length;i++) {
		if(ans[0][key] < array[i][key]) {
			ans[i] = array[i];
			sink(ans, 0, k - 1, key);
		}
	}
	return ans;
}