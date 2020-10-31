var story = [
    [
        "bg_rooftop",
        "char_2005_weiyw_1",
        "char_empty",
        "char_002_amiya_1",
        "char_002_amiya_7",
        "char_017_homura_1",
        "char_010_chen_1",
        "char_002_amiya_2",
        "bg_lungmen_o",
        "char_308_swire_5",
        "char_2006_weiywfmzuki_1",
        "avg_ep05"
    ],
    [
        "m_dia_darkness02_loop",
        "m_dia_darkness02_intro",
        "d_gen_transmissionget",
        "d_gen_walk_n"
    ],
    [
        "background.showImage({image:'bg_rooftop', width:1, height:1,screenadapt:'coverall',  fadetime:1});voice.playMusic({intro:'m_dia_darkness02_intro', key:'m_dia_darkness02_loop', volume:0.6, crossfade:3, delay:0.5});playground.drawDialog({name:'',text:'04:45 A.M.  天气/晴'});",
        "playground.drawDialog({name:'',text:'龙门上城区，近卫局大楼天台废墟'});",
        "delay(1);voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'1', name:'char_2005_weiyw_1', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawDialog({name:'魏彦吾',text:'陈警官，你身边的那位阿米娅小姐，能听到我的声音吗？'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_002_amiya_1',focus:2});playground.drawDialog({name:'阿米娅',text:'可以，魏长官。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_002_amiya_1',focus:1});playground.drawDialog({name:'魏彦吾',text:'那就好。'});",
        "playground.drawDialog({name:'魏彦吾',text:'抱歉，罗德岛的领袖。我可以冒险让近卫局深入腹地，却不能冒险让更多的玩家参与进游戏。'});",
        "playground.Decision({options:[['1', '2', '3'], '更多的玩家是指？', '......什么意思？', '场面已经够混乱了。']});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_empty',name2:'char_002_amiya_1',focus:1});playground.drawDialog({name:'魏彦吾',text:`Dr.${nickname}——`});",
        "playground.drawDialog({name:'魏彦吾',text:'有一张错综复杂的无形巨网，覆盖了整片大地。'});",
        "playground.drawDialog({name:'魏彦吾',text:'没有任何一个城邦能和这片大地脱开干系、在阴谋诡局中独善其身，何况是夹在数个庞然巨物之间的这里。'});",
        "playground.drawDialog({name:'魏彦吾',text:'你也许意识到了，也许没有。但至少，我是必须要考虑这些问题的那个人。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_002_amiya_7',focus:2});playground.drawDialog({name:'阿米娅',text:'如果魏长官想要任务更顺利地执行，本就应该和我们分享信息。'});",
        "playground.drawDialog({name:'阿米娅',text:'至少必要的那些，我该知道。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_002_amiya_7',focus:1});playground.drawDialog({name:'魏彦吾',text:'再次向你道歉，阿米娅小姐。我的位置迫使我不能把情报全盘披露。'});",
        "playground.drawDialog({name:'魏彦吾',text:'如果你处在我的位置上，你也会做出相同的选择。'});",
        "playground.drawDialog({name:'魏彦吾',text:'切城废城的行动不甚圆满，但至少你们取得了相应的战果。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_017_homura_1',focus:2});playground.drawDialog({name:'煌',text:'你让我们吸引整合运动的注意力。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_017_homura_1',focus:1});playground.drawDialog({name:'魏彦吾',text:'错了，龙门近卫局本也与你们一起。'});",
        "playground.Decision({options:[['1'], '你利用我们所有人做诱饵。']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'魏彦吾',text:'哦？'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({});playground.drawCharacter({widgetid:'1',block:true});playground.clearDialog();background.showImage({});blocker.blocker({a:0, fadetime:0.5, block:true});playground.drawDialog({name:'凯尔希',text:'这一切他早就勾画好了。'});",
        "playground.drawDialog({name:'凯尔希',text:'时间越长，渗透越深，他要当机立断。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.6, block:true});background.showImage({image:'bg_rooftop', width:1, height:1,screenadapt:'coverall'});blocker.blocker({a:0, fadetime:0.5, block:true});playground.Decision({options:[['1'], '在最关键的时刻、在整合运动最躁动的时刻']});",
        "predicate = ['1'];",
        "playground.Decision({options:[['1'], '让罗德岛去吸引他们。']});",
        "predicate = ['1'];",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({});background.showImage({});blocker.blocker({a:0, fadetime:0.5, block:true});playground.drawDialog({name:'凯尔希',text:'顺便让整合运动觉得近卫局孤身在外——'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.6, block:true});background.showImage({image:'bg_rooftop', width:1, height:1,screenadapt:'coverall'});blocker.blocker({a:0, fadetime:0.5, block:true});playground.Decision({options:[['1'], '——让他们的领袖觉得龙门内部空虚。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({widgetid:'1', name:'char_2005_weiyw_1', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawCharacter({name:'char_empty',name2:'char_017_homura_1',focus:2});playground.drawDialog({name:'煌',text:`哈，说得好，Dr.${nickname}！长官，你当然需要我们拖住整合运动，越多越好，对吗？`});",
        "playground.drawDialog({name:'煌',text:'看到龙门是这种情况，潜伏的整合运动肯定觉得自己有机会。'});",
        "playground.drawDialog({name:'煌',text:'从藏身处倾巢而出的整合运动，等着他们的，啧啧，竟然是龙门不知道从哪里搬出来的精兵良将。'});",
        "playground.drawDialog({name:'煌',text:'你们龙门是从什么时候开始隐藏实力的？是不是切尔诺伯格事件发生的那一天，你就在准备这些了？'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_017_homura_1',focus:1});playground.drawDialog({name:'魏彦吾',text:'龙门保证了你们的安全，也促使你们回到了你们足以发挥价值的位置。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_017_homura_1',focus:2});playground.drawDialog({name:'煌',text:'你把阿米娅丢在废城，让整合运动那么多人围攻我们罗德岛，也是你讲的这个什么位置？'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_017_homura_1',focus:1});playground.drawDialog({name:'魏彦吾',text:'我只是希望罗德岛能理解我们必须共同面对的艰难处境。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_002_amiya_1',focus:2});playground.drawDialog({name:'阿米娅',text:`煌小姐，Dr.${nickname},不必了。`});",
        "playground.drawDialog({name:'阿米娅',text:'诗怀雅小姐和我们一起击退了整合运动的追兵，龙门没有放弃我们。'});",
        "playground.drawDialog({name:'阿米娅',text:'（我们没有证据。）'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_017_homura_1',focus:2});playground.drawDialog({name:'煌',text:'嘁。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_002_amiya_1',focus:1});playground.drawDialog({name:'魏彦吾',text:'我们的合约依旧有效。无论中途发生了什么，只有结果才能让我满意。'});",
        "playground.drawDialog({name:'魏彦吾',text:'无论中途发生了什么。'});",
        "playground.drawDialog({name:'魏彦吾',text:`罗德岛的Dr.${nickname}，上次我们见面时，我用同样的方式表达过同样的意思。`});",
        "playground.drawDialog({name:'魏彦吾',text:'你的选择不多。但至少你可以选择消灭敌人的方式。'});",
        "playground.Decision({options:[['1', '2', '3'], '我不信你和你的鬼话。', '......', '没有人会在被愚弄了之后依然笑脸迎人的。']});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'魏彦吾',text:'那当然好。'});",
        "playground.drawDialog({name:'魏彦吾',text:'我们都该保持警醒，大敌当前时不该有人松懈。'});",
        "playground.drawDialog({name:'魏彦吾',text:'你的戒备心能促使你规避陷阱。'});",
        "playground.drawDialog({name:'魏彦吾',text:`听我一言，Dr.${nickname}——`});",
        "playground.drawDialog({name:'魏彦吾',text:'——我们虽然还不是朋友，却至少还不是敌人。'});",
        "predicate = ['2'];",
        "playground.drawDialog({name:'魏彦吾',text:'沉默以对吗。'});",
        "playground.drawDialog({name:'魏彦吾',text:'优秀的判断。你在掩藏你的缺点，也在发挥你的优势。'});",
        "playground.drawDialog({name:'魏彦吾',text:'罗德岛是强大的合作伙伴，我在这次事件中已经认可了这一点。'});",
        "playground.drawDialog({name:'魏彦吾',text:'前提是，我们确实还是伙伴关系，而不是非法感染者与地方当局。'});",
        "predicate = ['3'];",
        "playground.drawDialog({name:'魏彦吾',text:'我无意愚弄任何人。'});",
        "playground.drawDialog({name:'魏彦吾',text:'啊，客观结果上，我可能确实愚弄了整合运动。'});",
        "playground.drawDialog({name:'魏彦吾',text:'但这一切都是无法被证明的。整合运动可能同样也握住了我们的把柄。'});",
        "playground.drawDialog({name:'魏彦吾',text:'我们只能在他们有足够能力认清我们的策略之前，掐灭他们。'});",
        "playground.drawDialog({name:'魏彦吾',text:'这个目标是否能让你找到一点动力？'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawDialog({name:'魏彦吾',text:`阿米娅小姐，${nickname}博士，你们和龙门之间的合作并未结束。`});",
        "playground.drawDialog({name:'魏彦吾',text:'反攻的号角已经吹响，整合运动将见识龙门的广大、善谋与团结。'});",
        "playground.drawDialog({name:'魏彦吾',text:'如果可能的话，我也想看到罗德岛的专业、果敢与勇猛。'});",
        "playground.drawDialog({name:'魏彦吾',text:'一刻钟之后，陈警官会继续协同你们作战。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_002_amiya_7',focus:2});playground.drawDialog({name:'阿米娅',text:'魏先生，不要忘记自己说过的话。'});",
        "playground.drawDialog({name:'阿米娅',text:'罗德岛不会忘记。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_002_amiya_7',focus:1});playground.drawDialog({name:'魏彦吾',text:'自然。'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'1',fadetime:0.5,block:true});playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:`煌，Dr.${nickname}，我们走。`});",
        "playground.drawDialog({name:'阿米娅',text:'啊，对了陈长官，星熊警官呢？我为什么没在这看见她，她......没事吧？'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'星熊她受了点伤，但没什么大碍。'});",
        "playground.drawCharacter({name:'char_002_amiya_2',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'阿米娅',text:'这样啊......我知道了。'});",
        "playground.drawDialog({name:'阿米娅',text:'陈长官，罗德岛也可以帮你检查一下伤势，做一些应急处理。'});",
        "playground.drawCharacter({name:'char_002_amiya_2',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'不用了。'});",
        "playground.drawCharacter({name:'char_002_amiya_2',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'阿米娅',text:'不用有什么顾忌，罗德岛的医疗检查是全程保密的。'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'我简单处理一下就行。'});",
        "playground.drawCharacter({name:'char_002_amiya_1',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'阿米娅',text:'嗯......我就不勉强陈长官了，如果你这么坚持的话。'});",
        "playground.drawDialog({name:'阿米娅',text:'那，陈长官，一会儿见。'});",
        "playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'......'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:3, block:true});playground.drawCharacter({});background.showImage({image:'bg_lungmen_o', width:1, height:1, screenadapt:'coverall'});blocker.blocker({a:0, fadetime:3, block:true});playground.drawDialog({name:'',text:'05:00 A.M.   天气/晴'});",
        "playground.drawDialog({name:'',text:'龙门上城区，行政长官办事处'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'1', name:'char_308_swire_5', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawDialog({name:'诗怀雅',text:'魏大人，你那里还顺利吗？'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'自然，否则我也没机会和各位在这里闲谈。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'诗怀雅',text:'他们答应会暂缓行动的步调？'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'当然，但有时限。'});",
        "playground.drawDialog({name:'魏彦吾',text:'今天，明天。两天之后，如果整合运动还在龙门肆虐，你们知道会是什么后果。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'诗怀雅',text:'只有两天时间？！太短了，我不可能——'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'两次晨昏交替，已经算是宽限了。相较之下，我给各位的时间只有一天。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'诗怀雅',text:'一天？'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'我要各位在一天之内解决所有事情。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'诗怀雅',text:'魏大人，如果有他们的帮助，我们不是可以在几小时里解决掉整合运动，彻底地减少损失吗？'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'那并不重要。龙门的问题，龙门自己理应能一劳永逸地解决，这才是我们的首要宗旨。'});",
        "playground.drawDialog({name:'魏彦吾',text:'这是我们应该让他们看见的。所以，各位，开始吧。'});",
        "playground.drawDialog({name:'魏彦吾',text:'去吧，陈警官，该让整合运动厘清龙门的待客之道了。'});",
        "voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({widgetid:'1', name:'char_010_chen_1', style:'cutin', fadestyle: 'horiz_expand_center', fadetime:0.5, offsetx:-300, width:200, block:true});playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'陈',text:'明白。'});",
        "playground.drawDialog({name:'陈',text:'魏长官，我有一个问题。即使你现在无法给出回答，我也希望事情过去之后，你能给我一个合理的猜想。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'你可以问。'});",
        "playground.drawCharacter({name:'char_empty',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'陈',text:'这明明是整合运动的总攻，那为什么它们的领袖塔露拉没有出现在龙门？'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});playground.drawCharacter({widgetid:'1',fadetime:0.5,block:true});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_2005_weiyw_1',fadetime:1,block:true});playground.drawDialog({name:'魏彦吾',text:'嗯......'});",
        "voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'文月',text:'事情不是进行得很顺利吗，你怎么在这愁眉苦脸的？'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'乌萨斯方面还是没有任何回应？'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'文月',text:'依然没有。'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'还是联系不上维特议长？'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'文月',text:'很遗憾，信使至今都没能和他会面。'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'看来整个乌萨斯帝国，也笼罩在一片疑云之中啊。'});",
        "playground.drawDialog({name:'魏彦吾',text:'文月，我有种感觉。这一切可能只是个开始。'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'文月',text:'上次你这么说，已经是很多年前了。'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'那是什么时候？我已经完全忘记了自己这么说的理由。'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'文月',text:'那时我们可是刚见面没多久。难道你是想说，你已经把我们间的过往都忘了？'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'不，不会。我怎么敢。只是除了和你相遇以外的事情，我都记不太清了而已。'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'文月',text:'瞧你这副伶牙俐齿。很可惜，这事你是忘不了的。'});",
        "playground.drawDialog({name:'文月',text:'毕竟你亲口对我说过，如果二十年前我们输了，这座城市会改名换姓，成为乌萨斯征服史的另一条脚注。'});",
        "playground.drawDialog({name:'文月',text:'如果我们输了，坐在你现在的位置的不会是你，而是他。'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'......'});",
        "playground.drawDialog({name:'魏彦吾',text:'科西切公爵。'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:1});playground.drawDialog({name:'文月',text:'哎，可怜的小塔，你能说小塔身上没有他的影子吗？'});",
        "playground.drawCharacter({name:'char_2006_weiywfmzuki_1',name2:'char_2005_weiyw_1',focus:2});playground.drawDialog({name:'魏彦吾',text:'但他已经死了。'});",
        "playground.drawDialog({name:'魏彦吾',text:'被塔露拉亲手所杀。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:3, block:true});background.showImage({});playground.drawCharacter({fadetime:0});playground.drawImage({image:'avg_ep05',x:0, y:0, xscale:1, yscale:1, fadetime:0, screenadapt:'coverall'});blocker.blocker({a:0, fadetime:3, block:false});delay(5);playground.drawImage({fadetime:2});playground.clearDialog();blocker.blocker({fadetime:2,block:true});playground.drawImage({});"
    ]
];