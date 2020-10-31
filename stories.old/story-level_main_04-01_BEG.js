var story = [
    [
        "bg_ri_1",
        "char_003_kalts_1",
        "char_002_amiya_1",
        "char_002_amiya_2",
        "char_003_kalts_2",
        "bg_rhodesroom",
        "char_002_amiya_10",
        "char_002_amiya_4",
        "char_002_amiya_3",
        "char_002_amiya_5",
        "char_003_kalts_3"
    ],
    [
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro",
        "d_gen_walk_n",
        "m_sys_tech_loop",
        "m_sys_tech_intro"
    ],
    [
        "voice.stopMusic({});playground.drawDialog({name:'',text:'8:36 p.m. \\ 雨 \\ 能见度 12公里'});",
        "playground.drawDialog({name:'',text:'罗德岛'});",
        "playground.clearDialog();delay(1);voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.8, crossfade:1.5, delay:0.5});background.showImage({screenadapt:'coverall', image:'bg_ri_1', width:1, height:1, fadetime:2, block:true});delay(0.5);playground.drawCharacter({name:'char_003_kalts_1',fadetime:0.2,block:true});playground.drawDialog({name:'凯尔希',text:'你们回来了。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_1', focus:2});playground.drawDialog({name:'阿米娅',text:'......嗯。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_1', focus:1});playground.drawDialog({name:'凯尔希',text:'——'});",
        "playground.drawDialog({name:'凯尔希',text:'详细情况我从侦查小队那里了解过了。'});",
        "playground.drawDialog({name:'凯尔希',text:'阿米娅，让我检查一下你的手。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_1', focus:2});playground.drawDialog({name:'阿米娅',text:'不用了，凯尔希医生.....'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_1', focus:1});playground.drawDialog({name:'凯尔希',text:'阿米娅。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_1', focus:2});playground.drawDialog({name:'阿米娅',text:'我，我......'});",
        "playground.drawDialog({name:'阿米娅',text:'......好吧。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({});blocker.blocker({a:0, fadetime:0.6, block:false});playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_1', focus:1});playground.drawDialog({name:'凯尔希',text:'——'});",
        "playground.drawDialog({name:'凯尔希',text:'还好。戒指没有裂纹，也没有变色。'});",
        "playground.drawDialog({name:'凯尔希',text:'下次就不一定了。'});",
        "playground.drawDialog({name:'凯尔希',text:'听着，阿米娅——'});",
        "playground.drawDialog({name:'凯尔希',text:'小心一点。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_2', focus:2});playground.drawDialog({name:'阿米娅',text:'凯尔希医生，我......'});",
        "playground.drawDialog({name:'阿米娅',text:'......我想休息一下。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_2', focus:1});playground.drawDialog({name:'凯尔希',text:'去吧。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'嗯......'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:0.6});delay(0.6);playground.drawCharacter({name:'char_003_kalts_2'});playground.drawDialog({name:'凯尔希',text:'——'});",
        "playground.drawDialog({name:'凯尔希',text:'不要再让阿米娅置身这种危险之下了。'});",
        "playground.drawDialog({name:'凯尔希',text:'你也有责任。'});",
        "playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'你刚回罗德岛的时候，大概也是这种气氛，'});",
        "playground.drawDialog({name:'凯尔希',text:'这种情绪从来没有离开过阿米娅。'});",
        "playground.drawDialog({name:'凯尔希',text:'这不行。'});",
        "playground.drawDialog({name:'凯尔希',text:`......Dr.${nickname}，你去陪陪她。`});",
        "playground.drawDialog({name:'凯尔希',text:'别搞砸了。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({fadetime:0});background.showImage({fadetime:0});voice.playSound({key:'d_gen_walk_n'});delay(0.6);playground.Decision({options:[['（敲门）']]});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'阿米娅',text:'门开着。'});",
        "blocker.blocker({a:0, fadetime:0.6, block:true});background.showImage({screenadapt:'coverall', image:'bg_rhodesroom', width:1, height:1, fadetime:2, block:true});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:`${nickname}博士......？`});",
        "playground.drawDialog({name:'阿米娅',text:'心事？我吗？'});",
        "playground.drawCharacter({name:'char_002_amiya_10'});playground.drawDialog({name:'阿米娅',text:'......被你发现了呀......哈哈......'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'我以为我一直藏得很好呢。'});",
        "playground.drawDialog({name:'阿米娅',text:'是的，我是有一点心事......就一点点。'});",
        "playground.drawDialog({name:'阿米娅',text:'我已经习惯了这么做了。'});",
        "playground.drawDialog({name:'阿米娅',text:'毕竟不能增加大家的负担呢。'});",
        "playground.drawDialog({name:'阿米娅',text:'是吧，博士？'});",
        "playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......我不明白。'});",
        "playground.drawDialog({name:'阿米娅',text:'博士......我不明白。'});",
        "playground.drawCharacter({name:'char_002_amiya_1', focus:-1});playground.Decision({options:[['（沉默）']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'不，我......我知道我们在做什么。我也知道，牺牲是不可避免的。'});",
        "playground.drawDialog({name:'阿米娅',text:'可我......我不知道......'});",
        "playground.drawDialog({name:'阿米娅',text:'为什么我只能看着一个个可以被拯救的人......在我眼前消逝呢？'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'明明触手可及......也许有时候就差一点点......'});",
        "playground.drawDialog({name:'阿米娅',text:'我知道我身上的责任......我会继续走下去......'});",
        "playground.drawDialog({name:'阿米娅',text:'但现在......我真的好累。'});",
        "playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({name:'char_002_amiya_4', focus:-1});playground.Decision({options:[['......', '阿米娅......']]});",
        "predicate = ['1', '2'];",
        "blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1.5, block:true});playground.drawCharacter({fadetime:0});playground.drawDialog({name:'阿米娅',text:`让我一个人静一静吧，${nickname}博士。`});",
        "playground.drawDialog({name:'阿米娅',text:'谢谢你。'});",
        "playground.clearDialog();delay(1);blocker.blocker({a:1, r:1, g:1, b:1, fadetime:2, block:true});delay(0.8);blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1.5, block:true});background.showImage({screenadapt:'coverall', image:'bg_ri_1', width:1, height:1, fadetime:0, block:true});voice.playMusic({intro:'m_sys_tech_intro', key:'m_sys_tech_loop', volume:0.6, crossfade:1, delay:0.5});blocker.blocker({a:0,fadetime:1.5, block:true});delay(0.5);playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:`早呀${nickname}博士。`});",
        "playground.drawDialog({name:'阿米娅',text:'咦，凯尔希医生也在吗？'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_1', focus:1});playground.drawDialog({name:'凯尔希',text:'阿米娅。'});",
        "playground.drawDialog({name:'凯尔希',text:'我这里有一件比较紧急的任务，我需要调用一些人手。'});",
        "playground.drawDialog({name:'凯尔希',text:'在龙门城外，发现了一块已经被废弃的城区。'});",
        "playground.drawDialog({name:'凯尔希',text:'我推测是在切尔诺伯格事件中侥幸逃出的城区之一。'});",
        "playground.drawDialog({name:'凯尔希',text:'有必要探索这座城区，发掘更多的有关信息，以及搜救幸存者。'});",
        "playground.drawDialog({name:'凯尔希',text:'如果是更加严重的情况，譬如，城区中窝藏着整合运动之类，则对我们之后的安排，同样会有更大的影响。'});",
        "playground.drawDialog({name:'凯尔希',text:'具体安排的计划书在这里，拿上吧，有时间就看一下。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_1', focus:2});playground.drawDialog({name:'阿米娅',text:'了解。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_1', focus:1});playground.drawDialog({name:'凯尔希',text:'哦，还有。'});",
        "playground.drawDialog({name:'凯尔希',text:'芙兰卡向我提交了报告，提到了她们需要回黑钢复命的事情。'});",
        "playground.drawDialog({name:'凯尔希',text:'关于龙门贫民区的情况，企鹅物流认为应该与你在贫民区内进行意见交换。'});",
        "playground.drawDialog({name:'凯尔希',text:'一些细枝末节的事情，你最好去现场看看。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_2', focus:2});playground.drawDialog({name:'阿米娅',text:'我知道了，我现在就去。'});",
        "playground.drawDialog({name:'阿米娅',text:'博士也一起——'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_2', focus:1});playground.drawDialog({name:'凯尔希',text:`我和Dr.${nickname}还有些事情要谈。`});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_1', focus:2});playground.drawDialog({name:'阿米娅',text:'——'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_2', focus:2});playground.drawDialog({name:'阿米娅',text:'我可以旁听吗？'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_2', focus:1});playground.drawDialog({name:'凯尔希',text:'不行。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_3', focus:2});playground.drawDialog({name:'阿米娅',text:'我可以捂上耳朵——'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_3', focus:1});playground.drawDialog({name:'凯尔希',text:'不行，去吧。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_5', focus:2});playground.drawDialog({name:'阿米娅',text:'呜......'});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_4', focus:2});playground.drawDialog({name:'阿米娅',text:`凯尔希医生可不许欺负${nickname}博士哦。`});",
        "playground.drawCharacter({name:'char_003_kalts_1', name2:'char_002_amiya_4', focus:1});playground.drawDialog({name:'凯尔希',text:'知道。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.3, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawCharacter({name:'char_003_kalts_3'});playground.drawDialog({name:'凯尔希',text:'......你。'});",
        "playground.drawDialog({name:'凯尔希',text:'这么简单的事情都做不到。'});",
        "playground.drawCharacter({name:'char_003_kalts_2'});playground.drawDialog({name:'凯尔希',text:'算了，我已经料到会是这种结果。'});",
        "playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'阿米娅是一个很坚强的孩子。'});",
        "playground.drawDialog({name:'凯尔希',text:'但是，过于坚强的外壳，总有一天会被过大的压力碾成粉尘。'});",
        "playground.drawDialog({name:'凯尔希',text:'不要让这种事情发生。'});",
        "playground.drawDialog({name:'凯尔希',text:'如果有下次，希望你能稍微发挥点作用。'});",
        "playground.drawDialog({name:'凯尔希',text:'——？'});",
        "playground.drawDialog({name:'凯尔希',text:'怎么了，那个表情。'});",
        "playground.drawCharacter({name:'char_003_kalts_1', focus:-1});playground.Decision({options:[['请问，阿米娅的戒指是？', '......']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_003_kalts_2'});playground.drawDialog({name:'凯尔希',text:'这与她的身体状况有关。'});",
        "playground.drawDialog({name:'凯尔希',text:'如果阿米娅参与了激烈的战斗——'});",
        "playground.drawDialog({name:'凯尔希',text:'——战后，你必须立刻检查她的戒指。'});",
        "playground.drawDialog({name:'凯尔希',text:'无论戒指产生了什么变化，都必须向我报告。'});",
        "blocker.blocker({fadetime:1.2, block:true});playground.drawCharacter({name:'char_003_kalts_1'});playground.drawDialog({name:'凯尔希',text:'其他的，现在你还不适合知道。'});",
        "playground.drawDialog({name:'凯尔希',text:'哦对了，两天后你还需要去检测中心做一次身体检查。别忘了。'});",
        "playground.clearDialog();playground.drawDialog({name:'凯尔希',text:'——去吧。雷蛇在外面等着护送你。'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];