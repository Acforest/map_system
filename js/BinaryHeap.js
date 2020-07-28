/**
 * @param {list} array 数组
 * @param {number} capacity 容量
 * @param {function} compare 比较函数
 */
// 二叉堆构造函数
function BinaryHeap(array, capacity, compare) {
	if(array) {
		this.array = array.concat();
		this.size = array.length;
		if(capacity < 3) {
			this.capacity = this.size * 2;
		}
		else {
			this.capacity = capacity;
		}
		this.compare = compare;
	}
	else {
		if(capacity < 3) {
			return null;
		}
		this.array = new Array(capacity);
		this.size = 0;
		this.capacity = capacity;
		this.compare = compare;
	}
}

BinaryHeap.prototype = {
	// 构造函数
	constructor: BinaryHeap,
	// 获取节点i的父节点
	parent: function(i) {
		return Math.floor((i - 1) / 2);
	},
	// 获取节点i的左儿子
	left: function(i) {
		return 2 * i + 1;
	},
	// 获取节点i的右儿子
	right: function(i) {
		return 2 * i + 2;
	},
	// 获取二叉堆顶元素
	top: function() {
		return this.array[0];
	},
	// 判断二叉堆是否为空
	isEmpty: function() {
		return this.size == 0;
	},
	// 根据数组元素的索引进行交换
	swap: function(i, j) {
		let tmp = this.array[i];
		this.array[i] = this.array[j];
		this.array[j] = this.tmp;
	},
	// 往二叉堆中添加一个新元素
	push: function(Elem) {
		if(this.size == this.capacity) {
			console.log("overflow!");
			return;
		}
		this.array[this.size++] = Elem;
		// 上滤操作，自下而上进行检查
		while(i && this.compare(this.array[i], this.array[this.parent(i)])) {
			this.swap(i, this.parent(i));
			i = this.parent(i);
		}
	},
	// 下滤操作，自上而下检查
	heapify: function(i) {
		let left = this.left(i);
		let right = this.right(i);
		let small = i;
		if(left < this.size && this.compare(this.array[left], this.array[i])) {
			small = left;
		}
		if(right < this.size && this.compare(this.array[right], this.array[small])) {
			small = right;
		}
		if(small != i) {
			this.swap(i, small);
			this.heapify(small);
		}
	},
	// 弹出二叉堆顶元素，将最后一个元素替换堆顶元素，然后进行下滤操作
	pop: function() {
		if(this.size <= 0) {
			console.log("the heap is empty.");
			return null;
		}
		if(this.size == 1) {
			this.size--;
			return this.array[0];
		}
		let root = this.array[0];
		this.array[0] = this.array[this.size - 1];
		this.size--;
		this.heapify(0);
		return root;
	},
	// 重建二叉堆，使其保持性质
	rebuild: function() {
		for(let i = Math.floor(this.size / 2);i >= 0;i--) {
			this.heapify(i);
		}
	}
}