var story = [
    [
        "avg_11_2",
        "char_148_nearl_3",
        "char_130_doberm_ex",
        "char_148_nearl_7",
        "char_148_nearl_2",
        "char_148_nearl_4",
        "bg_cher_2",
        "char_002_amiya_1",
        "char_002_amiya_4",
        "char_002_amiya_2",
        "bg_cher_10",
        "char_011_talula_1",
        "char_1507_mephisto_2",
        "char_1505_frstar_1"
    ],
    [
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro",
        "d_gen_walk_n",
        "m_dia_escape_loop",
        "m_dia_escape_intro"
    ],
    [
        "voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.8, crossfade:1, delay:0.5});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawImage({image:'avg_11_2',x:0, y:0, xscale:1.1, yscale:1.1, fadetime:0});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.6, block:true});playground.clearDialog();delay(0.6);playground.drawDialog({name:'杜宾',text:'已经突破了整合运动的拦截！'});",
        "playground.drawDialog({name:'临光',text:'但是——他们——'});",
        "playground.drawDialog({name:'临光',text:'......我......啊......'});",
        "background.showImage({});voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.8, crossfade:1.5, delay:0.5});playground.drawCharacter({name:'char_148_nearl_3', name2:'char_130_doberm_ex', focus:2});playground.drawDialog({name:'杜宾',text:'嘘。'});",
        "playground.drawDialog({name:'杜宾',text:'......别让阿米娅她们听见。'});",
        "playground.drawCharacter({name:'char_148_nearl_7', name2:'char_130_doberm_ex', focus:1});playground.drawDialog({name:'临光',text:'阿米娅心里清楚得很！她比我们想象的成熟得多......！'});",
        "playground.drawDialog({name:'阿米娅',text:'......唔......'});",
        "playground.drawDialog({name:'阿米娅',text:'......嗯......？'});",
        "blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawImage({});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({name:'char_148_nearl_3', name2:'char_130_doberm_ex', focus:2});playground.drawDialog({name:'杜宾',text:'就算这样，也不能让她听见！'});",
        "playground.drawDialog({name:'杜宾',text:'再去加深她内心的煎熬是不明智的。她已经背负......太多东西了。'});",
        "playground.drawDialog({name:'杜宾',text:'......不要让......他们的努力白费！'});",
        "playground.drawDialog({name:'杜宾',text:'既然他们让我们活下来，我们就应该让博士和阿米娅......安全回去。'});",
        "playground.drawCharacter({name:'char_148_nearl_2', name2:'char_130_doberm_ex', focus:1});playground.drawDialog({name:'临光',text:'......'});",
        "playground.drawDialog({name:'临光',text:'是的。'});",
        "playground.drawCharacter({name:'char_148_nearl_2', name2:'char_130_doberm_ex', focus:2});playground.drawDialog({name:'杜宾',text:'还不是垂头丧气的时候。'});",
        "playground.drawDialog({name:'杜宾',text:'作为耀骑士，无论在什么时候，都该成为指引众人的光吧？'});",
        "playground.drawCharacter({name:'char_148_nearl_4', name2:'char_130_doberm_ex', focus:1});playground.drawDialog({name:'临光',text:'——'});",
        "playground.drawDialog({name:'临光',text:'——我不清楚。但，我会去做我该做的事。'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'重整队形！不要懈怠！我们就快到了！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'......'});",
        "playground.drawDialog({name:'杜宾',text:'呵......'});",
        "playground.drawDialog({name:'杜宾',text:'嘴里说着让我放心的人，真的一个都没回来过。'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawCharacter({fadetime:0});background.showImage({image:'bg_cher_2', width:1, height:1, fadetime:1, block:true});blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawDialog({name:'阿米娅',text:`${nickname}博士......？发生了......什么......`});",
        "playground.drawDialog({name:'阿米娅',text:'请，请放我......放我下来吧......'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_walk_n', volume:1});background.cameraShake({duration:2, fadeout:true, xstrength:2, ystrength:5, vibrato:10, randomness:90, block:true});playground.drawDialog({name:'阿米娅',text:'嗯，没问题我可以自己走......'});",
        "playground.drawDialog({name:'阿米娅',text:'我只是......失去意识了一会儿......没事的。'});",
        "playground.drawDialog({name:'阿米娅',text:'......我们逃出来了吗？'});",
        "playground.drawDialog({name:'阿米娅',text:'Ace他们......'});",
        "playground.Decision({options:[['1'], '......']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'是嘛。'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'没关系的。如果是Ace的话，一定没问题的。'});",
        "playground.drawDialog({name:'阿米娅',text:'罗德岛的大家，都是很强的。'});",
        "playground.drawDialog({name:'阿米娅',text:'已经，快到南方出口了。只要撤出切尔诺伯格，我们就......'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'我们......就......'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawDialog({name:'阿米娅',text:'博士......能......让我靠一下吗......'});",
        "playground.drawDialog({name:'阿米娅',text:'一下......一下就好......'});",
        "playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({fadetime:0});background.showImage({image:'bg_cher_10', width:1, height:1, fadetime:1, block:true});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_011_talula_1'});voice.playMusic({intro:'m_dia_escape_intro', key:'m_dia_escape_loop', volume:0.8, crossfade:1.5, delay:0.5});playground.drawDialog({name:'塔露拉',text:'————'});",
        "playground.drawDialog({name:'塔露拉',text:'难缠。'});",
        "playground.drawCharacter({name:'char_1507_mephisto_2'});playground.drawDialog({name:'梅菲斯特',text:'......'});",
        "playground.drawDialog({name:'梅菲斯特',text:'竟然......能，能做到这一步......这家伙......'});",
        "playground.drawDialog({name:'梅菲斯特',text:'半个街区被烧成焦炭，整个广场都陷入火海......钢铁被融化又重新凝固......'});",
        "playground.drawDialog({name:'梅菲斯特',text:'但他为什么......还能战斗？'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'？？？',text:'奋战至尸骨无存——了不起。'});",
        "background.showImage({ fadetime:4, block:false});playground.drawCharacter({name:'char_011_talula_1'});playground.drawDialog({name:'塔露拉',text:'我记住了。'});",
        "delay(0.6);playground.drawDialog({name:'塔露拉',text:'......罗德岛。'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];