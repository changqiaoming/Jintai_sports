﻿$axure.loadCurrentPage({
  "url":"评价页面.html",
  "generationDate":new Date(1430845024985.46),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"92c5bd9aacd4490194fc9d4f758cebe7",
    "type":"Axure:Page",
    "name":"评价页面",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"1a9fd10a33c24f59b3857f1a68c86494",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":319,
              "height":566}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"cc42cd3d88f84668aaab78ff3979f1c6",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":319,
                  "height":566}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/评价页面/u0.png"}},
{
          "id":"24c9997caf2449fd9dc60c38d43d2fa9",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":15,
              "y":37},
            "size":{
              "width":22,
              "height":12}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"18f5bf4f50054b3daf24367808f48704",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":15,
                  "y":37},
                "size":{
                  "width":22,
                  "height":12}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 左侧边栏",
                      "target":{
                        "targetType":"page",
                        "url":"左侧边栏.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/左侧边栏/u2.png"}},
{
          "id":"a2606ba296e74e388d4c7310aa487cfd",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "opacity":"0",
            "location":{
              "x":270,
              "y":26},
            "size":{
              "width":43,
              "height":35}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a28fb6df05b6494a98b7ffd5812dc542",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "opacity":"0",
                "location":{
                  "x":270,
                  "y":26},
                "size":{
                  "width":43,
                  "height":35}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 买卖时间 向下滑动 500 毫秒,<br>(Image) 向下滑动 500 毫秒",
                      "objectsToFades":[{
                          "objectPath":["36e52df6d47848d0b7624239dc6282dc"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"slideDown",
                              "duration":500,
                              "showType":"none"}}},
{
                          "objectPath":["14259d9ca78c4e21a5f9a9b632539a32"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"slideDown",
                              "duration":500,
                              "showType":"none"}}}]}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"ee44e0057a984815ab7c6c26cd07ca70",
          "label":"ButtonBigSecondary",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":false,
          "style":{
            "fontSize":"18px",
            "baseStyle":"75622e06d7204397b5590f0ada6b0c32",
            "opacity":"0.6",
            "location":{
              "x":189,
              "y":65},
            "size":{
              "width":130,
              "height":76},
            "visible":false,
            "borderWidth":"3"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"bd4b4b9d18d04ecda94a0c8311c8e3a7",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "fontSize":"18px",
                "baseStyle":"75622e06d7204397b5590f0ada6b0c32",
                "opacity":"0.6",
                "location":{
                  "x":189,
                  "y":65},
                "size":{
                  "width":130,
                  "height":76},
                "visible":false,
                "borderWidth":"3"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/买时间/buttonbigsecondary_u6.png"}},
{
          "id":"36e52df6d47848d0b7624239dc6282dc",
          "label":"买卖时间",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":false,
          "style":{
            "location":{
              "x":189,
              "y":65},
            "size":{
              "width":130,
              "height":76},
            "visible":false},
          "adaptiveStyles":{
},
          "scrollbars":"verticalAsNeeded",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"715f8c383bd14cd0aa2419c3055b3049",
              "label":"State1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"14259d9ca78c4e21a5f9a9b632539a32",
                  "label":"",
                  "parentDynamicPanel":"36e52df6d47848d0b7624239dc6282dc",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":130,
                      "height":76}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"3953ad45d6f1437aa1f41226c4cd1dd9",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"36e52df6d47848d0b7624239dc6282dc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":130,
                          "height":76}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/买时间/u9.png"}},
{
                  "id":"7400a608e0b84fa7ad417432b971c1da",
                  "label":"",
                  "parentDynamicPanel":"36e52df6d47848d0b7624239dc6282dc",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "opacity":"0",
                    "location":{
                      "x":0,
                      "y":1},
                    "size":{
                      "width":130,
                      "height":35}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"ee528aa528fb4afba73e37e1f9685ae8",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"36e52df6d47848d0b7624239dc6282dc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "opacity":"0",
                        "location":{
                          "x":0,
                          "y":1},
                        "size":{
                          "width":130,
                          "height":35}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"linkWindow",
                              "description":"在 当前窗口 打开 发起出售请求页",
                              "target":{
                                "targetType":"page",
                                "url":"发起出售请求页.html",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"resources/images/transparent.gif"}},
{
                  "id":"e8a31b6797a54e6dbac6dbb787fe3b64",
                  "label":"",
                  "parentDynamicPanel":"36e52df6d47848d0b7624239dc6282dc",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "opacity":"0",
                    "location":{
                      "x":0,
                      "y":41},
                    "size":{
                      "width":130,
                      "height":35}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"589440b6340840ae9285b763b10470b3",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"36e52df6d47848d0b7624239dc6282dc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "opacity":"0",
                        "location":{
                          "x":0,
                          "y":41},
                        "size":{
                          "width":130,
                          "height":35}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"linkWindow",
                              "description":"在 当前窗口 打开 发起购买请求页",
                              "target":{
                                "targetType":"page",
                                "url":"发起购买请求页.html",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"resources/images/transparent.gif"}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}}]},
{
          "id":"926cccc859f2419cb424736eef6c4ff6",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "opacity":"0",
            "location":{
              "x":22,
              "y":198},
            "size":{
              "width":60,
              "height":62}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"9bc76d6122ac4e15a3b388db2c8d26e8",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "opacity":"0",
                "location":{
                  "x":22,
                  "y":198},
                "size":{
                  "width":60,
                  "height":62}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 通知页面",
                      "target":{
                        "targetType":"page",
                        "url":"通知页面.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"d1eb46d1048e401aae8f348e4d0b46c6",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":95,
              "y":198},
            "size":{
              "width":61,
              "height":62}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a2d1e1ff18414a81be1dd8607b61067b",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":95,
                  "y":198},
                "size":{
                  "width":61,
                  "height":62}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 课程页面",
                      "target":{
                        "targetType":"page",
                        "url":"课程页面.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/商户详情页（交易中）/u25.png"}},
{
          "id":"38e047077186424e86971482f3209145",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":170,
              "y":197},
            "size":{
              "width":61,
              "height":62}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"ba053bbd233143819b7994f12bd3f7c6",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":170,
                  "y":197},
                "size":{
                  "width":61,
                  "height":62}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 促销优惠信息",
                      "target":{
                        "targetType":"page",
                        "url":"促销优惠信息.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/促销优惠信息/u19.png"}},
{
          "id":"5c09a4a3ced84fbaaab735025cd0fb53",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":244,
              "y":198},
            "size":{
              "width":61,
              "height":62}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"adb5f77591464ed7965ac6682b5e2083",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":244,
                  "y":198},
                "size":{
                  "width":61,
                  "height":62}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 评价页面",
                      "target":{
                        "targetType":"page",
                        "url":"评价页面.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/促销优惠信息/u21.png"}}]}},
  "masters":{
},
  "objectPaths":{
    "1a9fd10a33c24f59b3857f1a68c86494":{
      "scriptId":"u0"},
    "cc42cd3d88f84668aaab78ff3979f1c6":{
      "scriptId":"u1"},
    "24c9997caf2449fd9dc60c38d43d2fa9":{
      "scriptId":"u2"},
    "18f5bf4f50054b3daf24367808f48704":{
      "scriptId":"u3"},
    "a2606ba296e74e388d4c7310aa487cfd":{
      "scriptId":"u4"},
    "a28fb6df05b6494a98b7ffd5812dc542":{
      "scriptId":"u5"},
    "ee44e0057a984815ab7c6c26cd07ca70":{
      "scriptId":"u6"},
    "bd4b4b9d18d04ecda94a0c8311c8e3a7":{
      "scriptId":"u7"},
    "36e52df6d47848d0b7624239dc6282dc":{
      "scriptId":"u8"},
    "14259d9ca78c4e21a5f9a9b632539a32":{
      "scriptId":"u9"},
    "3953ad45d6f1437aa1f41226c4cd1dd9":{
      "scriptId":"u10"},
    "7400a608e0b84fa7ad417432b971c1da":{
      "scriptId":"u11"},
    "ee528aa528fb4afba73e37e1f9685ae8":{
      "scriptId":"u12"},
    "e8a31b6797a54e6dbac6dbb787fe3b64":{
      "scriptId":"u13"},
    "589440b6340840ae9285b763b10470b3":{
      "scriptId":"u14"},
    "926cccc859f2419cb424736eef6c4ff6":{
      "scriptId":"u15"},
    "9bc76d6122ac4e15a3b388db2c8d26e8":{
      "scriptId":"u16"},
    "d1eb46d1048e401aae8f348e4d0b46c6":{
      "scriptId":"u17"},
    "a2d1e1ff18414a81be1dd8607b61067b":{
      "scriptId":"u18"},
    "38e047077186424e86971482f3209145":{
      "scriptId":"u19"},
    "ba053bbd233143819b7994f12bd3f7c6":{
      "scriptId":"u20"},
    "5c09a4a3ced84fbaaab735025cd0fb53":{
      "scriptId":"u21"},
    "adb5f77591464ed7965ac6682b5e2083":{
      "scriptId":"u22"}}});