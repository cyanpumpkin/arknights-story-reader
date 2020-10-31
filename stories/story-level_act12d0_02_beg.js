var story = [
    [
        "bg_aerialview",
        "bg_jungleentrance",
        "char_187_ccheal_1",
        "char_411_tomimi_1",
        "char_411_tomimi_5",
        "char_411_tomimi_2",
        "char_187_ccheal_2",
        "char_187_ccheal_3",
        "char_411_tomimi_3",
        "ac12_11",
        "ac12_8",
        "ac12_7",
        "ac12_5",
        "ac12_9",
        "char_285_medic2_1",
        "avg_npc_071",
        "avg_npc_070",
        "char_187_ccheal_4"
    ],
    [
        "m_dia_path_loop",
        "m_dia_path_intro",
        "d_gen_leaveshake",
        "d_gen_fightgeneral"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();playground.clearDialog();voice.playMusic({intro:'m_dia_path_intro', key:'m_dia_path_loop', volume:0.4});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_aerialview',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});delay(2);blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_jungleentrance',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});voice.playSound({key:'d_gen_leaveshake', volume:0.6});delay(2);playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'这片雨林还是老样子啊。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:2});playground.drawDialog({name:'特米米',text:'嘉维尔已经很久没来过了吧。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'我一直不喜欢这地方，空气又潮湿，地又松软，一点也没有刚强的感觉。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:2});playground.drawDialog({name:'特米米',text:'不过现在有很多部族都搬进了雨林哦。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'是这样吗？......啊，博士，你醒了，昨晚睡的还好吗？'});",
        "playground.Decision({options:[['1', '2', '3'], '还好。', '......', '我精神超好。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'适应力不错啊，博士，还以为你肯定受不了在这种环境下露宿。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'哈哈，看你的眼神就知道了。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'嗯，如果你不一直揉额角的话我会相信你的。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'早跟你说了吧，博士，做好心理准备吧，接下来都只有这样的环境了。'});",
        "playground.drawDialog({name:'嘉维尔',text:'给，我用这边能找到的素材做了点醒神的汤，喝了吧。'});",
        "playground.drawDialog({name:'嘉维尔',text:'嘿，说起来，以前不知道，刚才在周围转转才发现，这片雨林的药用植物还挺多的。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_411_tomimi_1'});playground.drawDialog({name:'特米米',text:'......嘉维尔居然在照顾人。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:2});playground.drawDialog({name:'特米米',text:'嘉、嘉维尔，我也没睡好......'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'哈？你这样还能算是阿达克利斯？'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:2});playground.drawDialog({name:'特米米',text:'阿达克利斯......呜呜，嘉维尔果然已经忘了我们原本的名字了......'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'嗯？哦，我都忘了。是提亚卡乌才对。'});",
        "playground.drawDialog({name:'嘉维尔',text:'自从离开这里后，提亚卡乌这个词好久没用过了。博士，你也记一下，在我们这里，是不按种族区分自己的。'});",
        "playground.drawDialog({name:'嘉维尔',text:'从种族上区分的话，我想想啊，我是阿达克利斯，祖玛玛那家伙是斐迪亚，还有黎博利......嗯，大概有这三种吧。'});",
        "playground.drawDialog({name:'嘉维尔',text:'不过在这里，我们都自称提亚卡乌，在我们的语言中是“骁勇善战的人”的意思。'});",
        "playground.drawDialog({name:'嘉维尔',text:'然后，虽然感觉你应该用不着，不过我们自己称呼这里是叫做阿卡胡拉，在我们的语言中是“茂林丛生之地”的意思。'});",
        "playground.drawDialog({name:'嘉维尔',text:'好了，别哭哭啼啼的，把你的手下也都叫起来，该出发了。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_5', focus:2});playground.drawDialog({name:'特米米',text:'呜呜呜......'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_5', focus:2});playground.drawDialog({name:'特米米',text:'罗德岛，博士。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_5', focus:1});playground.drawDialog({name:'嘉维尔',text:'哦，对了，公司的意思就是......'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:2});playground.drawDialog({name:'特米米',text:'啊，我知道的，因为嘉维尔离开后，我有在了解外面的信息！'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'哦？这么说来，你的打扮确实也和以前不一样了。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_2', focus:2});playground.drawDialog({name:'特米米',text:'嗯，这可是外面非常流行的装扮呢！'});",
        "playground.drawCharacter({name:'char_187_ccheal_2'});playground.drawDialog({name:'嘉维尔',text:'我不懂时尚，是这样吗，博士？'});",
        "playground.Decision({options:[['1', '2', '3'], '在杂志上看到过。', '......', '我不知道。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_411_tomimi_1'});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'特米米',text:'博士果然也看过吗！'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:2});playground.drawDialog({name:'特米米',text:'嘉维尔，你的朋友不太懂时尚的样子呢。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_187_ccheal_3'});playground.drawDialog({name:'嘉维尔',text:'哈哈，博士也有不知道的时候啊。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'对了，特米米，先给博士介绍一下我们这里吧。我离开了这么久，也不知道有没有变化。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_3', focus:2});playground.drawDialog({name:'特米米',text:'好的！'});",
        "playground.drawDialog({name:'特米米',text:'唔，让我想想，要给外面的人讲的话......对了，要从部族开始呢。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});playground.drawImage({image:'ac12_11',xscale:1, yscale:1, fadetime:0});blocker.blocker({a:0, fadetime:2, block:true});playground.clearDialog();playground.drawCharacter({});playground.drawDialog({name:'特米米',text:'看看这张地图，这里是嘉维尔到达的地方，这里是咱们的过来的路径。'});",
        "playground.drawDialog({name:'特米米',text:'这一大片丛林覆盖的区域就是阿卡胡拉了。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.drawImage({fadetime:0});playground.drawImage({image:'ac12_8',xscale:1, yscale:1, fadetime:0});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_411_tomimi_1'});playground.drawDialog({name:'特米米',text:'生活在阿卡胡拉的所有大大小小部族，根据传统，每隔一段时间，就会通过祭典的方式选出一名大酋长。'});",
        "playground.drawDialog({name:'特米米',text:'啊，祭典的方式就是打斗，谁能战胜所有挑战者并赢得其他人的认可就能获得挑战现任大酋长的权利。'});",
        "playground.drawDialog({name:'特米米',text:'战胜现任大酋长的话，就能成为新的大酋长。'});",
        "playground.drawDialog({name:'特米米',text:'大酋长的权力的话，唔，所有部族都会听他的话！'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'这不是基本没什么变化嘛。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:2});playground.drawDialog({name:'特米米',text:'有的哦。'});",
        "playground.drawCharacter({name:'char_411_tomimi_1'});playground.drawDialog({name:'特米米',text:'前任的胡安大酋长因为太喜欢喝酒被老婆追杀到悬崖边跳下去再也没有回来，本来上一次的祭典是要选出继任的大酋长的。'});",
        "playground.drawDialog({name:'特米米',text:'但是，因为嘉维尔的关系，上次没有选出大酋长，而嘉维尔离开后，各个部族都互相不服气。'});",
        "playground.drawDialog({name:'特米米',text:'所以现在各个部族之间陷入了互相斗争的状态。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.drawImage({fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});delay(0.5);playground.Decision({options:[['1'], '上一任大酋长......？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_411_tomimi_2'});playground.drawDialog({name:'特米米',text:'唔？这在我们这里是很常见的。'});",
        "playground.drawDialog({name:'特米米',text:'据我阿爹说，胡安大酋长是当大酋长当的很久的一个了，一般大酋长两三年就会换掉。'});",
        "playground.drawDialog({name:'特米米',text:'只要大酋长没了，就举办祭典选出一个新的。'});",
        "playground.Decision({options:[['1'], '因为嘉维尔的关系？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'啊？哦，对，这事我确实没跟罗德岛的人说过。'});",
        "playground.drawDialog({name:'嘉维尔',text:'我当时把祭典上所有人都打了一顿然后就走了。'});",
        "playground.Decision({options:[['1', '2'], '因为被排挤？', '所有人？！']});",
        "predicate = ['1', '2'];",
        "playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'对啊，我当时很气，就把他们都打了一顿。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'算了，这个先不提，现在有什么厉害的部族吗？'});",
        "playground.drawCharacter({name:'char_411_tomimi_1'});playground.drawDialog({name:'特米米',text:'嗯。'});",
        "playground.drawDialog({name:'特米米',text:'现在有几个部族比较厉害。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({});playground.drawImage({image:'ac12_7',xscale:1.1, yscale:1.1, fadetime:0});blocker.blocker({a:0, fadetime:2, block:false});playground.imageTween({xfrom:0, yfrom:0, xto:-30, yto:0, xscale:1.1, yscale:1.1, duration:15, block:false});playground.drawDialog({name:'特米米',text:'第一个就是祖玛玛作为头领的森蚺部族。'});",
        "playground.drawDialog({name:'特米米',text:'她把部族的位置设立在雨林的另一端，靠近矿脉的地方，占据着大部分的金属资源。'});",
        "playground.drawDialog({name:'特米米',text:'他们部族一直喜欢制造一些奇怪的道具和武器，吞并了周围不少小部族。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.clearDialog();playground.drawImage({image:'ac12_5',xscale:1.1, yscale:1.1, fadetime:0});blocker.blocker({a:0, fadetime:2, block:false});playground.imageTween({xfrom:0, yfrom:0, xto:30, yto:0, xscale:1.1, yscale:1.1, duration:15, block:false});playground.drawDialog({name:'特米米',text:'第二个是克玛尔的燧石部族。'});",
        "playground.drawDialog({name:'特米米',text:'雨林里的提亚卡乌不像我们一样结成部族生活，他们生活的更加分散一些，平时也不和我们交流。'});",
        "playground.drawDialog({name:'特米米',text:'但是现在，因为失去了大酋长的约束，不少部族进入了雨林，于是雨林中现在也有不少部族了。'});",
        "playground.drawDialog({name:'特米米',text:'克玛尔现在就是其中之一。'});",
        "playground.drawDialog({name:'特米米',text:'他们信奉自身的力量，也是占领了一块地盘。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.clearDialog();playground.drawCharacter({});playground.drawImage({image:'ac12_9',xscale:1, yscale:1, fadetime:0});blocker.blocker({a:0, fadetime:2, block:true});playground.drawDialog({name:'特米米',text:'还有一个部族比较特殊，嘉维尔你也认识，是依娜姆的部族。'});",
        "playground.drawDialog({name:'特米米',text:'她的部族就叫“依娜姆商会”，这个部族的人比较奇怪，他们都不太喜欢打架，反而喜欢和人做生意。'});",
        "playground.drawDialog({name:'特米米',text:'不过他们的人数不少，不可以小看他们。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.drawImage({fadetime:0});background.showImage({image:'bg_jungleentrance',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'祖玛玛那家伙会把部族设在矿山边我倒是能想象，那家伙从那时候起，就很喜欢自己做些武器什么的了。'});",
        "playground.drawDialog({name:'嘉维尔',text:'没想到她现在也是一族的头目，“森蚺”，听起来不错啊！'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:2});playground.drawDialog({name:'特米米',text:'嗯，祖玛玛的森蚺部族现在也是最强盛的部族，大家都觉得她一定是下一任酋长了。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'那家伙从以前起就很能干嘛。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:2});playground.drawDialog({name:'特米米',text:'那个，嘉维尔果然不打算当大酋长吗？'});",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'是啊，我现在在外面有要做的事。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'对吧，博士？'});",
        "playground.Decision({options:[['1', '2', '3'], '嗯。', '......', '你也可以留下来。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_411_tomimi_5'});playground.drawDialog({name:'特米米',text:'这样啊......'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_285_medic2_1'});playground.drawDialog({name:'Lancet-2',text:'唔，该说嘉维尔是直接好呢，还是残忍好呢......'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_187_ccheal_1', name2:'char_411_tomimi_1', focus:1});playground.drawDialog({name:'嘉维尔',text:'嘿，有一天我会回到这里的，但不是现在。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawDialog({name:'嘉维尔',text:'不过你在信里不是说你也要竞争酋长，而且很有信心吗？'});",
        "playground.drawCharacter({name:'char_187_ccheal_3', name2:'char_411_tomimi_3', focus:2});playground.drawDialog({name:'特米米',text:'嗯，嗯！'});",
        "playground.drawDialog({name:'特米米',text:'我也做过了充足的准备了！'});",
        "playground.drawCharacter({name:'char_187_ccheal_3', name2:'char_411_tomimi_3', focus:1});playground.drawDialog({name:'嘉维尔',text:'那我就期待你的表现了！'});",
        "playground.clearDialog();playground.drawCharacter({});delay(1);voice.playSound({key:'d_gen_fightgeneral', volume:0.4});background.cameraShake({duration:0.4, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});voice.playSound({key:'d_gen_fightgeneral', volume:0.4});background.cameraShake({duration:0.4, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_187_ccheal_2'});playground.drawDialog({name:'嘉维尔',text:'嗯？好像有打斗的声音？'});",
        "playground.drawDialog({name:'嘉维尔',text:'在那边，过去看看。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_jungleentrance',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({name:'avg_npc_071', name2:'avg_npc_070', focus:1});voice.playSound({key:'d_gen_fightgeneral'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'阿达克利斯人A',text:'你说不说！'});",
        "playground.drawCharacter({name:'avg_npc_071', name2:'avg_npc_070', focus:2});playground.drawDialog({name:'阿达克利斯人B',text:'不说！'});",
        "playground.drawCharacter({name:'avg_npc_071', name2:'avg_npc_070', focus:1});playground.drawDialog({name:'阿达克利斯人A',text:'啧，还挺有骨气。'});",
        "playground.drawCharacter({name:'char_187_ccheal_1'});playground.drawDialog({name:'嘉维尔',text:'哦，在打架呢。博士，不用管了，我们继续走了，常有的事。'});",
        "playground.drawCharacter({name:'avg_npc_071', name2:'avg_npc_070', focus:1});voice.playSound({key:'d_gen_fightgeneral'});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});voice.playSound({key:'d_gen_fightgeneral'});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawDialog({name:'阿达克利斯人A',text:'你完了，细尾巴的，今天我非要让你承认是粗尾巴比较好不可！'});",
        "playground.drawCharacter({name:'avg_npc_071', name2:'avg_npc_070', focus:2});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'阿达克利斯人B',text:'你做梦！我是不可能屈服的！'});",
        "playground.drawCharacter({name:'char_187_ccheal_2'});playground.drawDialog({name:'嘉维尔',text:'嗯？'});",
        "playground.drawDialog({name:'嘉维尔',text:'喂，那边那个谁，你说什么？！'});",
        "playground.drawCharacter({name:'avg_npc_071'});playground.drawDialog({name:'阿达克利斯人A',text:'什么人，难道你也是细尾巴部族的？！'});",
        "playground.drawCharacter({name:'char_187_ccheal_2'});playground.drawDialog({name:'嘉维尔',text:'虽然我不是，但是你是不是觉得粗尾巴比较好？'});",
        "playground.drawCharacter({name:'avg_npc_071'});playground.drawDialog({name:'阿达克利斯人A',text:'啊？那当然！你瞧瞧我的尾巴，强壮、有力、饱满，还有什么比这样一条粗尾巴更好的！'});",
        "playground.drawCharacter({name:'char_187_ccheal_2'});playground.drawDialog({name:'嘉维尔',text:'啧，这我可不能当做没听到了！'});",
        "playground.drawDialog({name:'嘉维尔',text:'看看我的细尾巴，苗条、精致、线条分明，还能提东西！这才叫尾巴！'});",
        "playground.drawCharacter({name:'avg_npc_070'});playground.drawDialog({name:'阿达克利斯人B',text:'没错，细尾巴才是最好的！咳、咳！'});",
        "playground.drawCharacter({name:'avg_npc_071', name2:'avg_npc_070', focus:1});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'阿达克利斯人A',text:'哈？你这种尾巴，藏在屁股后面根本就看不见好吧！'});",
        "playground.drawCharacter({name:'char_187_ccheal_4'});playground.drawDialog({name:'嘉维尔',text:'你这种尾巴才是，长这么粗坐都坐不好吧！'});",
        "playground.clearDialog();playground.drawCharacter({});playground.Decision({options:[['1'], '他们在吵什么？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_411_tomimi_1'});playground.drawDialog({name:'特米米',text:'啊，嘉维尔在和那个人争论尾巴的粗细呢。'});",
        "playground.drawDialog({name:'特米米',text:'这在我们这里很常见哦，尾巴是一个阿达克利斯人最自豪的部分，大家经常互相比较，也有因为尾巴粗细而聚集起来的部族。'});",
        "playground.drawDialog({name:'特米米',text:'和嘉维尔争吵的那个人应该就是粗尾巴部族的吧。'});",
        "playground.drawCharacter({name:'avg_npc_071'});playground.drawDialog({name:'阿达克利斯人A',text:'*脏话*，弟兄们，都出来！'});",
        "playground.drawDialog({name:'阿达克利斯人A',text:'今天我非要让你们知道粗尾巴的好才行！'});",
        "playground.drawCharacter({name:'char_411_tomimi_2'});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'特米米',text:'啊，他们人好多，博士，我先去帮嘉维尔了。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.clearDialog();playground.drawCharacter({});playground.drawImage({});"
    ]
];