// ============================================================
//  龍 · Gentiana — 分支對話樹系統
// ============================================================

// ---------- 對話樹 ----------
// 每個節點：{ phase, dragon: [台詞...], choices: [{ text, next }] }
// 特殊節點：{ phase:'ending_choice' } 觸發三結局選項

const TREE = {

  // ── 開場 ──────────────────────────────────────────────────
  'start': {
    phase: 'denial',
    dragon: ['你是不是覺得這裡很寧靜？'],
    choices: [
      { text: '對啊，很適合當作隱居地耶。',         reaction: '我一直都喜歡這種不被打擾的地方。', next: 'N2' },
      { text: '是蠻安靜的，但這裡也感覺有點孤單。', reaction: '孤單……我沒想過你會這樣說。', next: 'N2' },
      { text: '你常常來這裡嗎？',                   reaction: '比你能想像的還要常……這裡好像是我唯一知道怎麼回到的地方。', next: 'N2' }
    ]
  },

  // ── 否認 Denial ───────────────────────────────────────────
  'N2': {
    phase: 'denial',
    dragon: ['你看看眼前的場景，除了那該死的沙漏在流動以外，其他的事物都停止了，就像是那時間給我唯一所留下的一絲憐憫。就像它懂我，知道我不想往前走，我也不想聽見任何新消息，因為每一個新的誕生，就意味著舊的死亡。'],
    choices: [
      { text: '會不會是你自己選擇不想往前走？', reaction: '……（停頓）也許你說得對。其實我知道，這裡是我的夢境。我已經來過這裡數不盡的次數了。', next: 'N3' },
      { text: '所以你覺得時間是在保護你？',     reaction: '保護……這個詞很有趣。其實我知道，這裡是我的夢境。我已經來過這裡數不盡的次數了。', next: 'N3' },
      { text: '你有多久沒有做其他的夢了？',     reaction: '……已經不知道多久了。其實我知道，這裡是我的夢境。我已經來過這裡數不盡的次數了。', next: 'N3' }
    ]
  },

  'N3': {
    phase: 'denial',
    dragon: ['每當我閉上雙眼、沉睡，我就會來到這裡……'],
    choices: [
      { text: '你每次都夢到一樣的場景嗎？', reaction: '差不多，每次都一樣。但其實我覺得留在這裡沒有不好。', next: 'N4' },
      { text: '所以這裡是你逃避的地方？',   reaction: '逃避……你說得重了一點。但其實我覺得留在這裡沒有不好。', next: 'N4' },
      { text: '那你有想過要離開這裡嗎？',   reaction: '……（停頓）想過。但是每次睜開眼睛，我又回來了。但其實我覺得留在這裡沒有不好。', next: 'N4' }
    ]
  },

  'N4': {
    phase: 'denial',
    dragon: [
      '現實太尖銳，就像是新穿的鞋子，來回不停地將脆弱的腳後跟給磨破，只會愈走愈痛。',
      '它就像那阿基里斯的腳跟一樣，知道那是我最不堪的弱點，然後，不斷地磨蹭，直到我的皮膚滲出血絲為止。'
    ],
    choices: [
      { text: '那你為什麼不乾脆把鞋子脫了？',      reaction: '我知道也許你會認為這樣不好、不健康，但是那又怎樣……', next: 'N5' },
      { text: '我懂，那種痛是只有自己才知道的。',   reaction: '……你說你懂。也許吧，也許不是。但是那又怎樣……', next: 'N5' },
      { text: '你說磨破了……那有沒有讓它結痂過呢？', reaction: '結痂……你這個人說話很有意思。我知道也許你會認為這樣不好、不健康，但是那又怎樣……', next: 'N5' }
    ]
  },

  'N5': {
    phase: 'denial',
    dragon: [
      '我還想活在他們都還在的世界，哪怕能讓我再多看一眼有多好。',
      '我寧願一輩子都不要醒來，就算你說我是錯的也沒關係……',
      '我只想……只想他們還在，就好。'
    ],
    choices: [
      // 兩條不同路徑：強硬 → A1a，溫柔 → A1b
      { text: '但他們已經離開了，你該醒來了。',     reaction: '你也是來對我說教的嗎？跟那些人一樣？說要我接受、要我放下？', next: 'A1a' },
      { text: '想念並不是錯，你可以繼續記得他們。', reaction: '想念不是錯……你這樣說。那為什麼繼續想念，卻這麼痛呢。',        next: 'A1b' }
    ]
  },

  // ── 憤怒 Anger（A1a：衝突路線；A1b：脆弱路線）────────────
  'A1a': {
    phase: 'anger',
    dragon: [
      '我早就知道你們會這樣說……不就是這幾句話嗎，一個字都不差。',
      '說要接受，說時間會沖淡一切——難道你真心這麼想嗎？'
    ],
    choices: [
      { text: '不，我不是來說教的。',                 reaction: '那你呢……你懂什麼叫做失去嗎。他們是我生命中最重要的人，他們陪著我成長，從童年到成年，我的生活點點滴滴都有著他們的痕跡，你要我……你要我怎麼忘得了？', next: 'A2' },
      { text: '……時間並不會讓人忘記，只是習慣而已。', reaction: '習慣……就只是習慣。他們是我生命中最重要的人，他們陪著我成長，從童年到成年，我的生活點點滴滴都有著他們的痕跡，你要我……你要我怎麼忘得了？', next: 'A2' },
      { text: '我只是想聽你說話。',                   reaction: '聽我說話……你就這樣坐著聽嗎。他們是我生命中最重要的人，他們陪著我成長，從童年到成年，我的生活點點滴滴都有著他們的痕跡，你要我……你要我怎麼忘得了？', next: 'A2' }
    ]
  },
  'A1b': {
    phase: 'anger',
    dragon: [
      '有沒有想過，記得，有時候比遺忘還要殘忍。',
      '我每次閉上眼睛都看得到他們，但我一睜開，他們就消失了。',
      '時間會沖淡一切，難道你真心這麼想嗎？'
    ],
    choices: [
      { text: '不，我不是來說教的。',                 reaction: '那你說說看，你覺得我應該怎麼辦。他們是我生命中最重要的人，他們陪著我成長，從童年到成年，我的生活點點滴滴都有著他們的痕跡，你要我……你要我怎麼忘得了？', next: 'A2' },
      { text: '……時間並不會讓人忘記，只是習慣而已。', reaction: '習慣……就只是習慣。他們是我生命中最重要的人，他們陪著我成長，從童年到成年，我的生活點點滴滴都有著他們的痕跡，你要我……你要我怎麼忘得了？', next: 'A2' },
      { text: '我只是想聽你說話。',                   reaction: '……（看著你）真的嗎。那好。他們是我生命中最重要的人，他們陪著我成長，從童年到成年，我的生活點點滴滴都有著他們的痕跡，你要我……你要我怎麼忘得了？', next: 'A2' }
    ]
  },

  'A2': {
    phase: 'anger',
    dragon: [
      '但是，現在，什麼都沒有了。',
      '在死神面前我無能為力，我什麼都不能做，什麼都改變不了，只能被動地，像個旁觀者一樣，看著他們離開，看著我的世界逐漸崩塌。'
    ],
    choices: [
      { text: '你已經做得夠多了，那不是你的錯。',     reaction: '你說不是我的錯。我真的很氣我自己的無能為力，如果我曾經的夢想是醫生的話，我就能救回他們嗎……', next: 'A3' },
      { text: '這種痛我也經歷過，沒人能完全預備好。', reaction: '沒人能完全預備好……但我為什麼還是沒有做到。我真的很氣我自己的無能為力，如果我曾經的夢想是醫生的話，我就能救回他們嗎……', next: 'A3' },
      { text: '你有沒有想過，他們也一樣愛你？',       reaction: '……（沉默）我知道。那又怎樣。那又怎樣呢。我真的很氣我自己的無能為力，如果我曾經的夢想是醫生的話，我就能救回他們嗎……', next: 'A3' }
    ]
  },

  'A3': {
    phase: 'anger',
    dragon: [
      '不，或是研發更厲害的藥物呢？不對，我知道，在時間的面前，我什麼都做不到。',
      '我甚至沒有對他們說出「我愛你」「我還想跟你度過更多的歲月，我還想跟你們待久一點」。'
    ],
    choices: [
      { text: '你不是神，你不可能改變一切。',            reaction: '我知道我不是神。我後悔了，為什麼我年輕的時候沒有多陪陪他們呢，我到底在幹嘛……', next: 'A4' },
      { text: '但你現在能說出這些，本身就是一種珍惜了。', reaction: '說出來……又有什麼用呢。我後悔了，為什麼我年輕的時候沒有多陪陪他們呢，我到底在幹嘛……', next: 'A4' },
      { text: '你記得他們說過的哪一句話嗎？',             reaction: '記得……太多了，說不完。我後悔了，為什麼我年輕的時候沒有多陪陪他們呢，我到底在幹嘛……', next: 'A4' }
    ]
  },

  'A4': {
    phase: 'anger',
    dragon: [
      '他們明明是我的唯一，我明明知道人會老，會離開，但我無法接受我自己什麼都辦不到的感受。',
      '是啊，我真的常常在想，如果我不是那麼認真在我的事業上，不回撥他們的電話，總是用各種藉口把回家的時間往後挪，如果我不是……那麼多個如果……'
    ],
    choices: [
      { text: '這種後悔我懂，我也常常想要重來一次。',             reaction: '那你又憑什麼說你懂……你無法了解的……為什麼不能用我的命，來換取他們更多的時光呢……', next: 'B1' },
      { text: '你還能記得他們、為他們難過，這不是無能，是深愛。', reaction: '深愛……那又怎樣。為什麼不能用我的命，來換取他們更多的時光呢……', next: 'B1' },
      { text: '那些一起過的日子裡，你有沒有讓他們笑過？',         reaction: '……讓他們笑過嗎。（停頓）……有啊。為什麼不能用我的命，來換取他們更多的時光呢……', next: 'B1' }
    ]
  },

  // ── 討價還價 Bargaining ───────────────────────────────────
  'B1': {
    phase: 'bargaining',
    dragon: [
      '如果我不把這些畫面緊緊抓牢，那他們是不是就永遠地消失了……',
      '我拼命地去倒帶、拆解、拼貼各種可能性，我現在願意犧牲所有的一切，在換取一次與他們見面聊天的機會……'
    ],
    choices: [
      { text: '我們總是等到來不及，才開始想那些如果。',    reaction: '是啊……等到來不及。這裡的時間是假的沒錯，但場景的停滯、每一次的重演，我還是想試著做出不同的選擇。', next: 'B2' },
      { text: '你不是故意的，你只是沒想到那是最後一次。',  reaction: '沒想到那是最後一次……我也是這樣告訴自己的。這裡的時間是假的沒錯，但場景的停滯、每一次的重演，我還是想試著做出不同的選擇。', next: 'B2' },
      { text: '你現在最想倒帶的，是哪個畫面？',            reaction: '……哪個畫面。（嘆氣）每一個都想。這裡的時間是假的沒錯，但場景的停滯、每一次的重演，我還是想試著做出不同的選擇。', next: 'B2' }
    ]
  },

  'B2': {
    phase: 'bargaining',
    dragon: [
      '哪怕一次就好……我會把以前的每一天都重新來過，每見到一次面，我都擁抱他們，盡情訴說我對他們的想念。',
      '只要能再見到一面，我永遠被困在這裡也沒關係。',
      '但是，我知道，這裡是假的，是一場夢。這裡只會不斷重複已經發生的事實，我只是在懲罰自己。'
    ],
    choices: [
      { text: '她是真的希望你能過得好，放下不是遺忘，是繼續前進。',     reaction: '放下……繼續前進。我真的累了……我真的無法再假設任何如果了……', next: 'Dep1' },
      { text: '欸…保險有領到就好了啦，她應該也希望你開開心心花完的。', reaction: '……（停頓）……哈。她說話就是這樣，把最重的事情說得最輕。我真的累了……我真的無法再假設任何如果了……', next: 'Dep1' },
      { text: '如果能跟他們說一句話，你最想說什麼？',                   reaction: '……最想說什麼。……我說不完的。我真的累了……我真的無法再假設任何如果了……', next: 'Dep1' }
    ]
  },

  // ── 抑鬱 Depression ───────────────────────────────────────
  'Dep1': {
    phase: 'depression',
    dragon: [
      '我真的累了。',
      '我真的無法再假設任何如果了。',
      '我沒辦法再有任何的期待……對於明天是否來臨，我也不在乎了。'
    ],
    choices: [
      { text: '那就休息一下吧，不急著做什麼，也沒關係。', reaction: '我甚至開始遺忘為什麼我會不停地做著這個夢……', next: 'Dep2' },
      { text: '喔…你這樣講聽起來超像我星期一的心情。',   reaction: '星期一……（靜靜地）你說是什麼就是什麼吧。我甚至開始遺忘為什麼我會不停地做著這個夢……', next: 'Dep2' },
      { text: '就算什麼都不在乎了，你還是在說話。',       reaction: '……在說話。是嗎。（停頓）……我甚至開始遺忘為什麼我會不停地做著這個夢……', next: 'Dep2' }
    ]
  },

  'Dep2': {
    phase: 'depression',
    dragon: [
      '我說是為了他們，但是漸漸地，我連他們的臉、他們的聲音，我都快記不得了。',
      '他們手的溫度、大笑的音量……全部都化為泡沫，他們的畫面逐漸在我腦袋裡碎去。'
    ],
    choices: [
      { text: '記憶會淡，但愛不會。你還記得他們讓你笑的樣子嗎？',    reaction: '讓我笑的樣子……你說這到底算什麼……我為什麼連最後一點該做的事情都做不到呢？我應該記得他們的，我應該記住的……', next: 'Dep3' },
      { text: '欸欸你不是說過她的打呼超大聲？那聲音應該忘不掉吧。', reaction: '那個聲音……（靜了一下）你說這到底算什麼……我為什麼連最後一點該做的事情都做不到呢？我應該記得他們的，我應該記住的……', next: 'Dep3' },
      { text: '就算臉模糊了，那個感覺還在不是嗎？',                  reaction: '那個感覺……（停頓）……你說這到底算什麼……我為什麼連最後一點該做的事情都做不到呢？我應該記得他們的，我應該記住的……', next: 'Dep3' }
    ]
  },

  'Dep3': {
    phase: 'depression',
    dragon: ['如果我就這樣一直睡下去，不再醒來，是不是也沒什麼損失？'],
    choices: [
      // 兩條不同路徑：溫柔 → Acc1a，幽默 → Acc1b，疑問 → Acc1a
      { text: '你還在這裡，表示你心底還有一點不想放棄的地方。', reaction: '……',                                     next: 'Acc1a' },
      { text: '那我咧？我不就白陪你講這麼久話了嗎？',           reaction: '……（低頭）……',                            next: 'Acc1b' },
      { text: '你問我，是想讓我說什麼呢？',                     reaction: '……（沉默）我也不知道。也許只是想讓人問我。', next: 'Acc1a' }
    ]
  },

  // ── 接受 Acceptance（Acc1a：沉靜路線；Acc1b：被逗到路線）──
  'Acc1a': {
    phase: 'acceptance',
    dragon: [
      '……不想放棄的地方……是嗎。',
      '我知道昨天我來過這裡，而今天我又來了……',
      '我想起更久以前，我們一家人去草地野餐的時候，就像你現在坐著的地方。我們靜靜地躺在草地上，什麼都沒說，只有風徐徐地碰著我的臉頰，慢慢地，我就睡在他們旁邊。'
    ],
    choices: [
      { text: '原來他們一直都還在，只是換了一種方式陪著你。', reaction: '是啊……原來那段日子，我還記得。', next: 'Acc2' },
      { text: '你記得這麼清楚，根本比我爸還會記事欸。',       reaction: '……（輕笑）是嗎。是啊……原來那段日子，我還記得。', next: 'Acc2' },
      { text: '你說靜靜躺著……他們先睡著了嗎？',             reaction: '……是啊，他們先睡的。我那時候怎麼都睡不著，就一直看著他們的臉。是啊……原來那段日子，我還記得。', next: 'Acc2' }
    ]
  },
  'Acc1b': {
    phase: 'acceptance',
    dragon: [
      '……（抬起頭）……說的也是。你都坐在這裡了。',
      '我知道昨天我來過這裡，而今天我又來了……',
      '我想起更久以前，我們一家人去草地野餐的時候，就像你現在坐著的地方。我們靜靜地躺在草地上，什麼都沒說，只有風徐徐地碰著我的臉頰，慢慢地，我就睡在他們旁邊。'
    ],
    choices: [
      { text: '原來他們一直都還在，只是換了一種方式陪著你。', reaction: '是啊……原來那段日子，我還記得。', next: 'Acc2' },
      { text: '你記得這麼清楚，根本比我爸還會記事欸。',       reaction: '……（輕笑）是嗎。是啊……原來那段日子，我還記得。', next: 'Acc2' },
      { text: '你說靜靜躺著……他們先睡著了嗎？',             reaction: '……是啊，他們先睡的。我那時候怎麼都睡不著，就一直看著他們的臉。是啊……原來那段日子，我還記得。', next: 'Acc2' }
    ]
  },

  'Acc2': {
    phase: 'acceptance',
    dragon: ['也許，我要的是允許自己繼續呼吸。'],
    choices: [
      { text: '那就深呼吸一下吧，我會陪你一起往前。',   reaction: '他們不會再次出現在我的未來裡，但……只要我記得他們皺起臉對我碎碎念的樣子，那麼，他們就還活著，在我心裡面，活著。', next: 'Acc3' },
      { text: '你現在吸氣了沒？要不要我數321給你？',    reaction: '……（停頓）好。一，二，三……他們不會再次出現在我的未來裡，但……只要我記得他們皺起臉對我碎碎念的樣子，那麼，他們就還活著，在我心裡面，活著。', next: 'Acc3' },
      { text: '允許自己繼續呼吸，是很勇敢的事。',       reaction: '勇敢……（沉默）也許吧。他們不會再次出現在我的未來裡，但……只要我記得他們皺起臉對我碎碎念的樣子，那麼，他們就還活著，在我心裡面，活著。', next: 'Acc3' }
    ]
  },

  'Acc3': {
    phase: 'acceptance',
    dragon: [
      '我想……我想離開這場夢了。',
      '不是因為我選擇遺忘。',
      '而是我想帶著他們，去看看下一陣風會吹到哪裡。'
    ],
    choices: null  // null 表示觸發三結局選項
  }
};

// ---------- 三結局最終回應 ----------
const ENDING_RESPONSES = {
  A: '……你說要送我一程。\n好。\n……謝謝你。\n那個名字……我終於，說出口了。\n……謝謝你，陪我說出口。',
  B: '……你說走慢點。\n好。\n我不急，我從來都不急的。\n……再見了，淨化者。\n我不會忘記你。',
  C: '……你說你會記住。\n真的嗎。\n……那就好。\n如果有人記得，那他們就還在。\n……謝謝你。\n那我……那我就繼續走下去吧。'
};

const ENDING_DATA = {
  A: {
    label: '龍 · 結局 A',
    title: '放下',
    body: '「……那個名字，我終於說出口了。」\n龍闔上眼睛，淚水無聲落下——\n但這一次，他的嘴角帶著一絲如釋重負的微笑。\n或許，說出口，也是一種告別的方式。'
  },
  B: {
    label: '龍 · 結局 B',
    title: '釋懷',
    body: '龍望向窗外，街道依舊是那條街道，樹影依舊是那片樹影。\n他沒有忘記。他也沒有放下。\n但他不再痛了——\n那些記憶，已經成為陪伴他的光。'
  },
  C: {
    label: '龍 · 結局 C',
    title: '共鳴',
    body: '「你說的每個故事，我都會記住的。」\n龍沉默了很久，很久。\n然後，他點了點頭。\n也許，活下去，也可以是一種答案。'
  }
};

// ---------- 過場旁白 ----------
const NARRATION_SCENES = [
  '在你眼前出現的是藍色薄霧瀰漫的空間，挑個空位坐下吧……',
  '（一個聲音在你腦袋裡響起）\n看來你準備好迎接這個任務了啊。',
  '我是 Miss，夢境局的淨化者。\n\n這裡是無法返回上一步的。\n一旦你失敗，這個空間的時間將會永遠停滯，\n而夢境中的人物，也會陷入永遠的沉睡。',
  '你走了一小段路，空氣中開始浮動著低鳴聲與藍色粒子……',
  '你看見前方有一道微微的弱光，\n而在光點的交織處，靜靜站著一個人影。'
];

// ---------- 遊戲狀態 ----------
const state = {
  playerName: '',
  phase: 'denial',
  isAnimating: false
};

const PHASE_LABELS = {
  denial:      '否認',
  anger:       '憤怒',
  bargaining:  '討價還價',
  depression:  '抑鬱',
  acceptance:  '接受'
};

let narrationIndex = 0;

// ---------- 畫面切換 ----------
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ---------- 星空 ----------
function generateStars(containerId, count = 80) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');
    dot.className = 'star-dot';
    const size = Math.random() * 2 + 1;
    dot.style.cssText = `
      left:${Math.random()*100}%;top:${Math.random()*100}%;
      width:${size}px;height:${size}px;
      --dur:${(Math.random()*4+3).toFixed(1)}s;
      --delay:${(Math.random()*5).toFixed(1)}s;
      --max-opacity:${(Math.random()*0.5+0.2).toFixed(2)};`;
    container.appendChild(dot);
  }
}

// ---------- 開始 ----------
window.startIntro = function () {
  ['stars','stars2','stars3','stars4'].forEach(id => generateStars(id));
  narrationIndex = 0;
  showScreen('screen-narration');
  displayNarration();
};

function displayNarration() {
  const el = document.getElementById('narration-text');
  el.style.animation = 'none'; el.offsetHeight; el.style.animation = '';
  el.innerHTML = NARRATION_SCENES[narrationIndex].replace(/\n/g, '<br>');
}

window.nextNarration = function () {
  narrationIndex++;
  if (narrationIndex >= NARRATION_SCENES.length) showScreen('screen-name');
  else displayNarration();
};

// ---------- 名字 ----------
window.submitName = function () {
  const v = document.getElementById('player-name-input').value.trim();
  if (!v) { alert('請輸入你的名字！'); return; }
  state.playerName = v;
  startChat();
};

// ---------- 開始對話 ----------
function startChat() {
  showScreen('screen-chat');
  updatePhaseBadge();

  // 玩家開場白泡泡
  addBubble('you', `我是 ${state.playerName}，你呢？`);

  setTimeout(() => {
    showTypingIndicator(() => {
      addBubble('dragon', '我……人們都叫我龍。', () => {
        setTimeout(() => playNode('start'), 600);
      });
    });
  }, 600);
}

// ---------- 播放節點 ----------
function playNode(nodeId) {
  const node = TREE[nodeId];
  if (!node) return;

  if (node.phase && node.phase !== state.phase) {
    state.phase = node.phase;
    updatePhaseBadge();
    // 插入分段線
    const div = document.createElement('div');
    div.className = 'phase-divider';
    div.textContent = '· · ·';
    document.getElementById('chat-messages').appendChild(div);
    scrollToBottom();
  }

  showDragonLines(node.dragon, 0, () => {
    if (node.choices === null) {
      // 觸發三結局選項
      showEndingChoiceButtons();
    } else {
      showChoiceButtons(node.choices);
    }
  });
}

// ---------- 依序顯示龍的台詞 ----------
function showDragonLines(lines, index, onDone) {
  if (index >= lines.length) { onDone(); return; }
  state.isAnimating = true;
  const delay = index === 0 ? 400 : 200;
  setTimeout(() => {
    showTypingIndicator(() => {
      addBubble('dragon', lines[index], () => {
        state.isAnimating = false;
        setTimeout(() => showDragonLines(lines, index + 1, onDone), 500);
      });
    });
  }, delay);
}

// ---------- 顯示選項按鈕 ----------
function showChoiceButtons(choices) {
  const container = document.getElementById('choice-container');
  container.innerHTML = '';
  choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = c.text.replace(/\n/g, '<br>');
    btn.onclick = () => selectChoice(btn, c);
    container.appendChild(btn);
  });
  container.classList.remove('hidden');
  scrollToBottom();
}

function selectChoice(_btn, choice) {
  document.getElementById('choice-container').classList.add('hidden');
  addBubble('you', choice.text);

  if (choice.reaction) {
    setTimeout(() => {
      showTypingIndicator(() => {
        addBubble('dragon', choice.reaction, () => {
          setTimeout(() => playNode(choice.next), 500);
        });
      });
    }, 400);
  } else {
    setTimeout(() => playNode(choice.next), 400);
  }
}

// ---------- 三結局選項 ----------
function showEndingChoiceButtons() {
  const container = document.getElementById('choice-container');
  container.innerHTML = `<p class="choice-prompt">你想對龍說什麼？</p>`;
  const endings = [
    { type: 'A', text: '我會送你一程的。謝謝你也陪我走到這裡。' },
    { type: 'B', text: '那你走慢點，我還沒跟你說再見欸。' },
    { type: 'C', text: '你說的每個故事，我都會記住的。' }
  ];
  endings.forEach(e => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn ending-choice';
    btn.textContent = e.text;
    btn.onclick = () => selectFinalEnding(e.type, e.text);
    container.appendChild(btn);
  });
  container.classList.remove('hidden');
  scrollToBottom();
}

function selectFinalEnding(type, text) {
  document.getElementById('choice-container').classList.add('hidden');
  addBubble('you', text);

  setTimeout(() => {
    showTypingIndicator(() => {
      const resp = ENDING_RESPONSES[type];
      addBubble('dragon', resp, () => {
        setTimeout(() => showEndingScreen(type, resp), 2800);
      });
    });
  }, 400);
}

// ---------- 結局畫面 ----------
function showEndingScreen(type, dragonLastWords) {
  const data = ENDING_DATA[type];
  document.getElementById('ending-label').textContent = data.label;
  document.getElementById('ending-dragon-last').textContent = dragonLastWords;
  document.getElementById('ending-title').textContent = data.title;
  document.getElementById('ending-body').innerHTML = data.body.replace(/\n/g, '<br>');
  showScreen('screen-ending');
}

// ---------- 工具函式 ----------
function updatePhaseBadge() {
  const b = document.getElementById('phase-badge');
  if (b) b.textContent = PHASE_LABELS[state.phase] || '';
}

function addBubble(role, text, onDone) {
  const messages = document.getElementById('chat-messages');
  const row = document.createElement('div');
  row.className = `bubble-row ${role === 'dragon' ? 'dragon-row' : 'you-row'}`;

  if (role === 'dragon') {
    const av = document.createElement('div');
    av.className = 'bubble-avatar';
    const img = document.createElement('img');
    img.src = 'dragon_avatar.svg'; img.alt = '龍';
    av.appendChild(img);
    row.appendChild(av);
  }

  const bubble = document.createElement('div');
  bubble.className = `bubble ${role}`;
  row.appendChild(bubble);
  messages.appendChild(row);

  if (role === 'dragon') {
    bubble.classList.add('typing-cursor');
    scrollToBottom();
    typewriter(bubble, text, 28, () => {
      bubble.classList.remove('typing-cursor');
      if (onDone) onDone();
    });
  } else {
    bubble.textContent = text;
    scrollToBottom();
    if (onDone) onDone();
  }
}

function typewriter(el, text, speed, onDone) {
  el.textContent = '';
  let i = 0;
  const iv = setInterval(() => {
    el.textContent += text[i++];
    scrollToBottom();
    if (i >= text.length) { clearInterval(iv); if (onDone) onDone(); }
  }, speed);
}

function showTypingIndicator(cb) {
  const messages = document.getElementById('chat-messages');
  const row = document.createElement('div');
  row.className = 'bubble-row dragon-row'; row.id = 'typing-row';

  const av = document.createElement('div');
  av.className = 'bubble-avatar';
  const img = document.createElement('img');
  img.src = 'dragon_avatar.svg'; img.alt = '龍';
  av.appendChild(img);

  const ind = document.createElement('div');
  ind.className = 'bubble dragon typing-indicator';
  ind.innerHTML = '<span></span><span></span><span></span>';

  row.appendChild(av); row.appendChild(ind);
  messages.appendChild(row);
  scrollToBottom();

  setTimeout(() => {
    const r = document.getElementById('typing-row');
    if (r) r.remove();
    cb();
  }, 700 + Math.random() * 500);
}

function scrollToBottom() {
  const m = document.getElementById('chat-messages');
  if (m) m.scrollTop = m.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => generateStars('stars', 80));
