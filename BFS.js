// var g = [
//     [Infinity,3       ,Infinity,8       ,9],
//     [  3     ,Infinity,3       ,10      ,5],
//     [Infinity, 3      ,Infinity,4       ,3],
//     [8       ,10      ,4       ,Infinity,20],
//     [9       ,5       ,3       ,20      ,Infinity]
// ];

//var x = [0,1,2,3,4]; //城市的编号
          //规划过程中记录的距离

//var bestx = [0,0,0,0,0]; //当前最优解的路径
//var t = 0; //当前需要到达的城市

function BFS(t,path,matrix){
    var bestl = Infinity; //当前最优解
	var n = matrix.length-1;
	var cl = 0;
    if(t > n ){
        //搜索到底部，如果满足最优解则记录
        if(matrix[n][0] < Infinity && (cl + matrix[n][0] < bestl)){
            for(var j = 0; j <= n; j++){

                path.push(j);
            }
            bestl = cl + matrix[n][0];
        }
    }else{
        for(var j =  t ; j <= n; j++){
            if(matrix[t-1][j] < Infinity && (cl + matrix[t-1][j] < bestl )){
                swap(x,t,j);                //交换位置，将j点作为 当前需要到达的城市
                cl = cl + matrix[t-1][t];  //加上选中的点
                BFS(t+1,path);             //搜索下一下节点
                cl = cl - matrix[t-1][t];  //还原搜索之前
                swap(x,t,j);                //还原
            }
        }
    }
}
function swap(arr,x,y){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
};