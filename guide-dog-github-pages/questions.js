'use strict';
const pair=(zh,en)=>({zh,en});
const SOURCES={"hkgda": ["HKGDA｜導盲犬服務、訓練、福利及退休", "https://www.guidedogs.org.hk/ArticlePage.aspx?id=209"], "fear": ["Guide Dogs for the Blind｜Overcoming Fearful Behavior", "https://www.guidedogs.com/puppy-raising-guidebook/puppy-socialization/puppy-socialization-roadmap/overcoming-fearful-behavior"], "manners": ["Guide Dog Foundation｜Essential Behaviors", "https://www.guidedog.org/PuppyRaising/PuppyRaiserManual/PuppyDevelopment/Essential_Behaviors.aspx"], "social": ["Guide Dog Foundation｜Socialization Guidelines", "https://www.guidedog.org/PuppyRaising/PuppyRaiserManual/StartHere/Puppy_Socialization_Guidelines.aspx"], "access": ["食環署 FEHD｜犬隻進入食物業處所", "https://www.fehd.gov.hk/english/licensing/dogs_in_food_premises/index.html"], "application": ["HKGDA｜寄養家庭申請表", "https://www.guidedogs.org.hk/UploadImages/headline/247/4_puppy-raiser-application-form-ce.pdf"], "hkseds": ["香港導盲犬服務中心 HKSEDS｜FAQ（與 HKGDA 不同機構）", "https://seeingeyedog.org.hk/faq"], "guidework": ["Guide Dogs for the Blind｜Guidework", "https://www.guidedogs.com/resources/client-resources/guide-dog-class-lecture-materials/guidework"], "clicker": ["Guide Dogs for the Blind｜Formal Training Phase 1", "https://www.guidedogs.com/puppy-raising-guidebook/beyond-puppy-raising/guide-dog-training/formal-guidework-training-phases/phase-1"], "igdf": ["IGDF｜Guide Dog Assessment and Training", "https://www.igdf.org.uk/about-us/starting-a-guide-dog-organisation/guide-dog-assessment-and-training/"], "etiquette": ["Guide Dogs for the Blind｜Blindness Etiquette", "https://www.guidedogs.com/resources/blindness-etiquette"], "dogetiquette": ["Guide Dogs for the Blind｜Guide Dog Etiquette", "https://www.guidedogs.com/resources/guide-dog-etiquette"], "limp": ["PDSA｜Limping and Stiffness in Dogs", "https://www.pdsa.org.uk/pet-help-and-advice/pet-health-hub/symptoms/limping-and-stiffness-in-dogs"], "targets": ["Guide Dogs for the Blind｜Clicker Techniques", "https://www.guidedogs.com/resources/client-resources/guide-dog-class-lecture-materials/clicker-techniques-part-one"]};
const QUESTIONS=[
  {
    "id": "s1-q01",
    "stage": 0,
    "number": 1,
    "source": "fear",
    "prompt": {
      "zh": "幼犬對陌生物件感到害怕，較合適的做法是？",
      "en": "A puppy is frightened by an unfamiliar object. What should you do?"
    },
    "options": [
      {
        "zh": "保持冷靜，拉開距離，讓牠按自己的步調觀察",
        "en": "Stay calm, increase distance and let it observe at its own pace"
      },
      {
        "zh": "強拉牠走近物件",
        "en": "Pull it closer to the object"
      },
      {
        "zh": "不理會牠的反應，繼續增加刺激",
        "en": "Ignore its reaction and add more stimulation"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "減低刺激並按指導逐步建立信心，避免強迫接近。",
      "en": "Reduce the pressure and build confidence gradually with guidance; do not force an approach."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q02",
    "stage": 0,
    "number": 2,
    "source": "manners",
    "prompt": {
      "zh": "應鼓勵幼犬撲向人來打招呼。",
      "en": "Puppies should be encouraged to jump on people when greeting."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "四腳著地的招呼方式較安全，撲人可能令人失去平衡。",
      "en": "Greeting with all four paws on the ground is safer; jumping can unbalance people."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q03",
    "stage": 0,
    "number": 3,
    "source": "social",
    "prompt": {
      "zh": "天氣暖和時，只要開少少車窗，就可以把幼犬獨留車內。",
      "en": "In warm weather, leaving a puppy alone in a parked car is safe if a window is slightly open."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "車內可迅速升溫；開窗縫不能確保安全，切勿獨留幼犬。",
      "en": "A car can heat up rapidly; a slightly open window does not make leaving a puppy safe."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q04",
    "stage": 0,
    "number": 4,
    "source": "fear",
    "prompt": {
      "zh": "為何要循序漸進讓幼犬熟悉吸塵機和交通等聲音？",
      "en": "Why gradually introduce puppies to sounds such as vacuum cleaners and traffic?"
    },
    "options": [
      {
        "zh": "訓練牠向陌生人吠叫",
        "en": "To encourage barking at strangers"
      },
      {
        "zh": "幫助牠逐步適應日常聲音",
        "en": "To build comfort with everyday sounds"
      },
      {
        "zh": "訓練牠一聽到聲音就逃跑",
        "en": "To teach it to flee whenever it hears noise"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "由低刺激、短時間開始，觀察反應；不是突然用巨響嚇牠。",
      "en": "Start gently and briefly, monitoring its response; this is not about startling it with loud noise."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q05",
    "stage": 0,
    "number": 5,
    "source": "hkgda",
    "prompt": {
      "zh": "HKGDA 網頁列出的寄養家庭計劃，居留時間大約多久？",
      "en": "How long is the puppy-raising placement listed on HKGDA’s services page?"
    },
    "options": [
      {
        "zh": "1 個月",
        "en": "1 month"
      },
      {
        "zh": "12–16 個月",
        "en": "12–16 months"
      },
      {
        "zh": "3 年",
        "en": "3 years"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "寄養時間與開始訓練的年齡不同；安排會按犬隻發展調整。",
      "en": "Placement duration differs from age at training; arrangements depend on the dog’s development."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q06",
    "stage": 0,
    "number": 6,
    "source": "hkgda",
    "prompt": {
      "zh": "寄養家庭的培育目標包括哪些？（多選）",
      "en": "Which are puppy-raising goals? Select all that apply."
    },
    "options": [
      {
        "zh": "建立不亂撿食的習慣",
        "en": "Build appropriate food manners"
      },
      {
        "zh": "按指導接觸公共交通",
        "en": "Introduce public transport with guidance"
      },
      {
        "zh": "自行教授進階導盲技術",
        "en": "Independently teach advanced guidework"
      },
      {
        "zh": "如廁及基本服從訓練",
        "en": "Toileting and basic obedience"
      }
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": {
      "zh": "寄養建立生活及社會化基礎；進階引導由專業人員教授。",
      "en": "Raisers build life skills and social confidence; specialists teach advanced guiding."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q07",
    "stage": 0,
    "number": 7,
    "source": "access",
    "prompt": {
      "zh": "在香港安排幼犬到餐廳社會化前，哪些做法合理？（多選）",
      "en": "Before a puppy’s restaurant socialisation outing in Hong Kong, which steps are appropriate? Select all that apply."
    },
    "options": [
      {
        "zh": "先向機構及場地確認受訓犬進出安排",
        "en": "Check trainee access arrangements with the organisation and venue"
      },
      {
        "zh": "只靠背心便假設所有地方必須接納",
        "en": "Assume a vest alone guarantees entry everywhere"
      },
      {
        "zh": "遵守相關衛生及場地安排",
        "en": "Follow relevant hygiene and venue arrangements"
      },
      {
        "zh": "聲稱所有餐廳都一律禁止寵物狗",
        "en": "Claim that every restaurant bans pet dogs"
      }
    ],
    "answer": [
      0,
      2
    ],
    "explanation": {
      "zh": "導盲犬與寵物犬的安排不同；2026 年已有獲准讓狗進入的餐廳，不能一概而論。",
      "en": "Guide-dog and pet-dog arrangements differ. Approved dog-friendly restaurants exist in 2026, so blanket claims are inaccurate."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q08",
    "stage": 0,
    "number": 8,
    "source": "hkgda",
    "prompt": {
      "zh": "幼犬寄養期間最重要的培育任務是？",
      "en": "What is the main developmental task during puppy raising?"
    },
    "options": [
      {
        "zh": "進階引導",
        "en": "Advanced guiding"
      },
      {
        "zh": "社會化與生活適應",
        "en": "Socialisation and everyday adjustment"
      },
      {
        "zh": "只需吃喝玩樂",
        "en": "Only eating, drinking and playing"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "寄養期建立面對日常環境的基礎。",
      "en": "Puppy raising builds a foundation for everyday environments."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q09",
    "stage": 0,
    "number": 9,
    "source": "social",
    "prompt": {
      "zh": "幼犬狀態合適且已有安排時，社會化應包括什麼？",
      "en": "When the puppy is ready and access is arranged, what should socialisation include?"
    },
    "options": [
      {
        "zh": "只留在家",
        "en": "Staying home only"
      },
      {
        "zh": "永遠只去同一公園",
        "en": "Always visiting just one park"
      },
      {
        "zh": "循序接觸交通、商店及不同環境",
        "en": "Gradual exposure to transport, shops and varied environments"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "按幼犬反應及機構指導安排多元經驗，避免過量刺激。",
      "en": "Offer varied experiences at a suitable pace, following programme guidance."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q10",
    "stage": 0,
    "number": 10,
    "source": "manners",
    "prompt": {
      "zh": "幼犬在餐桌旁討食，寄養家庭應如何處理？",
      "en": "A puppy begs beside the dining table. What should its raisers do?"
    },
    "options": [
      {
        "zh": "餵自己的飯菜",
        "en": "Share their meal"
      },
      {
        "zh": "依計劃餵食，不從餐桌餵食",
        "en": "Follow its feeding plan and do not feed from the table"
      },
      {
        "zh": "偶爾餵食鼓勵討食",
        "en": "Sometimes reward begging"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "維持一致的餐桌禮儀及飲食安排。這不代表所有人類食材都有毒。",
      "en": "Maintain consistent food manners and the feeding plan; this does not mean every human ingredient is toxic."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q11",
    "stage": 0,
    "number": 11,
    "source": "manners",
    "prompt": {
      "zh": "在要求不上家具的幼犬培育計劃中，家人應如何安排睡覺位置？",
      "en": "In a puppy programme with a no-furniture rule, where should the puppy sleep?"
    },
    "options": [
      {
        "zh": "隨意上床或梳化",
        "en": "On any bed or sofa"
      },
      {
        "zh": "一致使用安排好的狗床",
        "en": "Consistently use its designated dog bed"
      },
      {
        "zh": "只有某位家人可以讓牠上梳化",
        "en": "One family member may allow the sofa"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "各家庭成員應遵守相同計劃規則；不是說所有寵物都不能上家具。",
      "en": "Everyone should follow the programme’s rules; this is not a rule for every pet dog."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q12",
    "stage": 0,
    "number": 12,
    "source": "hkgda",
    "prompt": {
      "zh": "HKGDA 寄養要求表列明，家中小朋友應為？",
      "en": "What minimum child age is listed in HKGDA’s puppy-raising requirements?"
    },
    "options": [
      {
        "zh": "1–2 歲",
        "en": "1–2 years"
      },
      {
        "zh": "3–4 歲",
        "en": "3–4 years"
      },
      {
        "zh": "5 歲或以上",
        "en": "5 years or older"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "這是該計劃列明的條件，申請時仍需接受評估。",
      "en": "This is a listed programme condition; applications are still assessed."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q13",
    "stage": 0,
    "number": 13,
    "source": "application",
    "prompt": {
      "zh": "申請寄養前，應安排每天固定的散步、訓練及互動時間。",
      "en": "Before applying to raise a puppy, the family should plan regular daily walks, training and interaction."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "HKGDA 申請表會詢問能否提供這些日常活動。",
      "en": "HKGDA’s application asks whether the family can provide these daily activities."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q14",
    "stage": 0,
    "number": 14,
    "source": "hkgda",
    "prompt": {
      "zh": "養過寵物多年，是否可免去寄養計劃的準備？",
      "en": "Does years of pet ownership replace puppy-raising preparation?"
    },
    "options": [
      {
        "zh": "可以自動豁免",
        "en": "Yes, automatically"
      },
      {
        "zh": "只需幼犬準備",
        "en": "Only the puppy needs preparation"
      },
      {
        "zh": "仍需完成計劃要求的準備",
        "en": "No, programme preparation is still required"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "一般養狗經驗不能代替機構的專門指導。",
      "en": "Pet experience does not replace programme-specific guidance."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q15",
    "stage": 0,
    "number": 15,
    "source": "hkgda",
    "prompt": {
      "zh": "申請家庭已有寵物，HKGDA 如何評估？",
      "en": "How does HKGDA assess a home that already has pets?"
    },
    "options": [
      {
        "zh": "一律拒絕",
        "en": "Always rejects it"
      },
      {
        "zh": "家訪時評估",
        "en": "Assesses the pets during a home visit"
      },
      {
        "zh": "完全不考慮",
        "en": "Never considers them"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "是否適合共同生活需要評估，並非一概接受或拒絕。",
      "en": "Suitability is assessed rather than automatically accepted or rejected."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q16",
    "stage": 0,
    "number": 16,
    "source": "hkgda",
    "prompt": {
      "zh": "住所不准養狗，申請寄養前要先處理什麼？",
      "en": "If accommodation does not allow dogs, what must a prospective raiser address?"
    },
    "options": [
      {
        "zh": "取得合適的養狗許可與居住安排",
        "en": "Permission and suitable accommodation"
      },
      {
        "zh": "把幼犬藏起來",
        "en": "Hide the puppy"
      },
      {
        "zh": "永遠放在戶外",
        "en": "Keep it outdoors permanently"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "寄養要求包括居住地方准許飼養犬隻。",
      "en": "The programme requires accommodation that permits dogs."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q17",
    "stage": 0,
    "number": 17,
    "source": "hkgda",
    "prompt": {
      "zh": "接送幼犬到獸醫診所不屬於寄養家庭責任。",
      "en": "Taking the puppy to veterinary appointments is outside a raiser’s responsibilities."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "接送犬隻到獸醫診所是列明的責任之一。",
      "en": "Veterinary transport is a listed responsibility."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q18",
    "stage": 0,
    "number": 18,
    "source": "hkgda",
    "prompt": {
      "zh": "如何讓督導知道幼犬在家中的表現？",
      "en": "How can raisers share the puppy’s behaviour at home with supervisors?"
    },
    "options": [
      {
        "zh": "畢業時才說",
        "en": "Wait until graduation"
      },
      {
        "zh": "請別人代講",
        "en": "Ask another family to report"
      },
      {
        "zh": "定期提交寄養報告",
        "en": "Submit regular raising reports"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "報告可補充督導未能親身看到的日常觀察。",
      "en": "Reports share everyday observations supervisors may not see directly."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q19",
    "stage": 0,
    "number": 19,
    "source": "hkgda",
    "prompt": {
      "zh": "配對：①定時定點如廁 ②回應基本指令 ③熟悉人、動物和環境。哪組正確？",
      "en": "Match: ① appropriate toileting ② responding to basic cues ③ meeting people, animals and environments. Which is correct?"
    },
    "options": [
      {
        "zh": "①如廁訓練；②基本服從；③社會化",
        "en": "① toilet training; ② basic obedience; ③ socialisation"
      },
      {
        "zh": "①社會化；②如廁訓練；③基本服從",
        "en": "① socialisation; ② toilet training; ③ obedience"
      },
      {
        "zh": "①基本服從；②社會化；③如廁訓練",
        "en": "① obedience; ② socialisation; ③ toilet training"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "三種活動各有不同的培育目的。",
      "en": "These activities serve three different developmental purposes."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s1-q20",
    "stage": 0,
    "number": 20,
    "source": "hkgda",
    "prompt": {
      "zh": "接收幼犬後，家庭便不用再參與訓練和評估。",
      "en": "Once a family receives a puppy, it no longer needs to attend training or assessments."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "培育過程中仍要參與定期活動及評估。",
      "en": "Raisers continue participating in programme activities and assessments."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q01",
    "stage": 1,
    "number": 1,
    "source": "hkgda",
    "prompt": {
      "zh": "第一隻完成訓練的犬隻，應自動配給最先申請的人嗎？",
      "en": "Should the first dog to qualify automatically go to the first applicant?"
    },
    "options": [
      {
        "zh": "應只按排隊次序",
        "en": "Yes, waiting order alone decides"
      },
      {
        "zh": "不應，須評估人犬是否適合",
        "en": "No, dog and applicant must be suited"
      },
      {
        "zh": "每隻合格犬都適合任何人",
        "en": "Every qualified dog suits anyone"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "配對要考慮個別犬隻和申請者的需要。",
      "en": "Matching considers the individual dog and applicant."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q02",
    "stage": 1,
    "number": 2,
    "source": "hkgda",
    "prompt": {
      "zh": "哪一項最能描述訓練中的正向強化？",
      "en": "Which best describes positive reinforcement in training?"
    },
    "options": [
      {
        "zh": "做錯時大聲責罵",
        "en": "Scold mistakes loudly"
      },
      {
        "zh": "適當行為後給予牠重視的獎勵",
        "en": "Reward a desired behaviour with something the dog values"
      },
      {
        "zh": "不論表現一律取消休息",
        "en": "Cancel rest regardless of performance"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "獎勵可包括食物或讚許；重點是增加合適行為。",
      "en": "Rewards such as food or praise help strengthen desired behaviour."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q03",
    "stage": 1,
    "number": 3,
    "source": "hkseds",
    "prompt": {
      "zh": "依香港導盲犬服務中心的介紹，本港訓練常用哪種語言指令？",
      "en": "According to Hong Kong Seeing Eye Dog Services, which language is commonly used for training cues locally?"
    },
    "options": [
      {
        "zh": "廣東話",
        "en": "Cantonese"
      },
      {
        "zh": "英語",
        "en": "English"
      },
      {
        "zh": "普通話",
        "en": "Mandarin"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "該機構介紹以英文指令訓練；不代表狗天生只懂英文。",
      "en": "The organisation describes English training cues; dogs are not born understanding a particular language."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q04",
    "stage": 1,
    "number": 4,
    "source": "hkgda",
    "prompt": {
      "zh": "收到前進指令但有車輛駛過，導盲犬拒絕踏出，屬於什麼？",
      "en": "A dog refuses a forward cue when traffic makes it unsafe. What principle is this?"
    },
    "options": [
      {
        "zh": "智慧不服從",
        "en": "Intelligent disobedience"
      },
      {
        "zh": "盲目服從",
        "en": "Blind obedience"
      },
      {
        "zh": "隨機行動",
        "en": "Random action"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "導盲犬會學習拒絕可能帶來危險的指令。",
      "en": "Dogs learn to refuse cues that could lead to danger."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q05",
    "stage": 1,
    "number": 5,
    "source": "hkgda",
    "prompt": {
      "zh": "HKGDA 犬隻正式訓練期間的居住安排是？",
      "en": "Where do HKGDA dogs live during formal training?"
    },
    "options": [
      {
        "zh": "全程住犬舍",
        "en": "Always in kennels"
      },
      {
        "zh": "在家庭生活，同時接受訓練",
        "en": "With families while receiving training"
      },
      {
        "zh": "立即住進未來使用者家",
        "en": "Immediately with the future user"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "HKGDA 描述犬隻於訓練期間仍在家庭生活。",
      "en": "HKGDA describes family living during training."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q06",
    "stage": 1,
    "number": 6,
    "source": "targets",
    "prompt": {
      "zh": "在 GDB 的目標尋找訓練中，哪些是可練習的日常目標？",
      "en": "Which are everyday targets in GDB’s target-training approach?"
    },
    "options": [
      {
        "zh": "門口、座位、電梯",
        "en": "Doors, seats and lifts"
      },
      {
        "zh": "任意路人與氣味",
        "en": "Random people and scents"
      },
      {
        "zh": "只找其他狗",
        "en": "Only other dogs"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "目標尋找是在指令下找到特定設施，不是自行規劃全程。",
      "en": "Targeting locates a taught feature on cue; it does not plan an entire journey."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q07",
    "stage": 1,
    "number": 7,
    "source": "hkgda",
    "prompt": {
      "zh": "犬隻不適合導盲工作，機構可如何安排？",
      "en": "If a dog is unsuitable for guidework, what can the organisation arrange?"
    },
    "options": [
      {
        "zh": "無限期強迫訓練",
        "en": "Force training indefinitely"
      },
      {
        "zh": "野放",
        "en": "Release it into the wild"
      },
      {
        "zh": "合適家庭領養或轉職",
        "en": "A suitable home or another role"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "應保障犬隻福利，不勉強牠擔任不合適的工作。",
      "en": "Welfare matters; a dog should not be forced into an unsuitable role."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q08",
    "stage": 1,
    "number": 8,
    "source": "guidework",
    "prompt": {
      "zh": "引導中轉彎時，使用者如何與犬隻溝通？",
      "en": "How does a handler communicate a turn during guidework?"
    },
    "options": [
      {
        "zh": "只等狗吠三聲",
        "en": "Wait for three barks"
      },
      {
        "zh": "配合方向口令、手勢及身體位置",
        "en": "Coordinate directional cues, gestures and body position"
      },
      {
        "zh": "向後拉入馬路",
        "en": "Pull backwards into the road"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "轉彎是人犬協作，不依賴所有犬隻都做同一種橫身動作。",
      "en": "Turning is coordinated teamwork, not one universal sideways body signal."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q09",
    "stage": 1,
    "number": 9,
    "source": "clicker",
    "prompt": {
      "zh": "響片可以標記希望犬隻重複的行為，並與獎勵連結。",
      "en": "A clicker can mark a desired behaviour and connect it with a reward."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "GDB 使用響片標記行為；不是宣稱能精準到某一毫秒。",
      "en": "GDB uses clickers as behaviour markers, without claiming millisecond precision."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q10",
    "stage": 1,
    "number": 10,
    "source": "hkgda",
    "prompt": {
      "zh": "接近下行樓梯時，導盲犬的重要反應是？",
      "en": "What is an important trained response at descending stairs?"
    },
    "options": [
      {
        "zh": "立即跑下去",
        "en": "Run down immediately"
      },
      {
        "zh": "在落差前停下提示使用者",
        "en": "Stop at the change in level to alert the user"
      },
      {
        "zh": "吠叫直到有人來",
        "en": "Bark until someone comes"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "停步可提示地面落差，讓使用者作出下一步安排。",
      "en": "Stopping signals a change in level before the team proceeds."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q11",
    "stage": 1,
    "number": 11,
    "source": "igdf",
    "prompt": {
      "zh": "專業訓練會包括由蒙眼訓練員測試犬隻引導表現。",
      "en": "Professional training includes guidework assessment with a blindfolded trainer."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "這是受專業監督的評估，不是叫玩家自行蒙眼在街上練習。",
      "en": "This is a supervised professional assessment, not an invitation to practise blindfolded in public."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q12",
    "stage": 1,
    "number": 12,
    "source": "igdf",
    "prompt": {
      "zh": "通過狹窄通道時，犬隻要學習考慮什麼？",
      "en": "What must a dog learn when negotiating a narrow passage?"
    },
    "options": [
      {
        "zh": "只要自己過到就夠",
        "en": "Only its own clearance"
      },
      {
        "zh": "為使用者身體預留足夠空間",
        "en": "Enough clearance for the handler too"
      },
      {
        "zh": "盡快衝過去",
        "en": "Passing as fast as possible"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "安全引導要顧及人犬兩者的通行空間。",
      "en": "Safe guidework accounts for both dog and handler."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q13",
    "stage": 1,
    "number": 13,
    "source": "hkgda",
    "prompt": {
      "zh": "HKGDA 的配對訓練必須全程入住導盲犬中心。",
      "en": "HKGDA team training requires users to live at the guide dog centre throughout."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "協會列明訓練約三至四星期，香港大部分在使用者家中進行。",
      "en": "HKGDA describes about three to four weeks of training, mostly based at the user’s home in Hong Kong."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q14",
    "stage": 1,
    "number": 14,
    "source": "igdf",
    "prompt": {
      "zh": "導盲犬評估應包括哪些能力？（多選）",
      "en": "Which abilities belong in a guide-dog assessment? Select all that apply."
    },
    "options": [
      {
        "zh": "適應環境",
        "en": "Environmental adaptability"
      },
      {
        "zh": "應付干擾並保持專注",
        "en": "Focus around distractions"
      },
      {
        "zh": "安全引導與危險判斷",
        "en": "Safe guiding and hazard responses"
      },
      {
        "zh": "跳過兩米高障礙賽",
        "en": "Two-metre agility jumps"
      }
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": {
      "zh": "評估重點是工作適合度與安全，不是高跳表演。",
      "en": "Assessment concerns suitability and safe work, not high-jump performance."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q15",
    "stage": 1,
    "number": 15,
    "source": "hkgda",
    "prompt": {
      "zh": "樹枝高過犬隻，卻可能撞到使用者，犬隻應？",
      "en": "A branch clears the dog but could hit the user. What should the dog do?"
    },
    "options": [
      {
        "zh": "照常穿過",
        "en": "Continue underneath"
      },
      {
        "zh": "停下提示",
        "en": "Stop to alert"
      },
      {
        "zh": "加速",
        "en": "Speed up"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "引導需要顧及使用者高度的障礙物。",
      "en": "Guidework must account for hazards at the user’s height."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q16",
    "stage": 1,
    "number": 16,
    "source": "hkgda",
    "prompt": {
      "zh": "在清晰無阻路段練習什麼基本技能？",
      "en": "Which basic skill is practised on a clear route?"
    },
    "options": [
      {
        "zh": "跟隨路人",
        "en": "Following passers-by"
      },
      {
        "zh": "追逐氣味",
        "en": "Following scents"
      },
      {
        "zh": "從 A 點直線引導到 B 點",
        "en": "Guiding straight from A to B"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "直線引導是基本導盲技能。",
      "en": "Straight-line guiding is a basic guidework skill."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q17",
    "stage": 1,
    "number": 17,
    "source": "hkgda",
    "prompt": {
      "zh": "人犬團隊訓練只使用口頭指令。",
      "en": "Team training uses spoken commands only."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "動作及身體姿勢也參與溝通。",
      "en": "Gestures and body positions also communicate."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q18",
    "stage": 1,
    "number": 18,
    "source": "hkgda",
    "prompt": {
      "zh": "進階訓練中犯一次錯便自動淘汰。",
      "en": "One mistake in advanced training means automatic failure."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "學習容許犯錯，訓練會逐步建立能力。",
      "en": "Learning allows mistakes; skills develop gradually."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q19",
    "stage": 1,
    "number": 19,
    "source": "hkgda",
    "prompt": {
      "zh": "除了引導技巧，使用者還要學什麼？",
      "en": "Beyond guidework, what do users learn?"
    },
    "options": [
      {
        "zh": "日常照顧與犬隻福利",
        "en": "Daily care and welfare"
      },
      {
        "zh": "外科手術",
        "en": "Veterinary surgery"
      },
      {
        "zh": "專業育種",
        "en": "Professional breeding"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "搭檔關係包括照顧犬隻的日常需要。",
      "en": "Partnership includes caring for the dog’s daily needs."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s2-q20",
    "stage": 1,
    "number": 20,
    "source": "hkgda",
    "prompt": {
      "zh": "HKGDA 表示其 GDMI 資格依據哪個組織標準？",
      "en": "Whose standards underpin HKGDA’s GDMI qualifications?"
    },
    "options": [
      {
        "zh": "犬業俱樂部",
        "en": "A kennel club"
      },
      {
        "zh": "國際導盲犬聯盟 IGDF",
        "en": "International Guide Dog Federation (IGDF)"
      },
      {
        "zh": "寵物寄養協會",
        "en": "A pet-sitting association"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "IGDF 為導盲犬服務提供國際標準。",
      "en": "IGDF provides international standards for guide-dog services."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q01",
    "stage": 2,
    "number": 1,
    "source": "hkgda",
    "prompt": {
      "zh": "準備過馬路時，人犬如何分工？",
      "en": "How are responsibilities shared at a crossing?"
    },
    "options": [
      {
        "zh": "使用者評估交通並指揮，狗狗引導避障",
        "en": "The user assesses traffic and directs; the dog guides around hazards"
      },
      {
        "zh": "狗狗看交通燈，使用者只需跟隨",
        "en": "The dog reads the lights and the user just follows"
      },
      {
        "zh": "路人決定時間及目的地",
        "en": "Passers-by decide when and where to go"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "使用者掌握路線及過路判斷；犬隻協助安全引導，也會拒絕危險指令。",
      "en": "The user manages direction and crossing decisions; the dog guides and may refuse unsafe cues."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q02",
    "stage": 2,
    "number": 2,
    "source": "hkgda",
    "prompt": {
      "zh": "前往全新目的地，不能單靠導盲犬做什麼？",
      "en": "For a new destination, what cannot be left to the dog alone?"
    },
    "options": [
      {
        "zh": "規劃目的地及路線",
        "en": "Plan the destination and route"
      },
      {
        "zh": "避開附近障礙",
        "en": "Avoid nearby obstacles"
      },
      {
        "zh": "與夥伴同行",
        "en": "Travel with its partner"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "導盲犬不是導航地圖；使用者需要掌握路線。",
      "en": "A guide dog is not a navigation map; the user needs route knowledge."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q03",
    "stage": 2,
    "number": 3,
    "source": "hkgda",
    "prompt": {
      "zh": "為何不應撫摸正在工作的導盲犬？",
      "en": "Why should you not pet a working guide dog?"
    },
    "options": [
      {
        "zh": "會分散安全引導的注意力",
        "en": "It distracts the dog from safe guiding"
      },
      {
        "zh": "會弄髒鞍具",
        "en": "It dirties the harness"
      },
      {
        "zh": "所有導盲犬都會咬人",
        "en": "All guide dogs bite"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "外來接觸可能干擾工作，影響人犬安全。",
      "en": "Outside attention can interrupt guidework and affect safety."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q04",
    "stage": 2,
    "number": 4,
    "source": "hkgda",
    "prompt": {
      "zh": "公眾不應餵導盲犬，主要原因是？",
      "en": "Why should the public not feed a guide dog?"
    },
    "options": [
      {
        "zh": "攜帶狗糧違法",
        "en": "Carrying dog food is illegal"
      },
      {
        "zh": "狗狗會長得太快",
        "en": "It makes the dog grow too fast"
      },
      {
        "zh": "可能干擾工作及飲食安排",
        "en": "It may disrupt work and dietary management"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "陌生食物可能引致不適，亦會分散工作注意力。",
      "en": "Unfamiliar food may cause illness and distract the dog."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q05",
    "stage": 2,
    "number": 5,
    "source": "etiquette",
    "prompt": {
      "zh": "想協助月台上的導盲犬使用者，先做什麼？",
      "en": "Before helping a guide-dog user on a platform, what should you do?"
    },
    "options": [
      {
        "zh": "吹口哨叫狗",
        "en": "Whistle to the dog"
      },
      {
        "zh": "直接詢問使用者是否需要幫忙",
        "en": "Ask the user directly whether help is wanted"
      },
      {
        "zh": "拉住鞍具",
        "en": "Grab the harness"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "先問、等候同意，並尊重對方希望如何獲協助。",
      "en": "Ask first, wait for consent and respect how the person wants assistance."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q06",
    "stage": 2,
    "number": 6,
    "source": "etiquette",
    "prompt": {
      "zh": "與視障人士交談必須避免「明天見」等日常用語。",
      "en": "You must avoid everyday phrases such as “see you tomorrow” when speaking to a visually impaired person."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "自然交談即可，不需要刻意避開日常視覺用語。",
      "en": "Speak naturally; ordinary visual expressions need not be avoided."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q07",
    "stage": 2,
    "number": 7,
    "source": "hkgda",
    "prompt": {
      "zh": "遇到路面高低落差或不能安全通過的障礙，導盲犬會停下提示。",
      "en": "A guide dog stops to alert its user at changes in level or hazards it cannot safely pass."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "停步提示不等於所有障礙都要停；能安全繞過的路面障礙可繞行。",
      "en": "Stopping signals a hazard; passable obstacles may instead be safely avoided."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q08",
    "stage": 2,
    "number": 8,
    "source": "hkgda",
    "prompt": {
      "zh": "狗狗比預定時間更早急需如廁，應怎樣？",
      "en": "The dog urgently needs to toilet earlier than scheduled. What should happen?"
    },
    "options": [
      {
        "zh": "強迫等到預定時間",
        "en": "Force it to wait"
      },
      {
        "zh": "從此取消常規",
        "en": "Abandon routines forever"
      },
      {
        "zh": "盡快帶到合適地點",
        "en": "Reach a suitable place promptly"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "日常規律要兼顧即時身體需要。",
      "en": "Routines must allow for urgent physical needs."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q09",
    "stage": 2,
    "number": 9,
    "source": "dogetiquette",
    "prompt": {
      "zh": "自己的寵物想靠近工作犬，應如何做？",
      "en": "Your pet wants to approach a working guide dog. What should you do?"
    },
    "options": [
      {
        "zh": "容許打招呼",
        "en": "Allow a greeting"
      },
      {
        "zh": "從後接近",
        "en": "Approach from behind"
      },
      {
        "zh": "牽好寵物並保持距離",
        "en": "Keep your pet leashed and at a distance"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "友善的狗也可能分散工作犬注意力。",
      "en": "Even friendly pets can distract a working dog."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q10",
    "stage": 2,
    "number": 10,
    "source": "etiquette",
    "prompt": {
      "zh": "想拍攝使用者及導盲犬放上社交媒體，先做什麼？",
      "en": "Before photographing a user and dog for social media, what should you do?"
    },
    "options": [
      {
        "zh": "先拍後問",
        "en": "Photograph first, ask later"
      },
      {
        "zh": "徵求本人對拍照及用途的同意",
        "en": "Ask the person about both the photo and its intended use"
      },
      {
        "zh": "只問朋友",
        "en": "Ask only a friend"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "直接尊重使用者的選擇；看不見不代表不能作主。",
      "en": "Respect the person’s own choices; visual impairment does not remove autonomy."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q11",
    "stage": 2,
    "number": 11,
    "source": "hkgda",
    "prompt": {
      "zh": "在家卸鞍後，導盲犬可以在安全環境玩耍。",
      "en": "At home, off harness, a guide dog can play in a safe environment."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "犬隻需要休息及娛樂，並非全天候工作。",
      "en": "Dogs need rest and recreation; they do not work around the clock."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q12",
    "stage": 2,
    "number": 12,
    "source": "hkgda",
    "prompt": {
      "zh": "「不拒絕」原則也包括歡迎導盲犬團隊乘搭公共交通。",
      "en": "The “do not refuse” principle includes welcoming guide-dog teams on public transport."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "接納人犬團隊有助使用者參與社區生活；實際出行按交通機構安排。",
      "en": "Welcoming teams supports community participation; follow the operator’s travel arrangements."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q13",
    "stage": 2,
    "number": 13,
    "source": "hkgda",
    "prompt": {
      "zh": "配對後，誰是犬隻主要照顧者？",
      "en": "After matching, who is the dog’s main carer?"
    },
    "options": [
      {
        "zh": "使用者",
        "en": "The user"
      },
      {
        "zh": "訓練員",
        "en": "The trainer"
      },
      {
        "zh": "每週輪換的親戚",
        "en": "Relatives rotating weekly"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "日常照顧與合作有助建立信任。",
      "en": "Daily care and cooperation build trust."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q14",
    "stage": 2,
    "number": 14,
    "source": "hkgda",
    "prompt": {
      "zh": "家人可隨意輪流使用工作導盲鞍引導犬隻。",
      "en": "Family members may freely take turns handling the dog in its working harness."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "HKGDA 要求人犬工作由配對使用者掌握，家人不應隨意接替。",
      "en": "HKGDA places responsibility for the working partnership with the matched user."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q15",
    "stage": 2,
    "number": 15,
    "source": "hkgda",
    "prompt": {
      "zh": "導師在使用者家居或工作環境觀察，為何有用？",
      "en": "Why observe a team at home or work during aftercare?"
    },
    "options": [
      {
        "zh": "提供符合日常情況的建議",
        "en": "To offer advice suited to daily life"
      },
      {
        "zh": "取代所有將來溝通",
        "en": "To replace all future contact"
      },
      {
        "zh": "只評估房屋大小",
        "en": "Only to measure the home"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "熟悉環境中的觀察可指出實際合作需要。",
      "en": "Observation in familiar settings reveals practical partnership needs."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q16",
    "stage": 2,
    "number": 16,
    "source": "hkgda",
    "prompt": {
      "zh": "港鐵上，使用者雙腳圍住趴在腳邊的狗，可能原因是？",
      "en": "On the MTR, a user positions their feet around the resting dog. What might this mean?"
    },
    "options": [
      {
        "zh": "必定沒有禮貌",
        "en": "It must be rude"
      },
      {
        "zh": "保護狗狗免被踩到",
        "en": "They may be protecting the dog from being stepped on"
      },
      {
        "zh": "邀請公眾撫摸",
        "en": "They invite petting"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "狗狗可在車程中休息；保護腳邊空間是可能原因，不應單憑坐姿判斷。",
      "en": "Dogs may rest in transit. Protecting that space is a possible reason, not a judgement to make from posture alone."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q17",
    "stage": 2,
    "number": 17,
    "source": "dogetiquette",
    "prompt": {
      "zh": "安排自由玩耍前，為何卸下工作鞍？",
      "en": "Why remove the working harness before free play?"
    },
    "options": [
      {
        "zh": "區分休息與引導，避免裝備妨礙遊戲",
        "en": "To separate play from guidework and avoid equipment interfering"
      },
      {
        "zh": "戴鞍一定拒絕玩",
        "en": "Dogs always refuse play in harness"
      },
      {
        "zh": "所有鞍具都過重",
        "en": "All harnesses are too heavy"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "依指導安排休息及遊戲；公眾仍應先問使用者才接觸犬隻。",
      "en": "Follow guidance for rest and play; others should still ask the user before interacting."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q18",
    "stage": 2,
    "number": 18,
    "source": "dogetiquette",
    "prompt": {
      "zh": "人犬登上公共交通時，公眾應怎樣配合？",
      "en": "How should bystanders support a team boarding public transport?"
    },
    "options": [
      {
        "zh": "拉鞍具幫牠上車",
        "en": "Pull the harness aboard"
      },
      {
        "zh": "給團隊空間，讓使用者指揮",
        "en": "Give space and let the user direct the team"
      },
      {
        "zh": "叫狗自行找位",
        "en": "Call the dog to find a seat"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "不要搶走團隊控制；需要協助時先問使用者。",
      "en": "Do not take control of the team; ask the user before helping."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q19",
    "stage": 2,
    "number": 19,
    "source": "hkgda",
    "prompt": {
      "zh": "陌生人向工作犬遞食物，較好的回應是？",
      "en": "Someone offers food to a working dog. What is an appropriate response?"
    },
    "options": [
      {
        "zh": "為禮貌而接受",
        "en": "Accept to be polite"
      },
      {
        "zh": "讓狗自行決定",
        "en": "Let the dog decide"
      },
      {
        "zh": "禮貌拒絕並說明牠在工作",
        "en": "Politely decline and explain that it is working"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "可用簡短說明幫助對方理解不餵食的原因。",
      "en": "A brief explanation can help the person understand the no-feeding principle."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q20",
    "stage": 2,
    "number": 20,
    "source": "hkgda",
    "prompt": {
      "zh": "緊急疏散時，應否只靠導盲犬自行決定出口路線？",
      "en": "During evacuation, should the dog alone decide the exit route?"
    },
    "options": [
      {
        "zh": "應，狗知道所有出口",
        "en": "Yes, it knows every exit"
      },
      {
        "zh": "不應；使用者配合現場救援指示，犬隻協助引導",
        "en": "No; the user follows emergency guidance while the dog assists"
      },
      {
        "zh": "應隨機跟人群",
        "en": "Follow a random crowd"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "犬隻不能自行規劃陌生目的地；此為路線分工的情境應用，非專業疏散指引。",
      "en": "Dogs cannot plan an unfamiliar destination. This applies route-sharing principles, not a specialist evacuation protocol."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q21",
    "stage": 2,
    "number": 21,
    "source": "etiquette",
    "prompt": {
      "zh": "有人在路口給予未被要求的指示，使用者可如何回應？",
      "en": "Someone gives unsolicited directions at a crossing. How can the user respond?"
    },
    "options": [
      {
        "zh": "不加判斷立即前進",
        "en": "Proceed immediately without checking"
      },
      {
        "zh": "清楚表達是否需要協助",
        "en": "State whether assistance is wanted"
      },
      {
        "zh": "讓對方拉鞍具",
        "en": "Let them pull the harness"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "協助應尊重使用者的決定，不應取代其路線及安全判斷。",
      "en": "Assistance should respect the user’s decisions, not override them."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q22",
    "stage": 2,
    "number": 22,
    "source": "hkgda",
    "prompt": {
      "zh": "導盲犬每天大約花多少小時進行實際的通勤或引導工作？",
      "en": "Roughly how many hours a day does a guide dog typically spend actively working on commutes or guiding tasks?"
    },
    "options": [
      {
        "zh": "12 至 16 小時",
        "en": "12 to 16 hours"
      },
      {
        "zh": "2 至 4 小時",
        "en": "2 to 4 hours"
      },
      {
        "zh": "24 小時無間斷工作",
        "en": "24 hours non-stop"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "導盲犬並非全天候工作，實際引導與通勤通常只佔一天中的一小部分時間，其餘時間牠們會在安全環境下休息、玩耍和放鬆。",
      "en": "Active guiding makes up only a modest portion of the day, with the rest spent resting, playing, and relaxing."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q23",
    "stage": 2,
    "number": 23,
    "source": "dogetiquette",
    "prompt": {
      "zh": "家人按指導帶下班狗狗散步時，用什麼較合適？",
      "en": "For a family member’s agreed off-duty walk, what is appropriate?"
    },
    "options": [
      {
        "zh": "普通牽繩，依使用者及導師安排",
        "en": "An ordinary leash, following user and instructor guidance"
      },
      {
        "zh": "工作導盲鞍",
        "en": "The working harness"
      },
      {
        "zh": "在街上完全放繩",
        "en": "No leash on the street"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "休閒散步與工作引導不同，也須保持安全控制。",
      "en": "Recreational walking differs from guidework and still requires safe control."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q24",
    "stage": 2,
    "number": 24,
    "source": "hkgda",
    "prompt": {
      "zh": "導盲犬在港鐵行駛途中必須持續主動引導。",
      "en": "A guide dog must actively guide throughout an MTR ride."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "穩定乘車時可以在合適位置休息。",
      "en": "During the ride it can rest in an appropriate place."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q25",
    "stage": 2,
    "number": 25,
    "source": "hkgda",
    "prompt": {
      "zh": "人犬搭檔關係的重要基礎是？",
      "en": "What is an important foundation of the partnership?"
    },
    "options": [
      {
        "zh": "信任、清晰溝通及分工",
        "en": "Trust, clear communication and shared duties"
      },
      {
        "zh": "完全靠狗讀交通燈",
        "en": "Relying on the dog to read lights"
      },
      {
        "zh": "不停邀請公眾摸狗",
        "en": "Constantly inviting public petting"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "使用者與犬隻各有角色，合作才能安全同行。",
      "en": "User and dog have different roles and work together."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q26",
    "stage": 2,
    "number": 26,
    "source": "hkgda",
    "prompt": {
      "zh": "使用者短期住院而不能照顧犬隻，可向 HKGDA 查詢什麼？",
      "en": "If a user is temporarily unable to care for the dog while in hospital, what can they ask HKGDA about?"
    },
    "options": [
      {
        "zh": "重新開始幼犬訓練",
        "en": "Restarting puppy training"
      },
      {
        "zh": "立即退休",
        "en": "Immediate retirement"
      },
      {
        "zh": "暫托家庭安排",
        "en": "Temporary boarding"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "暫托安排按個案協調，並非自動退役。",
      "en": "Temporary care is arranged case by case; it does not mean automatic retirement."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q27",
    "stage": 2,
    "number": 27,
    "source": "limp",
    "prompt": {
      "zh": "狗狗突然跛行，一隻腳不能負重，應怎樣？",
      "en": "The dog suddenly cannot bear weight on a leg. What should you do?"
    },
    "options": [
      {
        "zh": "照常走",
        "en": "Keep walking"
      },
      {
        "zh": "停止工作，立即聯絡獸醫並安排安全運送，通知協會",
        "en": "Stop work, contact a vet promptly, arrange safe transport and tell the organisation"
      },
      {
        "zh": "自行給人用止痛藥",
        "en": "Give human painkillers"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "不能負重需要及時獸醫評估；不要自行用人用藥或勉強步行。",
      "en": "Inability to bear weight needs prompt veterinary assessment. Do not give human medication or force walking."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q28",
    "stage": 2,
    "number": 28,
    "source": "dogetiquette",
    "prompt": {
      "zh": "小孩想跟桌下戴鞍休息的狗玩，應怎樣說明？",
      "en": "A child wants to play with a harnessed dog under a café table. What should you explain?"
    },
    "options": [
      {
        "zh": "可以叫牠出來",
        "en": "Call it out"
      },
      {
        "zh": "可偷偷餵食",
        "en": "Feed it secretly"
      },
      {
        "zh": "請給牠空間，不要打擾",
        "en": "Give it space and do not disturb"
      }
    ],
    "answer": 2,
    "explanation": {
      "zh": "狗狗即使正在安靜休息，也不是邀請公眾接觸。",
      "en": "Quiet rest is not an invitation for public interaction."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q29",
    "stage": 2,
    "number": 29,
    "source": "hkgda",
    "prompt": {
      "zh": "不同導盲犬喜歡不同遊戲，放鬆活動應如何選？",
      "en": "Guide dogs enjoy different activities. How should relaxation be chosen?"
    },
    "options": [
      {
        "zh": "按個體偏好及導師建議",
        "en": "Follow individual preferences and instructor advice"
      },
      {
        "zh": "所有狗完全一樣",
        "en": "Use exactly the same activity for all"
      },
      {
        "zh": "畢業後禁止遊戲",
        "en": "Ban play after graduation"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "留意每隻犬隻喜歡的活動，可更好地支持其福利。",
      "en": "Individual preferences help guide appropriate enrichment."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s3-q30",
    "stage": 2,
    "number": 30,
    "source": "hkgda",
    "prompt": {
      "zh": "只見工作犬表情嚴肅，可以判斷什麼？",
      "en": "What can a serious expression alone tell you about a working dog?"
    },
    "options": [
      {
        "zh": "牠一定不喜歡主人",
        "en": "It dislikes its user"
      },
      {
        "zh": "不能單憑表情判斷福利不佳",
        "en": "It cannot alone prove poor welfare"
      },
      {
        "zh": "必須退休",
        "en": "It must retire"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "應綜合健康、行為及工作意願，不能只憑一個表情。",
      "en": "Consider health, behaviour and willingness to work, not one expression."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s4-q01",
    "stage": 3,
    "number": 1,
    "source": "hkgda",
    "prompt": {
      "zh": "退休導盲犬會回歸家庭作寵物生活。",
      "en": "Retired guide dogs return to family life as pets."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "退休後卸下引導職責，仍需要妥善照顧。",
      "en": "Retirement ends guidework, not the need for care."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s4-q02",
    "stage": 3,
    "number": 2,
    "source": "hkgda",
    "prompt": {
      "zh": "HKGDA 專業人員會評估犬隻退休安排。",
      "en": "HKGDA professionals assess retirement arrangements."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "安排按犬隻的健康、工作意願及環境等需要評估。",
      "en": "Arrangements consider health, willingness and environment."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s4-q03",
    "stage": 3,
    "number": 3,
    "source": "hkgda",
    "prompt": {
      "zh": "每隻導盲犬都有相同的硬性退休年齡。",
      "en": "Every guide dog has the same mandatory retirement age."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "約十歲是概括描述，不是每隻犬隻的硬性年齡。",
      "en": "About ten is a general description, not a mandatory age for every dog."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s4-q04",
    "stage": 3,
    "number": 4,
    "source": "hkgda",
    "prompt": {
      "zh": "哪些因素可能促成退休？",
      "en": "Which factors may lead to retirement?"
    },
    "options": [
      {
        "zh": "衰老",
        "en": "Ageing"
      },
      {
        "zh": "身體機能下降",
        "en": "Declining physical function"
      },
      {
        "zh": "健康問題",
        "en": "Health problems"
      },
      {
        "zh": "以上皆是",
        "en": "All of these"
      }
    ],
    "answer": 3,
    "explanation": {
      "zh": "退休需按個別犬隻狀況綜合評估。",
      "en": "Retirement is assessed individually."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s4-q05",
    "stage": 3,
    "number": 5,
    "source": "hkgda",
    "prompt": {
      "zh": "工作能力下降時，為何需要考慮退休？",
      "en": "Why consider retirement when working ability declines?"
    },
    "options": [
      {
        "zh": "保護使用者安全及犬隻福利",
        "en": "To protect user safety and dog welfare"
      },
      {
        "zh": "狗一定不想戴鞍",
        "en": "The dog must dislike its harness"
      },
      {
        "zh": "法律要求回收",
        "en": "The law requires reclaiming"
      },
      {
        "zh": "所有犬十歲必須離開",
        "en": "Every dog must leave at ten"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "不應勉強犬隻繼續承擔已無法安全完成的工作。",
      "en": "Dogs should not be pressed to continue work they cannot safely manage."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s4-q06",
    "stage": 3,
    "number": 6,
    "source": "hkgda",
    "prompt": {
      "zh": "退休安置優先考慮由誰照顧？",
      "en": "Who is considered first to care for a retired dog?"
    },
    "options": [
      {
        "zh": "原使用者",
        "en": "Original user"
      },
      {
        "zh": "非同住親戚",
        "en": "Non-resident relatives"
      },
      {
        "zh": "原寄養家庭",
        "en": "Original puppy raiser"
      },
      {
        "zh": "新家庭",
        "en": "A new family"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "在合適可行情況下，優先留在原使用者身邊。",
      "en": "Remaining with the user is prioritised when suitable and feasible."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s4-q07",
    "stage": 3,
    "number": 7,
    "source": "hkgda",
    "prompt": {
      "zh": "為何先考慮讓退休犬留在使用者身邊？",
      "en": "Why first consider keeping the retired dog with its user?"
    },
    "options": [
      {
        "zh": "法律賦予絕對權利",
        "en": "An absolute legal entitlement"
      },
      {
        "zh": "牠不再接受任何人",
        "en": "It accepts nobody else"
      },
      {
        "zh": "寄養家庭不照顧老犬",
        "en": "Raisers never care for old dogs"
      },
      {
        "zh": "有助延續已建立的關係",
        "en": "It preserves an established bond"
      }
    ],
    "answer": 3,
    "explanation": {
      "zh": "熟悉的陪伴可對雙方有益，但仍須能妥善照顧。",
      "en": "Familiar companionship may benefit both, provided care is feasible."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s4-q08",
    "stage": 3,
    "number": 8,
    "source": "hkgda",
    "prompt": {
      "zh": "使用者無法照顧退休犬，下一個優先考慮是？",
      "en": "If the user cannot care for the retired dog, who is considered next?"
    },
    "options": [
      {
        "zh": "政府部門",
        "en": "A government department"
      },
      {
        "zh": "原寄養家庭",
        "en": "Original puppy-raising family"
      },
      {
        "zh": "永久留犬舍",
        "en": "Permanent kennelling"
      },
      {
        "zh": "隨機路人",
        "en": "A random passer-by"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "協會先考慮原寄養家庭；不行才考慮其他合適領養人。",
      "en": "The original raising family is considered before other suitable adopters."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s4-q09",
    "stage": 3,
    "number": 9,
    "source": "hkgda",
    "prompt": {
      "zh": "一般大眾可以領養退休導盲犬嗎？",
      "en": "Can members of the public adopt a retired guide dog?"
    },
    "options": [
      {
        "zh": "只限已有狗的家庭",
        "en": "Only households already with a dog"
      },
      {
        "zh": "有機會，需具備愛心及合適照顧條件",
        "en": "Possibly, with a caring and suitable home"
      },
      {
        "zh": "絕不可以",
        "en": "Never"
      },
      {
        "zh": "只限原寄養家庭",
        "en": "Only the original raiser"
      }
    ],
    "answer": 1,
    "explanation": {
      "zh": "前兩種安置不可行時，協會可考慮合適的公眾領養家庭。",
      "en": "If earlier placements are not feasible, a suitable public adopter may be considered."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  },
  {
    "id": "s4-q10",
    "stage": 3,
    "number": 10,
    "source": "hkgda",
    "prompt": {
      "zh": "退休犬隻仍需由安排好的照顧者提供終身照顧。",
      "en": "Retired dogs still need lifelong care from their arranged carers."
    },
    "options": [
      {
        "zh": "正確",
        "en": "True"
      },
      {
        "zh": "錯誤",
        "en": "False"
      }
    ],
    "answer": 0,
    "explanation": {
      "zh": "退休生活仍包括日常護理、陪伴及健康需要。",
      "en": "Retirement still involves daily care, companionship and health needs."
    },
    "reward": 3,
    "penalty": 1,
    "back": 0
  }
];
