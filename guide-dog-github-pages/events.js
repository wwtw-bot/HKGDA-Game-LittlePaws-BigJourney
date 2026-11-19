const PRINT_EVENTS=[
  {
    "id": "event-1-1",
    "stage": 0,
    "kind": "fortune",
    "title": {
      "zh": "健康成長",
      "en": "Healthy growth"
    },
    "text": {
      "zh": "小狗健康地長大！ +2骨頭",
      "en": "Your puppy is growing healthily! Gain 2 bones."
    },
    "delta": 2
  },
  {
    "id": "event-1-2",
    "stage": 0,
    "kind": "fortune",
    "title": {
      "zh": "社交小明星",
      "en": "Social star"
    },
    "text": {
      "zh": "你勇敢地接觸不同的人！ 前進2格",
      "en": "You bravely meet different people! Move forward 2 spaces."
    },
    "forward": 2
  },
  {
    "id": "event-1-3",
    "stage": 0,
    "kind": "fortune",
    "title": {
      "zh": "適應新環境",
      "en": "A new environment"
    },
    "text": {
      "zh": "你成功適應新的環境和聲音！ +3骨頭",
      "en": "You adapt to unfamiliar places and sounds! Gain 3 bones."
    },
    "delta": 3
  },
  {
    "id": "event-1-4",
    "stage": 0,
    "kind": "fortune",
    "title": {
      "zh": "乖巧小狗",
      "en": "Good manners"
    },
    "text": {
      "zh": "你在家中表現良好，聽從照顧者的指示！ +1骨頭",
      "en": "You follow your carer's guidance at home! Gain 1 bone."
    },
    "delta": 1
  },
  {
    "id": "event-1-5",
    "stage": 0,
    "kind": "fortune",
    "title": {
      "zh": "快樂散步",
      "en": "A happy walk"
    },
    "text": {
      "zh": "你在寄養家庭的陪伴下完成愉快的散步！ 再擲一次",
      "en": "Enjoy a walk with your puppy-raising family! Roll again."
    },
    "again": true
  },
  {
    "id": "event-1-6",
    "stage": 0,
    "kind": "fortune",
    "title": {
      "zh": "玩具探索",
      "en": "Exploring toys"
    },
    "text": {
      "zh": "你學會使用正確的方法進行探索和玩耍！ +2骨頭",
      "en": "You learn to explore and play appropriately! Gain 2 bones."
    },
    "delta": 2
  },
  {
    "id": "event-1-7",
    "stage": 0,
    "kind": "penalty",
    "title": {
      "zh": "過度興奮",
      "en": "Overexcited"
    },
    "text": {
      "zh": "你遇到新朋友時太興奮，需要時間冷靜！ 後退1格",
      "en": "Meeting new friends is exciting; take time to settle. Move back 1 space."
    },
    "back": 1
  },
  {
    "id": "event-1-8",
    "stage": 0,
    "kind": "penalty",
    "title": {
      "zh": "害怕陌生聲音",
      "en": "Unfamiliar sounds"
    },
    "text": {
      "zh": "你第一次聽到大型車輛的聲音，仍需要時間慢慢適應！ -1骨頭",
      "en": "Large vehicles sound unfamiliar. Take time to adjust. Lose 1 bone."
    },
    "delta": -1
  },
  {
    "id": "event-1-9",
    "stage": 0,
    "kind": "penalty",
    "title": {
      "zh": "調皮搗蛋",
      "en": "Learning what to chew"
    },
    "text": {
      "zh": "你把家中的物品當成玩具咬了，仍需要學習分辨玩具和日常用品！ -2骨頭",
      "en": "You chew a household item and need help identifying suitable toys. Lose 2 bones."
    },
    "delta": -2
  },
  {
    "id": "event-1-10",
    "stage": 0,
    "kind": "penalty",
    "title": {
      "zh": "不習慣外出",
      "en": "Getting used to outings"
    },
    "text": {
      "zh": "你還未適應繁忙的街道，需要更多練習！ 後退2格",
      "en": "Busy streets need more practice. Move back 2 spaces."
    },
    "back": 2
  },
  {
    "id": "event-1-11",
    "stage": 0,
    "kind": "penalty",
    "title": {
      "zh": "疲倦的小狗",
      "en": "A tired puppy"
    },
    "text": {
      "zh": "今天活動太多，你需要休息！ 下一輪暫停一次",
      "en": "After a busy day, you need rest. Skip your next turn."
    },
    "skip": 1
  },
  {
    "id": "event-1-12",
    "stage": 0,
    "kind": "penalty",
    "title": {
      "zh": "梳理適應",
      "en": "Getting used to grooming"
    },
    "text": {
      "zh": "你仍在熟悉梳毛和日常身體護理，需要照顧者耐心陪伴！ -1骨頭",
      "en": "Your carer patiently helps you get used to grooming. Lose 1 bone."
    },
    "delta": -1
  },
  {
    "id": "event-2-13",
    "stage": 1,
    "kind": "fortune",
    "title": {
      "zh": "服從訓練成功",
      "en": "Training success"
    },
    "text": {
      "zh": "你成功按照訓練員的指令完成訓練！ +1骨頭",
      "en": "You follow your trainer's cues successfully! Gain 1 bone."
    },
    "delta": 1
  },
  {
    "id": "event-2-14",
    "stage": 1,
    "kind": "fortune",
    "title": {
      "zh": "障礙物挑戰",
      "en": "Obstacle challenge"
    },
    "text": {
      "zh": "你成功避開路上的障礙物！ 前進2格",
      "en": "You avoid an obstacle successfully! Move forward 2 spaces."
    },
    "forward": 2
  },
  {
    "id": "event-2-15",
    "stage": 1,
    "kind": "fortune",
    "title": {
      "zh": "安全過馬路",
      "en": "Safe crossing practice"
    },
    "text": {
      "zh": "你在訓練中成功停在路邊，等待安全時機！ +3骨頭",
      "en": "You stop at the kerb during training and wait safely! Gain 3 bones."
    },
    "delta": 3
  },
  {
    "id": "event-2-16",
    "stage": 1,
    "kind": "fortune",
    "title": {
      "zh": "專心學習",
      "en": "Focused learning"
    },
    "text": {
      "zh": "你在訓練期間保持專注，表現出色！ +1骨頭",
      "en": "You stay focused during training! Gain 1 bone."
    },
    "delta": 1
  },
  {
    "id": "event-2-17",
    "stage": 1,
    "kind": "fortune",
    "title": {
      "zh": "引導技巧進步",
      "en": "Guiding progress"
    },
    "text": {
      "zh": "你成功完成路線訓練！ 前進3格",
      "en": "You complete your route training! Move forward 3 spaces."
    },
    "forward": 3
  },
  {
    "id": "event-2-18",
    "stage": 1,
    "kind": "penalty",
    "title": {
      "zh": "分心的小狗",
      "en": "Distracted"
    },
    "text": {
      "zh": "你在訓練時被旁邊的事物吸引，你仍需要更多練習來保持專注！ 後退2格",
      "en": "Something nearby catches your attention; more practice will help. Move back 2 spaces."
    },
    "back": 2
  },
  {
    "id": "event-2-19",
    "stage": 1,
    "kind": "penalty",
    "title": {
      "zh": "指令不熟悉",
      "en": "An unfamiliar cue"
    },
    "text": {
      "zh": "你未能立即理解訓練員的指令，需要重新練習！ -1骨頭",
      "en": "You need more practice understanding a cue. Lose 1 bone."
    },
    "delta": -1
  },
  {
    "id": "event-2-20",
    "stage": 1,
    "kind": "penalty",
    "title": {
      "zh": "障礙判斷失誤",
      "en": "Obstacle judgement"
    },
    "text": {
      "zh": "你未能及時察覺訓練路線上的障礙物，需要更多練習來提升判斷能力！ 後退2格",
      "en": "You need more practice noticing obstacles in time. Move back 2 spaces."
    },
    "back": 2
  },
  {
    "id": "event-2-21",
    "stage": 1,
    "kind": "penalty",
    "title": {
      "zh": "訓練需要加強",
      "en": "More practice needed"
    },
    "text": {
      "zh": "你有一項訓練技巧仍未熟練，需要額外練習！ -2骨頭",
      "en": "A skill needs some extra practice. Lose 2 bones."
    },
    "delta": -2
  },
  {
    "id": "event-2-22",
    "stage": 1,
    "kind": "penalty",
    "title": {
      "zh": "訓練休息時間",
      "en": "Training break"
    },
    "text": {
      "zh": "經過長時間訓練，你需要適當休息和補充體力，才能繼續學習！ 下一輪暫停一次",
      "en": "Rest and recover after a long training session. Skip your next turn."
    },
    "skip": 1
  },
  {
    "id": "event-3-23",
    "stage": 2,
    "kind": "fortune",
    "title": {
      "zh": "完美拍檔",
      "en": "A great partnership"
    },
    "text": {
      "zh": "你與主人建立良好默契，合作非常順利！ +1骨頭",
      "en": "You and your handler work smoothly together! Gain 1 bone."
    },
    "delta": 1
  },
  {
    "id": "event-3-24",
    "stage": 2,
    "kind": "fortune",
    "title": {
      "zh": "安全引導",
      "en": "Safe guiding"
    },
    "text": {
      "zh": "你成功帶領主人到達目的地！ 前進2格",
      "en": "You guide your handler to the destination! Move forward 2 spaces."
    },
    "forward": 2
  },
  {
    "id": "event-3-25",
    "stage": 2,
    "kind": "fortune",
    "title": {
      "zh": "避開障礙物",
      "en": "Avoiding obstacles"
    },
    "text": {
      "zh": "你成功察覺路上的障礙，帶領主人安全通過！ +3骨頭",
      "en": "You notice an obstacle and guide your handler safely past! Gain 3 bones."
    },
    "delta": 3
  },
  {
    "id": "event-3-26",
    "stage": 2,
    "kind": "fortune",
    "title": {
      "zh": "專業小英雄",
      "en": "Focused at work"
    },
    "text": {
      "zh": "你在繁忙的街道上保持專注，出色地完成工作！ +1骨頭",
      "en": "You stay focused on a busy street! Gain 1 bone."
    },
    "delta": 1
  },
  {
    "id": "event-3-27",
    "stage": 2,
    "kind": "fortune",
    "title": {
      "zh": "默契大考驗",
      "en": "Teamwork challenge"
    },
    "text": {
      "zh": "你與主人合作順利，成功完成一段複雜路線！ 前進3格",
      "en": "Together, you complete a complex route! Move forward 3 spaces."
    },
    "forward": 3
  },
  {
    "id": "event-3-28",
    "stage": 2,
    "kind": "fortune",
    "title": {
      "zh": "室內安靜等候",
      "en": "Waiting quietly indoors"
    },
    "text": {
      "zh": "你在室內公共場所安靜地陪伴主人，表現良好！ +2骨頭",
      "en": "You wait quietly beside your handler in a public indoor space! Gain 2 bones."
    },
    "delta": 2
  },
  {
    "id": "event-3-29",
    "stage": 2,
    "kind": "fortune",
    "title": {
      "zh": "公共交通出行",
      "en": "Public transport journey"
    },
    "text": {
      "zh": "你和主人順利完成乘搭公共交通工具的出行！ +2骨頭",
      "en": "You and your handler complete a public transport journey smoothly! Gain 2 bones."
    },
    "delta": 2
  },
  {
    "id": "event-3-30",
    "stage": 2,
    "kind": "fortune",
    "title": {
      "zh": "工作裝備檢查",
      "en": "Equipment check"
    },
    "text": {
      "zh": "出發前，主人仔細檢查你的導盲鞍和裝備，確保一切準備妥當！ +2骨頭",
      "en": "Your handler checks your harness and equipment before leaving! Gain 2 bones."
    },
    "delta": 2
  },
  {
    "id": "event-3-31",
    "stage": 2,
    "kind": "penalty",
    "title": {
      "zh": "路上施工",
      "en": "Roadworks"
    },
    "text": {
      "zh": "前方突然出現道路工程，你需要繞道而行！ 後退2格",
      "en": "Unexpected roadworks require a detour. Move back 2 spaces."
    },
    "back": 2
  },
  {
    "id": "event-3-32",
    "stage": 2,
    "kind": "penalty",
    "title": {
      "zh": "人群擁擠",
      "en": "Crowded street"
    },
    "text": {
      "zh": "街道上人太多，你需要花更多時間安全通過！ 後退1格",
      "en": "Allow more time to move safely through a crowd. Move back 1 space."
    },
    "back": 1
  },
  {
    "id": "event-3-33",
    "stage": 2,
    "kind": "penalty",
    "title": {
      "zh": "交通工具阻礙",
      "en": "A blocked path"
    },
    "text": {
      "zh": "路邊有車輛阻擋通道，你需要尋找另一條安全路線！ -1骨頭",
      "en": "A vehicle blocks the path; find a safe alternative. Lose 1 bone."
    },
    "delta": -1
  },
  {
    "id": "event-3-34",
    "stage": 2,
    "kind": "penalty",
    "title": {
      "zh": "突然改變路線",
      "en": "Route change"
    },
    "text": {
      "zh": "原定路線出現變化，你和主人需要時間熟悉新的路線！ 後退2格",
      "en": "You and your handler need time to learn a changed route. Move back 2 spaces."
    },
    "back": 2
  },
  {
    "id": "event-3-35",
    "stage": 2,
    "kind": "penalty",
    "title": {
      "zh": "長途工作",
      "en": "A long working day"
    },
    "text": {
      "zh": "今天的行程較長，你和主人都需要適當休息，才能繼續前進！ 下一輪暫停一次",
      "en": "You and your handler need a break after a long journey. Skip your next turn."
    },
    "skip": 1
  },
  {
    "id": "event-3-36",
    "stage": 2,
    "kind": "penalty",
    "title": {
      "zh": "陌生人觸摸",
      "en": "Unexpected touching"
    },
    "text": {
      "zh": "有路人突然伸手觸摸你，主人需要先處理情況，再繼續行程！ 後退1格",
      "en": "A passer-by touches you; your handler pauses to address it. Move back 1 space."
    },
    "back": 1
  },
  {
    "id": "event-3-37",
    "stage": 2,
    "kind": "penalty",
    "title": {
      "zh": "濕滑路面",
      "en": "Slippery pavement"
    },
    "text": {
      "zh": "雨後路面比較濕滑，你和主人需要放慢腳步，確保出行安全！ -1骨頭",
      "en": "After rain, slow down to travel safely. Lose 1 bone."
    },
    "delta": -1
  },
  {
    "id": "event-3-38",
    "stage": 2,
    "kind": "penalty",
    "title": {
      "zh": "導盲鞍調整",
      "en": "Harness adjustment"
    },
    "text": {
      "zh": "出行途中發現導盲鞍需要重新調整，你們需要先停下來處理！ 下一輪暫停一次",
      "en": "Stop to adjust your harness before continuing. Skip your next turn."
    },
    "skip": 1
  },
  {
    "id": "event-4-39",
    "stage": 3,
    "kind": "fortune",
    "title": {
      "zh": "幸福退休生活",
      "en": "Happy retirement"
    },
    "text": {
      "zh": "你開始享受悠閑的退休生活！ +1骨頭",
      "en": "Enjoy a relaxed retirement! Gain 1 bone."
    },
    "delta": 1
  },
  {
    "id": "event-4-40",
    "stage": 3,
    "kind": "fortune",
    "title": {
      "zh": "溫暖的新家庭",
      "en": "A loving home"
    },
    "text": {
      "zh": "你得到家人的照顧和陪伴！ +3骨頭",
      "en": "Your family provides care and companionship! Gain 3 bones."
    },
    "delta": 3
  },
  {
    "id": "event-4-41",
    "stage": 3,
    "kind": "fortune",
    "title": {
      "zh": "悠閒午後",
      "en": "A peaceful afternoon"
    },
    "text": {
      "zh": "今天陽光明媚，你度過了愉快的一天！ 再擲一次",
      "en": "Enjoy a lovely sunny day! Roll again."
    },
    "again": true
  },
  {
    "id": "event-4-42",
    "stage": 3,
    "kind": "penalty",
    "title": {
      "zh": "適應新生活",
      "en": "A new routine"
    },
    "text": {
      "zh": "退休初期，你需要一些時間適應新的生活節奏！ 後退1格",
      "en": "Take time to adjust to retirement. Move back 1 space."
    },
    "back": 1
  },
  {
    "id": "event-4-43",
    "stage": 3,
    "kind": "penalty",
    "title": {
      "zh": "想念工作夥伴",
      "en": "Missing your partner"
    },
    "text": {
      "zh": "退休後，你偶爾會想念以前一起工作的夥伴，需要家人的陪伴和關懷！ 暫停一次",
      "en": "Your family offers comfort when you miss your former working partner. Skip your next turn."
    },
    "skip": 1
  },
  {
    "id": "event-4-44",
    "stage": 3,
    "kind": "penalty",
    "title": {
      "zh": "健康檢查",
      "en": "Health check"
    },
    "text": {
      "zh": "你到了定期健康檢查的時間，需要花一些時間接受檢查和照顧！ -1骨頭",
      "en": "Make time for a routine health check and care. Lose 1 bone."
    },
    "delta": -1
  }
];
