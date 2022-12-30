/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "You don't like walls, never did. You might even say their your archenemies. You not sure why exactly, they haven't done anything specifically wrong, but it doesn't matter. This wall must go, even it means you have to punch it to bits by yourself.": "你不喜欢墙壁，从来没有。你甚至可以说他们是你的宿敌。你不知道确切的原因，他们没有做任何特别错误的事情，但这无关紧要。这堵墙必须拆除，即使这意味着你必须自己把它打成碎片。",
    "Airstrike Caller": "空袭来电者",
    "Airstrike Caller damage:": "空袭呼叫者伤害：",
    "Bulldozer": "推土机",
    "Bulldozer damage:": "推土机伤害：",
    "Cash": "现金",
    "Close": "关闭",
    "Clubber": "挥棍者",
    "Clubber damage:": "挥棍者伤害：",
    "Damage": "伤害",
    "Destroy Wall": "摧毁墙壁",
    "Grenademan": "榴弹兵",
    "Grenademan damage:": "手榴弹伤害：",
    "Gunshooter": "枪手",
    "Gunshooter damage:": "枪手伤害：",
    "Hand damage:": "手部伤害：",
    "Hello there, welcome to Wall Destroyer:Rewritten, this is a modern rewrite of the original Wall Destroyer by Tellurium. I hope you have fun and tell me about your experience with this game so that it may improve.": "您好，欢迎来到 墙壁破坏者：重制版，这是 Tellurium 对原始 墙壁破坏者 的现代重写。 我希望你玩得开心，并告诉我你对这个游戏的体验，以便它可以改进。",
    "Needs:": "需求：",
    "Overall damage:": "综合伤害：",
    "Punch Wall": "用拳头砸墙",
    "Puncher": "拳击手",
    "Puncher damage:": "拳击手伤害：",
    "Stats": "统计数据",
    "Swordsman": "剑士",
    "Swordsman damage:": "剑士伤害：",
    "Upgrades": "升级",
    "Welcome": "欢迎",
    "What's this Wall?": "这是什么墙？",
    "Wrecking Ball": "破碎球",
    "Wrecking Ball damage:": "破坏球伤害：",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "A man with grenades. I am a master of descriptions.": "一个手持手榴弹的人。我是一个描写大师。",
    "Awards": "奖励",
    "base damage.": "基础伤害。",
    "bricks.": "砖块。",
    "cash.": "现金。",
    "cosmic knowledge.": "宇宙知识。",
    "Destroy the wall and move on to a bigger one.": "摧毁这堵墙，换一堵更大的墙。",
    "Does": "造成",
    "Gives": "给予",
    "Heavy duty Building": "重型建筑",
    "Melee Building": "近战建筑",
    "Rams the wall. So good.": "撞墙吧。 太好了。",
    "Ranged Building": "远程建筑",
    "Shoots his gun.": "射击他的枪。",
    "Some question the use of swords on a brick wall. Those guys are lame.": "有些人质疑在砖墙上使用剑。 那些家伙很蹩脚。",
    "Something actually meant for destroying walls.": "实际上是用来摧毁墙壁的东西。",
    "Worth": "价值",
    "You know, the guy that calls airstrikes.": "你知道的，那个叫空袭的家伙。",
    "Damage the wall.": "损坏墙壁。",
    "Overnab": "覆盖",
    "Not to be confused with the other kind of clubbing.": "不要与其他类型的泡吧相混淆。",
    "A little padding.": "一点衬垫。",
    "Costs": "成本",
    "damage by hand.": "手造成的伤害。",
    "damage to the wall.": "对墙壁的伤害。",
    "Deal": "造成",
    "Game Saved": "游戏已保存",
    "Gloves": "手套",
    "Hand punches do": "拳打脚踢",
    "Helpers": "助手",
    "Hire": "雇佣",
    "Hired Help": "雇佣的帮手",
    "more damage.": "更多伤害。",
    "more damage. Punchers do": "更多伤害。拳击手造成的",
    "puncher.": "拳击手。",
    "Now that you've got your first companion you might want to do some research to improve everyones wall destroying capabilities. So you start the RUC~Realistic Upgrades Corporation, \"A good name\"- you tell yourself.": "现在您有了第一个伙伴，您可能想做一些研究来提高每个人的墙壁破坏能力。 所以你创办了 RUC~现实升级公司，“一个好名字”——你告诉自己。",
    "Punches the wall for you": "为了你击打墙壁",
    "Scrub": "擦洗",
    "You realize that this might take a while to do by yourself, maybe you should hire some people to help you? Like-minded brothers in arms who despise walls just like you. You just need to pay them a bit to quit their current job and join you.": "你意识到这可能需要一段时间才能自己完成，也许你应该雇一些人来帮助你？ 和你一样鄙视墙壁的志同道合的战友。 您只需要付给他们一点钱就可以辞掉他们目前的工作并加入您的行列。",
    "Actually significant padding.": "实际上很重要的衬垫。",
    "as much damage.": "尽可能多的伤害。",
    "Better Clubs": "更好的棍",
    "clubber.": "挥棍者。",
    "Clubbers do": "挥棍者造成的",
    "Clubstep": "棍台阶",
    "Padded Gloves": "衬垫手套",
    "Punchers and hand punches do": "拳击手和手动造成的",
    "Simply feels better to hold.": "握起来感觉更好。",
    "twice": "两次",
    "Less of a Scrub": "更少的擦洗",
    "Kind of useless in the long term of wall-slicing.": "从长远来看，切墙有点没用。",
    "Sharpening": "磨刀",
    "swordsman.": "剑士。",
    "Swordsmen do": "剑士造成的",
    "Wallslicer": "切墙者",
    "Club Party": "棍棒派对",
    "clubbers.": "挥棍者。",
    "Iron Clubs": "铁棒",
    "Wall Tapper": "墙式水龙头",
    "Wood is old school.": "木头太老套了。",
    "Bigger Swords": "更大的剑",
    "punchers.": "拳击者。",
    "Get The Fist Of It": "得到它的拳头",
    "Bigger is better!": "越大越好！",
    "A brilliant plan.": "一个绝妙的计划。",
    "Double Magazines": "双弹匣",
    "Firing Squad": "射击小队",
    "Greased Pins": "润滑销",
    "grenademan.": "榴弹兵。",
    "Grenademen do": "榴弹兵造成",
    "gunshooter.": "枪手。",
    "Gunshooters do": "枪手造成",
    "gunshooters.": "枪手。",
    "Laser Sights": "镭射瞄准器",
    "Less pesky reloading.": "减少讨厌的重装。",
    "Shooter of Guns": "枪炮射手",
    "Steel Plated Gloves": "镀钢手套",
    "The Man With the Grenade": "拿着手榴弹的人",
    "Wall Puncher": "砸墙拳击手",
    "We received complaints... These guys aren't very good.": "我们收到投诉...这些人不是很好。",
    "You wouldn't think you'd need these when your target is a brick wall, but the guys you hired are really bad at their job.": "当你的目标是一堵砖墙时，你不会认为你需要这些，但你雇用的人在他们的工作中真的很糟糕。",
    "buildings.": "建筑。",
    "Hack 'n Slash": "砍杀",
    "Have": "拥有",
    "Heavier, but actually does damage.": "更重，但实际上会造成伤害。",
    "swordsmen.": "剑士。",
    "The Menagerie": "动物园",
    "Titanium Clubs": "钛合金棍",
    "Bigger Balls": "更大的球",
    "Bigger Crates": "更大的板条箱",
    "I'm Gonna Wreck It": "我要毁了它",
    "If you know what I mean.(I don't)": "如果你知道我的意思。（我不知道）",
    "Less running to the store.": "更少地往返商店。",
    "wrecking ball.": "破碎球。",
    "Wrecking balls do": "破碎球造成",
    "A little unwieldy, but agility isn't exactly the first priority when your opponent is a brick wall.": "有点笨拙，但当你的对手是一堵砖墙时，敏捷并不是第一要务。",
    "An ancient technique passed down by the wall punching masters.": "壁拳大师传承下来的古老技法。",
    "As seen in the movies!": "正如电影中所见！",
    "Blast Battalion": "爆破营",
    "Brass Knuckles": "指节铜环",
    "bulldozer.": "推土机。",
    "Bulldozers do": "推土机做",
    "Bullet Punch": "子弹拳",
    "Club Knuckles": "指节俱乐部",
    "Fancy Hilts": "花式刀柄",
    "Get a morale boost from the fact that you're hiring people to punch a wall.": "从你雇人来打墙这一事实中获得士气提升。",
    "grenademen.": "手榴弹。",
    "I don't actually know what these are, but they sound badass.": "我实际上不知道这些是什么，但它们听起来很糟糕。",
    "Infinite Magazines": "无限弹夹",
    "Katanas": "武士刀",
    "more damage per clubber.": "每个俱乐部成员造成更多伤害。",
    "more damage per gunshooter.": "每个枪手造成的伤害更大。",
    "more damage per puncher.": "每个打孔机造成更多伤害。",
    "more damage per swordsman.": "每个剑客的伤害更高。",
    "Power Treads": "动力踏板",
    "Power Treads(TM), By the Realistic Upgrades Corporation(RUC).": "Power Treads(TM)，由 现实升级公司 (RUC) 提供。",
    "Probably made of titanium.": "应该是钛合金的。",
    "Quadruple Magazines": "四联弹夹",
    "Raises morale.": "鼓舞士气。",
    "Regular swords are lame.": "普通的剑是跛脚的。",
    "Smorgasword": "大杂烩",
    "Spiked Clubs": "尖刺棒",
    "Stronger Blades": "更强的刀片",
    "Sword Clubs": "剑术俱乐部",
    "Sword Knuckles": "指节剑",
    "Team Up": "组队",
    "That's on top of the steel plated gloves. Hell yes.": "那是在镀钢手套的上面。 当然好。",
    "The Barrage": "弹幕",
    "The Clubhouse": "会所",
    "The Doze Knows": "打瞌睡知道",
    "They're like clubs tied to your knuckles. Another brilliant invention from the Realistic Upgrades Corporation(RUC).": "它们就像绑在您指关节上的棍棒。 Realistic Upgrades Corporation (RUC) 的另一项杰出发明。",
    "Titanium spikes, of course.": "当然是钛钉。",
    "Unarmed Army": "手无寸铁的军队",
    "Wall Breaker": "破壁机",
    "Wall Smasher": "破墙者",
    "We're currently trying to figure out how to combine these with the club knuckles. Then, our work here will be done.": "我们目前正试图弄清楚如何将这些与俱乐部关节结合起来。 然后，我们这里的工作就完成了。",
    "3 times": "3次",
    "Coffee": "咖啡",
    "Caffeine obviously gives you the ability to punch faster.": "咖啡因显然能让你打得更快。",
    "Balls of Steel": "钢球",
    "Big Grenades": "大手榴弹",
    "Bigger Clubs": "更大的棍棒",
    "bulldozers.": "推土机。",
    "Gun That Shoots Grenades": "发射手榴弹的枪",
    "I'm not sure what the previous ones were made out of.": "我不确定以前的那些是用什么做的。",
    "I'm not sure why we were using the small ones.": "我不确定为什么我们要使用小的。",
    "I'm surprised we didn't get these sooner.": "我很惊讶我们没有早点得到这些。",
    "more damage per grenademan.": "每个手榴弹手造成更多伤害。",
    "more damage per Gunshooter.": "每个枪手造成更多伤害。",
    "Not to be confused with a grenade launcher.": "不要与榴弹发射器混淆。",
    "Those Who Arose to Doze": "那些起来打瞌睡的人",
    "20-Foot Statues": "20 英尺雕像",
    "3-5 business days no more!": "不再需要 3-5 个工作日！",
    "30,000 feet of DAMAGE!": "30,000 英尺的伤害！",
    "Airstrikes do": "空袭可以",
    "Also requires": "还需要",
    "Another legendary technique.": "另一种传奇技术。",
    "as many bricks.": "尽可能多的砖。",
    "boss brick.": "老板砖。",
    "Brick": "砖",
    "Brick factories produce": "砖厂生产",
    "brick factory": "砖厂",
    "Brick Factory": "砖厂",
    "Bricks": "砖块",
    "Cash &": "现金 ＆",
    "cash;": "现金;",
    "Convicts": "犯人",
    "Deep Magic Mining": "深魔矿业",
    "Destroy the 5th and final wall.": "摧毁第 5 道也是最后一道墙。",
    "Fist Grenades": "拳头手榴弹",
    "I honestly don't know what these are. Feel free to imagine them how you want.": "老实说，我不知道这些是什么。 随心所欲地想象它们。",
    "Interviewers": "面试官",
    "Maganium Swords": "镁剑",
    "Magic Mining": "魔法矿业",
    "more bricks.": "更多的砖头。",
    "more damage per airstrike caller.": "每个空袭呼叫者造成更多伤害。",
    "more damage per wrecking ball.": "每个破坏球造成更多伤害。",
    "Necromancer": "死灵法师",
    "Necromancer damage:": "死灵法师伤害：",
    "Necromancers do": "死灵法师造成",
    "Pianos": "钢琴",
    "Skydiving": "跳伞",
    "Statues of the CEO of the RUC of course.": "当然是中国人民大学首席执行官的雕像。",
    "Strength Restoration Spells": "力量恢复法术",
    "Summon Titans": "召唤泰坦",
    "Supersonic Jets": "超音速喷气机",
    "Swordsmen": "剑士",
    "The dark magic tablets we're using can talk, so we need to learn more about them to use them better. They sound really creepy, and talk about really disturbing stuff.": "我们使用的黑暗魔法石板会说话，所以我们需要更多地了解它们才能更好地使用它们。 他们听起来真的很令人毛骨悚然，并且谈论着真正令人不安的事情。",
    "The next step.": "下一步。",
    "The titans only speak the language of the Old World, so we gotta get the wizards to translate that.": "泰坦只说旧世界的语言，所以我们得请巫师来翻译。",
    "The wizards are saying we shouldn't go this deep, but we found these cool dark magic tablets.": "巫师们说我们不应该走这么深，但我们找到了这些很酷的黑暗魔法石板。",
    "The wizards are willing to raise titans from the dead to help destroy the walls. This is a good idea.": "巫师们愿意从死里复活泰坦来帮助摧毁城墙。 这是一个好主意。",
    "They're demanding these. Necromancers are assholes.": "他们要求这些。 死灵法师是混蛋。",
    "three times": "3次",
    "Thrones": "宝座",
    "Titan": "泰坦",
    "Titan damage:": "泰坦伤害：",
    "Titans do": "泰坦造成",
    "Turns out being dead for thousands of years can do things to your strength.": "原来死了几千年可以做一些事来增强你的力量。",
    "Unlocks the": "解锁",
    "We found this mineral that happens to be the perfect magic enhancer, so we named it maganium.": "我们发现这种矿物恰好是完美的魔法增强剂，因此我们将其命名为 maganium。",
    "We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.": "我们需要砖块来与地下巫师交换他们的秘密。 砖块是他们最宝贵的资源。",
    "What, did you think we were dropping missiles?": "什么，你以为我们在投导弹？",
    "Wizard Translators": "向导翻译器",
    "Wrecking Ball Punch": "破坏球拳",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) trillion$/,
    /^([\d\.]+) thousand$/,
    /^([\d\.]+) billion$/,
    /^([\d\.]+) million$/,
    /^([\d\.]+) quintillion$/,
    /^([\d\.]+) quadrillion$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);