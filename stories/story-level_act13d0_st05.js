var story = [
    [
        "bg_corridor",
        "char_365_aprl_1",
        "char_365_aprl_2",
        "avg_npc_002",
        "char_212_ansel_1",
        "char_365_aprl_5",
        "char_365_aprl_6",
        "char_365_aprl_3",
        "bg_canteen",
        "char_365_aprl_4"
    ],
    [
        "m_dia_path_loop",
        "m_dia_path_intro",
        "d_gen_walk_n",
        "m_avg_warm_loop",
        "m_avg_warm_intro",
        "d_gen_rungeneral"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();delay(1);blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_corridor',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_dia_path_intro', key:'m_dia_path_loop', volume:0.4});playground.drawCharacter({name:'char_365_aprl_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'四月',text:'呼，今天的任务出了一身汗。'});",
        "playground.drawDialog({name:'四月',text:'赶紧回宿舍洗个澡吧。'});",
        "playground.drawCharacter({name:'char_365_aprl_2'});playground.drawDialog({name:'四月',text:'咦，那边的是......'});",
        "playground.drawCharacter({name:'avg_npc_002'});playground.drawDialog({name:'罗德岛信使',text:'好了，信和每一份钱都确认完毕。'});",
        "playground.drawCharacter({name:'char_212_ansel_1', name2:'avg_npc_002', focus:1});playground.drawDialog({name:'安赛尔',text:'那就麻烦你了。'});",
        "playground.drawCharacter({name:'char_212_ansel_1', name2:'avg_npc_002', focus:2});playground.drawDialog({name:'罗德岛信使',text:'哈哈，放心吧，你都算是老客户了。老实说，你的家人都要认识我了。'});",
        "playground.drawDialog({name:'罗德岛信使',text:'不过你也有一段时间没有回去了吧？不考虑回去一趟吗？伯父见到我肯定又要让我催你回一趟雷姆必拓了。'});",
        "playground.drawDialog({name:'罗德岛信使',text:'虽然我也是一年都在外面跑的人没有资格说什么，不过多少信可都比不上你亲自回去。'});",
        "playground.drawCharacter({name:'char_212_ansel_1', name2:'avg_npc_002', focus:1});playground.drawDialog({name:'安赛尔',text:'......我知道，只是这边还有病人需要我。'});",
        "playground.drawDialog({name:'安赛尔',text:'等空闲下来后，我会回去的。'});",
        "playground.drawCharacter({name:'char_212_ansel_1', name2:'avg_npc_002', focus:2});playground.drawDialog({name:'罗德岛信使',text:'好吧，我想你在这方面也是能够把握住的，就不多说什么了。'});",
        "playground.drawDialog({name:'罗德岛信使',text:'好，那我再去确认一下别的信件就差不多出发了。'});",
        "playground.drawDialog({name:'罗德岛信使',text:'特产呢，还是老样子？'});",
        "playground.drawCharacter({name:'char_212_ansel_1', name2:'avg_npc_002', focus:1});playground.drawDialog({name:'安赛尔',text:'嗯，帮我带一盒我家楼下小店里卖的薄荷糖吧。'});",
        "playground.drawCharacter({name:'char_212_ansel_1', name2:'avg_npc_002', focus:2});playground.drawDialog({name:'罗德岛信使',text:'好好。'});",
        "voice.playSound({key:'d_gen_walk_n', volume:0.6});playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_corridor',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_212_ansel_1'});playground.drawDialog({name:'安赛尔',text:'大伯，对不起......'});",
        "playground.drawCharacter({name:'char_365_aprl_5'});playground.drawDialog({name:'四月',text:'......'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_corridor',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_365_aprl_1'});playground.drawDialog({name:'四月',text:'原来罗德岛上也有信使。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'你是......'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'我是新加入的干员，代号是四月，叫我四月就好。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'你好，四月，我是医疗部的安赛尔。'});",
        "playground.drawDialog({name:'安赛尔',text:'罗德岛上有不少信使哦，而且像刚才那位那样的信使并不是我们的干员，他们是专为罗德岛上的人服务的信使。'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'有什么区别吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'有的，虽然选择成为我们干员的人之中也有信使存在，啊你认识安洁莉娜小姐吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'认识，那个和我差不多大的信使女孩子吧？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'嗯，首先，会加入罗德岛的信使通常是因为感染得病，选择用成为干员的方式抵消医疗费用，安洁莉娜小姐就是这样的例子。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'啊，那我也是。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'嗯，毕竟针对矿石病的医疗费用不管怎么说都不能算低，舰内有不少各行各业的人也都是因为类似的理由留在这里的。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'那不就和成为这里的信使差不多了吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'啊哈哈，这方面果然容易被误解，其实不是的。'});",
        "playground.drawDialog({name:'安赛尔',text:'信使这个职业，因为与人直接接触比较少，而且本身就需要到处跑，因此即使成为感染者也是可以继续的。'});",
        "playground.drawDialog({name:'安赛尔',text:'或者说，大部分人根本不知道给自己送信寄信的是不是感染者......'});",
        "playground.drawDialog({name:'安赛尔',text:'总之，他们是可以继续在自己原本的活动范围内工作的，只要定期来到罗德岛接受治疗就好了。'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'咦，但是这样不就等于在做自己的事吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'当然，我们对这样的信使干员通常也会发出一些类似长期外勤的任务。'});",
        "playground.drawDialog({name:'安赛尔',text:'而且他们通常也会把罗德岛当成自己的一个驿站，如果自己活动的范围内有我们的干员的亲属或者朋友，那肯定是可以拜托他们寄信的。'});",
        "playground.drawDialog({name:'安赛尔',text:'但是像我这样，需要定期向家里寄信的人，就很难期待他们。'});",
        "playground.drawDialog({name:'安赛尔',text:'虽然实际上罗德岛上目前来自雷姆必拓的信使也很少就是了。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'这样啊，不过还是感觉没什么约束力......要是在我过去呆的公司，这种事情完全是无法想象的。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'哪种事情？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'就是员工拥有自己的自由啊，我觉得肯定会有那种只来了一次就再也没来过的人吧？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'你还真敏锐，这种情况确实偶尔会发生，我们当然也会追责，但不管怎么说，不能放着病人不管。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'安赛尔医生你真是好人。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'过奖了，我只是想着能帮一个是一个而已。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'不过这么说的话，确实罗德岛专属的信使是有必要的。'});",
        "playground.drawDialog({name:'四月',text:'我都没有想过这样的事。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'咦，四月，你也是雷姆必拓出身吧？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'嗯，南边的钢铁萝卜城。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'啊，我有听说过，你们城市每年的矿石产量都名列前茅。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'是啊，这是我们城的骄傲，虽然我没什么感觉就是了。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'我是铁腕城出身的。你在家乡没有什么要联络的亲人吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'没有哦。'});",
        "playground.drawDialog({name:'四月',text:'我的父母在我小的时候就因为矿难去世了，我是被他们供职的公司抚养大的。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'在成年后我就成为了这家公司的猎人，虽然工资也不算高，不过也还算过得去，直到我感染了矿石病......'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'......对不起。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'没事啦。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'不过我记得雷姆必拓的公司对感染者的待遇并不差吧？'});",
        "playground.drawDialog({name:'安赛尔',text:'因为雷姆必拓的矿业很发达，这里的人比起其他国家的人本来接触矿石病的几率就要高不少......'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'我一开始也是这么想的，但是实际体验下来我才知道我错了。'});",
        "playground.drawDialog({name:'四月',text:'他们表面上说得有各种福利，但其实暗中各种克扣，而且在知道你得了矿石病后，工作机会也会越来越少。'});",
        "playground.drawDialog({name:'四月',text:'像我这样一个人生活的矿石病患者，在那里是活不下去的。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'竟然是这样......我都不知道。'});",
        "playground.drawDialog({name:'安赛尔',text:'难怪以前那些得了矿石病的工友有很多都不知道去哪里了......'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'反正，公司身份也注销了，租的房子也退了，雷姆必拓已经没有我的容身之所啦。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'哎呀，医生你别露出这副表情，我很讨厌被人觉得可怜的。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'而且我这不是来到罗德岛了嘛。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'说的也是。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'比起这个，我刚才看到你寄信时表情有点难过，是发生了什么事吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:1});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'四月',text:'啊，要是是什么秘密就不用告诉我了，我也不会跟别人说这件事的！'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'......'});",
        "playground.drawDialog({name:'安赛尔',text:'四月，你吃过午饭了吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'还没有，我刚任务回来，打算洗个澡再去的。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'那我请你吃午饭吧，这个话题说起来会有些长。'});",
        "playground.drawCharacter({name:'char_365_aprl_3', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'嗯？好呀。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_canteen',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'哇，医生你吃得好健康啊。'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'职业习惯而已，还有叫我安赛尔就好了，我们的年龄应该没有差很多。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'好~'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'先吃饭吧，吃完可以慢慢说。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'嗯。'});",
        "voice.stopMusic({fadetime:1});playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_canteen',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_avg_warm_intro', key:'m_avg_warm_loop', volume:0.4});playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'......虽然我嘴上总是说着见不到家人很遗憾，其实我是有些不想回去的。'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'为什么？'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'回去会变得很麻烦。'});",
        "playground.drawDialog({name:'安赛尔',text:'我家有三个哥哥和一个妹妹，但我们的父母也走得很早，妈妈是肺病，爸爸是劳累过度。'});",
        "playground.drawDialog({name:'安赛尔',text:'不过和你不同的是，他们走的时候，我的三个哥哥都已经可以出去工作了。'});",
        "playground.drawDialog({name:'安赛尔',text:'只有我还是孩子，所以爸爸在去世时将我过继给了大伯，而把妹妹交给了叔叔。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'啊，确实这样的事也不少见，我家要是有亲戚的话，应该也会是这样吧。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'我记得我爸爸说过，我家的亲戚都去别的城市了。'});",
        "playground.drawDialog({name:'四月',text:'所以你不想回去是因为大伯对你不好吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'不是。伯父是一家小公司的经理，为人比较正经严肃，但是对我很好，他是真的把我当做自己的儿子看待的。'});",
        "playground.drawDialog({name:'安赛尔',text:'只是......'});",
        "playground.drawDialog({name:'安赛尔',text:'他并不希望我成为医生。'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'啊。'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'我从小就在大伯的公司帮忙，大伯原本是希望我以后能够接替他的位置的。'});",
        "playground.drawDialog({name:'安赛尔',text:'但我却不顾他的反对选择了成为医生，并且来到了罗德岛这么遥远的地方。'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:1});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'四月',text:'啊？难道安赛尔你是离家出走的？！'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'啊哈哈，不是不是，还没有到那个地步。'});",
        "playground.drawDialog({name:'安赛尔',text:'从我选择学医到来到罗德岛之间，还是有一段时间的。'});",
        "playground.drawDialog({name:'安赛尔',text:'在那段时间里，我和大伯聊了许多次，也争吵过。'});",
        "playground.drawDialog({name:'安赛尔',text:'大伯最后还是同意了我的选择。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'也不是不能理解诶，毕竟在雷姆必拓当医生感觉很难生存的样子。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'嗯，一方面是起步很难。另一方面，想要精进也很难。'});",
        "playground.drawDialog({name:'安赛尔',text:'很多矿区配备的医生往往只具有最基础的医术。'});",
        "playground.drawDialog({name:'安赛尔',text:'生活肯定是没有在大伯的公司工作稳定，而且也很难找到工作。'});",
        "playground.drawDialog({name:'安赛尔',text:'其实我也想过很多次听从大伯的安排，老实说，大伯的公司并不差。'});",
        "playground.drawDialog({name:'安赛尔',text:'而且，大伯为了我的生活付出了许多，我不应该辜负他的期待。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'说是这么说啦，但人有想做的事很正常啊。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'你大伯算是很好嘞，我爸爸妈妈要是还在，遇到这种事大概是不会同意的。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'嗯，总之我最后还是坚持了自己的选择。'});",
        "playground.drawDialog({name:'安赛尔',text:'但大伯是个藏不住心事的人，他在公司待了半辈子，他始终还是希望我能够回去继承他的事业。'});",
        "playground.drawDialog({name:'安赛尔',text:'我过去两次回去的时候，总是会有些难受。'});",
        "playground.drawDialog({name:'安赛尔',text:'而且我的哥哥们其实更加反对这件事，只是我有给他们寄钱所以他们不会说些什么而已。'});",
        "playground.drawDialog({name:'安赛尔',text:'反倒是我的妹妹还算是比较支持我。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'对我来说是比较遥远的事情诶。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'只能说，各有各的烦恼吧。'});",
        "playground.drawDialog({name:'安赛尔',text:'我相信自己在做很好的事情，罗德岛的待遇也很好。'});",
        "playground.drawDialog({name:'安赛尔',text:'但这种事就......没有办法。'});",
        "playground.drawDialog({name:'安赛尔',text:'无论如何，我都没有办法解决大伯心中的遗憾。'});",
        "playground.drawDialog({name:'安赛尔',text:'我只能在自己的事业上更加努力，做到更好。'});",
        "playground.drawDialog({name:'安赛尔',text:'直到有一天我能够挺起胸膛说，“大伯你看，我救了很多人，我为解决矿石病做出了很多贡献。”'});",
        "playground.drawDialog({name:'安赛尔',text:'......虽然大概到那时，我也只是能够有底气面对大伯而已了吧。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'没想到安赛尔你看起来柔柔弱弱的，其实也想了不少诶。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'我都不知道你这么说是在夸我还是在损我了。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'当然是夸你啦。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'哈哈，好吧。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'所以说，安赛尔你其实还是想回去的吧？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'......是啊。'});",
        "playground.drawDialog({name:'安赛尔',text:'虽然跟着罗德岛去各种地方开阔视野很好，但是不管怎么说，那里始终是我的家乡。'});",
        "playground.drawDialog({name:'安赛尔',text:'我还是会怀念巨大的烟囱，嘈杂的机器运转声，矿工们的喊号子声，吵闹的街道......'});",
        "playground.drawDialog({name:'安赛尔',text:'说不定未来有一天，我也会离开罗德岛，回到我的家乡，在那里做一名医生。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'这样啊......'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'怎么了？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'没什么，我只是在想，虽然嘴上说着我一点也不牵挂雷姆必拓了，我会不会其实也是想回去的呢。'});",
        "playground.drawDialog({name:'四月',text:'安赛尔，你知道我代号的来历吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'不是月份吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'是，也不是。这其实是一首歌的名字，一首有关春天的歌的名字。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'我一直觉得我是不喜欢雷姆必拓的，你提到的这些，我都不喜欢。'});",
        "playground.drawDialog({name:'四月',text:'在我的记忆里，家乡总是灰蒙蒙，黑压压的，压得我有些喘不过气来。'});",
        "playground.drawDialog({name:'四月',text:'在没有感染矿石病的时候，生活也不是很轻松。'});",
        "playground.drawDialog({name:'四月',text:'每天都要去公司报道，有任务就会跟着队伍一起走。'});",
        "playground.drawDialog({name:'四月',text:'虽然有钱赚，但是外面的条件很差，而且经常一出去就是十几天，有时候甚至一两个月也不奇怪。'});",
        "playground.drawDialog({name:'四月',text:'而没有任务时，我也没有什么特别想做的事。'});",
        "playground.drawDialog({name:'四月',text:'喜欢的乐队都是其他国家的，想要的化妆品只能在杂志上看看。'});",
        "playground.drawDialog({name:'四月',text:'而且工厂多导致空气不好，于是我总是要在护肤品上花更多的精力。'});",
        "playground.drawDialog({name:'四月',text:'还有工厂和街上声音太大，我半夜经常会被吵醒。'});",
        "playground.drawCharacter({name:'char_365_aprl_4', name2:'char_212_ansel_1', focus:1});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'四月',text:'你敢信吗，公寓的设施也比较差，有时候洗澡洗一半居然能够突然没水！'});",
        "playground.drawCharacter({name:'char_365_aprl_4', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'呃，那确实是不太好的回忆......'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'不过，当我真的去回想的时候，也会想起一些好事。'});",
        "playground.drawDialog({name:'四月',text:'公司虽然黑心，不过也照顾了我许多年，我不知道上层究竟是怎么想的，但我记得我去找公司的人问这件事时他们脸上不忍的表情。'});",
        "playground.drawDialog({name:'四月',text:'邻居虽然，不过也帮过我的忙。楼上那个平时总是对别人很凶的佩罗爷爷，在知道我得了矿石病后偶尔会给我送点菜。'});",
        "playground.drawDialog({name:'四月',text:'啊，不过楼下的罗罗阿婆真的很讨人厌，见到我就要冲我吐口水。'});",
        "playground.drawDialog({name:'四月',text:'楼下的超市里轮替的食物也都挺好吃的，啊，这么说起来，那里的丸子我好像没在别的地方看到卖过，那个很好吃诶。'});",
        "playground.drawCharacter({name:'char_365_aprl_3', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'当然啦，小时候和爸爸妈妈一起的生活也很快乐。'});",
        "playground.drawDialog({name:'四月',text:'我懂了，这就是所谓的回忆滤镜吧！'});",
        "playground.drawCharacter({name:'char_365_aprl_3', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'哈哈哈，或许吧。'});",
        "playground.drawDialog({name:'安赛尔',text:'但是无论如何，我想，我们终究都是无法抛弃自己的出身的。'});",
        "playground.drawDialog({name:'安赛尔',text:'我来到罗德岛后，了解到了这片大地的广阔，知道了还有许许多多更加精彩的生活方式。'});",
        "playground.drawDialog({name:'安赛尔',text:'我也想过尝试一下别的生活，比如成为近卫干员或者术师干员，或者去做文职工作，我都想过。'});",
        "playground.drawDialog({name:'安赛尔',text:'而且我应该是可以选择新的生活的，没有人会阻止我。'});",
        "playground.drawDialog({name:'安赛尔',text:'但最终我还是继续在做医生。'});",
        "playground.drawDialog({name:'安赛尔',text:'因为我出生在雷姆必拓，我成长在工人们之间，除非我某天忽然失忆，否则我想我是无法完全否定自己的过去的。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'说到失忆，我好像听说博士也是失忆了？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'啊，嗯，这并不是秘密。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'那按照安赛尔你的说法，你觉得博士能够选择新的生活吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'......我觉得很难吧。'});",
        "playground.drawDialog({name:'安赛尔',text:'我不了解博士的过去，但阿米娅和凯尔希医生都知道他，很多人都知道他。'});",
        "playground.drawDialog({name:'安赛尔',text:'我想，博士也会有许多身不由己的时候吧。'});",
        "playground.drawDialog({name:'安赛尔',text:'所以或许是这样，即使是失忆了，我们依然很难摆脱自己的过去。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'唔，感觉话题有些变掉了 ，从家乡变成了过去。'});",
        "playground.drawDialog({name:'四月',text:'不过也是，家乡本来就是一个人的过去里最重要的一部分。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'是的，我想，重要的并不是家乡本身，而是在家乡度过的时间在我们身上留下了怎样的痕迹。'});",
        "playground.drawDialog({name:'安赛尔',text:'虽然我可以抛弃这种痕迹，但我还是选择了接纳。'});",
        "playground.drawDialog({name:'安赛尔',text:'那么，你呢？'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'我啊......'});",
        "playground.drawDialog({name:'四月',text:'嗯......'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'不知道，我还没想好。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'没关系，我们还年轻，还有很多时间去想这个问题。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'但我想，我至少不是为了逃离那种生活才选择离开雷姆必拓的。'});",
        "playground.drawDialog({name:'四月',text:'如果还能在那里生活，我应该还是会继续生活下去的，我只是不得不离开。'});",
        "playground.drawDialog({name:'四月',text:'成为感染者这件事确实让我吃了许多苦头，但我没有办法就这么去讨厌别人，去说我憎恨雷姆必拓。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'很正常的，一个人就算变成了感染者，他的想法也不是立刻就会变化的。'});",
        "playground.drawDialog({name:'安赛尔',text:'有关这一点，你在罗德岛生活更长一段时间后应该能有更深的体会，至少现在，我们只需要聊有关家乡和过去的话题就好。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'嗯，总之，我想，我应该其实也是属于接纳的类型吧。'});",
        "playground.drawDialog({name:'四月',text:'我还是不会说我喜欢雷姆必拓，说我喜欢钢铁萝卜城。'});",
        "playground.drawCharacter({name:'char_365_aprl_5', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'但我想永远不会忘记，每当我烦恼的时候，我就会去公寓的天台。'});",
        "playground.drawDialog({name:'四月',text:'我住的公寓不算高，周围有更多其他高楼。'});",
        "playground.drawDialog({name:'四月',text:'我有时候会觉得周围的高楼就像栅栏，它们困住了我，而我头顶的那一块天空，就是我唯一能看到的风景。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'但这反而会给我一种安心感，因为我不需要很大的空间，我也不想要很多的选择，这种狭小的感觉对我来说反而正好。'});",
        "playground.drawDialog({name:'四月',text:'我会在那里转一圈，看一看住在周围的人们都在干什么，有时候会看到很有趣的事，有时候没有，都没关系。'});",
        "playground.drawDialog({name:'四月',text:'然后，我会躺在天台的正中央，戴上耳机，播放我最喜欢的《四月》，想着那些有的没的的事，美美地睡一会儿。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'等我睡醒的时候，大部分的烦恼也就烟消云散啦。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'听起来很舒服啊。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'是啊，我现在有时也会想找一个这样的地方睡一会儿，不过罗德岛的甲板太空旷了，找不到我想要的感觉。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'或许你可以去找一个叫克洛丝的干员，她对于寻找偷懒的地方很有经验。'});",
        "playground.drawCharacter({name:'char_365_aprl_3', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'真的吗？那太好了，我之后去问问她！'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'不过这么一说，确实变得有些想要回去了诶。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'四月',text:'都怪你。'});",
        "playground.drawCharacter({name:'char_365_aprl_6', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'哈哈，那可真是抱歉了。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'不过暂时还是算了。我还是新人，刚加入就请假可不好。'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'四月',text:'啊，我想到了！'});",
        "playground.drawDialog({name:'四月',text:'安赛尔，你拜托寄信的那个信使走了吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_2', name2:'char_212_ansel_1', focus:2});playground.drawDialog({name:'安赛尔',text:'应该还没有，他会待到明天。'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'char_212_ansel_1', focus:1});playground.drawDialog({name:'四月',text:'好，那我去找他！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_corridor',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playSound({key:'d_gen_rungeneral', volume:0.6});delay(1);playground.drawCharacter({name:'char_365_aprl_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'四月',text:'信使先生！你是要去雷姆必拓的对吧？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'avg_npc_002', focus:2});playground.drawDialog({name:'罗德岛信使',text:'对，卡特斯的小姐，你要寄信吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'avg_npc_002', focus:1});playground.drawDialog({name:'四月',text:'叫我四月就好。我不是来寄信的，不过我可以拜托你一件事吗？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'avg_npc_002', focus:2});playground.drawDialog({name:'罗德岛信使',text:'什么？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'avg_npc_002', focus:1});playground.drawDialog({name:'四月',text:'你去雷姆必拓的时候，能不能劳烦你去一座高楼的楼顶，帮我拍一下那里看到的风景？'});",
        "playground.drawCharacter({name:'char_365_aprl_1', name2:'avg_npc_002', focus:2});playground.drawDialog({name:'罗德岛信使',text:'嗯？这个请求还真是奇怪。'});",
        "playground.drawDialog({name:'罗德岛信使',text:'......不过听起来不是很麻烦，应该可以。'});",
        "playground.drawCharacter({name:'char_365_aprl_3', name2:'avg_npc_002', focus:1});playground.drawDialog({name:'四月',text:'好，那就麻烦你了！'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_365_aprl_1'});delay(1);playground.drawDialog({name:'四月',text:'家乡，过去......原来我也没有自己想的那么不在乎。'});",
        "playground.drawDialog({name:'四月',text:'唔，不过，比起这个，我还是先去找那个叫克洛丝的人好了，比起回不回去，还是能不能找到放松的好地方比较现实！'});",
        "blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.clearDialog();playground.drawCharacter({});playground.drawImage({});"
    ]
];