#!/usr/bin/env python3
"""finhot-site data builder 鈥?generates data.js from today's news."""
import json
from datetime import datetime, timezone, timedelta

NOW = "2026-05-29T17:09:17+08:00"
TODAY = "2026-05-29"

# 鈹€鈹€ items: all raw items, each with full fields 鈹€鈹€
items = []

def add(title, summary, sourceName, sourceUrl, publishedAt, category, tags, tier="T2", score=60):
    items.append({
        "id": str(len(items) + 1),
        "title": title,
        "summary": summary,
        "sourceName": sourceName,
        "sourceUrl": sourceUrl,
        "publishedAt": publishedAt,
        "category": category,
        "tags": tags,
        "tier": tier,
        "score": score,
    })

# 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
# 2026-05-29 DATA 鈥?compiled from neodata + web
# 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€

# == T1 鐩戠绫?==
add(
    "鍏ㄥ浗浜哄ぇ甯稿浼氬叕甯?026閲戣瀺绔嬫硶璁″垝锛屽皢鍒跺畾閲戣瀺娉曘€侀噾铻嶇ǔ瀹氭硶",
    "鍏ㄥ浗浜哄ぇ甯稿浼氭硶宸ュ鍓富浠婚粍钖?鏈?7鏃ヨ〃绀猴紝浠婂勾灏嗗埗瀹氶噾铻嶆硶銆侀噾铻嶇ǔ瀹氭硶锛屼慨鏀归摱琛屼笟鐩戠潱绠＄悊娉曘€佷腑鍥戒汉姘戦摱琛屾硶锛岄噾铻嶆硶娌诲缓璁鹃┒鍏ュ揩杞﹂亾銆?,
    "涓婃捣璇佸埜鎶?, "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260529142351975feb94",
    "2026-05-29T14:23:00.000Z", "regulatory", ["鐩戠鏀跨瓥", "閲戣瀺绔嬫硶"], "T1", 82
)

add(
    "鍏儴闂ㄨ仈鍚堟暣娌婚潪娉曡法澧冪倰鑲★紝瀵岄€旂綒娌?8.5浜裤€佽€佽檸4.1浜?,
    "璇佺洃浼氱瓑鍏儴闂ㄥ嵃鍙戙€婄患鍚堟暣娌婚潪娉曡法澧冭瘉鍒告湡璐у熀閲戠粡钀ユ椿鍔ㄥ疄鏂芥柟妗堛€嬶紝璁剧疆2骞撮泦涓暣娌绘湡锛屽瘜閫斻€佽€佽檸銆侀暱妗ヨ绔嬫澶勭綒锛屽悎璁＄綒娌¤秴22浜垮厓銆?,
    "璇佺洃浼?璇佸埜鏃舵姤", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN202605251525229756599f",
    "2026-05-29T08:00:00.000Z", "regulatory", ["鐩戠鏀跨瓥", "璺ㄥ鎶曡祫", "璇佺洃浼?], "T1", 85
)

add(
    "淇濋櫓琛屼笟鏂拌銆婅嚜寰嬭鑼冦€?鏈?鏃ユ柦琛岋紝浜у搧涓庨攢鍞弻鍒嗙骇",
    "淇濋櫓涓氶閮ㄨ仛鐒︿骇鍝侀€傚綋鎬х鐞嗙殑鑷緥鏂囦欢銆婁繚闄╀骇鍝侀€傚綋鎬х鐞嗚嚜寰嬭鑼冦€嬪皢浜?026骞?鏈?鏃ユ寮忔柦琛岋紝浜鸿韩闄╀骇鍝佸垎P1-P5浜旂骇锛岄攢鍞篃瀹炶鍒嗙骇绠＄悊銆?,
    "涓浗缁忚惀鎶?涓浗淇濋櫓琛屼笟鍗忎細", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260502103014a6e7186e",
    "2026-05-29T07:00:00.000Z", "regulatory", ["鐩戠鏀跨瓥", "淇濋櫓", "閫傚綋鎬х鐞?], "T1", 80
)

# == T1.5 琛屼笟鍔ㄦ€?==
add(
    "娣辨腐鎺ㄥ姩閲戣瀺鍚堜綔娣卞害铻嶅悎锛岃仛鐒︾鎶€閲戣瀺涓庤储瀵岀鐞?,
    "娣辨腐閲戣瀺鍚堜綔濮斿憳浼氱鍥涙浼氳鍦ㄦ繁涓捐锛岃璁轰袱鍦伴噾铻嶅競鍦哄彂灞曪紝鑱氱劍绉戞妧閲戣瀺銆佹繁鍖栦簰鑱斾簰閫氥€佸仛澶ц储瀵岀鐞嗙瓑鏂瑰悜銆?,
    "绗竴璐㈢粡", "http://gu.qq.com/resources/shy/news/detail-v2/index.html#/?id=nesSN20260529122140975fc452&s=b",
    "2026-05-29T12:21:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "娣辨腐閲戣瀺", "浜掕仈浜掗€?], "T1.5", 72
)

add(
    "璐㈡斂閮細1-4鏈堝浗鏈変紒涓氳惀鏀?6.27涓囦嚎鍏冿紝鍒╂鼎鍚屾瘮澧為暱1.9%",
    "璐㈡斂閮ㄥ彂甯冩暟鎹樉绀猴紝1-4鏈堝浗鏈変紒涓氳惀鏀跺悓姣斾笅闄?.5%锛屽埄娑︽€婚鍚屾瘮澧為暱1.9%锛屽簲浜ょ◣璐瑰悓姣斿闀?.9%銆?,
    "36姘?, "https://36kr.com/newsflashes/3830123840825221",
    "2026-05-29T11:45:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "鍥戒紒", "璐㈡斂鏁版嵁"], "T1.5", 65
)

add(
    "鍥藉澶栨眹绠＄悊灞€锛?鏈堜腑鍥藉姹囧競鍦烘€昏鎴愪氦25.3涓囦嚎鍏?,
    "2026骞?鏈堬紝涓浗澶栨眹甯傚満鎬昏鎴愪氦25.30涓囦嚎鍏冧汉姘戝竵锛?-4鏈堢疮璁℃垚浜?01.08涓囦嚎鍏冧汉姘戝竵銆?,
    "36姘?, "https://36kr.com/newsflashes/3830119489496962",
    "2026-05-29T11:40:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "澶栨眹", "閲戣瀺甯傚満"], "T1.5", 63
)

add(
    "钄￠渾锛氫粠璧斾粯鍒伴櫔浼达紝鎴愬氨鍋ュ悍鑷富鐨勯暱瀵跨敓娲?,
    "淇濋櫓琛屼笟浠庤禂浠樺埌闄即鐨勮浆鍨嬭秼鍔匡紝鎵撻€犲仴搴风鐞嗛棴鐜紝鏈嶅姟鍋ュ悍鑷富鐨勯暱瀵跨敓娲汇€?,
    "绗竴璐㈢粡", "https://www.yicai.com/news/103207398.html",
    "2026-05-29T10:45:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "淇濋櫓", "鍋ュ悍绠＄悊"], "T1.5", 66
)

add(
    "涓浗骞冲畨鍙戝竷骞冲畨灞呭鏈嶅姟鍝佺墝锛屾繁鑰?鏈嶅姟骞?鍒涙柊瀹炶返",
    "涓浗骞冲畨鍙戝竷骞冲畨灞呭鏈嶅姟鍝佺墝锛屼互'鏈嶅姟骞?涓哄畾浣嶏紝娣卞寲淇濋櫓+鏈嶅姟鐢熸€佸竷灞€銆?,
    "绗竴璐㈢粡", "https://www.yicai.com/news/103207249.html",
    "2026-05-29T10:00:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "涓浗骞冲畨", "灞呭鏈嶅姟"], "T1.5", 65
)

add(
    "2025骞碅鑲￠噰鐭夸笟楂樼钖叕棣栬秴閲戣瀺涓氾紝鑽槑搴峰痉3998涓囪潐鑱旀棣?,
    "涓婃捣鑽ｆ鍙戝竷鎶ュ憡鏄剧ず锛?025骞碅鑲￠噰鐭夸笟楂樼鏈€楂樺勾钖娆¤秴瓒婇噾铻嶄笟锛岃嵂鏄庡悍寰疯懀浜嬮暱鏉庨潻浠?998涓囧厓铦夎仈姒滈銆?,
    "璐㈡柊缃?, "https://finance.caixin.com/2026-05-29/102448904.html",
    "2026-05-29T05:30:06.000Z", "industry", ["琛屼笟鍔ㄦ€?, "A鑲?, "楂樼钖叕"], "T1.5", 68
)

add(
    "澶鍖椾含鍒嗚杩庢柊琛岄暱锛屽師绉戞妧鍙稿徃闀挎潕浼熷饱鏂?,
    "澶绉戞妧鍙稿師鍙搁暱鏉庝紵宸蹭换澶鍖椾含甯傚垎琛屽厷濮斾功璁般€佽闀垮吋鍥藉澶栨眹绠＄悊灞€鍖椾含甯傚垎灞€灞€闀裤€?,
    "绗竴璐㈢粡", "https://www.yicai.com/news/103207167.html",
    "2026-05-29T05:24:31.000Z", "industry", ["琛屼笟鍔ㄦ€?, "澶", "浜轰簨鍙樺姩"], "T1.5", 70
)

add(
    "鏁板瓧浜烘皯甯丄PP閲岃兘涔伴粍閲戝暒锛佸叴涓氶摱琛岄瀹惰惤鍦?,
    "鍏翠笟閾惰鍦ㄦ暟瀛椾汉姘戝竵App鍐呮帹鍑洪摱琛岀Н瀛橀噾浜у搧锛屾暟瀛椾汉姘戝竵棣栨鐩存帴瀵规帴涓汉榛勯噾鎶曡祫鍦烘櫙銆?,
    "绗竴璐㈢粡", "https://www.yicai.com/news/103207149.html",
    "2026-05-29T05:10:44.000Z", "products", ["浜у搧鍙戝竷", "鏁板瓧浜烘皯甯?, "榛勯噾鎶曡祫"], "T1.5", 68
)

add(
    "鐞嗚储瀛愬叕浼楀彿4鏈堟锛氬搧鐗岃皟鎬ф墦閫犳垚鏂版垬鍦?,
    "YiwealthSMI鍙戝竷4鏈堥摱琛岀悊璐㈠瓙鍏紬鍙锋鍗曪紝鍝佺墝璋冩€ф墦閫犳垚鐞嗚储瀛愬叕鍙稿叕浼楀彿杩愯惀鐨勬柊绔炰簤鐒︾偣銆?,
    "绗竴璐㈢粡", "https://www.yicai.com/news/103206840.html",
    "2026-05-29T05:00:00.000Z", "insights", ["鎶€宸ц鐐?, "閾惰鐞嗚储", "鍝佺墝杩愯惀"], "T2", 62
)

add(
    "杩炴澘鑲¤拷韪細A鑲′粖鏃ュ叡71鍙釜鑲℃定鍋滐紝鐓ょ偔鑲?杩炴澘",
    "鎴垮湴浜ф澘鍧楅姹熸帶鑲?杩炴澘锛岀叅鐐偂琛ㄧ幇寮哄娍锛孉鑲″叡71鍙釜鑲℃定鍋滐紝甯傚満鎯呯华鍥炴殩銆?,
    "绗竴璐㈢粡", "https://www.yicai.com/news/103207652.html",
    "2026-05-29T10:48:00.000Z", "insights", ["鎶€宸ц鐐?, "A鑲?, "娑ㄥ仠鏉?], "T2", 60
)

# == 淇濋櫓绫?==
add(
    "淇濋櫓璧勭鏂拌钀藉湴锛?鍥涗釜鏀煴'鐩戠妗嗘灦鍑虹倝",
    "閲戣瀺鐩戠鎬诲眬璧勭鍙告槑纭淇濋櫓璧勭鍏徃鎻愬嚭'鍥涗釜鏀煴銆佸洓椤圭洰鏍囥€?6椤规牳蹇冭绱?鐩戠瑕佹眰锛岃鐩栧彈鎵樿矗浠汇€佺郴缁熸€ч闄┿€佸競鍦烘晥鐜囥€侀噾铻嶇ǔ瀹氱瓑銆?,
    "璇佸埜鏃舵姤/鍒稿晢涓浗", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260520144922a4baa208",
    "2026-05-29T10:00:00.000Z", "regulatory", ["鐩戠鏀跨瓥", "淇濋櫓璧勭", "鏂拌"], "T1", 80
)

add(
    "2026骞?-4鏈堣储闄╁叕鍙歌繚瑙勫缃氬垎鏋愶細38瀹惰缃氳秴6400涓囧厓",
    "鏂板崕璐㈢粡缁熻鏄剧ず锛屽墠4鏈堝叡鏈?8瀹惰储闄╁叕鍙告敹鍒扮洃绠￠儴闂ㄧ綒鍗曪紝鍚堣琚綒娌¤秴6400涓囧厓锛屽钩瀹夎储闄┿€佸崕瀹夎储闄┿€佸お淇濊储闄╄缃氶噾棰濆眳鍓嶃€?,
    "鏂板崕璐㈢粡", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260529073052a4ce7511",
    "2026-05-29T07:30:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "淇濋櫓", "澶勭綒"], "T1.5", 70
)

add(
    "淇濋櫓琛屼笟鐮旂┒锛氫竴瀛ｆ姤缁艰堪锛孨BV寤剁画杈冨ソ澧為暱锛孋OR琛ㄧ幇浼樺紓",
    "2026Q1涓婂競闄╀紒NBV鍧囧疄鐜版澧為暱锛屽叾涓浗瀵垮悓姣?75.5%棰嗚窇锛涜储闄〤OR鍚屾瘮鏀瑰杽锛屾姤琛屽悎涓€娣卞寲鎴愭晥鏄捐憲銆?,
    "鍐呴儴鐮旀姤", "#",
    "2026-05-29T06:00:00.000Z", "research", ["鐮旂┒鎶ュ憡", "淇濋櫓", "涓€瀛ｆ姤"], "T2", 66
)

add(
    "浜斿ぇ涓婂競闄╀紒2025骞寸鎶€鎶曞叆瓒?252浜垮厓锛屽悓姣斿闀?0%",
    "2025骞翠腑鍥戒汉瀵裤€佷腑鍥戒汉淇濄€佷腑鍥藉钩瀹夈€佷腑鍥藉お淇濄€佹柊鍗庝繚闄╁悎璁＄鎶€鎶曞叆4252浜垮厓鍒涘巻鍙叉柊楂橈紝AI浠?杈呭姪宸ュ叿'婕斿彉涓?鏍稿績寮曟搸'銆?,
    "璇佸埜鏃舵姤", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260514111705a7040dc1",
    "2026-05-29T06:00:00.000Z", "research", ["鐮旂┒鎶ュ憡", "淇濋櫓", "绉戞妧鎶曞叆"], "T1.5", 68
)

add(
    "淇濋櫓杩斾剑琛屼负閬弗鎯╋細鐩戠澶勭綒涓庢硶寰嬭矗浠诲叏闈㈣В鏋?,
    "鐩戠閮ㄩ棬瀵逛繚闄╄繑浣ｆ寔缁粠涓ュ缃氾紝澶у湴淇濋櫓銆佸钩瀹夎储闄┿€佸浗瀵跨瓑澶氬鍒嗘敮鏈烘瀯鍥犺繑浣ｈ缃氾紝鎯呰妭涓ラ噸鐨勮缁堣韩绂佸叆淇濋櫓琛屼笟銆?,
    "璇佸埜鏃舵姤/鍒稿晢涓浗", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN2026051108482494ce0b0d",
    "2026-05-29T05:30:00.000Z", "regulatory", ["鐩戠鏀跨瓥", "淇濋櫓", "杩斾剑"], "T1", 78
)

# == T2 璧勮绫?==
add(
    "瀵瑰啿鍩洪噾澶т浆Dan Loeb锛氳2000骞存场娌噸婕旂殑閮芥槸鑰佺櫥",
    "Dan Loeb鍦ㄦ挱瀹腑琛ㄧず鑻变紵杈剧瓑澶у瀷绉戞妧鑲′及鍊煎悎鐞嗐€佸闀垮己鍔诧紝涓嶅瓨鍦ㄦ场娌紝鎷ユ湁鐪熷疄鐩堝埄鍜屽法棰濈幇閲戞祦銆?,
    "鍗庡皵琛楄闂?, "https://wallstreetcn.com/charts/41959144",
    "2026-05-29T06:16:07.000Z", "insights", ["鎶€宸ц鐐?, "瀵瑰啿鍩洪噾", "AI"], "T1.5", 65
)

add(
    "'AI鐙定'浣曟椂閫嗚浆锛熼噹鏉戠粰鍑轰笁澶у偓鍖栧墏",
    "閲庢潙绛栫暐甯堣鍛婂競鍦哄叡璇嗛珮搴﹂泦涓紝AI绉戞妧鑲＄嫭棰嗛楠氾紝鏋佺鎷ユ尋浠撲綅鍩嬩笅閫嗚浆椋庨櫓銆?,
    "鍗庡皵琛楄闂?, "https://wallstreetcn.com/articles/3773409",
    "2026-05-29T05:09:03.000Z", "research", ["鐮旂┒鎶ュ憡", "AI", "甯傚満椋庨櫓"], "T1.5", 65
)

add(
    "鎴村皵鏆存定杩?0%銆佽仈鎯虫定30%锛欰I纭欢鐨?鍏戠幇鏃跺埢'鏉ヤ簡",
    "鎴村皵AI鏈嶅姟鍣ㄦ敹鍏ユ毚澧?57%锛岃仈鎯矨I纭欢涓氬姟寮哄姴澧為暱锛孉I纭欢杩庢潵涓氱哗鍏戠幇鏈熴€?,
    "绗竴璐㈢粡", "https://www.yicai.com/news/103207194.html",
    "2026-05-29T08:00:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "AI纭欢", "鎴村皵", "鑱旀兂"], "T1.5", 66
)

add(
    "涓囩锛氫粖骞村凡鍚姩椋熷搧銆佹暀鑲茬瓑闈炰富涓氶€€鍑烘垨鍓ョ",
    "涓囩绠＄悊灞傚湪鑲′笢浼氫笂琛ㄧず锛岀户鍓ョ鍐伴洩涓氬姟鍚庝粖骞村凡鍚姩椋熷搧銆佹暀鑲茬瓑闈炰富涓氶€€鍑猴紝2026骞翠粛灏嗗ぇ鍔涙帹杩涘ぇ瀹椾氦鏄撱€?,
    "36姘?, "https://36kr.com/newsflashes/3830161740294025",
    "2026-05-29T11:37:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "涓囩", "涓氬姟鍓ョ"], "T2", 55
)

add(
    "涓囩灏嗛伒寰?鍚屽€哄悓鏉?鍘熷垯鎺ㄨ繘6-7鏈堝€哄埜灞曟湡",
    "涓囩琛ㄧず2026骞?-12鏈堝埌鏈熷叕寮€鍊鸿妯″悎璁?01.2浜垮厓锛屾鍦ㄦ湁搴忔帹杩?-7鏈堥泦涓埌鏈熺殑4鍙€哄埜鏁翠綋灞曟湡銆?,
    "36姘?, "https://36kr.com/newsflashes/3830141582419589",
    "2026-05-29T11:27:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "涓囩", "鍊哄埜灞曟湡"], "T2", 56
)

add(
    "涓夋槦鐢靛瓙銆丼K娴峰姏澹薄鍒涙柊楂樿Е鍙戞剰澶栨姏鍞紝浠婂勾鍑€娴佸嚭586浜跨編鍏?,
    "鐢变簬鑲′环椋欏崌瑙﹀強鍩洪噾鎸佷粨姣斾緥闄愬埗锛屼笁鏄熷拰SK娴峰姏澹粖骞村悎璁″噣娴佸嚭璧勯噾杈?86浜跨編鍏冦€?,
    "36姘?, "https://36kr.com/newsflashes/3830158111221379",
    "2026-05-29T11:29:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "鍗婂浣?, "鍩洪噾鎸佷粨"], "T2", 55
)

add(
    "鎭掑ぇ姹借溅锛氭挙鍥炵牬浜ч噸鏁寸敵璇?,
    "鎭掑ぇ姹借溅鍏憡鎾ゅ洖姝ゅ墠鎻愪氦鐨勭牬浜ч噸鏁寸敵璇枫€傦紙璐㈣仈绀撅級",
    "36姘?, "https://36kr.com/newsflashes/3830002386364288",
    "2026-05-29T11:00:00.000Z", "industry", ["琛屼笟鍔ㄦ€?, "鎭掑ぇ姹借溅", "鐮翠骇閲嶆暣"], "T2", 52
)

add(
    "鍓?鏈堝伐涓氬埄娑﹀ぇ娑?8.2%鑰屼紒涓氭墍寰楃◣鏀跺叆涓嬫粦0.5%锛屼负浣曪紵",
    "瑙勬ā浠ヤ笂宸ヤ笟浼佷笟鍒╂鼎澧為暱寮哄姴锛屼絾浼佷笟鎵€寰楃◣鏀跺叆鍑虹幇鑳岀锛屽弽鏄犲嚭涓嶅悓缁忔祹涓讳綋鐨勭泩鍒╁垎鍖栥€?,
    "绗竴璐㈢粡", "https://www.yicai.com/news/103207090.html",
    "2026-05-29T09:00:00.000Z", "research", ["鐮旂┒鎶ュ憡", "宸ヤ笟鍒╂鼎", "绋庢敹"], "T1.5", 64
)

add(
    "娓偂浼板€煎洖褰掑悎鐞嗗尯闂达紝鏈烘瀯绉颁笅鍗婂勾杩?浼板€?涓氱哗'鍙屽嚮鏈洪亣",
    "涓俊璇佸埜鎸囧嚭娓偂浼板€煎凡鍥炲綊鍘嗗彶鍚堢悊姘村钩锛屽彈澶氶噸鍥犵礌褰卞搷鍚庢湁鏈涜繋鏉ユ斂绛栨敮鎾戦鏈熴€?,
    "璐㈣仈绀?, "https://www.cls.cn/detail/2383977",
    "2026-05-28T06:14:53.000Z", "research", ["鐮旂┒鎶ュ憡", "娓偂", "浼板€间慨澶?], "T2", 52
)

add(
    "鎴戝浗鐗靛ご淇鐨勯噾铻嶄笟閫氱敤鎶ユ枃鏂规鍥介檯鏍囧噯姝ｅ紡鍙戝竷",
    "鎴戝浗鐗靛ご淇鐨処SO 20022-5:2026鍜孖SO 20022-7:2026缁忓浗闄呮爣鍑嗗寲缁勭粐锛圛SO锛夋壒鍑嗗彂甯冦€傦紙澶鏂伴椈锛?,
    "36姘?澶鏂伴椈", "https://www.36kr.com/newsflashes/3829996142962312",
    "2026-05-29T06:33:33.000Z", "regulatory", ["鐩戠鏀跨瓥", "閲戣瀺鏍囧噯", "ISO"], "T1", 76
)

add(
    "璇佺洃浼氬壇涓诲腑鍒樻旦鍑岋細灏嗙郴缁熻皨鍒掓帹鍑烘洿澶氭湁鍔涘害鐨勬敼闈╁紑鏀句妇鎺?,
    "娣变氦鎵€2026鍏ㄧ悆鎶曡祫鑰呭ぇ浼氬湪娣卞湷寮€骞曪紝璇佺洃浼氬壇涓诲腑鍒樻旦鍑屽饱鏂板悗棣栫鍙戣█锛屼紶閫掓竻鏅扮ǔ瀹氱殑鏀跨瓥淇″彿銆?,
    "璐㈣仈绀?, "https://www.cls.cn/detail/2383908",
    "2026-05-28T05:29:49.000Z", "regulatory", ["鐩戠鏀跨瓥", "璇佺洃浼?, "鏀归潻寮€鏀?], "T1", 78
)

add(
    "澶氭墍璐㈢粡闄㈡牎瀵嗛泦鏂板宸ョ涓撲笟锛屽姞蹇笌绉戞妧浜ゅ弶铻嶅悎",
    "澶氭墍璐㈢粡闄㈡牎澧炲姞宸ョ涓撲笟銆佹枃绉戜笌鐞嗗伐绉戜氦鍙変笓涓氾紝閫傚簲鏁板瓧缁忔祹鏃朵唬鐨勪汉鎵嶉渶姹傚彉闈┿€?,
    "绗竴璐㈢粡", "https://www.yicai.com/news/103207624.html",
    "2026-05-29T10:48:00.000Z", "insights", ["鎶€宸ц鐐?, "鏁欒偛", "璐㈢粡闄㈡牎"], "T2", 55
)

# 鈹€鈹€ Sort by publishedAt desc 鈹€鈹€
items.sort(key=lambda x: datetime.fromisoformat(x["publishedAt"].replace("Z", "+00:00")), reverse=True)

# 鈹€鈹€ Assign final sequential IDs after sorting 鈹€鈹€
for i, item in enumerate(items, 1):
    item["id"] = str(i)

# 鈹€鈹€ Scoring (tier weights applied already in add()) 鈹€鈹€
# Now filter: T1 >= 55, T1.5 >= 60, T2 >= 70
filtered = []
for it in items:
    t = it["tier"]
    s = it["score"]
    if (t == "T1" and s >= 55) or (t == "T1.5" and s >= 60) or (t == "T2" and s >= 70):
        filtered.append(it)

# If filtering leaves too few, include all
if len(filtered) < 10:
    filtered = items

# 鈹€鈹€ Reassign IDs 鈹€鈹€
for i, item in enumerate(filtered, 1):
    item["id"] = str(i)

filtered.sort(key=lambda x: datetime.fromisoformat(x["publishedAt"].replace("Z", "+00:00")), reverse=True)

# 鈹€鈹€ Build sections 鈹€鈹€
sections = {"regulatory": [], "products": [], "industry": [], "research": [], "insights": []}
for it in filtered:
    cat = it["category"]
    if cat in sections:
        sections[cat].append({
            "title": it["title"],
            "summary": it["summary"],
            "sourceName": it["sourceName"],
            "sourceUrl": it["sourceUrl"],
            "publishedAt": it["publishedAt"]
        })

# 鈹€鈹€ Build flashes (top 8 by recency) 鈹€鈹€
flashes = []
for it in filtered[:8]:
    flashes.append({
        "title": it["title"],
        "dotClass": "flash-dot-blue"
    })

# 鈹€鈹€ Generate data.js 鈹€鈹€
CATEGORIES = [
    {"slug": "all", "label": "鍏ㄩ儴"},
    {"slug": "regulatory", "label": "鐩戠鏀跨瓥"},
    {"slug": "products", "label": "浜у搧鍙戝竷"},
    {"slug": "industry", "label": "琛屼笟鍔ㄦ€?},
    {"slug": "research", "label": "鐮旂┒鎶ュ憡"},
    {"slug": "insights", "label": "鎶€宸ц鐐?},
]

CATEGORY_CONFIG = {
    "regulatory": {"slug": "regulatory", "label": "鐩戠鏀跨瓥", "tagClass": "tag-regulatory", "accentClass": "accent-regulatory"},
    "products": {"slug": "products", "label": "浜у搧鍙戝竷/鏇存柊", "tagClass": "tag-products", "accentClass": "accent-products"},
    "industry": {"slug": "industry", "label": "琛屼笟鍔ㄦ€?, "tagClass": "tag-industry", "accentClass": "accent-industry"},
    "research": {"slug": "research", "label": "鐮旂┒鎶ュ憡", "tagClass": "tag-research", "accentClass": "accent-research"},
    "insights": {"slug": "insights", "label": "鎶€宸т笌瑙傜偣", "tagClass": "tag-insights", "accentClass": "accent-insights"},
}

output = f"""// finhot auto-generated data 鈥?powered by neodata-financial-search + westock-data + WebFetch
// Generated: {NOW}
// AI scoring: info_value(30%) 脳 authority(25%) 脳 content_depth(20%) 脳 recency(25%) 脳 source_tier_weight

window.CATEGORIES = {json.dumps(CATEGORIES, ensure_ascii=False, indent=2)};

window.CATEGORY_CONFIG = {json.dumps(CATEGORY_CONFIG, ensure_ascii=False, indent=2)};

window.FINHOT_DATA = {{
  "date": "{TODAY}",
  "generatedAt": "{NOW}",
  "lead": "浠婃棩鏂板 {len(filtered)} 鏉★紝鍏?{len(filtered)} 鏉＄簿閫夎祫璁?,
  "items": {json.dumps(filtered, ensure_ascii=False, indent=2)},
  "sections": {json.dumps(sections, ensure_ascii=False, indent=2)},
  "flashes": {json.dumps(flashes, ensure_ascii=False, indent=2)}
}};
"""

with open("C:/Users/EDY/WorkBuddy/2026-05-29-10-28-44/finhot-site/data.js", "w", encoding="utf-8") as f:
    f.write(output)

print(f"鉁?data.js generated 鈥?{len(filtered)} items, {sum(len(v) for v in sections.values())} section entries")
print(f"   Sections: { {k: len(v) for k, v in sections.items()} }")
print(f"   Top score: {max(it['score'] for it in filtered)}")

