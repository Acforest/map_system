/**
 * 中华民族园地图数据
 * @param {number} x 景点的x坐标（经度）
 * @param {number} y 景点的y坐标（纬度）
 * @param {string} name 景点名称
 * @param {string} info 景点信息
 */
/* 0~4 俄罗斯人家, 侗寨, 赫哲族景区, 达斡尔城, 哈亭,
   5~9 鄂伦春景区, 板凳桥, 满族皇堂子, 满族博物馆, 朝鲜族村,
   10~14 朝鲜族景区, 打谷场, 景颇族, 佤寨, 山苗寨,
   15~19 铜鼓坪, 水苗寨, 侗族景区, 彝寨, 土林,
   20~21 侗族水车群, 景颇族馆景区
*/
var spot_data = [
	{
		"x": 116.396738,
		"y": 39.993837,
		"name": "俄罗斯人家",
		"info": "俄罗斯族主要分布在新疆等地区，人口约1.4万。有本民族语言文字，属印欧语系斯拉夫语族，文字为俄文。信仰东正教。俄罗斯族博物馆由民居木刻楞房八间和东西配房四间组成，规划为两户人家居住的连体院落环境。并按当地气候配置植被。建筑面积360平方米，占地面积1000平方米。室内外陈列，均按俄罗斯族传统生产、生活方式原状复原陈列。所有展品征集新疆伊犁等地区，年代为清末至近代，其中大铜炉、小铜炉、錾花方形铜盘约二百年历史。俄罗斯族主要从事各种修理业，兼营农业。传统节庆：圣诞节、复活节、洗礼节、谢肉节等。传统歌舞：渔夫之歌、红梅花儿开、踢踏舞等。传统饮食：自制啤酒、红菜汤、土豆烧牛肉、面包等。",
		"recommend": 3.5,
		"time": 5
	},
	{
		"x": 116.396468,
		"y": 39.993402,
		"name": "侗寨",
		"info": "侗寨是整个民族园区里大手笔的一个景区，而鼓楼和风雨桥作为侗寨中最具典型特征的建筑则是重中之重的重头戏。这些兴时于汉末至唐代的古建筑，结构严谨，造型独特，极富民族气质。整座建筑不用一钉一铆和其它铁件，皆以质地耐力的杉木凿榫衔接，拔地而起，美丽壮观，实属罕见。风雨桥也称侗家廊桥，由下、中、上三部分组成。下部是桥墩，用大青石围砌，以料石填心。中部为桥面，采用密布式悬臂托架简支梁体系，全为木质结构。上部为桥面廊亭，采用榫卯结合的梁柱体系联成整体。风雨桥优美坚固，既可供人行走，又可挡风避雨，供人休息。风雨桥遍布侗乡，其中广西三江的程阳风雨桥为风雨桥之最。鼓楼为木结构，四周四根大木柱冲天而起，旁边配以多根小立柱，往上的飞檐和斗拱，形如宝塔，最上层放置一面大皮鼓。寨中有事商议或节日踩歌堂的时候，便捶响大皮鼓，寨中乡亲都聚在鼓楼大厅中听长老发号施令，而平日，鼓楼大厅则是休闲的公共场所。侗寨鼓楼以贵州从江县的增冲鼓楼为最甚，建于清代康熙十一年秋，现为国家级重点文物保护单位。民族园中的鼓楼和风雨楼是以从江县的增冲鼓楼和三江的程阳风雨楼为蓝本复制的。",
		"recommend": 5,
		"time": 12
	},
	{
		"x": 116.397439,
		"y": 39.993567,
		"name": "赫哲族景区",
		"info": "赫哲人的住房原始、简陋。临时住处有尖圆顶的撮罗子和地窨子、温特哈”、草窝棚等。固定的住处有马架子、用草苫顶的正房。历史上的赫哲族还曾住过树屋，是巢居的痕迹。正房的东侧或西侧一般还搭建鱼楼子，存放鱼和兽肉干、粮食或其他物品。赫哲人的传统衣裤、鞋帽、被褥等绣有各种图案。衣领、衣襟、袖口、下摆、围裙、裤腿、帽耳、鞋面、烟荷包上绣有云纹、几何纹和各种花朵、蝴蝶等。还把鱼、兽皮剪成各种图样，再用颜料或天然植物颜料染成各种颜色缝上。尤其是妇女穿的衣服，托领、襟边、袖头、围裙上多绣或镶嵌各种云纹、花朵。传统舞蹈多模拟捕鱼、狩猎和战斗的场面。天鹅舞表现了传说中的一位赫哲少女为了反抗封建婚姻，进行不屈不挠的抗争，最后被迫投河自尽变成一只美丽天鹅的故事。萨满舞有独舞和群舞两种。萨满独自一个人载歌载舞，即为独舞。",
		"recommend": 4,
		"time": 10
	},
	{
		"x": 116.397582,
		"y": 39.993284,
		"name": "达斡尔村",
		"info": "达斡尔族主要分布在内蒙古莫力达瓦等地区，人口约13万。有本民族的语言，属阿尔泰语系蒙古语族。无本民族文字。达斡尔族主要从事农业，兼牧业和狩猎。以善于造“草上飞”北方大轱辘车而闻名。传统节庆：春节、元宵节、寒食节、千灯节、黑灰节等。传统歌舞：口弦琴、山歌和“鲁日格勒”等。传统食品：各种面食、各种奶制品、柳篙芽、手把肉等。传统竞技：曲棍球、射箭、弈棋、扳棍等。达斡尔族崇拜祖先，信仰萨满教，相信万物有灵。",
		"recommend": 3.5,
		"time": 6
	},
	{
		"x": 116.397358,
		"y": 39.993105,
		"name": "哈亭",
		"info": "哈亭是京族的特色建筑。京族主要分布在广西防城港地区，人口约2.3万。有本民族语言，语系属尚未确定，大部分通用汉语粤方言。无本民族文字。京族是主要从事沿海渔业，兼农业。京族自然崇拜，信奉镇海大王和观音菩萨。京族博物馆由民居石条瓦房、哈亭、小河湾组成，规划为依水而居的渔家居住环境。并按当地自然环境种植植被。占地面积280平方米，建筑面积58.71平方米。京族博物馆室内外陈列，按京族传统生产、生活方式原状复原陈列。展品征集广西防城港地区，年代为近代，约一百年历史。",
		"recommend": 3,
		"time": 5
	},
	{
		"x": 116.397982,
		"y": 39.993008,
		"name": "鄂伦春景区",
		"info": "鄂伦春族景区。鄂伦春族主要分布在内蒙古黑龙江大兴安岭地区，有近9000人，特色建筑有鄂伦春族桦皮屋，鄂伦春族服装以动物毛皮为主，比较保暖。鄂伦春族帽子采用羊的两只羊角。",
		"recommend": 5,
		"time": 15
	},
	{
		"x": 116.397447,
		"y": 39.992814,
		"name": "板凳桥",
		"info": "板凳桥属于苗族特色建筑。苗族博物馆建筑按贵州黔东南地区苗族传统建筑1：1复原，由本民族工匠根据民族习俗和传统建筑工艺在当地建成半成品，运至北京落建。于1992年始建，1994年6月正式开馆。苗族博物馆由民居水苗吊脚楼、山苗吊脚楼，茶馆吊脚楼、银铺吊脚楼、山货店吊脚楼、铜鼓坪、烤烟房、板凳桥、水碾房、寨门、粮仓等组成，规划为山苗寨和水苗寨两个不同环境的苗寨环境。并按当地气候配置植被和种植烤烟、包谷等特色农作物。总建筑面积1418.08平方米，总占地面积4200平方米。苗族博物馆室内外陈列，按贵州黔东南地区苗族传统生产、生活方式原状复原展示。所有展品征集于贵州地区，年代为清代至近代，约四百年历史。",
		"recommend": 3,
		"time": 5
	},
	{
		"x": 116.39813,
		"y": 39.993222,
		"name": "满族皇堂子",
		"info": "皇堂子是清朝皇家进行政治与宗教活动的重要场所之一。北京的皇堂子在顺治元年九月（公元1644年）敕建于长安左门外，光绪二十六年（1900年）被毁。第二年重建于东长安街北侧（今北京饭店贵宾楼附近）。二十世纪五十年代被拆除，皇堂子四周高大宫墙，内有三个院落组成：一是外院，有衙卫房，饽饽房等；二是内院，有祭神殿、拜天圜殿、尚神殿和戟门等数座重要建筑；三是仪树院，有秩序植柏七十三株。堂子里的萨满祭祀相当繁杂，主要包括元旦拜天、堂子月祭、春秋立杆大祭、尚锡神亭月祭、堂子浴佛祭、为马祭神与凯旋出征祭旗等。其中元旦致祭和出征凯旋祭属于国家大典，一般由皇帝主祭，王公、满洲大臣等陪祭。春秋立杆祭是清代宫廷祭天大礼，礼仪隆重，场面浩大。其他祭祀则为皇室或皇帝个人的祭典，属于家祭，皇帝不必亲祭，也无需陪祀。萨满作为祭祀仪式的执行人，在祭祀过程中要通过献香、献酒、擎神刀祷祝，诵神歌等，代表皇室向神灵祖先祈求福佑。因萨满信仰属多神信仰，堂子里举行的各种撒满祭祀所敬神祗亦有多种。主要包括天神、朝祭神（释迦牟尼、观世音菩萨、关圣帝君等）、夕祭神（穆哩罕神、画像神、蒙古神等）、纽欢台吉、武笃本贝子、祈福神、尚锡神、马神、纛神等。中华民族园复原的满族皇堂子，以已拆除的北京皇堂子为设计蓝本，参考清代有关重要文献和老专家的回忆、资料图片等，基本上重现了清代皇堂子的风貌。建有祭神殿、拜天圜殿、尚神殿和戟门等数座重要建筑。皇堂子是满族独有的建筑形式，复原皇堂子填补了建筑史的一项空白，在建筑、历史、宗教、民俗等方面增添了一处研究与教学的实物例证。",
		"recommend": 4.5,
		"time": 12
	},
	{
		"x": 116.398494,
		"y": 39.993073,
		"name": "满族博物馆",
		"info": "满族，现有人口1068.23万。主要分布在辽宁、吉林、黑龙江三省，一小部分散居于北京、天津等大中城市。满族先世从事渔猎，后逐渐以农耕为主，兼事渔牧。满族有自己的语言文字，满语属阿尔泰语系满-通古斯语族满语支。满文创制于16世纪末，曾在清朝成为官方文字，留下大量满文历史典籍。满族信仰萨满教，崇拜祖先。 满族曾在17世纪中叶到20世纪初，统一中国，建立清朝。满族精于狩猎和征战；能歌善舞；有孝敬长辈，讲究请安问好，重视礼节规矩的传统。传统节庆：春节、上元节，添仓节，虫王节、端午节、中秋节、颁金节等；传统曲艺：八角鼓，满戏，清音子弟书；传统歌舞：萨满祭祀歌舞、筵宴喜庆歌舞、宫廷歌舞、民间歌舞等；传统饮食：“满汉全席”、饽饽 、火锅、白肉血肠、酸汤子、“萨其玛”等；传统竞技：珍珠球、踢行头、打铜锣、耍石锁、摔跤等。满族博物馆由祭神殿、拜天圜殿、尚神殿和戟门等数座重要建筑组成。博物馆室内外陈列展览由河北省承德市民宗局承办。",
		"recommend": 5,
		"time": 15
	},
	{
		"x": 116.398202,
		"y": 39.992794,
		"name": "朝鲜族村",
		"info": "朝鲜族主要分布在吉林地区，人口约192万。有本民族的语言文字。语系隶属尚无定论；朝鲜文有40个字母，拼写时把同一音节的音素迭成字块构成方块形文字。主要从事农业生产，以出产优质大米著称。朝鲜族博物馆由农舍、书房、药房、小酒馆、铁匠铺及水井、秋千架、水稻田组成，规划为村寨环境。并按当地生态环境配置植被和种植特色农作物。朝鲜族博物馆室内外陈列，按朝鲜族传统生产、生活方式原状复原展示。展品征集于吉林延边地区，年代为清代至近代，约三百年历史。",
		"recommend": 4,
		"time": 15
	},
	{
		"x": 116.398269,
		"y": 39.992617,
		"name": "朝鲜族景区",
		"info": "朝鲜族主要分布在吉林地区，人口约192万。有本民族的语言文字。语系隶属尚无定论；朝鲜文有40个字母，拼写时把同一音节的音素迭成字块构成方块形文字。主要从事农业生产，以出产优质大米著称。朝鲜族博物馆由农舍、书房、药房、小酒馆、铁匠铺及水井、秋千架、水稻田组成，规划为村寨环境。并按当地生态环境配置植被和种植特色农作物。朝鲜族博物馆室内外陈列，按朝鲜族传统生产、生活方式原状复原展示。展品征集于吉林延边地区，年代为清代至近代，约三百年历史。",
		"recommend": 4,
		"time": 8
	},
	{
		"x": 116.398234,
		"y": 39.992268,
		"name": "打谷场",
		"info": "秋天是收获的季节，自然也是农民一年之中最忙碌的季节。每到秋收时节，田间地头的各种农作物，也渐次成熟、收获，这时候，人们都会想到一个名字——打谷场。打谷场，曾经是一个村子的地标。在人民公社时期，每个生产队都会有个打谷场，用于秋作物的存放和处理地场所。村里的打谷场，一般都是由存放工具和设备的厂房，和一块耙压平整结实的场地组成。",
		"recommend": 3,
		"time": 3
	},
	{
		"x": 116.397542,
		"y": 39.992061,
		"name": "景颇族",
		"info": "景颇族博物馆按云南德宏地区景颇族传统民居建筑1：1复原建设，由当地工匠根据本民族习俗在当地建成半成品，运至北京落建，于1993年10月建成。1994年6月正式开馆。景颇族博物馆由目脑广场、目脑柱、正房、公房、寨门、谷仓、柴房、祭祖台组成，规划成山寨形式。按山寨环境复原，并按当地气候配置植被和种植特色农作物。占地2327平方米、建筑面积960平方米、目脑广场444.85平方米。景颇族博物馆室内外陈设均按照景颇族传统生产、生活方式原状复原陈列。展品均征集云南德宏地区景颇族居住地，年代为清末至近代，约有二百年历史。",
		"recommend": 4,
		"time": 6
	},
	{
		"x": 116.39681,
		"y": 39.992289,
		"name": "佤寨",
		"info": "佤族是中国云南省西南部的一个古老的民族，人口仅35万。佤族没有文字，使用佤语，有巴饶克、佤和阿佤3个方言，属南亚语系。佤族人忌白爱黑，姑娘里谁最黑最漂亮谁就是黑雪公主；小伙子里谁最黑最英俊谁就是黑马王子。佤族人喜爱歌舞，常见的舞蹈有“圆圈舞”、“甩发舞”、“春米舞” 等（据说还有一种民间用于祭奠的棺材舞）。逢年过节，佤族男女都会自动聚到一起歌舞三天。这次逛佤寨正好遇上佤族的少男少女的歌舞表演。这些佤族青年演员都是民族园从云南山里招来的“合同工”，听说招来时这些善歌会舞的佤族青年大多没多少文化，有些连一个字都不识。歌唱得很纯正，只是握着话筒，放着录音唱歌多少失去了“山里来的”那种原汁原味的感觉。相比之下还是舞蹈给人的感觉比较好：强烈的音乐节奏、黑黑的皮肤、飘洒的长发、独特的佤族服饰、粗犷、豪放的舞姿，举手投足之中的那种充满了力量的原始的美、那种充满了野性的大自然的美感染了每一个观众。",
		"recommend": 4,
		"time": 10
	},
	{
		"x": 116.396414,
		"y": 39.992417,
		"name": "山苗寨",
		"info": "苗族是中华民族在家庭中的一个历史悠久，人民勤劳的古老民族；一个最先开发中原，最早拓展南方的伟大民族。因为战乱和天灾历经五次大迁徙，从黄河流域步步退往长江中下游和在中国西南地区；有的背井离乡移居东南亚，漂洋过海远徙欧美诸国。苗族主要分布在贵州等地区，人口约740万。有本民族的语言，属汉藏语系苗瑶语族苗语支。无本民族文字。传统节日：苗年、四月八、龙船节、花山节、姐妹节等。传统饮食：酸汤、酸鱼、鱼酱、狗肉汤锅、油茶等。传统歌舞：芦笙舞、反排木鼓舞、板凳舞、飞歌、古歌等。传统竞技：上刀山、下火海、斗牛。苗族信仰：崇拜祖先，信鬼神、自然崇拜。苗族博物馆由民居水苗吊脚楼、山苗吊脚楼，茶馆吊脚楼、银铺吊脚楼、山货店吊脚楼、铜鼓坪、烤烟房、板凳桥、水碾房、寨门、粮仓等组成，规划为山苗寨和水苗寨两个不同环境的苗寨环境。并按当地气候配置植被和种植烤烟、包谷等特色农作物。总建筑面积1418.08平方米，总占地面积4200平方米。苗族博物馆室内外陈列，按贵州黔东南地区苗族传统生产、生活方式原状复原展示。所有展品征集于贵州地区，年代为清代至近代，约四百年历史。",
		"recommend": 4,
		"time": 8
	},
	{
		"x": 116.396293,
		"y": 39.992555,
		"name": "铜鼓坪",
		"info": "苗族拥有悠久的历史和丰厚的文化，又因分布地域广泛而支系众多、具有不同风情与特色的歌舞艺术。在贵州，要数居住在黔东南的苗族歌舞更为丰富多彩、活泼粗犷。苗族自古视铜鼓为神器，每当祭祀祖先、神灵时有敲击铜鼓作舞的传统。不同时代和地区的铜鼓虽然形制不同、鼓上镌刻的花纹各异，但在鼓面中心都必不可少地刻有若干条“光芒”的“太阳纹”图案。随着历史的发展，不少祭祀性的舞蹈被慢慢转化为民间的仪式性或自娱性舞蹈。而且在少有平地的苗寨中，为给举行集会和进行农作提供方便，人们在恰当的地方修整出一块平地，再用石条以巧夺天工的精湛技艺，按照铜鼓鼓面的“太阳纹”镶嵌成“铜鼓坪”，使所有在坪上为祭祀而作舞的苗人，能时时设想着自己成为鸟图腾的化身“羽人”，再次回到了祖先的世界。",
		"recommend": 3.5,
		"time": 3
	},
	{
		"x": 116.395956,
		"y": 39.9927,
		"name": "水苗寨",
		"info": "突出苗族文化，采用现代建筑材料，按照“屏边苗式”建筑风格体系，重点以坡屋顶、小青瓦、美人靠、米黄墙、吊脚楼、苗图腾、木格窗，适度配以小青砖线条为主要建筑表现手法，充分融入苗族建筑和苗文化元素。",
		"recommend": 4,
		"time": 18
	},
	{
		"x": 116.395889,
		"y": 39.992469,
		"name": "侗族景区",
		"info": "侗族主要分布在南方的广西、湖南和贵州省，三省内都有一或多个侗族自治县。侗族人民自古以来就有集中居住的特点，较大的侗寨上千户人家，小者三、五十户。侗寨鼓楼一般是按族姓建造，每个族姓一座鼓楼。如果侗寨族姓多，往往一寨之中同时有几个鼓楼并立，侗寨建鼓楼都由全寨人集资修建。哪里有侗族，哪里就有鼓楼，只有侗寨才有鼓楼，有了鼓楼才算侗寨。鼓楼在侗族人民心目中拥有至高无上的地位。鼓楼通体全是本质结构，不用一钉一铆，由于结构严密坚固，可达数百年不朽不斜。鼓楼，顾名思义，内设有鼓。鼓楼最顶层悬挂着一面长鼓，平时村寨里如果有重大的事情，就会有人登楼敲鼓，召集村民商议。",
		"recommend": 4,
		"time": 12
	},
	{
		"x": 116.395422,
		"y": 39.992624,
		"name": "彝寨",
		"info": "彝族民居彝族民居类型可以分为以下几类瓦房、土掌房、闪片房、垛木房、茅草房等，大分散、小聚居是彝族居住的主要特点。在彝区，各地、各支系传承的居室建筑形式是多种多样的，并与当地的居住习俗有密切关联，从村寨的聚落到住宅的地址；从房间的分置到什物的堆放；从建筑结构到民居信仰和禁忌，都表现出独特的民族风情。",
		"recommend": 4,
		"time": 13
	},
	{
		"x": 116.395004,
		"y": 39.993305,
		"name": "土林",
		"info": "土林位于北园西门，宽62米，高19.5米，仿云南省楚雄彝族自治州元谋县黄土自然风化而成的土林。一座座高大的红色土柱拔地而起，气势雄伟，犹如莽莽森林，故名土林。土林一柱一形、千姿百态，是与石林相媲美的天造奇观。",
		"recommend": 3,
		"time": 6
	},
	{
		"x": 116.395929,
		"y": 39.993312,
		"name": "侗族水车群",
		"info": "水车侗寨正如其名字一样是以水车多而闻名。据说，在明朝时期，村民看见官府利用水车转动磨盘来加工粮食，村民受到启发，在寨子里的河边上建造了很多水车来加工粮食，这样节省了劳动力，提高了生产效率，因此，成了远近闻名的水车侗寨。",
		"recommend": 4,
		"time": 5
	},
	{
		"x": 116.395571,
		"y": 39.993542,
		"name": "景颇族馆景区",
		"info": "景颇族博物馆按云南德宏地区景颇族传统民居建筑1:1复原建设，由当地工匠根据本民族习俗在当地建成半成品，运至北京落建，于1993年10月建成。1994年6月正式开馆。景颇族博物馆由目脑广场、目脑柱、正房、公房、寨门、谷仓、柴房、祭祖台组成，规划成山寨形式。按山寨环境复原，并按当地气候配置植被和种植特色农作物。占地2327平方米、建筑面积960平方米、目脑广场444.85平方米。景颇族博物馆室内外陈设均按照景颇族传统生产、生活方式原状复原陈列。展品均征集云南德宏地区景颇族居住地，年代为清末至近代，约有二百年历史。",
		"recommend": 5,
		"time": 10
	}
]