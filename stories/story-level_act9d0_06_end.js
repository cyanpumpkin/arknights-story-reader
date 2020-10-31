var story = [
    [
        "bg_victoria",
        "avg_npc_055",
        "avg_npc_047",
        "bg_black",
        "bg_cher_3",
        "avg_npc_046_2"
    ],
    [
        "m_avg_drift_loop",
        "m_avg_drift_intro",
        "d_gen_walk_n",
        "m_avg_storyendjp_loop",
        "m_avg_storyendjp_intro"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();delay(1);blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_victoria',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_avg_drift_intro', key:'m_avg_drift_loop', volume:0.4});delay(2);blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playSound({key:'d_gen_walk_n', volume:1});playground.drawCharacter({name:'avg_npc_055',fadetime:1,block:true});delay(1);playground.drawDialog({name:'赦罪师',text:'报告，我看过了。'});",
        "playground.drawDialog({name:'赦罪师',text:'你们在整合运动那里取得的成果，实在令人难以恭维。'});",
        "playground.drawDialog({name:'赦罪师',text:'但，即使如此，你们也的确找到了一些预料之外的收获。'});",
        "playground.drawCharacter({name:'avg_npc_055', name2:'avg_npc_047', focus:2});playground.drawDialog({name:'赫德雷',text:'感谢——'});",
        "playground.drawCharacter({name:'avg_npc_055'});playground.drawDialog({name:'赦罪师',text:'啊啊，不用道谢，至少这次还不用。'});",
        "playground.drawDialog({name:'赦罪师',text:'你们也都是优秀的战士，在死前，你们任何的奖赏都是你们的血与火所夺来的。'});",
        "playground.drawDialog({name:'赦罪师',text:'摄政王殿下熟知每一个微不足道的萨卡兹所践行的轨迹，即使你们太过微不足道。'});",
        "playground.drawDialog({name:'赦罪师',text:'在这座殿堂里逐渐失去价值的，不光是那些感染者，你明白吗？'});",
        "playground.drawCharacter({name:'avg_npc_055', name2:'avg_npc_047', focus:2});playground.drawDialog({name:'赫德雷',text:'......我明白。'});",
        "playground.drawCharacter({name:'avg_npc_055'});playground.drawDialog({name:'赦罪师',text:'嗯。'});",
        "playground.drawDialog({name:'赦罪师',text:'如果我所猜没错，罗德岛如今已经迎回了那个让人不快的人。'});",
        "playground.drawDialog({name:'赦罪师',text:'至于你们......你们应该有所接触。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'——！'});",
        "playground.drawDialog({name:'赫德雷',text:'（摄政王比W还更快一步？在这么遥远的伦蒂尼姆——？）'});",
        "playground.drawCharacter({name:'avg_npc_055'});playground.drawDialog({name:'赦罪师',text:'雇佣兵仅仅效忠于利益。这种出发点，未必是什么坏事。'});",
        "playground.drawDialog({name:'赦罪师',text:'等到尘埃落定，回到殿下的座前——'});",
        "playground.drawDialog({name:'赦罪师',text:'——你就可以赢得你的奖赏。'});",
        "playground.drawCharacter({name:'avg_npc_055', name2:'avg_npc_047', focus:2});playground.drawDialog({name:'赫德雷',text:'......那其他的战士们？'});",
        "playground.drawCharacter({name:'avg_npc_055'});playground.drawDialog({name:'赦罪师',text:'那位感染者青年有她自己的手腕，你们还没有发觉吗？'});",
        "playground.drawDialog({name:'赦罪师',text:'但殿下已无心深入这场闹剧，殿下与我自有判断，维多利亚将持续观望整合运动。'});",
        "playground.drawDialog({name:'赦罪师',text:'我们缺乏从W手里夺回那支队伍控制权的......“高效手段”。'});",
        "playground.drawDialog({name:'赦罪师',text:'况且，我们依旧需要以支持者的名义，去煽动在大地各处活动的感染者们。'});",
        "playground.drawCharacter({name:'avg_npc_055', name2:'avg_npc_047', focus:2});playground.drawDialog({name:'赫德雷',text:'我们仍旧要利用整合运动？我以为这样的发展会让殿下......'});",
        "playground.drawCharacter({name:'avg_npc_055'});playground.drawDialog({name:'赦罪师',text:'放弃？不不不，年轻的雇佣兵。'});",
        "playground.drawDialog({name:'赦罪师',text:'还不够混乱，远远不够。哪怕是远离了领袖的整合运动，也依旧能成为祸乱的根源——'});",
        "playground.drawDialog({name:'赦罪师',text:'——以及，刚才的言论，是否可以认作是对殿下的质询？'});",
        "playground.drawCharacter({name:'avg_npc_055', name2:'avg_npc_047', focus:2});playground.drawDialog({name:'赫德雷',text:'不，不敢。'});",
        "playground.drawCharacter({name:'avg_npc_055', name2:'avg_npc_047', focus:1});playground.drawDialog({name:'赦罪师',text:'无妨，抬起头来......'});",
        "playground.drawDialog({name:'赦罪师',text:'对了，对了。'});",
        "playground.drawDialog({name:'赦罪师',text:'你暂时先不用回去了。漫长的路程会耽误太多时间，而那里发生的一切正在加速。'});",
        "playground.drawDialog({name:'赦罪师',text:'就暂且留在这里，享受你为数不多的清闲时间吧。'});",
        "playground.drawCharacter({name:'avg_npc_055', name2:'avg_npc_047', focus:2});playground.drawDialog({name:'赫德雷',text:'......感激不尽。'});",
        "playground.drawCharacter({name:'avg_npc_055'});playground.drawDialog({name:'赦罪师',text:'那么，殿下还在等我，原地解散吧。'});",
        "playground.drawDialog({name:'赦罪师',text:'记住，先做好自己的事情，赫德雷。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'明白。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n', volume:1});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_black',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'avg_npc_055'});playground.drawDialog({name:'赦罪师',text:'......赫德雷，是吗。'});",
        "playground.drawDialog({name:'赦罪师',text:'我很期待，你到底还能发现些什么。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_victoria',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'avg_npc_047',fadetime:1,block:true});delay(1);playground.drawDialog({name:'赫德雷',text:'......唉。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'这意思是......我们都被软禁了？'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'我不是没有考虑过，已经比想象中好很多了......'});",
        "playground.drawDialog({name:'赫德雷',text:'不过，我们还是太天真了。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'哪一边天真？是误以为自己会死，还是误以为摄政王一无所知？'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'都有，他......始终都掌握一切。'});",
        "playground.drawDialog({name:'赫德雷',text:'也难怪......他可是特雷西斯。那些故事里的他和特蕾西娅，是多么的所向披靡......'});",
        "playground.drawDialog({name:'赫德雷',text:'只不过这场战争让我们都忘了，那些故事......都不只是故事。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'该怎么警告W？现在整合运动的事情又发展到哪一步了？'});",
        "playground.drawDialog({name:'萨卡兹信使',text:'我们在路上花了很多时间，说不定现在她已经和塔露拉闹掰了。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'又或者，这场闹剧会在龙门被终结。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'......会不会太快了点？'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'这才符合W的规划。如果塔露拉真的打算毁掉这些感染者，那W一定会先毁掉塔露拉。'});",
        "playground.drawDialog({name:'赫德雷',text:'用萨卡兹的方式，不择手段。'});",
        "playground.drawDialog({name:'赫德雷',text:'毕竟因为某位佣兵的死，她很不高兴。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'她明明心里有数。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'时局至此，容不得她继续犹豫下去。她只是缺乏一个动手的好心情而已。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'但现在是我们落于被动。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'有办法。想骗过摄政王的眼睛，无论如何都非常冒险，但是......'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'我依旧有权对我的直属小队下达“待命”的指令。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'维多利亚很混乱，暗号不容易被注意到。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'不光如此，消息将会绕过摄政王所掌控的那些最敏感的地区......发向卡兹戴尔。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'卡兹戴尔？'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'那里的战场废墟早已经无人问津。'});",
        "playground.drawDialog({name:'赫德雷',text:'但我们毕竟，在那里挣扎了很久。'});",
        "playground.drawDialog({name:'赫德雷',text:'在某处废墟下有一个秘密发报站，信号塔被伪装成遭到破坏的样子，线路完好无损。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'等等，那时候......'});",
        "playground.drawDialog({name:'萨卡兹信使',text:'......你什么时候做好这些准备的？'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'从一开始，花了很大一笔钱。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'......呵呵。'});",
        "playground.drawDialog({name:'萨卡兹信使',text:'你啊......让他们看到你现在的表情，应该都会很惊讶吧。'});",
        "playground.drawDialog({name:'萨卡兹信使',text:'从什么时候开始，每次上战场，再归来，你永远是一副若有所思的样子，好像做错了事的孩子。'});",
        "playground.drawDialog({name:'萨卡兹信使',text:'我还以为，你会更加丧失斗志。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'不，恰恰相反，我反而越来越明白我该做什么了。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'为什么？'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'因为我没得选，这样反而解脱了，不是吗？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'W一定对你说了些什么，在你离开切尔诺伯格之前。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'你觉得她像是那种会和盘托出的人吗？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'不是。如果是，就没今天这么麻烦了。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'不过她的确在我离开核心城前找了我一次。那时候她已经察觉到我们的意思了。'});",
        "playground.drawDialog({name:'赫德雷',text:'她——'});",
        "playground.clearDialog();voice.stopMusic({fadetime:1});playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.cameraEffect({effect:'grayscale', keep:true, amount:1, fadetime:0});background.showImage({image:'bg_cher_3',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_avg_storyendjp_intro', key:'m_avg_storyendjp_loop', volume:0.4});playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:2});playground.drawDialog({name:'W',text:'雇佣兵的性命可以用价格来衡量吗？'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:1});playground.drawDialog({name:'赫德雷',text:'当然。一直以来。为什么这么问？你可是最懂得这个道理的。'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:2});playground.drawDialog({name:'W',text:'可，谁来决定？'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:1});playground.drawDialog({name:'赫德雷',text:'战争本身。'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:2});playground.drawDialog({name:'W',text:'是啊......战功，战绩，在厮杀中夺取名利，抬高身价，作为道具被他人认可。'});",
        "playground.drawDialog({name:'W',text:'很无趣。'});",
        "playground.drawDialog({name:'W',text:'但以后不再是了。至少我们，没必要再是了。'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:1});playground.drawDialog({name:'赫德雷',text:'......什么意思？'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:2});playground.drawDialog({name:'W',text:'每一个萨卡兹雇佣兵都应该明码标价。'});",
        "playground.drawDialog({name:'W',text:'但不必被他人赋予，也不用被他人操纵，他们应该亲手写下自己的价码，用所有与萨卡兹为敌之人的鲜血。'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:1});playground.drawDialog({name:'赫德雷',text:'你......你想让这些人全都脱离卡兹戴尔......？'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:2});playground.drawDialog({name:'W',text:'别这么惊讶，只是让那些家伙自己做决定而已。'});",
        "playground.drawDialog({name:'W',text:'很稀奇吗？'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:1});playground.drawDialog({name:'赫德雷',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:2});playground.drawDialog({name:'W',text:'不稀奇吧？'});",
        "playground.drawDialog({name:'W',text:'你可以好好想想......好好想想你应该在卡兹戴尔做些什么。'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:1});playground.drawDialog({name:'赫德雷',text:'......那可是在特雷西斯的眼皮底下。'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:2});playground.drawDialog({name:'W',text:'别这么说，是你自己说你有打算的。'});",
        "playground.drawCharacter({name:'avg_npc_047', name2:'avg_npc_046_2', focus:1});playground.drawDialog({name:'赫德雷',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_046_2'});playground.drawDialog({name:'W',text:'放轻松......你以前可是我的头儿，赫德雷。'});",
        "playground.drawDialog({name:'W',text:'你最好做得到，不然接下来可就麻烦了。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({});background.cameraEffect({effect:'grayscale', keep:true, amount:0, fadetime:0});background.showImage({image:'bg_victoria',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'......是个不错的笑话。疤痕商场的老家伙们都会笑到哮喘复发的。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'委员会不会乐意看到这种情况发生的。他们付了不少钱，他们花了不少心思。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'他们也杀了不少人。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'是呢......还有那些老家伙在，其中一些人其实和我们关系不错......'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'你又开始盘算什么了，随便你吧。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'嗯......不过我是不能离开伦蒂尼姆的，不，甚至不能离开那座宅邸。'});",
        "playground.drawDialog({name:'赫德雷',text:'这件事，只能你来做。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'“信使”的身份还真是便利呢。'});",
        "playground.drawCharacter({name:'avg_npc_047'});playground.drawDialog({name:'赫德雷',text:'“继续听从塔露拉的命令行动，赫德雷暂时不会归队”，应该没问题吧？'});",
        "playground.drawDialog({name:'赫德雷',text:'只要那处发报站还在运作，我们就会收到回讯，之后他们自会想办法联系到W。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'萨卡兹信使',text:'......哼。'});",
        "playground.drawDialog({name:'萨卡兹信使',text:'我知道该怎么做......'});",
        "playground.drawDialog({name:'萨卡兹信使',text:'不要命令我。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:3, block:true});background.showImage({image:'bg_cher_3',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});playground.drawCharacter({name:'avg_npc_046_2'});playground.drawDialog({name:'W',text:'......'});",
        "playground.drawDialog({name:'W',text:'唉......真麻烦......'});",
        "playground.drawDialog({name:'W',text:'好不容易决定去找那个龙女......你们还真是会挑时间啊。'});",
        "playground.drawDialog({name:'W',text:'出来。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawDialog({text:'切尔诺伯格的废墟，与卡兹戴尔稍有不同。'});",
        "playground.drawDialog({text:'街道上还残留着生活的气息，即使被摧残至此，还是会有些过去的痕迹。'});",
        "playground.drawDialog({text:'至少不是彻底的毁灭。'});",
        "playground.drawDialog({text:'是的，比如......'});",
        "playground.drawDialog({text:'这两个孩子。费力地举着武器的孩子。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'坚强的孩子',text:'——魔族，你想怎么样！'});",
        "playground.drawDialog({name:'孱弱的孩子',text:'不、不要挑衅她啊......'});",
        "playground.drawDialog({name:'孱弱的孩子',text:'啊......对、对不起，我们会离开的......'});",
        "playground.drawCharacter({name:'avg_npc_046_2'});playground.drawDialog({name:'W',text:'嗯——'});",
        "playground.drawDialog({name:'W',text:'你手里拿着的，是把制式军刀？'});",
        "playground.drawDialog({name:'W',text:'对了，是把萨卡兹的刀......你看，你根本举不动，又何必拖着这个累赘呢？'});",
        "playground.drawDialog({name:'W',text:'你想反抗吗？你想杀了我吗？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'孱弱的孩子',text:'噫——'});",
        "playground.drawDialog({name:'坚强的孩子',text:'别、别过——唔！'});",
        "playground.drawDialog({name:'孱弱的孩子',text:'卢布廖夫......你的腿！'});",
        "playground.drawCharacter({name:'avg_npc_046_2'});playground.drawDialog({name:'W',text:'喔，你受伤了。'});",
        "playground.drawDialog({name:'W',text:'被天灾直击后的切尔诺伯格可算不上安全，你会感染的。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'坚强的孩子',text:'我才不会变成你们这种人！'});",
        "playground.drawCharacter({name:'avg_npc_046_2'});playground.drawDialog({name:'W',text:'好。真是坚强的孩子。'});",
        "playground.drawDialog({name:'W',text:'那你知道——'});",
        "playground.drawDialog({name:'W',text:'——接手萨卡兹的佩刀，有什么意义吗？'});",
        "playground.clearDialog();blocker.blocker({fadetime:2,block:true});playground.drawImage({});"
    ]
];