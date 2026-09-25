var e={name:`心灵空间`,desc:`把欲望、需求和情绪都画进自己的大脑`,rules:`目标:12 轮后按目标卡、脑区、五色轨和空格罚分结算,总分最高者获胜。
流程(每轮):
· 掷 5 颗彩色骰:点数 1~5 对应卡列里的 5 张形状卡,掷 6 的颜色本轮只能画 2×1。
· 所有人同时挑一个形状,用对应颜色画进自己的大脑。
· 第一块随便放;之后每块必须挨着已有笔画,且不能挨着同色。
· 形状可旋转镜像,不能盖住灰质;任何时候都可以改用万能的 2×1。
金钱:
· 画绿色形状和填满脑区能挣钱。
· 1¢ 填黑格;2¢ 改颜色;3¢ 多画一个形状。
计分:目标卡、填满的脑区、五色轨、空格罚分,细则见游戏内计分项。`,roundShort:`{{n}}/{{total}}`,drawPrompt:`选形状,画进大脑`,waitingSubmit:`已提交,等其他人 {{n}}/{{total}}…`,submit:`提交`,clearStaging:`清空重摆`,rotate:`旋转`,mirror:`镜像`,domino:`2×1`,buyBlack:`黑格 1¢`,buyRecolor:`改色 2¢`,buyExtra:`额外 3¢`,moneyAria:`现有 {{n}} 分钱`,goalDone:`达成「{{name}}」+{{n}} 分`,viewBoardAria:`查看 {{name}} 的大脑`,colorGreen:`绿`,colorOrange:`橙`,colorPurple:`紫`,colorBlue:`蓝`,colorPink:`粉`,colorBlack:`黑`,scoreSections:`脑区填满`,scoreGoals:`目标卡`,scorePurple:`紫·贴橙`,scoreOrange:`橙·形状轨`,scorePink:`粉·同形配对`,scoreBlue:`蓝·缺区`,scoreEmpty:`空格最多区`,scoreTotal:`总分`,goal:{sympathy:{name:`同情`,desc:`填满 1×2 灰质周围一圈的 10 格`},perfectDay:{name:`完美的一天`,desc:`在同一个脑区内画齐 5 种颜色`},overachiever:{name:`卷王`,desc:`填满任意一整行或一整列`},serenity:{name:`心如止水`,desc:`不用绿色,填满任意两个脑区`},soulmate:{name:`灵魂伴侣`,desc:`每个脑区都至少有 1 格粉色`},adventure:{name:`大冒险`,desc:`填满左侧与右侧两个脑区`},lifeOfPeace:{name:`平静一生`,desc:`填满右上与左下两个脑区`},empathy:{name:`感同身受`,desc:`填满 2×2 灰质周围一圈的 12 格`}},errNotNow:`现在不能操作`,errAlready:`本轮已经提交过了`,errNoBase:`先画基础形状,才能买额外形状`,errBadShape:`这组格和形状对不上`,errNoDie:`这张卡这轮没有骰子`,errBadColor:`这个颜色对不上骰子`,errColorUsed:`这个颜色本轮已经用过了`,errBadExtra:`额外形状必须取自卡列`,errBadPlace:`放不下:要挨着已有笔画、不挨同色、避开灰质`,errNoMoney:`钱不够了`,hintSlot:`第 {{n}} 张卡的形状`,hintPlace:`画{{slot}}({{color}})`,hintPlaceRecolor:`画{{slot}}(改色成{{color}},2¢)`,hintBlack:`买 {{n}} 个黑格填缝`,hintSkip:`无处可画,空过本轮`};export{e as t};