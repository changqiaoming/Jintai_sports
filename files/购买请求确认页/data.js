﻿$axure.loadCurrentPage({
  "url":"购买请求确认页.html",
  "generationDate":new Date(1430845023934.4),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"afc809b053b143bf9bd59f2e15394406",
    "type":"Axure:Page",
    "name":"购买请求确认页",
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
          "id":"0099208ee66841e78c0268ae8edf9804",
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
              "id":"763a36bb26fb43afb72d8d31011b0e29",
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
            "normal~":"images/购买请求确认页/u0.png"}},
{
          "id":"0f4f78abff0f47858cd62eb84c9235cd",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "opacity":"0",
            "location":{
              "x":237,
              "y":458},
            "size":{
              "width":83,
              "height":102}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"d2128bc0783144ce87e6441a392fdeac",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "opacity":"0",
                "location":{
                  "x":237,
                  "y":458},
                "size":{
                  "width":83,
                  "height":102}},
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
                      "description":"显示 购买确认弹出框,<br>(Image) 淡入淡出 500 毫秒",
                      "objectsToFades":[{
                          "objectPath":["083433290b914ad9bbf22ed0f5bc239c"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["febdf0b97561497eaec258bc40336477"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"fade",
                              "duration":500,
                              "showType":"none"}}}]}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"083433290b914ad9bbf22ed0f5bc239c",
          "label":"购买确认弹出框",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":false,
          "style":{
            "location":{
              "x":26,
              "y":197.5},
            "size":{
              "width":268,
              "height":173},
            "visible":false},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"a2d44ebbb25e4b20bb735c7560b7d398",
              "label":"State1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"febdf0b97561497eaec258bc40336477",
                  "label":"",
                  "parentDynamicPanel":"083433290b914ad9bbf22ed0f5bc239c",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":268,
                      "height":173}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"9065353880a7441a8832b110e1f44e7a",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"083433290b914ad9bbf22ed0f5bc239c",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":268,
                          "height":173}},
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
                    "normal~":"images/购买请求确认页/u5.png"}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}}]}]}},
  "masters":{
},
  "objectPaths":{
    "0099208ee66841e78c0268ae8edf9804":{
      "scriptId":"u0"},
    "763a36bb26fb43afb72d8d31011b0e29":{
      "scriptId":"u1"},
    "0f4f78abff0f47858cd62eb84c9235cd":{
      "scriptId":"u2"},
    "d2128bc0783144ce87e6441a392fdeac":{
      "scriptId":"u3"},
    "083433290b914ad9bbf22ed0f5bc239c":{
      "scriptId":"u4"},
    "febdf0b97561497eaec258bc40336477":{
      "scriptId":"u5"},
    "9065353880a7441a8832b110e1f44e7a":{
      "scriptId":"u6"}}});