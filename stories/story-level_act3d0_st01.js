var story = [
    [
        "ac3_report",
        "ac3_title1",
        "ac3_title2",
        "bg_beach",
        "bg_sunnytown_2",
        "bg_sunnytown_1",
        "bg_festival_1",
        "char_002_amiya_2",
        "bg_ri_1",
        "char_003_kalts_1",
        "char_017_homura_1",
        "char_002_amiya_10",
        "char_002_amiya_6",
        "char_101_sora_summer",
        "bg_island",
        "char_002_amiya_1",
        "char_145_prove_1",
        "char_166_skfire_2",
        "avg_npc_021",
        "char_196_sunbr_summer",
        "avg_npc_022",
        "avg_npc_010",
        "char_010_chen_summer",
        "char_340_shwaz_1",
        "avg_npc_020",
        "char_340_shwaz_2"
    ],
    [
        "m_dia_mist_loop",
        "m_dia_mist_intro",
        "m_dia_street_loop",
        "m_dia_street_intro",
        "d_gen_transmissionget",
        "d_gen_runsand",
        "m_dia_path_loop",
        "m_dia_path_intro",
        "d_amb_beach",
        "d_gen_phonevibration"
    ],
    [
        "playground.clearDialog();delay(1);voice.playMusic({intro:'m_dia_mist_intro', key:'m_dia_mist_loop', volume:0.8,crossfade:1});playground.drawDialog({name:'？？？',text:'火山监测站那边的样本数据已经调出来了，请您查看一下。'});",
        "playground.drawDialog({name:'女性的声音',text:'直接告诉我结果吧。'});",
        "playground.drawImage({image:'ac3_report',screenadapt:'coverall',x:0, y:0, xscale:1, yscale:1, fadetime:4});playground.drawDialog({name:'？？？',text:'那边的人说样本的温度还没超过今年的最高温度。'});",
        "playground.drawDialog({name:'？？？',text:'而且比过去三年的峰值还低不少。蒸汽状况也正常。'});",
        "playground.drawDialog({name:'？？？',text:'所以......'});",
        "playground.drawDialog({name:'女性的声音',text:'所以?'});",
        "playground.drawDialog({name:'？？？',text:'所以监测站那边判断火山并不会有什么异常，再次驳回了您的公告请求，市长也......'});",
        "background.cameraShake({duration:2, xstrength:14, ystrength:6, vibrato:30, randomness:60, fadeout:true, block:false});playground.drawDialog({name:'女性的声音',text:'开什么玩笑！！'});",
        "playground.drawDialog({name:'女性的声音',text:'虽然方法简陋了一些，但我手头的样本明显有问题。'});",
        "playground.drawDialog({name:'女性的声音',text:'去年那个时候，火山的状况就已经很危险了！'});",
        "playground.drawDialog({name:'女性的声音',text:'但是他们一点警告都没有准备，甚至是新闻都没有！一点都没有！！'});",
        "playground.drawDialog({name:'？？？',text:'锡兰小姐，请、请您冷静点。'});",
        "playground.drawDialog({name:'？？？',text:'如果监测站说没有异常，那我们采取任何行动都不会有人相信。'});",
        "playground.drawImage({fadetime:2});playground.drawDialog({name:'锡兰',text:'......抱歉。'});",
        "playground.drawDialog({name:'锡兰',text:'观测站的样本数据可靠吗？'});",
        "playground.drawDialog({name:'？？？',text:'说实话汐斯塔市政厅对这方面一直不是很重视，也许检测仪器真的出了点问题。'});",
        "playground.drawDialog({name:'锡兰',text:'那火山可能会发生异常的事实也会因此被掩盖。'});",
        "playground.drawDialog({name:'？？？',text:'所以，下一步您打算怎么做？'});",
        "playground.drawDialog({name:'锡兰',text:'现在的现象并不能用我所学到的专业知识解释，如果通过机构里的人无法得到正确的报告，就要依靠外人了。'});",
        "voice.stopMusic({fadetime:2});playground.drawDialog({name:'锡兰',text:'如今情况还算稳定，我们还有时间。能花点时间从这些游客里找到专业人员吗？'});",
        "playground.drawDialog({name:'锡兰',text:'虽然不能奢望能找到合适的人，更不能指望他们能给出结论，但是这是我们最后的机会了......'});",
        "playground.drawDialog({name:'锡兰',text:'已经有不少赶在这个时候来到汐斯塔的游客了。'});",
        "playground.drawDialog({name:'锡兰',text:'毕竟，马上就是黑曜石节举办的时间了，再不采取行动的话就来不及了。'});",
        "playground.drawImage({image:'ac3_title1', fadetime:3,block:true});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawImage({});voice.playMusic({intro:'m_dia_street_intro', key:'m_dia_street_loop', volume:0.8, crossfade:1.5});playground.drawDialog({name:'',text:'10:10 A.M.  天气/晴'});",
        "playground.drawDialog({name:'',text:'汐斯塔'});",
        "blocker.blocker({a:0, fadetime:2, block:false});playground.drawImage({image:'ac3_title2', fadetime:2});background.showImage({image:'bg_beach',screenadapt:'coverall',x:-200, y:0,block:true});background.showImage({image:'bg_beach' ,screenadapt:'coverall',xfrom:-200, yfrom:0, xto:200, yto:0,duration:25});voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawDialog({name:'广播',text:'亲爱的旅客，您好，欢迎在一年一度的黑曜石节期间来到汐斯塔市。'});",
        "playground.drawDialog({name:'广播',text:'既然选择了来我们汐斯塔度假消暑，那么这座城市就一定不会让您失望！'});",
        "playground.drawDialog({name:'广播',text:'在这里，炎热会变成高涨的热情，您将会忘记一切不快和疲劳，彻底沉醉于汐斯塔市这个迷人的城市！'});",
        "playground.drawDialog({name:'广播',text:'而今年的汐斯塔有的可不仅仅是碧海蓝天、阳光沙滩，还有盛大召开的黑曜石节！'});",
        "playground.drawDialog({name:'广播',text:'持续半个月的黑曜石节中，除了美食和娱乐，全天开放的一切娱乐活动，还有我们最为盛大的全城音乐节！'});",
        "playground.drawDialog({name:'广播',text:'我们请到了各地的音乐大咖作为我们的特别嘉宾，带来这最热烈的音乐盛典！'});",
        "playground.drawDialog({name:'广播',text:'在节日持续日期中，我们特意为大家准备了各项免费设施和活动，大家可以按照喜好进行游玩！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.drawImage({});playground.drawCharacter({});background.showImage({});blocker.blocker({a:0, fadetime:0.6, block:false});background.showImage({image:'bg_sunnytown_2',x:-80, y:0, xscale:1.1, yscale:1.1,block:true});background.showImage({image:'bg_sunnytown_2', xfrom:-80, yfrom:0, xto:20, yto:0,duration:15});playground.drawDialog({name:'广播',text:'在市民广场上，“摇滚派对”和无限供应的汐斯塔自产啤酒是绝对的主角！'});",
        "playground.drawDialog({name:'广播',text:'放开一切，跟随着鼓点尽情舞动。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({});background.showImage({});blocker.blocker({a:0, fadetime:0.6, block:false});playground.clearDialog();background.showImage({image:'bg_sunnytown_1',x:80, y:0, xscale:1.1, yscale:1.1,block:true});background.showImage({image:'bg_sunnytown_1', xfrom:80, yfrom:0, xto:-20, yto:0,duration:15});playground.drawDialog({name:'广播',text:'想要享受悠扬？前往第二大道的赫尔曼大酒店门前广场，那里是爵士的天堂。'});",
        "playground.drawDialog({name:'广播',text:'无限制无规则，只要你愿意，你就能融入！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({});background.showImage({});blocker.blocker({a:0, fadetime:0.6, block:false});playground.clearDialog();background.showImage({image:'bg_festival_1',x:-80, y:0, xscale:1.1, yscale:1.1,block:true});background.showImage({image:'bg_festival_1', xfrom:-80, yfrom:0, xto:20, yto:0,duration:15});playground.drawDialog({name:'广播',text:'座落在城东火山脚下的加里森游乐场，在继续24小时免费开放的同时，搭建了城中最大的音乐舞台。'});",
        "playground.drawDialog({name:'广播',text:'除开每天的固定表演，我们还迎来了众多神秘嘉宾，是喜欢说唱文化的您绝对不容错过的存在。'});",
        "playground.drawDialog({name:'广播',text:'除此之外，也还有众多演出伴随着我们的各项活动分布在全城，等待着您的到来。'});",
        "playground.drawDialog({name:'广播',text:'请各位前往在各个路口岗哨处的STAFF人员处领取黑曜石节特制城市地图。'});",
        "playground.drawDialog({name:'广播',text:'我们为您标注了节日期间，市内所有演出的地点与时间，方便您提前规划路线与行程。'});",
        "playground.drawDialog({name:'广播',text:'狂欢之际，大家也要注意天气。'});",
        "playground.drawDialog({name:'广播',text:'今天的气温高达36度，是入夏以来最热的一天。出行期间，请注意防晒，避免中暑。'});",
        "playground.drawDialog({name:'广播',text:'祝大家玩得愉快！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_sunnytown_1',screenadapt:'coverall',block:true});blocker.blocker({a:0, fadetime:2, block:true});playground.clearDialog();playground.drawCharacter({name:'char_002_amiya_2',fadetime:1,block:true});delay(1);playground.drawDialog({name:'阿米娅',text:'不愧是专门的旅游度假都市汐斯塔，气氛真是高涨呢。'});",
        "playground.Decision({options:[['1', '2'], '没想到会这么热闹。', '竟然会举办这么大型的活动。']});",
        "predicate = ['1', '2'];",
        "playground.drawDialog({name:'阿米娅',text:'我也没有想到！'});",
        "playground.drawDialog({name:'阿米娅',text:'在来之前我们都没猜到这里这么特别，本来还以为是个普通的海边小城。'});",
        "playground.drawDialog({name:'阿米娅',text:'多亏了给我们推荐这里的凯尔希医生了。'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({screenadapt:'coverall', image:'bg_ri_1'});playground.drawCharacter({fadetime:0});background.cameraEffect({effect:'grayscale', keep:true, amount:1, fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'......这地方我没有什么兴趣，你们去就可以了。'});",
        "playground.drawCharacter({name:'char_017_homura_1'});playground.drawDialog({name:'煌',text:'等等我！我也想去。'});",
        "playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'站住。你的伤还没好，不准走。'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_sunnytown_1',screenadapt:'coverall',block:true});playground.drawCharacter({fadetime:0});background.cameraEffect({effect:'grayscale', keep:true, amount:0, fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.Decision({options:[['1', '2'], '我也不讨厌这样的地方。', '真是积极的推荐手法。']});",
        "predicate = ['1', '2'];",
        "playground.drawCharacter({name:'char_002_amiya_10'});playground.drawDialog({name:'阿米娅',text:'博士能喜欢这里那就最好了。'});",
        "playground.drawDialog({name:'阿米娅',text:'这段时间遇到了太多事情，博士也辛苦了。'});",
        "playground.drawDialog({name:'阿米娅',text:'这次，有不少罗德岛的干员们也都一起过来了，趁这个机会好好放松一下吧。'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'啊，博士，你看那边，有人在露天弹钢琴。'});",
        "playground.drawDialog({name:'阿米娅',text:'那边有人在弹吉他，还有小提琴，哇，跳舞的也有......'});",
        "playground.drawDialog({name:'阿米娅',text:'让我想起以前天天练习演奏的日子。'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'整条街上的气氛都跟刚才的海滩完全不同。'});",
        "playground.drawDialog({name:'阿米娅',text:'第一见到这么多喜欢演奏的人，果然让人很想融入他们呢。'});",
        "playground.Decision({options:[['1'], '阿米娅把小提琴带来了吗？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'啊没有没有，我并不是这个意思。我并不是说自己要去加入他们！'});",
        "playground.drawDialog({name:'阿米娅',text:'可能要完全恢复到之前的水平，我还要重新练一练才行。'});",
        "playground.Decision({options:[['1'], '可是阿米娅现在也不输他们啊。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_10'});playground.drawDialog({name:'阿米娅',text:'哪，哪里有啊！'});",
        "playground.drawDialog({name:'阿米娅',text:'不过，博士能这么说，我好高兴。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'咦，空？'});",
        "playground.drawCharacter({name:'char_101_sora_summer'});playground.drawDialog({name:'空',text:'啊，博士，阿米娅，早上好，没想到你们也到第二大道来了！'});",
        "playground.drawCharacter({name:'char_101_sora_summer',name2:'char_002_amiya_2',focus:2});playground.drawDialog({name:'阿米娅',text:'早上好，没想到空也喜欢爵士乐的街道。'});",
        "playground.drawDialog({name:'阿米娅',text:'还以为你会更喜欢都市派的音乐呢。'});",
        "playground.drawCharacter({name:'char_101_sora_summer',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'空',text:'对于音乐，不管什么种类我可都是行家!'});",
        "playground.drawDialog({name:'空',text:'......其实本来我也想去其他地方看看，不过昨晚被旅馆附近的LIVE吵到关了窗户戴上耳塞都没能睡着呢。'});",
        "playground.drawDialog({name:'空',text:'虽然白天的时候能听到音乐很好，到了晚上也还吵个不停就有点难受了。'});",
        "playground.drawDialog({name:'空',text:'结果因为昨天闹得太欢，今天只能先在这里休息休息了。'});",
        "playground.drawCharacter({name:'char_101_sora_summer',name2:'char_002_amiya_2',focus:2});playground.drawDialog({name:'阿米娅',text:'毕竟是音乐节期间，这也是热闹的证明呢。'});",
        "playground.drawCharacter({name:'char_101_sora_summer',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'空',text:'啊哈哈，也没办法呢，我们当中有好多人都没见过海。'});",
        "playground.drawDialog({name:'空',text:'比如今天一大早，伊芙利特又大喊着“大海我来啦！”就冲出去了，也不知道她现在跑哪儿去了。'});",
        "playground.drawCharacter({name:'char_101_sora_summer',name2:'char_002_amiya_10',focus:2});playground.drawDialog({name:'阿米娅',text:'哈哈，确实。'});",
        "playground.drawDialog({name:'阿米娅',text:'虽然，这片海据说严格意义上只是一座巨大的湖泊......'});",
        "playground.drawCharacter({name:'char_101_sora_summer',name2:'char_002_amiya_10',focus:1});playground.drawDialog({name:'空',text:'有水有沙滩就是海啦~'});",
        "playground.drawDialog({name:'空',text:'等我先在这里用早晨的时间缓一缓，中午到晚上就算火山爆发都不能阻止我去玩个够！'});",
        "playground.drawCharacter({name:'char_101_sora_summer',name2:'char_002_amiya_10',focus:2});playground.drawDialog({name:'阿米娅',text:'哈哈不愧是空，那么我们先走啦。'});",
        "playground.drawCharacter({name:'char_101_sora_summer',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'空',text:'好的~阿米娅和博士也玩得开心哦。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_sunnytown_2',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:2, block:false});voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawDialog({name:'广播',text:'现在是11点，大家是否度过了一个完美的早晨呢？'});",
        "playground.drawDialog({name:'广播',text:'享受着汐斯塔的惬意早餐，下午的时光近在眼前。'});",
        "playground.drawDialog({name:'广播',text:'今天，让我们请来汐斯塔市的市长助理，兼汐斯塔市天灾信使克洛宁先生来跟我们讲解一下汐斯塔市和汐斯塔火山吧。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.drawCharacter({fadetime:0});playground.drawImage({image:'bg_island',screenadapt:'coverall', fadetime:0});blocker.blocker({a:0, fadetime:3, block:false});playground.imageTween({screenadapt:'coverall', xscalefrom:1, yscalefrom:1, xscaleto:1.1, yscaleto:1.1, duration:15, block:false});playground.drawDialog({name:'克洛宁',text:'欢迎大家来到汐斯塔市。'});",
        "playground.drawDialog({name:'克洛宁',text:'在这里有着青山绿水，阳光清风，以及我们热情的汐斯塔市民们。'});",
        "playground.drawDialog({name:'克洛宁',text:'也正得益于这种不可多得的完美自然环境，汐斯塔才会致力于成为最好的旅游胜地，带给大家最好的夏日假期体验。'});",
        "playground.drawDialog({name:'广播',text:'要说到这里，更不得不提我们的汐斯塔火山了。很多不熟悉火山的游客可能对此有所疑问，您能给大家讲解一下吗？'});",
        "playground.drawDialog({name:'克洛宁',text:'好的。请大家可以不用担心。和大家的印象中的火山不同，没有那么多的神秘和危险，汐斯塔火山是我们的朋友。'});",
        "playground.drawDialog({name:'克洛宁',text:'这点我可以用天灾信使的身份担保，请大家放心。'});",
        "playground.drawDialog({name:'克洛宁',text:'想必各位都知道，汐斯塔市能够发展起来，是离不开汐斯塔的火山的。'});",
        "playground.drawDialog({name:'克洛宁',text:'别忘了多年前那场与汐斯塔擦肩而过的天灾，正是因为火山的保护，汐斯塔才没有被波及到。'});",
        "playground.drawDialog({name:'广播',text:'那么说起来，汐斯塔还有样非常特别的东西——黑曜石。'});",
        "playground.drawDialog({name:'广播',text:'黑曜石被认为有抑制矿石病的功效，所以，近年广受流行。'});",
        "playground.drawDialog({name:'克洛宁',text:'是的，汐斯塔市的矿石病感染者数量如此之低就是最好的例子。'});",
        "playground.drawDialog({name:'克洛宁',text:'虽然您可能会听到外界的传闻，所谓的科学理论，但是不管怎么样，汐斯塔市的现状就是最好的证据。'});",
        "playground.drawDialog({name:'克洛宁',text:'但可惜的是，黑曜石的开采因为一些原因，会带来对火山自然环境的破坏，目前市政厅已经下发开采禁令。'});",
        "playground.drawDialog({name:'克洛宁',text:'不过目前我们仍然允许黑曜石交易，因此如果对黑曜石制品感兴趣，可以多多关注交易市场的行情。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.drawImage({fadetime:0});blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawDialog({name:'广播',text:'在整个黑曜石节期间，我们会在各个地方安设纪念品和导购指南的小商店，大家可以随意挑选。'});",
        "playground.drawDialog({name:'克洛宁',text:'火山带给汐斯塔市如此的馈赠，我们也会把这些馈赠分享给大家，希望大家在之后的节日中保持愉快的心情。'});",
        "playground.drawDialog({name:'广播',text:'那么我们稍后再见，感谢克洛宁先生。'});",
        "voice.playSound({key:'d_gen_transmissionget', volume:0.4});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.clearDialog();playground.drawImage({fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_002_amiya_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'阿米娅',text:'黑曜石能抑制矿石病，这种说法根本就没有听过啊。'});",
        "playground.drawDialog({name:'阿米娅',text:'而且这个天灾信使，提到科学时的语气真让人不舒服......'});",
        "playground.Decision({options:[['1', '2'], '矿石病如果这么简单就能被预防就好了。', '旅游城市总会有增加收入的独特方式。']});",
        "predicate = ['1', '2'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'在这样偏远的地方，还是会有这么多对于源石和天灾没有太多认知的人们。'});",
        "playground.drawDialog({name:'阿米娅',text:'也不知道到底是幸福还是可怜。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:2,fadetime:1,block:true});delay(1);playground.drawDialog({name:'天火',text:'无知那自然是可怜的事情！'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'天火，普罗旺斯！早上好！'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:1});playground.drawDialog({name:'普罗旺斯',text:'阿米娅，博士，早。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'真巧，看这个方向，博士你们准备去海滩吗？'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'我们也只是到处看看。普罗旺斯和天火呢？'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:2});playground.drawDialog({name:'天火',text:'我们准备去汐斯塔火山脚下去看看嗯。'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'火山脚？我看看地图。'});",
        "playground.drawDialog({name:'阿米娅',text:'上面似乎没有标注，那里是有什么特别的活动？'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:1});playground.drawDialog({name:'普罗旺斯',text:'没有没有，天火她就是一时兴起想去实地考察一下而已。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'而我作为天灾信使，每到一个地方，去这样的地方看看也已经是习惯啦。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:2});playground.drawDialog({name:'天火',text:'作为一个研究者，我还是挺好奇的，能亲眼观察火山生态的机会可不多。'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'即使是度假，天火也依然是这么热衷于研究啊。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:2});playground.drawDialog({name:'天火',text:'嗯哼，那当然，对我来说，这就是度假。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_2',focus:1});playground.drawDialog({name:'普罗旺斯',text:'那么我们先走了，拜拜。'});",
        "playground.drawCharacter({fadetime:2,block:true});playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'那我们也走吧博士。'});",
        "playground.drawDialog({name:'阿米娅',text:'前面就是汐斯塔市最大的沙滩了。'});",
        "playground.drawDialog({name:'阿米娅',text:'我们快过去吧！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_beach',screenadapt:'coverall',x:-200, y:0,block:true});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'avg_npc_021'});playground.drawDialog({name:'男游客',text:'一杯芒果马丁尼冰沙。'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer'});playground.drawDialog({name:'古米',text:'好嘞。来，这是芒果马丁尼沙冰~'});",
        "playground.drawCharacter({name:'avg_npc_022'});playground.drawDialog({name:'女游客',text:'两个草莓龙舌兰双球冰淇淋。'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer'});playground.drawDialog({name:'古米',text:'给！特制草莓龙舌兰双球冰淇淋！再附赠你一份华夫饼！'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'古米~'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'古米',text:'咦，阿米娅！还有博士，你们好呀~'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:2});playground.drawDialog({name:'阿米娅',text:'古米，你怎么在这里摆摊啊？'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'古米',text:'因为沙滩这边有一整个美食区域，主办方也给游客提供了可以一展身手的机会。'});",
        "playground.drawDialog({name:'古米',text:'有这样的机会，不给大家展示展示乌萨斯的特制冷饮怎么行！'});",
        "playground.drawDialog({name:'古米',text:'不过，这里的游客实在太多了，古米都要忙不过来了。'});",
        "playground.drawCharacter({name:'avg_npc_021'});playground.drawDialog({name:'男游客',text:'小姑娘，来三杯特调酒酿珍珠奶茶加布丁。'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer'});playground.drawDialog({name:'古米',text:'来了！'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'古米',text:'对了，博士，古米可不可以借走阿米娅？'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:2});playground.drawDialog({name:'阿米娅',text:'欸？'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'古米',text:'有阿米娅帮忙一起摆摊的话，古米就腾得出手啦。'});",
        "playground.drawDialog({name:'古米',text:'等到我们忙完了，晚上就带阿米娅去看沙滩的演出怎么样！'});",
        "playground.Decision({options:[['1', '2', '3'], '去吧，阿米娅。', '可不许累着阿米娅。', '我来帮忙不行吗？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:2});playground.drawDialog({name:'阿米娅',text:'嗯......那好吧。'});",
        "playground.drawDialog({name:'阿米娅',text:'那博士你记得有事要联络我哦？'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'古米',text:'哼，要古米我说呢，跟在博士你身边，才是会累着阿米娅呢。'});",
        "playground.drawDialog({name:'古米',text:'因为阿米娅跟在博士身边，就不会去想自己的事，这样可不行。'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_10',focus:2});playground.drawDialog({name:'阿米娅',text:'没、没有啦......'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'古米',text:'才不要咧。'});",
        "playground.drawDialog({name:'古米',text:'博士包得这么严实，站在那里都要把客人吓走啦，哪有阿米娅可爱。'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:2});playground.drawDialog({name:'阿米娅',text:'没有啦......不过，博士，那我就留在这里帮古米吧。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_2',focus:1});playground.drawDialog({name:'古米',text:'那阿米娅，古米先来教你怎么用这个机器。'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_10',focus:2});playground.drawDialog({name:'阿米娅',text:'嗯。'});",
        "playground.drawCharacter({name:'char_196_sunbr_summer',name2:'char_002_amiya_10',focus:1});playground.drawDialog({name:'古米',text:'哦不对，首先是要换衣服。来来来我陪你去换一身轻便的！'});",
        "playground.drawDialog({name:'古米',text:'博士也玩得开心哦，拜拜~'});",
        "voice.playSound({key:'d_gen_runsand',volume:0.6});playground.drawCharacter({fadetime:1});playground.clearDialog();delay(1);playground.Decision({options:[['1', '2', '3'], '阿米娅应该多和同龄人一起玩。', '（一个人去沙滩边的露天酒店逛逛吧）', '或许我也应该穿得夏天一点？']});",
        "predicate = ['1', '2', '3'];",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});voice.stopMusic({fadetime:1});playground.drawCharacter({});background.showImage({image:'bg_beach',screenadapt:'coverall',x:-200, y:0,block:true});blocker.blocker({a:0, fadetime:2, block:true});voice.playMusic({intro:'m_dia_path_intro', key:'m_dia_path_loop', volume:0.8, crossfade:1.5});playground.drawCharacter({name:'avg_npc_021'});playground.drawDialog({name:'男游客A',text:'喂，你听说了吗？第一大道昨天晚上又打起来了。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_021',focus:1});playground.drawDialog({name:'男游客B',text:'我住第五大道我怎么可能知道，不过我猜是粉丝打架。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_021',focus:2});playground.drawDialog({name:'男游客A',text:'没错，啧啧，真是不来不知道，乐迷们打起架跟对方是自己杀父仇人一样狠。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_021',focus:1});playground.drawDialog({name:'男游客B',text:'还是和平点好，还是和平点好。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_021',focus:2});playground.drawDialog({name:'男游客A',text:'......所以你就不能赶紧把你这一身脱了吗？！'});",
        "playground.drawDialog({name:'男游客A',text:'难得来度假一次，你怎么还不赶紧把这身换掉！'});",
        "playground.clearDialog();playground.drawCharacter({});delay(1);playground.drawCharacter({name:'avg_npc_022'});playground.drawDialog({name:'女游客A',text:'我说，今晚你还去不去？一起啊！'});",
        "playground.drawCharacter({name:'char_010_chen_summer',name2:'avg_npc_022',focus:1});playground.drawDialog({name:'女游客C',text:'......别跟我说你们几个今晚还要去蹦迪。'});",
        "playground.drawCharacter({name:'char_010_chen_summer',name2:'avg_npc_022',focus:2});playground.drawDialog({name:'女游客A',text:'当然要去啊，我们来这里就是为了蹦迪！'});",
        "playground.drawCharacter({name:'char_010_chen_summer',name2:'avg_npc_022',focus:1});playground.drawDialog({name:'女游客C',text:'饶了我吧，你们就自己去吧。陪你们去了三个晚上，我已经快撑不住了......'});",
        "playground.drawCharacter({name:'char_010_chen_summer',name2:'avg_npc_022',focus:2});playground.drawDialog({name:'女游客A',text:'哎呀，才几点！再多蹦几次你就习惯了！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});voice.playSound({key:'d_amb_beach',volume:0.8});blocker.blocker({a:0, fadetime:2, block:false});playground.drawDialog({name:'侍应生',text:'你好，二位的威士忌。'});",
        "playground.drawCharacter({name:'char_340_shwaz_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'？？？',text:'......'});",
        "playground.Decision({options:[['1'], '......']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_340_shwaz_1'});playground.drawDialog({name:'？？？',text:'呵呵，看你的打扮，即使是游客也特别了一点呢......'});",
        "playground.Decision({options:[['1'], '......我比较害怕日晒。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_340_shwaz_1'});playground.drawDialog({name:'？？？',text:'既然这样还特地来海边吗，真是怪人啊。'});",
        "playground.Decision({options:[['1'], '......']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_340_shwaz_1'});playground.drawDialog({name:'？？？',text:'......呵，我也没什么资格说就是了。'});",
        "playground.drawCharacter({name:'char_340_shwaz_1'});playground.drawDialog({name:'？？？',text:'抱歉，你这杯威士忌就让我来请客好了。'});",
        "playground.Decision({options:[['1'], '（什么这原来不是免费的吗？！）']});",
        "predicate = ['1'];",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawDialog({name:'？？？',text:'怎么样，喜欢这个新兴的城市吗？'});",
        "playground.drawDialog({name:'？？？',text:'我最喜欢的就是她这样，稚气未脱但是蓬勃成长的样子。'});",
        "playground.Decision({options:[['1'], '你是本地人吗？ ']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'？？？',text:'我并不是在这里土生土长，但是这里现在就是我的家。'});",
        "playground.drawDialog({name:'？？？',text:'为了守护这里，我可以付出很多东西。'});",
        "playground.drawDialog({name:'？？？',text:'不管是哪里的人，对于家人的感情都是一样的不是吗？'});",
        "playground.drawCharacter({name:'avg_npc_020'});playground.drawDialog({name:'保镖',text:'头儿，克洛宁先生找你。'});",
        "playground.drawCharacter({name:'char_340_shwaz_2',name2:'avg_npc_020',focus:1});playground.drawDialog({name:'？？？',text:'......知道了。'});",
        "playground.drawCharacter({name:'char_340_shwaz_1'});playground.drawDialog({name:'？？？',text:'我还有工作，先走了，陌生人。'});",
        "playground.drawDialog({name:'？？？',text:'希望你可以也喜欢上这个城市。'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:1,block:true});voice.playSound({key:'d_gen_runsand',volume:0.5});playground.Decision({options:[['1', '2', '3'], '真是个奇怪的人。', '真是个温柔的人。', '真是个漂亮的人。']});",
        "predicate = ['1', '2', '3'];",
        "playground.clearDialog();voice.stopMusic({fadetime:1});delay(1.5);voice.playSound({key:'d_gen_phonevibration',volume:0.6});background.cameraShake({duration:1, xstrength:5, ystrength:3, vibrato:30, randomness:90, fadeout:true, block:true});playground.Decision({options:[['1'], '有通讯？']});",
        "predicate = ['1'];",
        "voice.playSound({key:'d_gen_transmissionget',volume:0.6});playground.drawDialog({name:'普罗旺斯',text:'喂，博士，听得到吗？'});",
        "playground.drawDialog({name:'普罗旺斯',text:'周围有其他人在吗，我有很重要的事情要向你汇报！'});",
        "blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.drawDialog({name:'普罗旺斯',text:'这件事，可能事关这座城市的存亡......'});",
        "delay(0.5);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];