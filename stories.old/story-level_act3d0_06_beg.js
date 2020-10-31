var story = [
    [
        "bg_festival_1",
        "avg_npc_017_3",
        "bg_offce",
        "avg_npc_023_2",
        "bg_hotel",
        "char_348_ceylon_2",
        "char_188_helage_1",
        "char_188_helage_2",
        "char_340_shwaz_2",
        "char_340_shwaz_3",
        "char_348_ceylon_9",
        "char_348_ceylon_8",
        "char_348_ceylon_5",
        "char_348_ceylon_3",
        "char_340_shwaz_5",
        "char_340_shwaz_1",
        "avg_npc_020",
        "char_348_ceylon_7",
        "char_348_ceylon_4",
        "char_348_ceylon_6",
        "char_340_shwaz_4"
    ],
    [
        "m_sys_fesready_loop",
        "m_sys_fesready_intro",
        "d_gen_livecrowd"
    ],
    [
        "background.showImage({});voice.playMusic({intro:'m_sys_fesready_intro', key:'m_sys_fesready_loop', volume:0.8, crossfade:1.5});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.7, block:true});playground.drawCharacter({});background.showImage({image:'bg_festival_1',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:0.7, block:true});playground.drawCharacter({name:'avg_npc_017_3',fadetime:1,block:true});delay(1);playground.drawDialog({name:'D.D.D.',text:'大家！！准备好了吧！！！'});",
        "playground.drawDialog({name:'D.D.D.',text:'黑曜石节最盛大的联合LIVE将在3小时后开始！'});",
        "playground.drawCharacter({});background.cameraShake({duration:2, xstrength:8, ystrength:8, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'d_gen_livecrowd', volume:0.4, loop:false, channel:'people'});playground.drawDialog({name:'观众',text:'哦哦哦哦哦哦！！！'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_offce'});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'avg_npc_023_2'});playground.drawDialog({name:'克洛宁',text:'时间差不多了。只要黑能和罗德岛相互牵制，这里也就一切顺利了。'});",
        "playground.drawDialog({name:'克洛宁',text:'让罗德岛和黑对立果然是步好棋，哼。'});",
        "playground.drawDialog({name:'克洛宁',text:'快点！把这些东西给我搬走！动作不够快的话，你们的薪水也要打水漂！'});",
        "playground.drawDialog({name:'克洛宁',text:'嗯？外面什么声音？'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_hotel',screenadapt:'coverall' });playground.drawCharacter({});background.cameraEffect({effect:'grayscale', keep:true, amount:1, fadetime:0});blocker.blocker({a:0, fadetime:2, block:false});playground.drawCharacter({name:'char_348_ceylon_2'});playground.drawDialog({name:'锡兰',text:'博士，如果单纯的只是冲进广播塔，肯定会遭到克洛宁的埋伏。'});",
        "playground.drawDialog({name:'锡兰',text:'如果你们和我一起行动，黑一定会先想办法解除各位的武装，那样我就更没有办法牵制她了。'});",
        "playground.drawDialog({name:'锡兰',text:'就算粗暴地夺得了广播塔的控制权，如果没有政府的支持，我的话只会让市民陷入迷惑和恐慌。'});",
        "playground.drawDialog({name:'锡兰',text:'如果黑保护着克洛宁，这对于各位的行动来说，也是很大的阻碍。'});",
        "playground.drawDialog({name:'锡兰',text:'重要的是，克洛宁到底隐藏着什么，这可能需要各位去发掘。'});",
        "playground.drawDialog({name:'锡兰',text:'也许克洛宁真的是个像纸面一样清白的人——'});",
        "playground.drawCharacter({name:'char_188_helage_1',name2:'char_348_ceylon_2',focus:1});playground.drawDialog({name:'赫拉格',text:'那我们就会挟持他，逼他发出官方公告？'});",
        "playground.drawCharacter({name:'char_188_helage_1',name2:'char_348_ceylon_2',focus:2});playground.drawDialog({name:'锡兰',text:'对。如果真的是这样的话，我也不会介意去这么做，毕竟我确实是这么想的。'});",
        "playground.drawCharacter({name:'char_188_helage_1',name2:'char_348_ceylon_2',focus:1});playground.drawDialog({name:'赫拉格',text:'锡兰小姐，你很有胆识，但是甚至可以说有些冒险。'});",
        "playground.drawCharacter({name:'char_188_helage_1',name2:'char_348_ceylon_2',focus:2});playground.drawDialog({name:'锡兰',text:'实验的数据和调查报告，罗德岛的各位已经帮我证实了，如果不这么做，汐斯塔的所有人都会遭殃。'});",
        "playground.drawCharacter({name:'char_188_helage_1',name2:'char_348_ceylon_2',focus:1});playground.drawDialog({name:'赫拉格',text:'我并不是要指责你什么，小姐。只是罗德岛的参与与否，并非由我决定。'});",
        "playground.drawCharacter({name:'char_188_helage_1',name2:'char_348_ceylon_2',focus:2});playground.drawDialog({name:'锡兰',text:'你是指......'});",
        "playground.drawCharacter({name:'char_188_helage_1',name2:'char_348_ceylon_2',focus:1});playground.drawDialog({name:'赫拉格',text:'博士。前因后果你都已经很清楚了。我们该怎么做？'});",
        "playground.Decision({options:[['都到这一步了，必须做些什么！', '......', '让无辜的人受难，这违背了罗德岛的信条。']]});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_188_helage_1'});playground.drawDialog({name:'赫拉格',text:'所以，责任由谁承担？'});",
        "playground.Decision({options:[['只要没人发现，就没有人参与过！']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_188_helage_2'});playground.drawDialog({name:'赫拉格',text:'你啊。'});",
        "playground.drawDialog({name:'赫拉格',text:'锡兰小姐，事不宜迟，我们启程吧。'});",
        "playground.drawCharacter({name:'char_348_ceylon_2'});playground.drawDialog({name:'锡兰',text:'博士......'});",
        "playground.Decision({options:[['做你该做的事吧。']]});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'锡兰',text:'我知道了，就由我去牵制黑吧。'});",
        "playground.drawDialog({name:'锡兰',text:'而且，我也有不得不去做的事情，我必须知道答案......'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});delay(1);background.cameraEffect({effect:'grayscale', keep:true, amount:0, fadetime:0});background.showImage({image:'bg_festival_1',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:0.7, block:true});playground.drawCharacter({name:'char_348_ceylon_2',name2:'char_340_shwaz_2',focus:1});playground.drawDialog({name:'锡兰',text:'黑......'});",
        "playground.drawDialog({name:'锡兰',text:'为什么要疏远我？'});",
        "playground.drawCharacter({name:'char_348_ceylon_2',name2:'char_340_shwaz_3',focus:2});playground.drawDialog({name:'黑',text:'......'});",
        "playground.drawDialog({name:'黑',text:'小姐是在维多利亚经受过良好教育的人。你应该去更好的地方，别和我们这样的人一起留在这个城市挣扎。'});",
        "playground.drawCharacter({name:'char_348_ceylon_9',name2:'char_340_shwaz_3',focus:1});playground.drawDialog({name:'锡兰',text:'......不对。这一点也不对。'});",
        "playground.drawDialog({name:'锡兰',text:'黑，你在我心里是什么样的人？我在你心里又是什么样？'});",
        "playground.drawCharacter({name:'char_348_ceylon_9',name2:'char_340_shwaz_3',focus:2});playground.drawDialog({name:'黑',text:'我不是小姐看到的那样。'});",
        "playground.drawCharacter({name:'char_348_ceylon_8',name2:'char_340_shwaz_3',focus:1});playground.drawDialog({name:'锡兰',text:'因为你杀过人？'});",
        "playground.drawCharacter({name:'char_348_ceylon_8',name2:'char_340_shwaz_3',focus:2});playground.drawDialog({name:'黑',text:'......'});",
        "playground.drawCharacter({name:'char_348_ceylon_8',name2:'char_340_shwaz_3',focus:1});playground.drawDialog({name:'锡兰',text:'因为你杀过很多人？'});",
        "playground.drawCharacter({name:'char_348_ceylon_8',name2:'char_340_shwaz_3',focus:2});playground.drawDialog({name:'黑',text:'不，小姐。别再说了。'});",
        "playground.drawCharacter({name:'char_348_ceylon_5',name2:'char_340_shwaz_3',focus:1});playground.drawDialog({name:'锡兰',text:'可能我们都弄错了，黑。'});",
        "playground.drawCharacter({name:'char_348_ceylon_5',name2:'char_340_shwaz_3',focus:2});playground.drawDialog({name:'黑',text:'小姐，我不想你知道这些！'});",
        "playground.drawCharacter({name:'char_348_ceylon_9',name2:'char_340_shwaz_3',focus:1});playground.drawDialog({name:'锡兰',text:'对不起。'});",
        "playground.drawCharacter({name:'char_348_ceylon_9',name2:'char_340_shwaz_3',focus:2});playground.drawDialog({name:'黑',text:'......小姐？'});",
        "playground.drawCharacter({name:'char_348_ceylon_9',name2:'char_340_shwaz_3',focus:1});playground.drawDialog({name:'锡兰',text:'我已经知道了。我知道了你的过去......哪怕只是一点。'});",
        "playground.drawDialog({name:'锡兰',text:'如果黑不愿意我知道，对不起，我是没法说“我不知道”的。'});",
        "playground.drawCharacter({name:'char_348_ceylon_9',name2:'char_340_shwaz_3',focus:2});playground.drawDialog({name:'黑',text:'不，小姐！你根本不应该知道！你本应该......'});",
        "playground.drawCharacter({name:'char_348_ceylon_3',name2:'char_340_shwaz_3',focus:1});playground.drawDialog({name:'锡兰',text:'我应该什么？应该这样，应该那样，应该好好读书，应该跻身名流，什么呀！'});",
        "playground.drawDialog({name:'锡兰',text:'我可不是什么温室里的花，也不是什么不谙世事的大小姐了！我知道我有必须要做的事情！'});",
        "playground.drawDialog({name:'锡兰',text:'保护汐斯塔，既是父亲的事情，是你的事情，也是我的事情！'});",
        "playground.drawDialog({name:'锡兰',text:'你不想我卷入这种事情，是为了保护我吧？'});",
        "playground.drawCharacter({name:'char_348_ceylon_3',name2:'char_340_shwaz_3',focus:2});playground.drawDialog({name:'黑',text:'我不......我......'});",
        "playground.drawCharacter({name:'char_348_ceylon_3',name2:'char_340_shwaz_3',focus:1});playground.drawDialog({name:'锡兰',text:'你和爸爸都一样，你们觉得你们这样安排我会过得很好，但我不觉得！'});",
        "playground.drawDialog({name:'锡兰',text:'我不觉得危险有什么，我不觉得黑的过去有什么！也许真正在经历这些的时候，我也会哭，也会悲伤，也会觉得可怕......'});",
        "playground.drawDialog({name:'锡兰',text:'只是，只要黑说，“需要锡兰来帮助我”的话，我一定会来的！无论你说什么，我都会听的！'});",
        "playground.drawDialog({name:'锡兰',text:'如果是朋友的话，就应该是这样啊，一直都仅仅是单方面地付出的话，算什么朋友啊！'});",
        "playground.drawCharacter({name:'char_348_ceylon_5',name2:'char_340_shwaz_3',focus:1});playground.drawDialog({name:'锡兰',text:'所以，黑，现在可以来帮我吗？'});",
        "playground.drawDialog({name:'锡兰',text:'你已经问过我，为什么要这样做？我已经回答过了......'});",
        "playground.drawDialog({name:'锡兰',text:'所以，你可不可以也给我一个答案，黑？如果过去的都过去了，你可以再当一次我的朋友吗，就像小时候那样？'});",
        "playground.drawCharacter({name:'char_348_ceylon_5',name2:'char_340_shwaz_5',focus:2});playground.drawDialog({name:'黑',text:'小姐......对不起。我为过去我的言行向你道歉。我的所作所为让你误解了，这些都不该发生的。'});",
        "playground.drawCharacter({name:'char_348_ceylon_5',name2:'char_340_shwaz_5',focus:1});playground.drawDialog({name:'锡兰',text:'啊......'});",
        "playground.drawCharacter({name:'char_348_ceylon_5',name2:'char_340_shwaz_1',focus:2});playground.drawDialog({name:'黑',text:'小姐，你是我的朋友，一直都是。'});",
        "playground.drawCharacter({name:'avg_npc_020'});playground.drawDialog({name:'克洛宁的手下',text:'......'});",
        "playground.drawDialog({name:'克洛宁的手下',text:'什么，你们絮叨这么久，然后呢，结论呢？怎么回事？'});",
        "playground.drawCharacter({name:'char_348_ceylon_2',name2:'char_340_shwaz_2',focus:2});playground.drawDialog({name:'黑',text:'小姐，请说，你接下来的安排是什么？'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_340_shwaz_2',focus:1});playground.drawDialog({name:'锡兰',text:'啊？我......嗯......我想通过官方途径发送真实的灾害报告。'});",
        "playground.drawDialog({name:'锡兰',text:'现在罗德岛应该在搜集克洛宁的罪证，很快就能把他踢出市政厅机关......'});",
        "playground.drawDialog({name:'锡兰',text:'但灾害报告发布以后，黑曜石节可能要取消，汐斯塔也必须迁移，我怕......'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_340_shwaz_2',focus:2});playground.drawDialog({name:'黑',text:'没关系，小姐。'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_340_shwaz_2',focus:1});playground.drawDialog({name:'锡兰',text:'是，是吗？'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_340_shwaz_2',focus:2});playground.drawDialog({name:'黑',text:'如果小姐这么想的话，我支持小姐这么做。'});",
        "playground.drawCharacter({name:'char_348_ceylon_4',name2:'char_340_shwaz_2',focus:1});playground.drawDialog({name:'锡兰',text:'......黑......'});",
        "playground.drawCharacter({name:'char_348_ceylon_4',name2:'char_340_shwaz_2',focus:2});playground.drawDialog({name:'黑',text:'小姐，你需要我保护你吗？'});",
        "playground.drawCharacter({name:'char_348_ceylon_6',name2:'char_340_shwaz_2',focus:1});playground.drawDialog({name:'锡兰',text:'嗯，需要。'});",
        "playground.drawCharacter({name:'char_348_ceylon_6',name2:'char_340_shwaz_2',focus:2});playground.drawDialog({name:'黑',text:'那就请小姐躲好了。很快就会结束。'});",
        "playground.drawCharacter({name:'avg_npc_020'});playground.drawDialog({name:'克洛宁的手下',text:'黑，你在做什么？你是要背叛命令吗？'});",
        "playground.drawCharacter({name:'char_340_shwaz_2'});playground.drawDialog({name:'黑',text:'命令？协助克洛宁？一层伪装而已。自始至终，我只接到过两个命令。'});",
        "playground.drawDialog({name:'黑',text:'第一，老爷要我彻查克洛宁的罪证，包括关于他暗中控制V3工业公司，私自开采黑曜石。'});",
        "playground.drawDialog({name:'黑',text:'现在一切都明晰了，没什么好说的。'});",
        "playground.drawCharacter({name:'avg_npc_020'});playground.drawDialog({name:'克洛宁的手下',text:'快，快动手！快把她们两个都抓了！'});",
        "playground.drawCharacter({name:'char_340_shwaz_4'});playground.drawDialog({name:'黑',text:'第二个命令你们也已经听见了。'});",
        "playground.drawDialog({name:'黑',text:'——小姐要我保护她。'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({fadetime:3,block:true});playground.drawImage({});"
    ]
];