var story = [
    [
        "bg_village_2",
        "char_2013_cerber_1",
        "char_187_ccheal_2",
        "char_187_ccheal_1",
        "char_416_zumama_2",
        "char_416_zumama_1",
        "char_187_ccheal_4",
        "avg_npc_070",
        "char_187_ccheal_3",
        "char_416_zumama_5",
        "char_337_utage_summer_1_3",
        "char_201_moeshd_summer",
        "avg_npc_074",
        "char_416_zumama_6",
        "char_187_ccheal_5"
    ],
    [
        "m_dia_farce_loop",
        "m_dia_farce_intro",
        "d_gen_fightgeneral",
        "d_gen_rungeneral",
        "m_avg_nervous_loop",
        "m_avg_nervous_intro",
        "m_avg_exciting02_loop",
        "m_avg_exciting02_intro",
        "d_gen_smallearthquake"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();delay(1);blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_village_2',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_dia_farce_intro', key:'m_dia_farce_loop', volume:0.4});playground.drawCharacter({name:'char_2013_cerber_1'});playground.drawDialog({name:'刻俄柏',text:'居然有这么强的整合运动，哼，但是小刻不会输的！'});",
        "playground.drawCharacter({name:'char_187_ccheal_2'});playground.drawDialog({name:'嘉维尔',text:'啧，这个傻丫头。'});",
        "playground.clearDialog();playground.drawCharacter({});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawCharacter({name:'char_187_ccheal_1',name2:'char_2013_cerber_1'});voice.playSound({key:'d_gen_fightgeneral'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});delay(1);playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'醒醒！'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_2013_cerber_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'刻俄柏',text:'唔？这里是哪里？'});",
        "delay(1);background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawCharacter({name:'char_2013_cerber_1'});playground.drawDialog({name:'刻俄柏',text:'啊，是嘉维尔！还有大家！'});",
        "playground.Decision({options:[['1', '2', '3'], '早上好。', '......', '（爆栗）']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_2013_cerber_1'});playground.drawDialog({name:'刻俄柏',text:'诶嘿嘿，博士早上好。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_2013_cerber_1'});playground.drawDialog({name:'刻俄柏',text:'唔，博士的脸色有点可怕，是我做错了什么吗？'});",
        "playground.drawDialog({name:'刻俄柏',text:'博士不要生气好不好......'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_2013_cerber_1'});playground.drawDialog({name:'刻俄柏',text:'呜呜呜，头好痛，博士。'});",
        "playground.drawDialog({name:'刻俄柏',text:'为什么突然敲我的头呀......'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_2013_cerber_1',focus:1});playground.drawDialog({name:'嘉维尔',text:'精神看起来至少恢复正常了。'});",
        "playground.drawDialog({name:'嘉维尔',text:'小刻，你还记得你怎么来到这里的吗？'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_2013_cerber_1',focus:2});playground.drawDialog({name:'刻俄柏',text:'......唔，忘了！'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_2013_cerber_1',focus:1});playground.drawDialog({name:'嘉维尔',text:'好吧。'});",
        "playground.drawDialog({name:'嘉维尔',text:'来，你先躺下，我给你看看身体还有没有出问题，还有下次别乱跑了。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_2013_cerber_1',focus:2});playground.drawDialog({name:'刻俄柏',text:'好~咦，这里是哪里啊？'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_2013_cerber_1',focus:1});playground.drawDialog({name:'嘉维尔',text:'这里是......啧，不知道怎么给你解释，反正躺好就对了！'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_2013_cerber_1',focus:2});playground.drawDialog({name:'刻俄柏',text:'哦——'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({fadetime:2});playground.drawCharacter({name:'char_416_zumama_2', fadetime:1,block:true});delay(1);playground.drawDialog({name:'森蚺',text:'嘉维尔，你在搞什么鬼？'});",
        "playground.drawCharacter({name:'char_187_ccheal_2', name2:'char_416_zumama_2', focus:1});playground.drawDialog({name:'嘉维尔',text:'啧，给你解释也很麻烦，总之你先等等。'});",
        "playground.drawCharacter({name:'char_187_ccheal_2', name2:'char_416_zumama_2', focus:2});playground.drawDialog({name:'森蚺',text:'......'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_village_2',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({text:'十分钟后'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_2013_cerber_1',focus:1});playground.drawDialog({name:'嘉维尔',text:'好了，没什么大碍，去博士旁边待着，别乱跑啊，再乱跑不给你蜜饼吃了。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_2013_cerber_1',focus:2});playground.drawDialog({name:'刻俄柏',text:'哦！蜜饼！'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_rungeneral', volume:0.6});voice.playMusic({intro:'m_avg_nervous_intro', key:'m_avg_nervous_loop', volume:0.4});playground.drawCharacter({name:'char_416_zumama_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'森蚺',text:'可以了吗？'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'可以了。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'那么，嘉维尔，你在搞什么鬼？'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'唉，说起来有些复杂，总之我是来找你的。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'引擎我是不会还给你的。'});",
        "playground.drawCharacter({name:'char_187_ccheal_4', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'虽然引擎也是一件事，不过我有别的事要找你。'});",
        "playground.drawCharacter({name:'char_187_ccheal_4', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'别的事？'});",
        "playground.drawCharacter({name:'char_187_ccheal_4', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'你是不是让手下去开采铁矿了？'});",
        "playground.drawCharacter({name:'char_187_ccheal_4', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'是。'});",
        "playground.drawCharacter({name:'char_187_ccheal_4', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'......啧。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_fightgeneral'});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});voice.playSound({key:'d_gen_fightgeneral'});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});voice.playSound({key:'d_gen_fightgeneral'});background.cameraShake({duration:0.2, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});voice.playSound({key:'d_gen_fightgeneral'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_187_ccheal_4', name2:'char_416_zumama_2', focus:2});playground.drawDialog({name:'森蚺',text:'嘉维尔，我没想到你是这么不服输的人。'});",
        "playground.drawDialog({name:'森蚺',text:'被大丑打败让你不服气吗？'});",
        "playground.drawCharacter({name:'char_187_ccheal_4', name2:'char_416_zumama_2', focus:1});playground.drawDialog({name:'嘉维尔',text:'不，那个叫大丑的东西确实不赖，我心服口服。'});",
        "playground.drawDialog({name:'嘉维尔',text:'但如果你不惜让手下染上矿石病也要去开采矿石的话，那我作为医生，就必须要阻止你。'});",
        "playground.drawCharacter({name:'char_187_ccheal_4', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'嗯？矿石病？哦，你在说石头病。'});",
        "playground.drawDialog({name:'森蚺',text:'我没有。'});",
        "playground.drawCharacter({name:'char_187_ccheal_2', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'啊？'});",
        "playground.drawCharacter({name:'char_187_ccheal_2', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'我告诉过他们很多次不要靠近矿区深处。'});",
        "playground.drawCharacter({name:'char_187_ccheal_4', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'可是你的手下明明感染了矿石病！'});",
        "playground.drawCharacter({name:'char_187_ccheal_4', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'会有不听话的家伙跑进去，这个我拦不住，你说是吧，尤吉？'});",
        "playground.drawCharacter({name:'avg_npc_070', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'尤吉',text:'是，哥哥是想多给大酋长采一些矿才冒险跑进矿区深处的。'});",
        "playground.drawCharacter({name:'char_187_ccheal_2', name2:'avg_npc_070', focus:1});playground.drawDialog({name:'嘉维尔',text:'啊？那你早说啊！'});",
        "playground.drawCharacter({name:'char_187_ccheal_2', name2:'avg_npc_070', focus:2});playground.drawDialog({name:'尤吉',text:'你又没问。'});",
        "voice.stopMusic({fadetime:2});playground.drawCharacter({name:'char_187_ccheal_2', name2:'avg_npc_070', focus:1});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'嘉维尔',text:'这么重要的事......！'});",
        "playground.Decision({options:[['1', '2', '3'], '你自己说的，矿石病在这里不被重视。', '......', '你确实没问。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_187_ccheal_2'});playground.drawDialog({name:'嘉维尔',text:'啧，好吧。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_187_ccheal_2'});playground.drawDialog({name:'嘉维尔',text:'博士，我该不会真的没问吧？！'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_187_ccheal_2'});playground.drawDialog({name:'嘉维尔',text:'啧，博士，连你也拆我的台！'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_416_zumama_1'});playground.drawDialog({name:'森蚺',text:'而且......'});",
        "playground.drawCharacter({name:'char_187_ccheal_2'});playground.drawDialog({name:'嘉维尔',text:'喂，你干嘛突然脱衣服？'});",
        "playground.drawDialog({name:'嘉维尔',text:'嗯？！你的身体......'});",
        "playground.drawCharacter({name:'char_187_ccheal_2', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'我从小就一直在矿区里到处跑，会得石头病也是很正常的事。'});",
        "playground.drawDialog({name:'森蚺',text:'但是，我也敢说，没有人比我更了解矿区里哪里有那种会让人得病的矿石。'});",
        "playground.drawCharacter({name:'char_187_ccheal_3', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'......'});",
        "playground.drawDialog({name:'嘉维尔',text:'这样啊。'});",
        "playground.drawDialog({name:'嘉维尔',text:'好吧，那是我错怪你了，抱歉哈，祖玛玛。'});",
        "playground.drawCharacter({name:'char_187_ccheal_3', name2:'char_416_zumama_5', focus:2});playground.drawDialog({name:'森蚺',text:'没事。'});",
        "playground.drawCharacter({name:'char_337_utage_summer_1_3'});playground.drawDialog({name:'宴',text:'诶，就这么和解了？！'});",
        "playground.drawDialog({name:'宴',text:'一般这种情况不是应该互不相让然后大战三百回合的吗？'});",
        "playground.drawCharacter({name:'char_337_utage_summer_1_3', name2:'char_201_moeshd_summer', focus:2});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'可颂',text:'别期待这种事啦！'});",
        "playground.Decision({options:[['1', '2', '3'], '嘉维尔不是那种人。', '......', '可惜。']});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'那我们来聊聊另一件事吧。'});",
        "playground.drawDialog({name:'嘉维尔',text:'我们的引擎在你这里对吧？'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'嗯。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'那个能不能还给我们？不然的话我可要回不去了。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'不行。'});",
        "playground.drawDialog({name:'森蚺',text:'你想回去的话，我可以让人送你一程。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'那可不行，凯尔希会生气的。'});",
        "playground.drawDialog({name:'嘉维尔',text:'无论如何都不行？'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'无论如何都不行。'});",
        "playground.drawCharacter({name:'char_337_utage_summer_1_3'});playground.drawDialog({name:'宴',text:'哦，看起来还是要打诶。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'看起来还是要动手啊。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'我从一开始就是这个打算。'});",
        "voice.playMusic({intro:'m_avg_exciting02_intro', key:'m_avg_exciting02_loop', volume:0.4});playground.clearDialog();voice.playSound({key:'d_gen_smallearthquake', volume:0.6});background.cameraShake({duration:2, xstrength:4, ystrength:4, vibrato:20, randomness:30, fadeout:true});delay(1);background.cameraShake({duration:0.5, xstrength:4, ystrength:10, vibrato:20, randomness:30, fadeout:true});delay(0.5);background.cameraShake({duration:0.5, xstrength:4, ystrength:10, vibrato:20, randomness:30, fadeout:true});delay(0.5);background.cameraShake({duration:0.5, xstrength:4, ystrength:10, vibrato:20, randomness:30, fadeout:true});delay(0.5);playground.drawCharacter({name:'char_187_ccheal_3'});playground.drawDialog({name:'嘉维尔',text:'嘿，要和这家伙打一场吗，有意思！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'大祭司',text:'嗨，你们好！'});",
        "playground.drawCharacter({name:'avg_npc_074', name2:'char_416_zumama_6', focus:2});playground.drawDialog({name:'森蚺',text:'......大祭司，你怎么这就把大丑开出来了。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'大祭司',text:'什么，不是要和嘉维尔动手吗？不用吗？不用我就开回去了，我还要测试引擎呢。'});",
        "playground.drawCharacter({name:'avg_npc_074', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'......要，但不是现在，我还有话要说。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'大祭司',text:'噢，好吧，那你先说，要打了喊我！'});",
        "playground.drawCharacter({name:'avg_npc_074', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'嗯。'});",
        "playground.drawCharacter({name:'char_187_ccheal_3', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'喂，刚才你们是不是提到了引擎？'});",
        "playground.drawCharacter({name:'char_187_ccheal_3', name2:'char_416_zumama_1', focus:2});playground.drawDialog({name:'森蚺',text:'没错，大丑身上现在就装着你的引擎，想要的话，就用你的武力来抢吧。'});",
        "playground.drawCharacter({name:'char_187_ccheal_5', name2:'char_416_zumama_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'嘿，那就来吧！'});",
        "playground.drawCharacter({name:'char_416_zumama_2'});playground.drawDialog({name:'森蚺',text:'跟我来，我们在广场上决出胜负。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.clearDialog();playground.drawCharacter({});playground.drawImage({});"
    ]
];