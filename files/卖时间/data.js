﻿$axure.loadCurrentPage({
  "url":"卖时间.html",
  "generationDate":new Date(1430066322089.86),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"d8e1490d665e458d8170bffe890848f5",
    "type":"Axure:Page",
    "name":"卖时间",
    "notes":{
      "默认":"<p><span>1.【回应】成立之后，出售信息会在30分钟内保持PRIVITE私有，仅求购方可见。30分钟后系统置为PUBLIC，并且在出售列表顶部新插入一条信息。</span></p>"},
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
          "id":"ae5af0aaa95f4d88a593b21b579f2cde",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":320,
              "height":568}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"6433c6af1b25421ea2206077a615c7a5",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":320,
                  "height":568}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/卖时间/u0.png"}},
{
          "id":"24accceb9d8245089b11561566e58465",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "opacity":"0",
            "location":{
              "x":87,
              "y":74},
            "size":{
              "width":70,
              "height":26}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"3124352ac1b54961953019ef6b8c50f8",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "opacity":"0",
                "location":{
                  "x":87,
                  "y":74},
                "size":{
                  "width":70,
                  "height":26}},
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
                      "description":"在 当前窗口 打开 买时间",
                      "target":{
                        "targetType":"page",
                        "url":"买时间.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"215da3cee7e14501abcddbc352bb7ef7",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":16,
              "y":37},
            "size":{
              "width":22,
              "height":12}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"7d2fbc92962e425db17d48628ceea4e3",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":16,
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
          "id":"35c6eea76e62453286ddc5407c338260",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "opacity":"0",
            "location":{
              "x":271,
              "y":26},
            "size":{
              "width":43,
              "height":35}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"02a5ded661a04223ab369e3f24ed4ada",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "opacity":"0",
                "location":{
                  "x":271,
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
                          "objectPath":["d8458a5ae6a54014be693525d1ddf047"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"slideDown",
                              "duration":500,
                              "showType":"none"}}},
{
                          "objectPath":["df46fbd185bd400a816583b5ad497c4b"],
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
          "id":"cf3579e5da0343ceaa29e8ce4e57fa63",
          "label":"ButtonBigSecondary",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":false,
          "style":{
            "fontSize":"18px",
            "baseStyle":"75622e06d7204397b5590f0ada6b0c32",
            "opacity":"0.6",
            "location":{
              "x":190,
              "y":65},
            "size":{
              "width":130,
              "height":76},
            "visible":false,
            "borderWidth":"3"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"0b17c53b606e41b581a3d47737c273c1",
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
                  "x":190,
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
          "id":"d8458a5ae6a54014be693525d1ddf047",
          "label":"买卖时间",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":false,
          "style":{
            "location":{
              "x":190,
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
              "id":"bec409083d8a4367a0d0b8c064f2a72f",
              "label":"State1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"df46fbd185bd400a816583b5ad497c4b",
                  "label":"",
                  "parentDynamicPanel":"d8458a5ae6a54014be693525d1ddf047",
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
                      "id":"c08205e302ae44fca71b849c84589b51",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"d8458a5ae6a54014be693525d1ddf047",
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
                  "id":"c64c36e229fe4960baf353c3b107c4e5",
                  "label":"",
                  "parentDynamicPanel":"d8458a5ae6a54014be693525d1ddf047",
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
                      "id":"271f64b367a1490d91b5845d54b145cf",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"d8458a5ae6a54014be693525d1ddf047",
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
                  "id":"311a31f1fa9140f0a279ba9f471fa3ca",
                  "label":"",
                  "parentDynamicPanel":"d8458a5ae6a54014be693525d1ddf047",
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
                      "id":"6c535349f7c841289fd35f6c208b11f3",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"d8458a5ae6a54014be693525d1ddf047",
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
          "id":"6012bdfe107742f0932e869110d88f9b",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "opacity":"0",
            "location":{
              "x":249,
              "y":202},
            "size":{
              "width":67,
              "height":80}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"19f3d5c97c23492693ba3b75803f62c0",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "opacity":"0",
                "location":{
                  "x":249,
                  "y":202},
                "size":{
                  "width":67,
                  "height":80}},
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
                      "description":"在 当前窗口 打开 回应详情页面",
                      "target":{
                        "targetType":"page",
                        "url":"回应详情页面.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"9c60a3e5dc9242f49251a5035e3f9ca0",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "opacity":"0",
            "location":{
              "x":271,
              "y":292},
            "size":{
              "width":43,
              "height":80}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"cc3f134a43554c1d8d33579733abfa88",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "opacity":"0",
                "location":{
                  "x":271,
                  "y":292},
                "size":{
                  "width":43,
                  "height":80}},
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
                      "description":"在 当前窗口 打开 回应详情页面",
                      "target":{
                        "targetType":"page",
                        "url":"回应详情页面.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
},
  "objectPaths":{
    "ae5af0aaa95f4d88a593b21b579f2cde":{
      "scriptId":"u0"},
    "6433c6af1b25421ea2206077a615c7a5":{
      "scriptId":"u1"},
    "24accceb9d8245089b11561566e58465":{
      "scriptId":"u2"},
    "3124352ac1b54961953019ef6b8c50f8":{
      "scriptId":"u3"},
    "215da3cee7e14501abcddbc352bb7ef7":{
      "scriptId":"u4"},
    "7d2fbc92962e425db17d48628ceea4e3":{
      "scriptId":"u5"},
    "35c6eea76e62453286ddc5407c338260":{
      "scriptId":"u6"},
    "02a5ded661a04223ab369e3f24ed4ada":{
      "scriptId":"u7"},
    "cf3579e5da0343ceaa29e8ce4e57fa63":{
      "scriptId":"u8"},
    "0b17c53b606e41b581a3d47737c273c1":{
      "scriptId":"u9"},
    "d8458a5ae6a54014be693525d1ddf047":{
      "scriptId":"u10"},
    "df46fbd185bd400a816583b5ad497c4b":{
      "scriptId":"u11"},
    "c08205e302ae44fca71b849c84589b51":{
      "scriptId":"u12"},
    "c64c36e229fe4960baf353c3b107c4e5":{
      "scriptId":"u13"},
    "271f64b367a1490d91b5845d54b145cf":{
      "scriptId":"u14"},
    "311a31f1fa9140f0a279ba9f471fa3ca":{
      "scriptId":"u15"},
    "6c535349f7c841289fd35f6c208b11f3":{
      "scriptId":"u16"},
    "6012bdfe107742f0932e869110d88f9b":{
      "scriptId":"u17"},
    "19f3d5c97c23492693ba3b75803f62c0":{
      "scriptId":"u18"},
    "9c60a3e5dc9242f49251a5035e3f9ca0":{
      "scriptId":"u19"},
    "cc3f134a43554c1d8d33579733abfa88":{
      "scriptId":"u20"}}});