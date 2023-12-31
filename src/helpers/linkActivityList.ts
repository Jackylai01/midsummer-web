import { StaticImageData } from 'next/image';

export interface IImage {
  img: StaticImageData;
  alt?: string;
}

export interface IActivity {
  title: string;
  organizer: string;
  location: string;
  time: string;
  description: string;
  link: string;
  images: IImage[];
}

export type Activities = {
  [key: string]: IActivity;
};

export const activitiesNorth: Activities = {
  '2023東北角福隆生活節': {
    title: '2023東北角福隆生活節',
    organizer: '交通部觀光局東北角暨宜蘭海岸國家風景區管理處',
    location: '新北市貢寮區福隆沙灘',
    time: '2023-06-09 ~ 2023-10-22',
    description:
      '福隆生活節為以福隆地區為核心，藉由自行車旅程串聯結合福隆自然風景、人文生活及產業特色，打造草地音樂會、在地市集、單車行的體驗行程，帶領遊客以自行車慢行的速度，深度遊歷體驗福隆在地生活魅力。本次活動將於112 年6月9日至10月22日期間辦理，並續推行熱門「東北角山海騎Chill玩-單車系列小旅行」一日遊程，包含「舊草嶺環狀線自行車道」，感受舊草嶺 隧道百年風華及卯澳漁村特色DIY；還有「貢寮雙溪小鎮聚落故事」徜徉昔日淡蘭古道及雙溪老街人文歷史。活動期間除結合「2023福隆國際沙雕藝術季」，並推出主題系列活動包含「饗食光-草地音樂會」、「追海風-風箏節活動」及「星空藝素村X文創市集」，期整體結合自行車旅程、福隆沙雕、草地音樂會、文創市集及展演活動等，營造屬於福隆夏日節慶活動。',
    link: 'https://www.necoast-nsa.gov.tw/',
    images: [
      {
        img: require('@public/Img/LinkActivity/北部區域/2023東北角福隆生活節01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023東北角福隆生活節02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023東北角福隆生活節03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023大稻埕夏日節': {
    title: '2023大稻埕夏日節',
    organizer: '臺北市政府觀光傳播局',
    location: '大稻埕碼頭、延平河濱公園',
    time: '2023-07-01 ~ 2023-08-20',
    description:
      '今年全新規劃「大稻埕夏日節」，活動將整合原有夏季活動如大稻埕情人節、河岸童樂會等，規劃創新型態、不同主題之帶狀活動，搭配妝點遊船、精彩煙火秀、美食、夏日飲品等，並與在地商圈業者合作推出專屬優惠活動，打造全臺最具代表性的夏季活動。',
    link: 'https://taipeisummer.travel.taipei/',
    images: [
      {
        img: require('@public/Img/LinkActivity/北部區域/2023大稻埕夏日節01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023大稻埕夏日節02.png')
          .default,
        alt: 'image 2',
      },
    ],
  },
  '2023宜蘭國際童玩藝術節': {
    title: '2023宜蘭國際童玩藝術節',
    organizer: '宜蘭縣政府',
    location: '宜蘭縣冬山河親水公園',
    time: '2023-07-01 ~ 2023-08-13',
    description:
      '2023宜蘭國際童玩藝術節以「童玩原宇宙」為主題，將冒險、科技、元宇宙等元素，融入「遊戲」、「展覽」、「演出」、「交流」四大活動主軸。【遊戲】今年加入更刺激的高空遊具設施；水域則有跨水池的大量體戲水設施。【展覽】主題展館規畫互動沉浸式場景、實境冒險體驗，讓遊客感受科技支援的創新童玩。【演出】世界各國的民俗團隊，帶來不同國家的民俗音樂、舞蹈及歌謠。加上遊藝踩街、夜間燈光秀等展演，從早到晚都精彩。【交流】「國家日」讓國外演出團隊和觀眾近距離接觸，並安排地方文化館擔任親善大使，讓團員認識宜蘭、愛上台灣。今年夏天邀請全國大小朋友，一起進入「童玩原宇宙」， 一探浩瀚無垠的童玩新世界。',
    link: 'https://www.yicfff.tw/',
    images: [
      {
        img: require('@public/Img/LinkActivity/北部區域/2023宜蘭國際童玩藝術節01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023宜蘭國際童玩藝術節02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023宜蘭國際童玩藝術節03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023島嶼生活節': {
    title: '2023島嶼生活節',
    organizer: '交通部觀光局北海岸及觀音山國家風景區管理處',
    location: '和平島地質公園、和平島',
    time: '2023-07-15 ~ 2023-09-30',
    description:
      '和平島地質公園──世界的秘境，一處擁有鬼斧神工般的海蝕地質景觀，島嶼生活節於仲夏時節舉辦，規劃包含水域遊憩活動、在地音樂會、島嶼市集、地方小旅行、沈浸式體驗等，串連在地文化、地方特產等一系列活動，以推廣基隆和平島地區海洋觀光及永續旅遊，並以「永續發展、海洋療癒」為主要行銷亮點，提升地方品牌觀光產值，嚮往美麗海岸不必遠走國外，北海岸即可享受罕見瑰麗的海岸風情。',
    link: '',
    images: [
      {
        img: require('@public/Img/LinkActivity/北部區域/2023島嶼生活節01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023島嶼生活節02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023島嶼生活節03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023新北市河海音樂季': {
    title: '2023新北市河海音樂季',
    organizer: '新北市政府',
    location: '淡水漁人碼頭、三重大都會公園',
    time: '2023-08-12, 13, 19, 20, 26, 27',
    description:
      '為了加深新北市政府支持獨立創作音樂之力量，本案希冀透過「淡水漁人舞臺」及「大都會舞臺」兩者夏日原創音樂季結合，擴大舉辦河海音樂季，深化培植獨立音樂之發展，使之成為獨立樂團的大型原創音樂基地。透過原創音樂新觀光元素流入淡水河上中下游，搭配淡水原有的夕陽、海景及河畔景色，使其成為大台北地區嶄新的河流文化，打造漁人碼頭及大都會公園的觀光新印象，以增加旅客駐留時間及再次來訪的意願。',
    link: 'https://www.facebook.com/r.o.music.fest/?locale=zh_TW',
    images: [
      {
        img: require('@public/Img/LinkActivity/北部區域/2023新北市河海音樂季-淡水漁人舞台01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023新北市河海音樂季-淡水漁人舞台02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023新北市河海音樂季-淡水漁人舞台03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023世界客家博覽會': {
    title: '2023世界客家博覽會',
    organizer: '桃園市政府觀光旅遊局',
    location:
      '世界館、台灣館、橫山書法藝術館、1895 乙未保台紀念公園、永安海螺文化體驗園區',
    time: '2023-08-11 ~ 2023-10-15',
    description:
      '2023 年 8 月 11 日至 10 月 15 日「2023 世界客家博覽會」將於桃園登場，展現世界客家族群的多元面貌，進一步開啟客家文化傳承與創新。博覽會共有十大主副展館，包含世界館、台灣館、橫山書法藝術館、1895 乙未保台紀念公園、永安海螺文化體驗園區等，呼應活動主軸「Travel to Tomorrow 天光日个客家」，以多元、在地、扎根、共榮為策展規劃，結合不同區域的客家文化、歷史及產業等議題，展現客家文化展示過去，航向未來的精神意義。為鼓勵民眾參加世界客家博覽會並體驗在地特色遊程，將結合世客博主、副場館並串聯周邊景點、休閒農場、觀光工廠、特色店家、體驗等規劃遊程，提供參訪民眾多元化的旅遊選擇。',
    link: 'https://www.hakkaexpo2023.tw/homePage',
    images: [],
  },
  '2023竹北市白色戀人海洋三部曲': {
    title: '2023竹北市白色戀人海洋三部曲',
    organizer: '新竹縣竹北市公所文化觀光課',
    location: '竹北市新月沙灘',
    time: '2023-08-05 ~ 2023-08-19',
    description:
      '「2023竹北市白色戀人海洋三部曲」活動，計畫以竹北市新月沙灣元素轉變成藝術，進行策展並包裝相關系列活動。藉由「首部曲：曙光」淨粹沙灘，賦予新月沙灘新生命，讓民眾參與淨灘活動，共同攜手護海洋；「二部曲：傳藝重現」配合古老捕魚技術──夢迴牽罟，辦理文化體驗活動，推展海洋教育。「三部曲：新月的新生」藝術建立「竹北市新月沙灘」文化品牌，構建地方風格。',
    link: 'https://www.zhubei.gov.tw/travel/',
    images: [
      {
        img: require('@public/Img/LinkActivity/北部區域/2023竹北市白色戀人海洋三部曲01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023竹北市白色戀人海洋三部曲02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023竹北市白色戀人海洋三部曲03.png')
          .default,
        alt: 'image ',
      },
    ],
  },
  '愛戀基隆夜 光影節尋寶': {
    title: '愛戀基隆夜 光影節尋寶',
    organizer: '基隆市政府觀光及城市行銷處',
    location: '基隆市',
    time: '2023年08月~9月',
    description:
      '為促進基隆市觀光與區域均衡發展，預計於112 年7月1日至8月31日暑假期間辦理「2023夏戀基隆夜 藝術光影節」，在基隆市7大行政區設置藝術光影裝置，以「燈光作品」及「造景光廊」呈現，活動將創造具有童趣、詼諧感的故事性IP，透過卡通人格化的形塑、結合在地元素，打造鮮明、歡樂的品牌形象；開展當日，將於正濱漁港彩虹屋舉辦點燈音樂市集，推廣基隆在地好物。本活動於7大展區設置QR code，經由掃描呈現IP故事內容並辦理集章抽獎，藉此串聯7大行政區之亮點、特色餐廳與風格店家，行銷這座城市的多元魅力。',
    link: 'https://www.klcg.gov.tw/tw/city',
    images: [],
  },
  '2023新竹市國際風箏節': {
    title: '2023新竹市國際風箏節',
    organizer: '新竹市政府',
    location: '新竹漁港國際風箏賽場',
    time: '2023-09-09 ~ 2023-09-10',
    description:
      '為活絡新竹漁港周邊觀光及遊憩相關產業，本府結合新竹強勁風勢等特色，於每年8月底9月初舉辦新竹市國際風箏節，邀請所有人共襄盛舉。新竹擁有面積8公頃草皮，是全國最大、最專業的風箏放飛場地，特技風箏、主題風箏、夜光風箏等各式各樣的表演都可於風箏節欣賞到，展演中也會穿插各式藝文活動，如劇團或親子互動表演及樂團演出等，另外為了增加民眾的參與感，將安排風箏彩繪DIY活動、親子漁樂等活動，讓民眾有更多的手作機會。若想親眼感受數十種風箏在天空中翱翔的壯觀景象，新竹市國際風箏節會是一個很棒的選擇！',
    link: 'https://www.facebook.com/profile.php?id=100064006415974',
    images: [
      {
        img: require('@public/Img/LinkActivity/北部區域/2023新竹市國際風箏節01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023新竹市國際風箏節02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/北部區域/2023新竹市國際風箏節03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
};

export const activitiesMiddle: Activities = {
  '2023夏至藝術節': {
    title: '2023夏至藝術節',
    organizer: '雲林縣、嘉義市、嘉義縣、臺南市',
    location: '歡迎參考官網「夏至藝術節場地資訊」',
    time: '2023-06-24 ~ 2023-09-03',
    description:
      '為整合並提升雲嘉南地區藝文動能，105 年提議由雲林縣、嘉義市、嘉義縣與臺南市新營四個文化中心規劃促成劇場連線，著重區域間的劇場合作與觀眾開發。2016 年開辦「夏至藝術節」，開始推動各縣市間的行政合作與藝文資源統合，採取區域整合與服務加值的概念，以嶄新的劇場體驗結合藝文輕旅行，驅動縣市間的藝文動能、增加民眾參與多元藝術演出的機會，確立「雲嘉嘉營劇場連線」的必要與價值。「雲嘉嘉營劇場連線」計畫，在行政協力的基礎上，致力於劇場空間連線、在地藝文團隊流動、藝文資源共享、潛在觀眾開發、一日文化生活圈等跨域目標，讓雲嘉嘉營地區劇場成為未來南部藝文發展的核心之一。',
    link: 'https://summertheatrefestival.tainan.gov.tw/',
    images: [],
  },
  '2023南投星空季': {
    title: '2023南投星空季',
    organizer: '南投縣政府觀光處',
    location: '南投縣仁愛鄉、信義鄉、鹿谷鄉',
    time: '112年6月27日10時至12時 (宣傳記者會)112年7月1日17時至20時 (信義鄉東埔 茶席晚會)112年7月8日17時至20時 (鹿谷麒麟潭 音樂晚會)112年7月22日17時至20時 (仁愛鄉清境國小 音樂晚會)112年9月30日17時至20時 (仁愛鄉清境高空觀景平台 野餐賞月晚會)',
    description:
      '南投縣擁有眾多鬼斧神工的絕美景致與自然環境，合歡山暗空公園更是全亞洲第三座、全台第一座國際認證的暗空公園。從2019年開始舉辦的南投星空季，就是為了推廣南投最具特色的觀星旅遊。到合歡山，只要透過手機，就能輕易拍到群星璀璨；只要抬頭仰望，就能看到壯麗銀河一瀉千里。為推廣天文教育，同時推廣觀星旅遊，發展星空產業鏈，南投縣政府於112 年7月1日至9月30日間辦理「2023南投星空季」，其中包含遨遊星空主題音樂會、特色茶席體驗晚會、野餐賞月晚會等四場主題活動，以及星空導覽解說人才培育課程。透過於南投縣境內不同活動地點的實體活動舉辦，打造特色觀星主題旅遊品牌，同時配合鳶峰劇場與鳶峰新設天文設施啟用，舉辦相關活動，帶動天文熱潮。',
    link: 'https://www.rs-event.com.tw/2023NSNF/a02.html',
    images: [
      {
        img: require('@public/Img/LinkActivity/中部區域/2023南投星空季01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/2023南投星空季02.png')
          .default,
        alt: 'image 2',
      },
    ],
  },
  '2023光復新村光影節活動': {
    title: '2023光復新村光影節活動',
    organizer: '臺中市政府勞工局',
    location: '光復新村青創基地',
    time: '2023-07-08 ~ 2023-08-27',
    description:
      '夏季的光復新村白天氣候炎熱，傍晚至入夜在微風輕撫下，樹影婆娑，非常適合漫步光復新村，為創造光復新村夜間特色，以「光復新村首度夜間開放」為主題，特別規劃至少三個中型夜間裝置藝術，例如眷村光廊（燈飾佈置）、螢光塗鴉牆、光影裝置藝術等，並辦理「露天電影院」活動，讓民眾感受眷村的夜間之美。配合夏日企劃，平時創業青年主要營業打烊時間為下午5時，延長營業時間至夜間10時，創造有別於白天的光復新村印象，歡迎民眾把握機會於夜間至光復新村遊玩！',
    link: 'https://www.tcdream.taichung.gov.tw/',
    images: [
      {
        img: require('@public/Img/LinkActivity/中部區域/光復新村光影節活動01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/光復新村光影節活動02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/光復新村光影節活動03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '「彰濱~海FUN一夏」慶安水樂園': {
    title: '「彰濱~海FUN一夏」慶安水樂園',
    organizer: '彰化縣政府',
    location: '彰化縣自然生態教育中心',
    time: '2023-07-01 ~ 2023-09-30',
    description:
      '為提供民眾在炎炎夏日享受玩水的樂趣，於今(112)年暑假期間辦理「彰濱~海FUN一夏」慶安水樂園活動，結合時下最流行的SUP、獨木舟及水上自行車等水上體驗，陸上還有海洋市集、兒童氣墊設施及體驗遊戲，眾多精采的活動內容，等你來體驗。',
    link: 'https://tourism.chcg.gov.tw/202306B/index.html',
    images: [
      {
        img: require('@public/Img/LinkActivity/中部區域/彰濱~海FUN一夏 慶安水樂園01-天下雜誌拍攝.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/彰濱~海FUN一夏 慶安水樂園02-彰化縣直立版運動協會提供.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/彰濱~海FUN一夏 慶安水樂園03-彰化縣直立版運動協會提供.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023參山呷涼節': {
    title: '2023參山呷涼節',
    organizer: '交通部觀光局參山國家風景區管理處',
    location:
      '南庄遊客中心、獅山遊客中心、谷關遊客中心、梨山遊客中心、八卦山脈生態遊客中心、松柏嶺遊客中心',
    time: '2023-07-22 ~ 2023-08-27',
    description:
      '跳上一段活潑的吃冰舞，並在指定貼文分享留言tag@兩位好友，就能現場吃到參山各地的特色冰棒。',
    link: 'https://www.facebook.com/trimnt/?locale=zh_TW',
    images: [
      {
        img: require('@public/Img/LinkActivity/中部區域/2023參山呷涼節01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/2023參山呷涼節02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/2023參山呷涼節03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023車埕古玩音樂節': {
    title: '2023車埕古玩音樂節',
    organizer: '交通部觀光局日月潭國家風景區管理處',
    location: '車埕遊客中心周邊',
    time: '2023-08-05 ~ 2023-08-06',
    description:
      '「2023車埕古玩音樂節」，以「車埕」之地理環境、歷史人文、產業為背景，規劃系列創意趣味活動，如木製古童玩大地定向闖關活動、創意夏日涼品及音樂市集等多元元素。使國人於炎炎夏日中，來到車埕小鎮，徜徉山景、探訪文化、品嘗大日月潭地區特色涼（冰）品、聆聽小品輕快音樂及體驗木製古童玩遊戲等，打造不分年齡層皆可參與的夏季活動。歡迎大朋友小朋友來車埕輕鬆一夏，享受夏日美好時光。',
    link: 'https://www.sunmoonlake.gov.tw/zh-tw ',
    images: [],
  },
  '2023雲林海洋音樂祭': {
    title: '2023雲林海洋音樂祭',
    organizer: '雲林縣政府文化觀光處',
    location: '雲林縣四湖鄉三條崙海水浴場',
    time: '2023-08-05 ~ 08-13',
    description:
      '2023雲林海洋音樂祭系列活動即將於08/05-13連續1週舉行，本次活動場域劃分為嗨歌放送舞台區、親子泡泡水樂園區、沙灘趣味活動區、夏日市集區、森林秘境區等五大主題活動區，活動期間同時規劃有流行歌手樂團演出、親子泡泡水樂園、SUP體驗活動、在地美食小吃、農特產品販售、森林秘境體驗、撿廢淨灘、沙灘排球、雲西深度微旅行等，邀請大家把握盛夏時光，相揪來雲林縣四湖鄉三條崙海水浴場Chill一下，體驗雲西海線深度旅遊魅力。',
    link: 'https://www.facebook.com/yunlinoceanmusicfestival/',
    images: [
      {
        img: require('@public/Img/LinkActivity/中部區域/2023雲西海洋音樂祭01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/2023雲西海洋音樂祭02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/2023雲西海洋音樂祭03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023苗南海地景藝術節': {
    title: '2023苗南海地景藝術節',
    organizer: '苗栗縣政府',
    location: '苑裡鎮-苑港漁港廣場',
    time: '112年7月8日至112年8月27日',
    description:
      '2023苗南海地景藝術節,以「關於海」為主題，分別邀請到來自西班牙、法國、賽普路斯、保加利亞、伊朗等六位三組國外藝術家，來到苗栗縣駐村創作，和三位國內的藝術家，與BenQ明基基金會赞助的兩位藝術家共同創作八件以海洋為發想的作品，他們要用精湛的作品，來妝點苗南海美麗的海岸。',
    link: '',
    images: [
      {
        img: require('@public/Img/LinkActivity/中部區域/2023苗南海地景藝術節01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/2023苗南海地景藝術節02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/中部區域/2023苗南海地景藝術節03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
};

export const activitiesSouth: Activities = {
  '2023屏東黑鮪魚文化觀光季': {
    title: '2023屏東黑鮪魚文化觀光季',
    organizer: '屏東縣政府',
    location: '屏東縣東港鎮',
    time: '2023-05-06 ~ 2023-07-02',
    description:
      '2023屏東黑鮪魚文化觀光季活動期間為5/6-7/2，今年的活動相當豐富，5/6在東港鎮辦理海洋音樂會，頒發今年第一鮪船家及拍得第一鮪店家獎牌，並邀請表演藝人演唱。		活動期間在東港候船室有造型扭蛋機及限量鮪魚燒，此外，扭蛋機搭配了今年紀念品4款「東港聲景鑰匙圈」，只要將手機開機放在鑰匙圈上，手機就會有4款不同主題的聲音（深海、捕獲、分享、文化）。另外6/10舉行美食推廣宴，推出10道運用在地新鮮食材製作的料理，並搭配歌廳秀的風格邀請藝人表演。且在活動期間在東港鎮有名的海產一條街光復路布置光環境，營造黑鮪魚季熱鬧氛圍。 ',
    link: 'https://www.amazing-pingtung.com/ptcf',
    images: [
      {
        img: require('@public/Img/LinkActivity/南部區域/2023屏東黑鮪魚文化觀光季01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023屏東黑鮪魚文化觀光季02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023屏東黑鮪魚文化觀光季03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023第八屆海灘貨幣減塑活動': {
    title: '2023第八屆海灘貨幣減塑活動',
    organizer: '大鵬灣國家風景區管理處',
    location: '屏東小琉球',
    time: '2023-07-07,13,16,22,26',
    description:
      '每場次規劃「那些海龜教我的塑」宣導課程，並透過淨灘、海灘貨幣等獎勵機制，整合台灣咾咕嶼協會餐具借用（琉行杯、咕咕幣、飲水地圖）措施，推廣小琉球朝永續旅遊發展。',
    link: 'https://www.facebook.com/groups/170953300127587/permalink/1286449785244594/',
    images: [
      {
        img: require('@public/Img/LinkActivity/南部區域/海灘貨幣減塑活動.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/海灘貨幣減塑活動01.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/海灘貨幣減塑活動03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '阿里山四季茶旅－夏季茶會': {
    title: '阿里山四季茶旅－夏季茶會',
    organizer: '交通部觀光局阿里山國家風景區管理處',
    location: '頂湖自然生態區',
    time: '2023-07-22',
    description:
      '阿里山近年來致力推動主題旅遊，針對茶旅行，結合阿里山的茶產業跟觀光，今年變換四季茶會活動風格，能夠貼近更多不同的族群，希望未來到阿里山遊玩的不同需求都能夠得到滿足，也希望透過推動能夠使得阿里山的產業類別能夠有更多元的發展。阿里山四季茶旅特別以不同形式的茶會方式分別舉行春夏秋冬四場茶會，以活潑生動的方式吸引不同族群的遊客來場阿里山的茶旅觀光。阿里山四季茶旅預計於4月22日（星期六）、23日（星期日）辦理春季茶鄉音樂會、7月22日（星期六）辦理夏季茶風野餐日、9月9日（星期六）辦理秋季望山茶旅及忘森茶旅、11月25日（星期六）冬季尋根茶旅活動。用茶香搭配阿里山的四季地景風貌，品茗阿里山不同季節的茶湯滋味，體驗多元、精緻及深度的茶旅行程。',
    link: 'http://www.ali-nsa.net/',
    images: [
      {
        img: require('@public/Img/LinkActivity/南部區域/阿里山四季茶旅－夏季茶會01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/阿里山四季茶旅－夏季茶會02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/阿里山四季茶旅－夏季茶會03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023旗津風箏節': {
    title: '2023旗津風箏節',
    organizer: '高雄市政府觀光局',
    location: '旗津海岸公園',
    time: '2023-07-22,23 ~ 2023-08-12,13,19,20',
    description:
      '旗津海岸地勢平坦開闊，視野無阻，風力穩定，更擁有高雄獨厚的海岸魅力、及深度文化底蘊。為了讓更多人體驗旗津夏日海洋魅力，今(112)年將於暑假辦理風箏節活動，邀請專業風箏團隊運用風箏放飛技巧展演風箏藝術作品，讓各具特色的大型軟體風箏、造型風箏等旗津海岸天空綻放，還有DIY親子趣味及夜間留客活動，歡迎民眾到高雄體驗夏日海洋魅力。',
    link: 'https://www.facebook.com/sandartkh/?locale=zh_TW',
    images: [
      {
        img: require('@public/Img/LinkActivity/南部區域/2023旗津風箏節01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023旗津風箏節02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023旗津風箏節03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },

  '2023鹽田‧夕陽‧享樂': {
    title: '2023鹽田‧夕陽‧享樂',
    organizer: '交通部觀光局雲嘉南濱海國家風景區管理處',
    location: '臺南市北門區井仔腳瓦盤鹽田',
    time: '112年7月29日至8月19日',
    description:
      '臺南北門區的井仔腳瓦盤鹽田建於西元1818年乘載了臺灣西南沿海的曬鹽歷史，歷經台鹽停止曬鹽作業並廢曬，而經由眾人努力，轉型成觀光鹽田，並持續曬鹽產鹽，所產出的鹽為臺灣獨特的天日鹽，鹽田也是臺灣碩果僅存的仍持續運作的瓦盤鹽田。井仔腳瓦盤鹽田夕陽美景眾所皆知，更獲得2021年「行銷類-旅遊攝影」金獎的殊榮，本活動以鹽田為舞台，傍晚時分演出搭配著夕陽美景，帶給觀眾不同的感受。活動預計邀請臺南在地或知名藝文表演團體，帶給觀眾多元且豐富的內容，以情境式方式呈現，讓觀眾都能沉浸在這獨特且美麗的舞台及演出。',
    link: 'https://www.facebook.com/swcoast/?locale=zh_TW',
    images: [
      {
        img: require('@public/Img/LinkActivity/南部區域/2023鹽田-饗樂01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023鹽田-饗樂02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023鹽田-饗樂03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023關子嶺夏日山車祭': {
    title: '2023關子嶺夏日山車祭',
    organizer: '交通部觀光局西拉雅國家風景區管理處',
    location: '臺南市白河區關子嶺溫泉區',
    time: '2023-07-22 ~ 2023-08-13',
    description:
      '一年一度的山車拉行活動以不動明王生日（農曆6月24日）當週擇1日舉辦，透過祭典山車的拉行，為在地祈福，祈求業績蒸蒸日上，源源不絕！為每年必來關子嶺參加的活動之一，今年除了山車拉行時安排有共同行進的團體，更在補給站加入了冰的元素，結合玉井芒果冰、白河蓮子冰棒，共同行銷推廣轄區夏季冰品。關子嶺夏日山車祭主打清涼、消暑，活動自7月22日開始至8月13日止，為期1個月的周末假日，結合假日市集、音樂沙龍，更在今年首度推出走唱那卡西，讓遊客享用美食的同時還可以奇遇獨具風格的那卡西演唱，讓人為之一亮、有別於以往的感受。',
    link: '',
    images: [
      {
        img: require('@public/Img/LinkActivity/南部區域/2023關子嶺夏日山車祭01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023關子嶺夏日山車祭02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023關子嶺夏日山車祭03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023東石海之夏': {
    title: '2023東石海之夏',
    organizer: '嘉義縣政府',
    location: '東石漁人碼頭',
    time: '2023-08-05, 06, 12, 13',
    description:
      '「東石海之夏」為嘉義縣暑期濱海觀光指標性活動，預計以流行音樂晚會、特色市集、親子樂園等活動規劃，宣傳嘉義縣夏季海洋觀光品牌意象，振興嘉義濱海觀光，提升活動周邊相關產業觀光收益。',
    link: 'https://www.facebook.com/2014dshot/?locale=zh_TW',
    images: [
      {
        img: require('@public/Img/LinkActivity/南部區域/2023東石海之夏01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023東石海之夏02.png')
          .default,
        alt: 'image 2',
      },
    ],
  },
  'Fun遊茂林‧清涼呷冰': {
    title: 'Fun遊茂林‧清涼呷冰',
    organizer: '交通部觀光局茂林國家風景區管理處',
    location: '茂林國家風景區管理處',
    time: '112年7月至9月',
    description:
      '本活動以高雄觀光圈區域業者（包括台灣好行、台灣觀巴營運單位）為範圍，推出消費滿額享涼夏優惠（可為贈禮或折價券，如：冰品券、涼風扇、涼感巾）；兌換冰品、飲品種類有高山愛玉、香蕉清冰、果汁及山茶等消暑飲品。快閃集客活動、20家以上兌換商家、相關文宣（各店家及本處服務台桌面立牌）、於各店家宣傳之海報印刷寄送等。集客快閃活動預計辦理地點於高雄大遠百廣場，預計邀集高雄觀光圈15攤至20攤業者參加（擺攤內容物有愛玉、霜淇沐、原生山茶等消暑飲品）',
    link: 'https://www.maolin-nsa.gov.tw/ ',
    images: [
      {
        img: require('@public/Img/LinkActivity/南部區域/Fun遊茂林‧清涼呷冰01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/Fun遊茂林‧清涼呷冰02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/Fun遊茂林‧清涼呷冰03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023臺南將軍吼夏日音樂節': {
    title: '2023臺南將軍吼夏日音樂節',
    organizer: '臺南市政府觀光旅遊局觀光行銷科',
    location: '臺南市將軍區將軍漁港',
    time: '2023-07-22 ~ 2023-07-23',
    description:
      '「臺南夏日音樂節-將軍吼」每年7-8月暑假期間擇一週舉辦2日於將軍漁港辦理，演唱會邀請歌手、團體及樂團輪番演出，並搭配施放煙火秀。本活動今（112）年即將邁入第12年，結合流行音樂及在地特色，成功打造深具臺南西濱在地產業及文化特色的音樂活動，以音樂、海鮮、小旅行引領年輕伙伴及遊客探索臺南在地風光，呈現獨具西濱特色的海洋音樂盛會，希望藉由地方產業與觀光活動整合行銷，促進臺南西濱地方產業活絡。',
    link: 'https://www.tainanmusic2023.com/',
    images: [
      {
        img: require('@public/Img/LinkActivity/南部區域/2023臺南夏日音樂節-將軍吼01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023臺南夏日音樂節-將軍吼02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/南部區域/2023臺南夏日音樂節-將軍吼03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
};

export const activitiesEast: Activities = {
  '2023東海岸大地藝術節暨月光海音樂會': {
    title: '2023東海岸大地藝術節暨月光海音樂會',
    organizer: '交通部觀光局東部海岸國家風景區管理處',
    location: '東海岸沿線、月光海音樂會-都歷園區',
    time: '2023年 6月21~22日、7月03-04日',
    description:
      '台灣東海岸壯闊迷人，有時優美有時狂野，有時神秘有時外放，生活在其中的人們，寂靜而自然，樸實而自由，藝術家們在這裡找到靈魂，將五感細膩地浸注在創作當中，一幕與海路照映的裝置藝術，或是一首寫進心緒的樂曲，都在東海岸大地藝術節（TEC LandArt Festival）裡，共存相依。東海岸大地藝術節，是交通部東海岸國家風景管理處從2015年起舉辦，集結了自然環境、部落生活、棲息居住、旅行壯遊為主題的藝術節。活動包含「駐地創作」邀請海內外藝術家們，在東海岸進行藝術品創作，「藝術生活平台」將大小藝文空間串起來、「月光音樂會及創藝市集」依著月亮灑下的波光粼粼，配上表演者的演出，還有在地風味市集，夏日藝文饗宴，邀請旅人體驗這迷人的東海岸。',
    link: 'https://www.teclandart.tw/zh/home/',
    images: [
      {
        img: require('@public/Img/LinkActivity/東部區域/2023東海岸大地藝術節暨月光海音樂會01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/東部區域/2023東海岸大地藝術節暨月光海音樂會02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/東部區域/2023東海岸大地藝術節暨月光海音樂會03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023臺灣國際熱氣球嘉年華': {
    title: '2023臺灣國際熱氣球嘉年華',
    organizer: '臺東縣政府',
    location: '臺東鹿野高台',
    time: '2023-06-30 ~ 2023-08-28',
    description:
      '臺灣國際熱氣球嘉年華是每年暑假年度最盛大、最具代表性的活動之一，「2023臺灣國際熱氣球嘉年華」將於6月30日至8月28日在鹿野高台登場。長達60天的活動包含熱氣球自由飛行、造型球展演、熱氣球繫留體驗、光雕音樂會及無人機表演，全球唯一的「媽祖造型球」也將於今年活動亮相。另外還有來自世界各國的造型球在鹿野高台輪番上陣，而結合臺東各地景點的熱氣球光雕音樂會也是每年不可錯過的重頭戲，今年更加碼無人機展演規模，從白天到夜晚，感受不同的熱氣球饗宴！（以下照片由臺東縣政府提供）',
    link: 'https://balloontaiwan.taitung.gov.tw/zh-tw',
    images: [
      {
        img: require('@public/Img/LinkActivity/東部區域/2023臺灣國際熱氣球嘉年華01-台東縣政府提供.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/東部區域/2023臺灣國際熱氣球嘉年華02-台東縣政府提供.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/東部區域/2023臺灣國際熱氣球嘉年華03-台東縣政府提供.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023紅面鴨FUN暑假－鯉魚潭森遊會': {
    title: '2023紅面鴨FUN暑假－鯉魚潭森遊會',
    organizer: '花蓮縣政府',
    location: '花蓮縣壽豐鄉鯉魚潭風景區',
    time: '2023-07-15 ~ 2023-08-13',
    description:
      '今年將以「鯉魚潭森遊會」為活動主軸，白天有活潑的大型裝置藝術展品水舞秀及各式街頭表演節目，晚間有精彩的水上劇場定目劇及水舞表演，假日更有煙火秀演出；潭邊另有互動裝置及裝置藝術，吸引遊客前往拍照打卡。',
    link: 'https://happy-duck.hl.gov.tw/',
    images: [
      {
        img: require('@public/Img/LinkActivity/東部區域/2023紅面鴨FUN暑假（鯉魚潭森遊會）01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/東部區域/2023紅面鴨FUN暑假（鯉魚潭森遊會）02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/東部區域/2023紅面鴨FUN暑假（鯉魚潭森遊會）03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023縱谷原遊會-部落食樂園': {
    title: '2023縱谷原遊會-部落食樂園',
    organizer: '交通部觀光局花東縱谷國家風景區管理處',
    location: '羅山遊客中心',
    time: '2023-08-26 ~ 2023-08-27',
    description:
      '「縱谷原遊會—部落食樂園」是結合在地部落體驗及行銷花東縱谷原住民多元多美食為主體的活動，亦為全國首創且規模最大部落食物體驗樂園。		縱管處自107年起推動部落旅遊品牌「縱谷原遊會」，以「部落食樂園」為主軸吸引遊客，匯聚過往培育之部落以樂園形式呈現部落特色，以飲食作為接觸部落文化的結點，從部落野外求生技能到居家生活，一次集結部落美食、美學、音樂及特色工藝，帶遊客認識物產豐饒的花東縱谷，同時讓縱谷間各部落在觀光產業上能彼此交流。活動集結超過20個原住民部落齊聚一堂，邀請花東縱谷地區包括阿美族、布農族、賽德克族、太魯閣和卑南族等原住民族群共同推出「山野獵場 」、「 mumu廚房」、「美學家屋」、「 限定野宴」、「山谷舞台」及「選品市集」等特色主題區場域。',
    link: 'https://www.jacreative.com.tw/hdt/ervtour/',
    images: [
      {
        img: require('@public/Img/LinkActivity/東部區域/2023縱谷原遊會-部落食樂園01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/東部區域/2023縱谷原遊會-部落食樂園02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/東部區域/2023縱谷原遊會-部落食樂園03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
};

export const activitiesIslands: Activities = {
  '2023澎湖國際海上花火節': {
    title: '2023澎湖國際海上花火節',
    organizer: '澎湖縣政府旅遊處',
    location: '澎湖縣馬公市觀音亭園區',
    time: '2023-04-20 ~ 2023-06-29',
    description: '舞台表演、10分鐘無人機展演、10分鐘花火表演',
    link: 'https://penghutravel.com/ThemeActivity/Fireworks/Fireworks2023',
    images: [
      {
        img: require('@public/Img/LinkActivity/離島區域/2023澎湖國際海上花火節01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/離島區域/2023澎湖國際海上花火節02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/離島區域/2023澎湖國際海上花火節03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023微光馬祖 GO好玩－夏日嘉年華微光音樂會': {
    title: '2023微光馬祖 GO好玩－夏日嘉年華微光音樂會',
    organizer: '馬祖南竿大北海遊憩區、北竿遊客中心',
    location: '敬請期待',
    time: '2023-07-22, 2023-08-19',
    description:
      '陽光溫煦、海風輕柔 ，以迷彩般的熱情，串聯優質藝術團隊，透過嘉年華式的趣味表演邀請大家一起到馬祖迎接盛夏、歡樂出遊。以星空下的大地為座席，邀請民眾一同以音樂佐地景，邀請知名歌手樂團輪番演唱，透過觸動心靈的好聲音，呼應馬祖的燦爛星空與海中的夜光，激盪出的耀眼光芒照亮夏之夜晚，吸引更多族群前來欣賞珍貴的戰地史蹟文化資產與離島好風光！',
    link: '',
    images: [],
  },
  '2023金門親子嘉年華': {
    title: '2023金門親子嘉年華',
    organizer: '金門縣政府',
    location: '金門縣',
    time: '2023-07-01 ~ 2023-08-31',
    description:
      'Fun暑假啦～難得假期，擔心小孩們只想宅在家中玩平板、看電視嗎？和我們一起遊金門放風吧！金門縣政府於暑假期間推出以親子體驗為主題的觀光活動，邀集業者共同投入參與，其中不乏在地最有特色的「來當一日蚵農吧」、「營區射擊體驗」、「手做高粱紅龜粿」……等體驗型活動，遊程內容豐富多樣又好玩，歡迎爸爸媽媽帶小孩到金門安心旅遊散心，感受金門特有人文風情、認識珍貴自然態資源，以及體驗戰地軍事設施，為親子暑假之旅留下難忘回憶。',
    link: 'https://kinmen.travel/',
    images: [
      {
        img: require('@public/Img/LinkActivity/離島區域/2023金門親子嘉年華01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/離島區域/2023金門親子嘉年華02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/離島區域/2023金門親子嘉年華03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023澎湖追風音樂節': {
    title: '2023澎湖追風音樂節',
    organizer: '交通部觀光局澎湖國家風景區管理處',
    location: '澎湖縣湖西鄉林投沙灘',
    time: '2023-08-19 ~ 2023-09-30',
    description:
      '結合林投、隘門「黃金沙灘」之優勢，及獨特地方人文特色，透過主題音樂表演、特色美食（文創品）派對及體驗套裝遊程等吸睛活動之串聯，增進澎湖黃金海岸線多元觀光魅力與熱潮，打造年輕旅遊品牌，藉此活絡地方經濟，活化周邊景點，創造海線觀光新契機。',
    link: '',
    images: [
      {
        img: require('@public/Img/LinkActivity/離島區域/澎湖國家風景區管理處2023澎湖追風音樂節01.png')
          .default,
        alt: 'image 1',
      },
      {
        img: require('@public/Img/LinkActivity/離島區域/澎湖國家風景區管理處2023澎湖追風音樂節02.png')
          .default,
        alt: 'image 2',
      },
      {
        img: require('@public/Img/LinkActivity/離島區域/澎湖國家風景區管理處2023澎湖追風音樂節03.png')
          .default,
        alt: 'image 3',
      },
    ],
  },
  '2023馬祖莒光定向越野暨夜跑活動': {
    title: '2023馬祖莒光定向越野暨夜跑活動',
    organizer: '連江縣交通旅遊局',
    location: '連江縣莒光鄉',
    time: '2023-10-14',
    description:
      '1.於112年10月14日辦理1場次星光夜跑賽活動。2.於112年9月16日起至12月15日止，辦理「定向越野尋寶趣活動」，鼓勵遊客至馬祖莒光鄉旅遊，尋找景點打卡，並致贈馬祖特色文宣品。',
    link: 'https://bao-ming.com/eb/content/5741#27552',
    images: [],
  },
};
