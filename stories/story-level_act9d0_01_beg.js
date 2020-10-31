var story = [
    [
        "bg_battlefield",
        "avg_npc_052",
        "avg_npc_047",
        "avg_ac9_3"
    ],
    [
        "d_gen_transmissionget",
        "d_gen_transmission",
        "m_dia_darkness02_loop",
        "m_dia_darkness02_intro",
        "m_avg_nervous_loop",
        "m_avg_nervous_intro",
        "d_gen_walk_n",
        "m_avg_w_loop",
        "m_avg_w_intro"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();delay(1);playground.drawCharacter({});voice.playSound({key:'d_gen_transmissionget', volume:1});blocker.blocker({fadetime:1,block:true});playground.clearDialog();playground.drawDialog({text:'是我。'});",
        "playground.drawDialog({text:'已经抵达目标地点，肉眼确认到信号烟坐标。'});",
        "playground.drawDialog({text:'......很久没有和同行打交道，稍微有点损失。'});",
        "playground.drawDialog({text:'但是他们在地下发报站藏着的物资也很充裕，好歹能挽回一些。'});",
        "playground.drawDialog({text:'嗯，是的，斥候可以先出发了。'});",
        "playground.drawDialog({text:'我会尽快。'});",
        "playground.drawDialog({text:'......对了，有个意料之外的损失。'});",
        "playground.drawDialog({text:'W死了。'});",
        "voice.playSound({key:'d_gen_transmission', volume:1});playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_battlefield',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});voice.playMusic({intro:'m_dia_darkness02_intro', key:'m_dia_darkness02_loop', volume:0.6});playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',fadetime:1.5,block:true});delay(1.5);playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'......'});",
        "playground.drawDialog({name:'伊内丝',text:'......说的那么惨不忍睹，结果还不是四肢健全地回来了吗？'});",
        "playground.drawDialog({name:'伊内丝',text:'还是说，你只不过是想用苦肉计邀功？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'那么你也大可不必离开营地来接应我们，你不需要这么担心。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'我不担心任何人，别自作多情。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'如果不是W殿后为我们创造机会，我们谁也逃不出来。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'......'});",
        "playground.drawDialog({name:'伊内丝',text:'......什么时候的事？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'两小时前，通讯被隔断的时候，小队遭到了埋伏。'});",
        "playground.drawDialog({name:'赫德雷',text:'W摧毁了废墟，然后我们逃了出来，他死战到了最后一刻。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'可惜。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'......的确，如果他能活着回到营地，按人头来算，他会超过我成为这里最值钱的雇佣兵。'});",
        "playground.drawDialog({name:'赫德雷',text:'算了，事到如今说这些也没意义，至少他不用再打仗了。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'敌人已经撤退，要去回收吗？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'不可能，重新深入的风险太大，谁也承担不起。'});",
        "playground.drawDialog({name:'赫德雷',text:'怎么？莫非你们关系很好？我怎么不知道？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'我只是可惜他身上的战利品。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'没什么特别的，有些人的藏品比他丰富得多。'});",
        "playground.drawDialog({name:'赫德雷',text:'等这场战争结束，我们有的是机会重操旧业。'});",
        "playground.drawDialog({name:'赫德雷',text:'......如果会结束的话。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'哼......'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'互相安慰的话之后再说。日落前我们要离开这里，再停留下去会成为众矢之的。'});",
        "playground.drawDialog({name:'赫德雷',text:'回营地去，立刻整队出发。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'哼——？'});",
        "playground.drawDialog({name:'伊内丝',text:'你这是在命令我？赫德雷“副”队长？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'......其他小队都失去联系，现在总指挥权轮替在我手上。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'我们平起平坐。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'唉......'});",
        "playground.drawDialog({name:'赫德雷',text:'......伊内丝，我们赶紧离开这里，回到据点，然后联系雇主，重新商谈一下报酬。'});",
        "playground.drawDialog({name:'赫德雷',text:'这只是建议，不是命令，好吗？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'哼......'});",
        "playground.drawDialog({name:'伊内丝',text:'W的死，能给我们加上多少筹码？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'很多。'});",
        "playground.drawDialog({name:'赫德雷',text:'他是一名优秀的雇佣兵，明码标价的优秀。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'那至少他......不算白白送死。'});",
        "playground.drawDialog({name:'伊内丝',text:'他最后有没有留下什么——'});",
        "playground.clearDialog();voice.stopMusic({fadetime:1});playground.drawCharacter({name:'avg_npc_052'});playground.drawDialog({name:'伊内丝',text:'——安静。'});",
        "playground.drawDialog({name:'伊内丝',text:'有人靠近，三点钟方向，不是我们的人......'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'......'});",
        "voice.playMusic({intro:'m_avg_nervous_intro', key:'m_avg_nervous_loop', volume:0.7});playground.drawCharacter({name:'avg_npc_052'});playground.drawDialog({name:'伊内丝',text:'——只有一个人，滚出来。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n', volume:1});delay(1);playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_052'});playground.drawDialog({name:'伊内丝',text:'萨卡兹......？本地人吗？'});",
        "playground.drawDialog({name:'伊内丝',text:'不，不对，你手里拿着的是W的刀和铳......'});",
        "playground.drawDialog({name:'伊内丝',text:'你是什么人？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_052'});playground.drawDialog({name:'伊内丝',text:'不说话？那么，死吧。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'等等。'});",
        "playground.drawDialog({name:'赫德雷',text:'她是跟着我们来的。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'......你放任她跟踪你？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'我们的行进速度不慢，她在取得了W的遗物之后徒步跟上了我们，以她的身手，徒步。'});",
        "playground.drawDialog({name:'赫德雷',text:'她是个“有经验”的萨卡兹，我想在撤离的时候也许会需要一个本地向导。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'——你在发什么疯？那不是更应该在这里杀了她吗？'});",
        "playground.drawDialog({name:'伊内丝',text:'你要是想害死我们所有人，大可直接动手。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'我怎么敢。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'那如果她是个刺客呢？如果她把我们带进布好的陷阱里呢？'});",
        "playground.drawDialog({name:'伊内丝',text:'你知道卡兹戴尔有多少人想要你的脑袋吗？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'喔，有多少？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'......你面前就有一个。'});",
        "playground.drawDialog({name:'伊内丝',text:'你的头非常值钱，只是暂且被我保存在你的脖子上而已，别太自以为是。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'非常感谢你的勤俭，但是我也没有开玩笑。'});",
        "playground.drawDialog({name:'赫德雷',text:'她冒险捡起了W的刀，还有那把铳，然后正大光明地站在我们的面前。'});",
        "playground.drawDialog({name:'赫德雷',text:'你的法术可以感觉到，她有敌意吗？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'......脑子正常的人都不会突然接受一个来路不明的萨卡兹。'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'嗯，这就是你我不一样的地方了。'});",
        "playground.drawDialog({name:'赫德雷',text:'一路上，我给过她很多次破绽，而她......向我扔了三次石子。'});",
        "playground.drawDialog({name:'赫德雷',text:'很有趣的示好方法，不是吗？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:1});playground.drawDialog({name:'伊内丝',text:'......哈？'});",
        "playground.drawCharacter({name:'avg_npc_052',name2:'avg_npc_047',focus:2});playground.drawDialog({name:'赫德雷',text:'按老规矩，也许我们应该给她一个机会。'});",
        "playground.drawDialog({name:'赫德雷',text:'这场战役造成了不少位置的空缺，比起用招募的手段招来一些同样来历不明的萨卡兹，我宁可，自己挑选。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_052'});playground.drawDialog({name:'伊内丝',text:'可她只是个外人，那套规矩也不该——'});",
        "playground.drawDialog({name:'伊内丝',text:'——啊，算了。'});",
        "playground.drawDialog({name:'伊内丝',text:'十分钟后出发，我不在乎出发的是几个人。'});",
        "playground.drawDialog({name:'伊内丝',text:'但如果我还要额外处理一具尸体——不管是谁的，都建议你动作快点。'});",
        "playground.clearDialog();playground.drawCharacter({name:'avg_npc_052'});delay(0.7);voice.playSound({key:'d_gen_walk_n', volume:1});playground.drawCharacter({fadetime:1,block:true});delay(2);playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'呵呵，真是没耐心。'});",
        "playground.drawDialog({name:'赫德雷',text:'......好了，你，认真听我说。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'你拿着的是我们战友的遗物。'});",
        "playground.drawDialog({name:'赫德雷',text:'放下这些东西，你可以活着离开这里，然后死在其他随便什么地方，但至少会死得迟一些。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'......'});",
        "playground.drawDialog({name:'赫德雷',text:'最后一次机会。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'......'});",
        "playground.drawCharacter({});playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'嗯......机会？'});",
        "playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'......我从来不觉得我有选择的余地，转过身的时候，你会出剑，我就会倒下。'});",
        "playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'从一开始......你的另一只手，就搭在剑柄上。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'......很好。'});",
        "playground.drawDialog({name:'赫德雷',text:'你也许见过我们，或者曾经为别人干活，我不在乎。'});",
        "playground.drawDialog({name:'赫德雷',text:'但你知道接手战死者的武器有何意义，对吧？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'衣衫褴褛的萨卡兹女性',text:'当然。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'那么，优先准备撤退，详细的之后再说。'});",
        "playground.drawDialog({name:'赫德雷',text:'现在先归队——'});",
        "voice.stopMusic({fadetime:2});playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'——“W”。'});",
        "playground.clearDialog();playground.drawImage({});playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});voice.playMusic({intro:'m_avg_w_intro', key:'m_avg_w_loop', volume:0.7});delay(3);playground.drawImage({image:'avg_ac9_3',xscale:1.1, yscale:1.1, fadetime:0});blocker.blocker({a:0, fadetime:3, block:false});playground.imageTween({xscalefrom:1.1, yscalefrom:1.1, xscaleto:1, yscaleto:1, duration:25, block:false});playground.drawDialog({text:'战争从未停止。我们的战争从未停止。'});",
        "playground.drawDialog({text:'就好像战争才是我们一直以来赖以生存的工具。'});",
        "playground.drawDialog({text:'......嗯，的确如此。'});",
        "playground.drawDialog({text:'有些人还在踌躇犹豫，有些人已经得心应手。后者生，前者死。'});",
        "playground.drawDialog({text:'而还有些人......天生就是这方面的好手。'});",
        "playground.drawDialog({text:'这倒是个意外之喜。'});",
        "playground.drawDialog({text:'在即将倒塌的废墟里见到她的第一眼开始，我就确信......'});",
        "playground.drawDialog({text:'她将会是最优秀的萨卡兹战士。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.clearDialog();blocker.blocker({fadetime:1,block:true});"
    ]
];