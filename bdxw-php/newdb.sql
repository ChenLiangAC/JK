-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2015 年 11 月 28 日 13:08
-- 服务器版本: 5.6.21
-- PHP 版本: 5.4.34

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `newdb`
--

-- --------------------------------------------------------

--
-- 表的结构 `adminuser`
--

CREATE TABLE IF NOT EXISTS `adminuser` (
  `userid` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `userpwd` char(30) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `userid` (`userid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `adminuser`
--

INSERT INTO `adminuser` (`userid`, `username`, `userpwd`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `newsid` int(20) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(100) NOT NULL DEFAULT '‘‘',
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` date NOT NULL,
  PRIMARY KEY (`newsid`),
  UNIQUE KEY `newsid` (`newsid`),
  KEY `newstitle` (`newstitle`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COMMENT='新闻表' AUTO_INCREMENT=40 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(1, '图解：习近平G20和APEC之行彰显中国担当', 'xw1.jpg', '习近平强调，要尽早建成亚太自由贸易区。', '2015-11-11'),
(2, '李克强宣布中方出资2千万澳元搜救MH370', 'xw2.jpg', '李克强于20日至23日出席中国-东盟领导人会议、东盟与中日韩领导人会议和东亚峰会。', '2015-11-11'),
(3, '厉以宁建议促进社会公平：否则改革有逆向风险', 'xw3.jpg', '从计划经济体制转为市场经济体制，如果社会不稳定，改革不是不可能逆转的。', '2015-11-11'),
(4, '吴敬琏：新常态经济下行是供给侧发生了问题', 'xw4.jpg', '李克强总理17日在主持召开“十三五”《规划纲要》编制工作会议时再次强调，要在供给侧和需求侧两端...', '2015-11-11'),
(5, '公务员跳槽 为何放弃"铁饭碗"', 'xw5.jpg', '在招聘活动中，公务员加盟浙商的人数有增无减。', '2015-11-11'),
(6, '锦荣晒图做早餐 网友:拍照的是蔡依林吧？', 'xw6.jpg', '蔡依林男友锦荣在微博上晒出自己做早餐的照片，并开心地写到，在准备早餐，好饿好饿好饿。', '2015-11-11'),
(7, '估值10 亿的辣妈帮，如何不伤用户感情，又做好电商？', 'xw7.png', '辣妈帮注册用户量为5400万，日活420万，旗下备孕工具产品“孕期伴侣”用户突破了1000万，...', '2015-11-11'),
(8, '照片里有什么？问问Facebook的人工智能吧', 'xw8.jpg', '这一系统还有几个新特征，比如，人们可以向机器询问某个照片里有什么，Facebook将这个功能称...', '2015-11-11'),
(9, '国务院：加快发展生活性服务业促进消费结构升级', 'xw9.jpg', '在推动上述重点领域加快发展的同时，还要加强对生活性服务业其他领域的引导和支持，鼓励探索创新，营...', '2015-11-11'),
(10, '英国多名卧底警察成猎艳高手', 'xw10.jpg', '英国内政大臣特蕾莎·梅已经下令，对警方上世纪以来对民间团体的卧底行动进行独立调查。', '2015-11-11'),
(11, '百度张高：百度云加速推出系列扶持计划 构建云安全新生态', 'xw11.jpg', '百度云加速与西部数码的战略合作将会成为中国互联网市场上的“经典搭档”，为用户带来三大价值。', '2015-11-11'),
(12, '2016款别克昂科威21.99万-34.99万', 'xw12.jpg', '别克昂科威20T全系享购置税减半 可节省高至1.1万元', '2015-11-11'),
(13, '奢侈品牌电商试水 比你想的还要早 ', 'xw13.jpg', '', '2015-11-11'),
(14, '前淘宝、兰亭高管：为摆脱中年危机我再次创业，造福1亿“美国屌丝”', 'xw14.jpg', '', '2015-11-11'),
(15, '美研究所:"博科圣地"恐怖超IS', 'xw16.jpg', '去年“博科圣地”造成的死亡人数超过其他任何激进组织。', '2015-11-11'),
(16, '缅甸北部山体滑坡致60人遇难', 'xw17.jpg', '缅甸北部发生山体滑坡造成至少60人死亡，上百人失踪。', '2015-11-11'),
(17, '【行业前沿】第七种互联网金融模式横空出世', 'xw18.jpg', '做“第七种互联网金融模式”的公司并不多，数据和经验是这个行业的掣肘。', '2015-11-11'),
(18, '北京地铁乘客替黑人打抱不平 与插队者起冲突监控画面曝光(图) ', 'xw19.jpg', '北京青年报记者联系到当事人李先生，他表示，他是替黑人“打抱不平”才与插队者发生了冲突。', '2015-11-12'),
(19, '北京本周将现强降温天气 进入"极寒冰冻周"', 'xw20.jpg', '在翘首以待中，纷纷扬扬的大雪在昨晨大方洒下，截至20点，北京城区平均降雪量9.3毫米，接近暴雪量级。', '2015-11-12'),
(21, '北京去年GDP突破2万亿元 人均GDP达16278美元', 'xw22.jpg', '2014年北京市科技服务业增加值约为3635.6亿元，占GDP的17%，“十二五”以来年均现价...', '2015-11-12'),
(22, '旅客闹脾气 北京飞宜宾客机上了跑道又折返', 'xw23.jpg', '当飞机即将在跑道上起飞时，突然有个别乘客提出身体不适，强烈要求下飞机，导致当晚8时15分，航班...', '2015-11-12'),
(23, '北京遭遇六年最差开局 翟晓川：防守出大问题', 'xw24.jpg', '联赛战罢8轮，北京首钢4胜4负，虽然排名还未跌出前八，但这样的开局也创造了球队近6个赛季以来的...', '2015-11-12'),
(24, '电动汽车雪天续航里程锐减 ', 'xw25.jpg', '北京迎来了立冬以来的第二场雪，然而，在一些电动出租车司机的眼里，浪漫的雪景却变成了烦恼。', '2015-11-12'),
(25, '北京出动3.7万环卫人员扫雪 撒近1.4万吨融雪剂', 'xw26.jpg', '全市共出动环卫专业作业人员3.7万人，施撒融雪剂13824吨。', '2015-11-12'),
(26, '北京本周气温持续低迷最低仅-12℃ 明日仍有小雪', 'xw27.jpg', '', '2015-11-12'),
(27, '北体大学生堆巨型雪人 "男神"半裸合影', 'xw28.jpg', '', '2015-11-12'),
(28, '北京本周最低气温或跌至-12℃ 逼近历史极值纪录', 'xw29.jpg', '最冷的两天是周三和周四，白天最高气温均为-2℃，夜间最低气温分别为-11℃和-12℃，尤其周三...', '2015-11-12'),
(29, '中国北方多地迎战强降雪 大幅强降温来袭', 'xw30.jpg', '在强冷空气的影响下，一场大范围的降温天气将在中东部地区自北向南陆续展开，华北大部地区最低气温将...', '2015-11-12'),
(30, '医保公司需要什么服务之四：支付方困境难撑数字医疗', 'xw31.jpg', '这类产品只是中国目前健康险市场无序竞争的一个过渡产品，不能真正称为医疗保障。', '2015-11-13'),
(31, '揭秘营销神话背后的新手法（一）：八大维度', 'xw32.jpg', '无论是商家、媒体，还是公关，都开始绞尽脑汁开发朋友圈的影响力，毫不夸张地说，新媒体营销的“朋友...', '2015-11-13'),
(32, '“一带一路”：香港的重要战略机遇', 'xw33.jpg', '', '2015-11-13'),
(33, '互联急救APP，应该实现“深度互联”', 'xw34.jpg', '', '2015-11-13'),
(34, '《饥饿游戏3：嘲笑鸟(下)》:反抗邪恶的不一定是正义', 'xw35.jpg', '我们或被灌输或自以为我们的社会是完美的，但是我们当一次次进步的时候再回首才发现我们所建立的社会...', '2015-11-13'),
(35, '《消失的凶手》：理想主义者的荒诞杀人游戏', 'xw36.jpg', '犯罪嫌疑类型故事里，最经典的角色莫过于福尔摩斯。', '2015-11-13'),
(36, '企业级软件服务市场，必将诞生下一个微信', 'xw37.jpg', '', '2015-11-13'),
(37, '“全透明幼儿园”是一块易碎的安全玻璃', 'xw38.jpg', '', '2015-11-13');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
