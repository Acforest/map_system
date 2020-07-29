  
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <style type="text/css">
    body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
	
    </style>
    <script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=4vulvKbdIUlEmnkCieW8Qq2EA0X8o7ew"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	
	<!--景点数据导入-->
	<script type="text/javascript" src="js/spot.js"></script>
	<!--路线数据导入-->
	<script type="text/javascript" src="js/edge.js"></script>
	<!--Dijkstra算法导入-->
	<script type="text/javascript" src="js/Dijkstra.js"></script>
	<!--KMP算法导入-->
	<script type="text/javascript" src="js/KMP.js"></script>
	<!--自动补全算法导入-->
	<script type="text/javascript" src="js/autocomplete.js"></script>
	<!--tsp算法导入-->
	<script type="text/javascript" src="js/tsp.js"></script>
	<!--动态规划（0-1背包问题）算法导入-->
	<script type="text/javascript" src="js/knapsack.js"></script>
	<!--DFS导入-->
	<script type="text/javascript" src="js/DFS.js"></script>
	<!--堆排序导入-->
	<script type="text/javascript" src="js/heapSort.js"></script>
	<!--堆排序导入-->
	<script type="text/javascript" src="js/levenshtein.js"></script>
	
	<link href="css/bootstrap.min.css" rel="stylesheet"/>
	<link href="css/materialdesignicons.min.css" rel="stylesheet"/>
	<link href="css/style.min.css" rel="stylesheet"/>
	<link href="css/jquery.pageslide.css" rel="stylesheet"/>
	<link href="css/autocomplete.css" rel="stylesheet"/>
    <title>中华民族园旅游导览系统</title>
</head>

<body>
	<!--路线导航侧边栏引用-->
	<script type="text/javascript" src="js/jquery.pageslide.min.js"></script>
	<!--顶部导航栏-->
	<div class="navbar navbar-default" role="navigation">
	 <!--标题通过“navbar-header”和“navbar-brand”来实现-->
	 <div class="navbar-header">
	  <a href="##" class="navbar-brand">中华民族园地图</a>
	 </div>
	 <ul class="nav navbar-nav" id="ul_header">
	  <li class="active"><a href="index.html">首页</a></li>
	  <li class="dropdown">
	  <a href="##" data-toggle="dropdown" class="dropdown-toggle">游客服务<span class="caret"></span></a>
	  <!--二级菜单-->
	  <ul class="dropdown-menu">
	   <li><a href="#route-guide" id="guide-button">路线导航</a></li>
	   <li><a href="#route-recommend" id="recommend-button">景点推荐</a></li>
	   <li><a href="#all-spots" id="all-spots-button">游览所有景点</a></li>
	   <li><a href="#travel-time" id="travel-time-button">游玩时间规划</a></li>
	  </ul>
	  <li><a href="login.html">管理员登录</a></li>
	  </li>
	 </ul>
	 <!--地点搜索框-->
	 <div class="navbar-form navbar-left" rol="search">
	  <div class="autocomplete">
	  <input type="text" id="search-spot-info" class="form-control" placeholder="请输入想要查找的地点.." autocomplete="off"/>
	  </div>
	  <input type="button" id="search-spot" class="btn btn-info" value="搜索" data-toggle="modal" data-target=".bs-example-modal-sm"></button>
	 </div>
	</div>
	
	<!--地图-->
	<div id="allmap"></div>
	
	<!--路线搜索侧边栏-->
	<div id="route-guide">
		<h2 style="color: #e7eaed;">路线导航</h2>
		<div class="form-group" rol="search">
			<div class="autocomplete">
				<div class="form-group">
					<label class="sr-only" for="start-spot">出发地</label>
					<input type="text" id="start-spot" name="start-spot" class="form-control" placeholder="请输入出发地.." autocomplete="off"/>
				</div>
				<div class="form-group">
					<label class="sr-only" for="end-spot">目的地</label>
					<input type="text" id="end-spot" name="end-spot" class="form-control" placeholder="请输入目的地.." autocomplete="off"/>
				</div>
			</div>
			<input type="button" id="search-route" class="btn btn-info" value="搜索"></button>
			<input type="button" class="btn btn-danger" onclick="javascript:$.pageslide.close()" value="关闭"></a>
		</div>
		<div id="guide-path"></div>	
	</div>
	
	<!--景点推荐侧边栏-->
	<div id="route-recommend">
		<h2 style="color: #e7eaed;">景点推荐</h2>
		<div class="form-group" rol="search">
			<div class="autocomplete">
				<div class="form-group">
					<label class="sr-only" for="user-pos">出发地</label>
					<input type="text" id="user-pos" class="form-control" placeholder="请输入您的位置.." autocomplete="off"/>
				</div>
			</div>
			<input type="button" id="search-recommend" class="btn btn-info" value="搜索" autocomplete="off"></button>
			<input type="button" class="btn btn-danger" onclick="javascript:$.pageslide.close()" value="关闭"></a>
		</div>
		<div id="recommend-spots"></div>	
	</div>
	
	<!--游览所有景点侧边栏-->
	<div id="all-spots">
		<h2 style="color: #e7eaed;">游览所有景点</h2>
		<div class="form-group" rol="search">
			<div class="autocomplete">
				<div class="form-group">
					<label class="sr-only" for="user-pos-1">出发地</label>
					<input type="text" id="user-pos-1" class="form-control" placeholder="请输入您的位置.." autocomplete="off"/>
				</div>
			</div>
			<input type="button" id="search-all-spots" class="btn btn-info" value="搜索" autocomplete="off"></button>
			<input type="button" class="btn btn-danger" onclick="javascript:$.pageslide.close()" value="关闭"></a>
		</div>
		<div id="all-spot-path"></div>	
	</div>
	
	<!--游玩时间规划侧边栏-->
	<div id="travel-time">
		<h2 style="color: #e7eaed;">游玩时间规划</h2>
		<div class="form-group" rol="search">
			<div class="autocomplete">
				<div class="form-group">
					<label class="sr-only" for="user-pos-2">出发地</label>
					<input type="text" id="user-pos-2" class="form-control" placeholder="请输入您的位置.." autocomplete="off"/>
				</div>
				<div class="form-group">
					<label class="sr-only" for="travel-time">游玩时间</label>
					<input type="text" id="travel-time-data" class="form-control" placeholder="请输入游玩时间(分钟).." autocomplete="off"/>
				</div>
			</div>
			<input type="button" id="search-travel-time" class="btn btn-info" value="搜索" autocomplete="off"></button>
			<input type="button" class="btn btn-danger" onclick="javascript:$.pageslide.close()" value="关闭"></a>
		</div>
		<div id="travel-time-spots"></div>	
	</div>
	
	<!--景点查找模态框-->
	<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
	  <div class="modal-dialog modal-sm" role="document">
		<div class="modal-content">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
			<h4 class="modal-title" id="myLargeModalLabel">景点查找</h4>
		  </div>
		  <div class="modal-body">
			<div class="list-group" id="list-group">
			</div>
		  </div>
		  <div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
		  </div>
		</div>
	  </div>
	</div>

</body>


<script type="text/javascript">
	// 百度地图API功能
	var map = new BMap.Map("allmap",{enableMapClick:false});    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.39699,39.9928), 19);  // 初始化地图,设置中心点坐标和地图级别
	map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放

	var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
		scale: 0.8,	// 图标缩放大小
		strokeColor:'#fff',	// 设置矢量图标的线填充颜色
		strokeWeight: '0.8',	// 设置线宽
	});

	// 将所有景点加入搜索框自动补充
	let spots = [] // 存储所有景点的名称（下标对应）
	let polylines = [] // 地图渲染完成后添加的路线
	for(let i = 0;i < spot_data.length;i++) {
		spots.push(spot_data[i].name);
	}
	autocomplete(document.getElementById("search-spot-info"), spots);
	autocomplete(document.getElementById("start-spot"), spots);
	autocomplete(document.getElementById("end-spot"), spots);
	
	// 邻接矩阵
	/* 0~4 中华民族园俄罗斯人家, 侗寨, 赫哲族景区, 达斡尔村, 哈亭,
	   5~9 鄂伦春景区, 板凳桥, 满族皇堂子, 满族博物馆, 朝鲜族村,
	   10~14 朝鲜族景区, 打谷场, 景颇族, 佤寨, 山苗寨,
	   15~19 铜鼓坪, 水苗寨, 侗族景区, 彝寨, 土林,
	   20~21 侗族水车群, 景颇族馆景区
	*/
	// 初始化邻接矩阵
	let matrix = new Array();
	for(let i = 0;i < spot_data.length;i++) {
		matrix.push(new Array());
	}
	for(let i = 0;i < spot_data.length;i++) {
		for(let j = 0;j < spot_data.length;j++) {
			if(i == j) {
				matrix[i][j] = 0;
			}
			else {
				matrix[i][j] = Infinity;
			}
		}
	}
	console.log(matrix);
	// 读取地图并更新邻接矩阵
	for(let i = 0;i < edge_data.length;i++) {
		let start = -1;
		let end = -1;
		for(let j = 0;j < spots.length;j++) {
			if(edge_data[i].start == spots[j]) {
				start = j;
			}
			if(edge_data[i].end == spots[j]) {
				end = j;
			}
		}
		matrix[start][end] = matrix[end][start] = edge_data[i].dis;
	}
	
	// 景点详细信息
	for(let i = 0;i < spot_data.length;i++) {
		let marker = new BMap.Marker(new BMap.Point(spot_data[i].x, spot_data[i].y));
		map.addOverlay(marker);
		let content = 
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>"+spot_data[i].name+"</h4>" +
		"<img style='float:right;margin:4px' id='img-"+i+"' src='img/"+spot_data[i].name+".jpg' width='139' height='104' title='天安门'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+spot_data[i].info+"</p></div>";
		let infoWindow = new BMap.InfoWindow(content);
		marker.addEventListener("click", function() {
			this.openInfoWindow(infoWindow);
			document.getElementById("img-"+i).onload = function() {
				infoWindow.redraw();
			}
		})
	}
	
	// $("#spot-result").hide();
	
	// 景点搜索（KMP 和 Levenstein distance 实现）
	$("#search-spot").click(function() {
		// 先清空之前的查询结果
		document.getElementById("list-group").innerHTML = "";
		let search_info = $("#search-spot-info").val();
		let resultSet = [];
		for(let i = 0;i < spot_data.length;i++) {
			if(KMP(spot_data[i].name, search_info)) {
				resultSet.push(spot_data[i].name);
			}
		}
		if(resultSet.length == 0) {
			for(let i = 0;i < spot_data.length;i++) {
				if(levenstein(search_info, spot_data[i].name) <= 1) {
					resultSet.push(spot_data[i].name);
				}
			}
		}
		console.log(resultSet);
		// 查询结果渲染
		for(let i = 0; i < resultSet.length;i++) {
			document.getElementById("list-group").innerHTML += '<input type="button" class="btn btn-default" data-dismiss="modal" value="' + resultSet[i] + '" />';	
		}
		// 景点定位
		$("#list-group > *").on("click", function() {
			let s = $(this).val();
			console.log(s);
			let i;
			for(i = 0;i < spots.length;i++) {
				if(s == spots[i]) {
					break;
				}
			}
			map.panTo(new BMap.Point(spot_data[i].x, spot_data[i].y));
		});
	});

	// 路线搜索
	$("#search-route").click(function() {
		// 清除上次查找的路线
		for(let i = 0;i < polylines.length;i++) {
			map.removeOverlay(polylines[i]);
		}
		let start_name = $("#start-spot").val();
		let end_name = $("#end-spot").val();
		let start_idx, end_idx;
		for(let i = 0;i < spot_data.length;i++) {
			if(spot_data[i].name == start_name) {
				start_idx = i;
			}
			if(spot_data[i].name == end_name) {
				end_idx = i;
			}
		}
		let dijkstra = Dijkstra(matrix, start_idx);
		console.log(dijkstra);
		let path = dijkstra[1][end_idx];
		let idx_to_name = path.match(/\d+/g); // 正则表达式提取下标用于转换为景点名称
		console.log(idx_to_name);
		// 将景点下标替换为景点名称
		for(let i = 0;i < idx_to_name.length;i++) {
			path = path.replace(idx_to_name[i], spot_data[idx_to_name[i]].name);
		}
		console.log(start_name + "到" + end_name + "的最短路径为：" + path);
		document.getElementById("guide-path").innerText = "最短路线：\n" + path;
		// 将路径颜色设置为红色
		for(let i = 0;i < idx_to_name.length - 1;i++) {
			let pois = [
				new BMap.Point(spot_data[idx_to_name[i]].x, spot_data[idx_to_name[i]].y),
				new BMap.Point(spot_data[idx_to_name[i+1]].x, spot_data[idx_to_name[i+1]].y)
			];
			let polyline = new BMap.Polyline(pois, {
				enableEditing: false,	// 是否启用线编辑，默认为false
				enableClicking: true, // 是否响应点击事件，默认为true
				strokeWeight:'2', // 折线的宽度，以像素为单位
				strokeOpacity: 0.8, // 折线的透明度，取值范围0 - 1
				strokeColor:"#ff0000", // 折线颜色
			});
			polylines.push(polyline);
			map.addOverlay(polyline); // 增加折线
		}
	});

	// 景点推荐（Dijkstra与推荐度加权实现）
	$("#search-recommend").click(function() {
		let user_pos = $("#user-pos").val();
		let user_pos_idx = -1;
		for(let i = 0;i < spots.length;i++) {
			if(user_pos == spots[i]) {
				user_pos_idx = i;
			}
		}
		let dijkstra = Dijkstra(matrix, user_pos_idx);
		let recommend_point = [];
		for(let i = 0;i < spot_data.length;i++) {
			recommend_point.push(spot_data[i].recommend * 10); // 推荐度占50分
		}
		/**
		 * 景点离当前的距离 < 200: 记50分
		 * 景点离当前的距离 >= 200 且 < 400: 记40分
		 * 景点离当前的距离 >= 400 且 < 600: 记30分
		 * 景点离当前的距离 >= 600 且 < 800: 记20分
		 * 景点离当前的距离 >= 800 且 < 1000: 记10分
		 * 景点离当前的距离 >= 1000: 记0分
		*/
		for(let i = 0;i < dijkstra[0].length;i++) {
			if(dijkstra[0][i] < 200) {
				recommend_point[i] += 50;
			}
			else if(dijkstra[0][i] >= 200 && dijkstra[0][i] < 400) {
				recommend_point[i] += 40;
			}
			else if(dijkstra[0][i] >= 400 && dijkstra[0][i] < 600) {
				recommend_point[i] += 30;
			}
			else if(dijkstra[0][i] >= 600 && dijkstra[0][i] < 800) {
				recommend_point[i] += 20;
			}
			else if(dijkstra[0][i] >= 800 && dijkstra[0][i] < 1000) {
				recommend_point[i] += 10;
			}
		}
		
		// 堆排序
		// rec_list = [];
		// for(let i = 0;i < spots.length;i++) {
		// 	rec_list.push({name: spots[i], point: recommend_point[i]});
		// }
		// console.log(rec_list);
		// let hs = heapSort(rec_list, "point");
		// console.log(hs);
		
		// function my_compare(point) {
		// 	return function(a, b) {
		// 		return a[point] < b[point];
		// 	}
		// }
		// let topk = topK(rec_list, 5, "point");
		// console.log(topk);
		
		// 推荐景点下标初始化
		let recommend_idx = [];
		for(let i = 0;i < spots.length;i++) {
			recommend_idx.push(i);
		}
		// 冒泡排序
		for(let i = 0;i < recommend_point.length - 1;i++) {
			for(let j = 0;j < recommend_point.length - i - 1;j++) {
				if(recommend_point[j] < recommend_point[j+1]) {
					// 交换景点
					let tmp = recommend_point[j];
					recommend_point[j] = recommend_point[j+1];
					recommend_point[j+1] = tmp;
					// 交换下标
					let tmp_idx = recommend_idx[j];
					recommend_idx[j] = recommend_idx[j+1];
					recommend_idx[j+1] = tmp_idx;
				}
			}
		}
		console.log(recommend_idx); // 打印景点下标
		console.log(recommend_point); // 打印景点综合评分
		// 显示评分前五的景点
		document.getElementById("recommend-spots").innerText = "推荐景点：\n" + spots[recommend_idx[0]] + " " + spots[recommend_idx[1]]
		+ " " + spots[recommend_idx[2]] + " " + spots[recommend_idx[3]] + " " + spots[recommend_idx[4]];
	});
	
	// 游览所有地点（tsp实现）
	$("#search-all-spots").click(function() {
		// 清除上次查找的路线
		for(let i = 0;i < polylines.length;i++) {
			map.removeOverlay(polylines[i]);
		}
		let start_name = $("#user-pos-1").val();
		let start_idx = -1;
		for(let i = 0;i < spots.length;i++) {
			if(start_name == spots[i]) {
				start_idx = i;
				break;
			}
		}
		
		let n_matrix = []; // 存储连通图的所有可达路径
		// 初始化 n_matrix
		for(let i = 0;i < matrix.length;i++) {
			n_matrix.push([]);
		}
		for(let i = 0;i < matrix.length;i++) {
			for(let j = i;j < matrix.length;j++) {
				if(matrix[i][j] == Infinity) {
					let dijkstra = Dijkstra(matrix, i);
					let dis = dijkstra[0][j];
					n_matrix[i][j] = n_matrix[j][i] = dis;
				}
				else {
					n_matrix[i][j] = n_matrix[j][i] = matrix[i][j];
				}
			}
		}
		
		let tsp_result = tsp(n_matrix, start_idx, 1e7);
		path_str = "";
		let idx;
		for(let j = 0;j < tsp_result[1].length;j++) {
			if(tsp_result[1][j] == start_idx) {
				idx = j;
			}
		}
		for(let i = 0;i < tsp_result[1].length;i++) {
			if(i == 0) {
				path_str += (spots[tsp_result[1][idx]]);
			}
			else {
				path_str += ("->" + spots[tsp_result[1][(i+idx)%tsp_result[1].length]]);
			}
		}
		document.getElementById("all-spot-path").innerText = "最短路线：\n" + path_str;
		// 将路径颜色设置为红色
		for(let i = 0;i < tsp_result[1].length;i++) {
			let pois = [
				new BMap.Point(spot_data[tsp_result[1][i]].x, spot_data[tsp_result[1][i]].y),
				new BMap.Point(spot_data[tsp_result[1][(i+1) % tsp_result[1].length]].x, spot_data[tsp_result[1][(i+1) % tsp_result[1].length]].y)
			];
			let polyline = new BMap.Polyline(pois, {
				enableEditing: false,	// 是否启用线编辑，默认为false
				enableClicking: true, // 是否响应点击事件，默认为true
				strokeWeight:'2', // 折线的宽度，以像素为单位
				strokeOpacity: 0.8, // 折线的透明度，取值范围0 - 1
				strokeColor:"#ff0000", // 折线颜色
			});
			polylines.push(polyline);
			map.addOverlay(polyline); // 增加折线
		}
	});
	
	
	// 游玩时间规划（动态规划法实现）
	$("#search-travel-time").click(function() {
		document.getElementById("travel-time-spots").innerText = ""; // 清空之前的查询结果
		let user_pos = $("#user-pos-2").val();
		let travel_time = $("#travel-time-data").val();
		let user_pos_idx = -1;
		for(let i = 0;i < spots.length;i++) {
			if(user_pos == spots[i]) {
				user_pos_idx = i;
			}
		}
		let dijkstra = Dijkstra(matrix, user_pos_idx);
		let recommend_point = [];
		for(let i = 0;i < spot_data.length;i++) {
			recommend_point.push(spot_data[i].recommend * 10); // 推荐度占50分
		}
		/**
		 * 景点离当前的距离 < 200: 记50分
		 * 景点离当前的距离 >= 200 且 < 400: 记40分
		 * 景点离当前的距离 >= 400 且 < 600: 记30分
		 * 景点离当前的距离 >= 600 且 < 800: 记20分
		 * 景点离当前的距离 >= 800 且 < 1000: 记10分
		 * 景点离当前的距离 >= 1000: 记0分
		*/
		for(let i = 0;i < dijkstra[0].length;i++) {
			if(dijkstra[0][i] < 200) {
				recommend_point[i] += 50;
			}
			else if(dijkstra[0][i] >= 200 && dijkstra[0][i] < 400) {
				recommend_point[i] += 40;
			}
			else if(dijkstra[0][i] >= 400 && dijkstra[0][i] < 600) {
				recommend_point[i] += 30;
			}
			else if(dijkstra[0][i] >= 600 && dijkstra[0][i] < 800) {
				recommend_point[i] += 20;
			}
			else if(dijkstra[0][i] >= 800 && dijkstra[0][i] < 1000) {
				recommend_point[i] += 10;
			}
		}
		let time = [];
		for(let i = 0;i < spot_data.length;i++) {
			time.push(spot_data[i].time);
		}
		let _knapsack = knapsack(time, recommend_point, travel_time);
		let isvisited = _knapsack[1];
		document.getElementById("travel-time-spots").innerText = "预计时间内推荐的游玩景点：\n";
		for(let i = 0;i < isvisited.length;i++) {
			if(isvisited[i]) {
				document.getElementById("travel-time-spots").innerText += (spots[i] + "\n");
			}
		}
	});

	// 路线搜索侧边栏
	$("#guide-button").pageslide({
		direction: "right",
		modal: true
	});

	// 景点推荐侧边栏
	$("#recommend-button").pageslide({
		direction: "right",
		modal: true
	});

	// 游玩所有景点侧边栏
	$("#all-spots-button").pageslide({
		direction: "right",
		modal: true
	});
	
	// 游玩时间规划侧边栏
	$("#travel-time-button").pageslide({
		direction: "right",
		modal: true
	});

	for(let i = 0;i < edge_data.length;i++) {
		let start_idx, end_idx;
		for(let j = 0;j < spots.length;j++) {
			if(edge_data[i].start == spots[j]) {
				start_idx = j;
			}
			if(edge_data[i].end == spots[j]) {
				end_idx = j;
			}
		}
		pois = [
			new BMap.Point(spot_data[start_idx].x, spot_data[start_idx].y),
			new BMap.Point(spot_data[end_idx].x, spot_data[end_idx].y)
		];
		let polyline = new BMap.Polyline(pois, {
		   enableEditing: false,	// 是否启用线编辑，默认为false
		   enableClicking: true, // 是否响应点击事件，默认为true
		   strokeWeight:'2', // 折线的宽度，以像素为单位
		   strokeOpacity: 0.8, // 折线的透明度，取值范围0 - 1
		   strokeColor:"#18a45b", // 折线颜色
		});
		map.addOverlay(polyline); // 增加折线
	}

</script>