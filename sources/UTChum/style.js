{"inherits": "pesterchum",
 "main":
 {"style": "background-repeat: no-repeat;",
  "background-image": "$path/pcbg.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Undertale",
  "menu" : { "style": "font-family: 'Courier'; font: bold; font-size: 14px; color: #ffffff; background-color: #5f5e77;border:2px solid #6a775e",
                         "menuitem": "font-size:14px;" },
  "menubar": { "style": "font-family: 'Courier'; font:bold; font-size: 14px; color: #ffffff;" },
  "close": { "image": "$path/x.png",
             "loc": [286, 6]},
  "minimize": { "image": "$path/m.png",
                "loc": [268, 12]},
  "chums": { "style": "border:2px solid white; background-color: black;color: white;font: bold;font-size:14px;font-family: 'Courier';selection-background-color:#646464; ",
			"moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "white" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "red" },

                 "offline": { "icon": "$path/offline.png", "color": "#646464"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "white" },

                 "distraught": { "icon": "$path/distraught.png", "color": "white" },

                 "pranky": { "icon": "$path/pranky.png", "color": "white" },


                 "smooth": { "icon": "$path/smooth.png", "color": "white" },

                 "mystified": { "icon": "$path/mystified.png", "color": "white" },

                 "amazed": { "icon": "$path/amazed.png", "color": "white" },

                 "insolent": { "icon": "$path/insolent.png", "color": "white" },

                 "bemused": { "icon": "$path/bemused.png", "color": "white" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "red" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "red" },

                 "discontent": { "icon": "$path/discontent.png", "color": "red" },

                 "devious": { "icon": "$path/devious.png", "color": "red" },

                 "sleek": { "icon": "$path/sleek.png", "color": "red" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "red" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "red" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "red" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "red" },

                 "perky": { "icon": "$path/perky.png", "color": "red" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "red" },

                 "protective": { "icon": "$path/protective.png", "color": "#00ff00" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 
		   },


                         "loc": [15, 70],
                         "size": [270, 300]
           },
  "mychumhandle": { "label":
                    { "text": "CHUMHANDLE:",
                      "loc": [12,415],
                      "style": "color: black ;font:bold; font-family: 'Courier';"
                    },
                    "handle": { "loc": [15,435],
                                "size": [240, 25],
                                                                "style": "background-color: black; padding: 3px; padding-left: 25px; color:white; font-family:'Courier'; font:bold; text-align:left; border:2px solid #6a775e;"
                                                          },
                    "colorswatch": { "loc": [255,435],
                                     "size": [30,25],
                                     "text": "C" },
                    "currentMood": [20, 440]
                  },
  "defaultwindow": { "style": "background: #5f5e77; font-family:'Courier';font:bold;selection-background-color:#919191; "
                   },
  "addchum":  { "style": "background: rgba(50, 153, 50, 100%); border:2px solid #776c5e; font: bold; color: black; font-family:'Courier';",
                "loc": [15,380],
                "size": [90, 30],
                "text": "ADD FRIEND"
              },
  "pester": { "style": "background:  rgba(50, 153, 50, 100%); border:2px solid #776c5e; font: bold; color: black; font-family:'Courier';",
              "loc": [193,380],
              "size": [89, 30],
              "text": "PESTER!"
            },
  "block": { "style": "background: #7f0000; border:2px solid #776c5e; font: bold; color: black; font-family:'Courier';",
             "loc": [104,380],
             "size": [90, 30],
             "text": "BLOCK"
           },
  "moodlabel": { "style": "font:bold;font-family:'Courier';color:black;",
                                 "loc": [12, 466],
                                 "text": "MOOD:"
                           },
  "moods": [
      { "style": "text-align:left; background:#6a775e;border:2px solid #776c5e;color: black; font-family:'Courier'; font:bold; padding-left:3px;",
                "selected": "text-align:left; background:white; border:2px solid #776c5e; color: black; font-family:'Courier'; font:bold; padding-left:3px;",
                "loc": [15, 485],
                "size": [135, 30],
            "text": "CHUMMY",
                "icon": "$path/chummy.png",
                "mood": 0
          },

      { "style": "text-align:left; background:#6a775e;border:2px solid #776c5e;color: black; font-family:'Courier'; font:bold;padding-left:3px;",
                "selected": "text-align:left; background:white; border:2px solid #776c5e; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
                "loc": [15, 513],
                "size": [135, 30],
            "text": "PLEASANT",
                "icon": "$path/pleasant.png",
                "mood": 3
          },

      { "style": "text-align:left; background:#6a775e;border:2px solid #776c5e;color: black; font-family:'Courier'; font:bold;padding-left:3px;",
                "selected": "text-align:left; background:white; border:2px solid #776c5e; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
                "loc": [15, 541],
                "size": [135, 30],
            "text": "DISTRAUGHT",
                "icon": "$path/distraught.png",
                "mood": 4
          },

      { "style": "text-align:left; background:#6a775e;border:2px solid #776c5e;color: black; font-family:'Courier'; font:bold;padding-left:3px;",
                "selected": "text-align:left; background:white; border:2px solid #776c5e; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
                "loc": [148, 485],
                "size": [135, 30],
            "text": "PRANKY",
                "icon": "$path/pranky.png",
                "mood": 5
          },

      { "style": "text-align:left; background:#6a775e;border:2px solid #776c5e;color: black; font-family:'Courier'; font:bold;padding-left:3px;",
                "selected": "text-align:left; background:white; border:2px solid #776c5e; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
                "loc": [148, 513],
                "size": [135, 30],
            "text": "SMOOTH",
                "icon": "$path/smooth.png",
                "mood": 6
          },

      { "style": "text-align:left; background:#7f0000;border:2px solid #776c5e;color: black; font-family:'Courier'; font:bold;padding-left:3px;",
                "selected": "text-align:left; background:white; border:2px solid #776c5e; color: red; font-family:'Courier'; font:bold;padding-left:3px;",
                "loc": [148, 541],
                "size": [135, 30],
            "text": "RANCOROUS",
                "icon": "$path/rancorous.png",
                "mood": 1
          },

      { "style": "text-align:center; border:2px solid #776c5e; background:black;color: white; font-family:'Courier'; font:bold;padding-left:3px;",
                "selected": "text-align:left; background:white; border:2px solid #776c5e; padding: 5px;color: black; font-family:'Courier'; font:bold;padding-left:3px;",
                "loc": [15, 569],
                "size": [270, 30],
                "text": "ABSCOND",
                "icon": "$path/offline.png",
                "mood": 2
          }
  ]
 },
"convo":
 {"style": "background-color: #5f5e77;background-image:url($path/convobg.png);background-repeat: no-repeat; border:2px solid black; font-family: 'Courier'",
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background: white; border:2px solid #776c5e;",
                 "handle": "background-color:#776c5e;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #776c5e;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #776c5e;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "size": [500, 325],
  "chumlabel": { "style": "margin-bottom: 21px;background: rgb(106, 119, 94); color: white; border:0px; font-size: 14px;font-family: 'Courier'",
                 "align": { "h": "center", "v": "center" },
                 "minheight": 47,
                 "maxheight": 47,
                 "text" : ":: $handle ::"
               },
  "textarea": {
      "style": "background: white;  font-size: 14px;font:bold; border:2px solid #776c5e;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
  },
  "input": {
      "style": "background: white; border:2px solid #776c5e;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;font-family: 'Courier'"
  },
  "tabwindow" : {
          "style": "background-color:#5f5e77;border:0px"
  },
  "tabs": {
      "style": "background-color: #7f7f7f; font-family: 'Courier';font:bold;font-size:12px;min-height:25px;",
      "selectedstyle": "border:0px;background-color:#5f5e77;border-top:2px solid white; border-left:2px solid white;border-right:2px solid white; border-top-left-radius: 4px; border-top-right-radius: 4px;",
      "newmsgcolor": "#5f5e77",
      "tabstyle": 0
  },
  "text": {
      "beganpester": "began pestering",
      "ceasepester": "ceased pestering",
      "blocked": "blocked",
      "unblocked": "unblocked",
          "blockedmsg": "did not receive message from",
      "openmemo": "opened memo on board",
      "joinmemo": "responded to memo",
      "closememo": "ceased responding to memo",
      "kickedmemo": "You have been banned from this memo!",
          "idle": "is now an idle chum!"
  },
  "systemMsgColor": "#646464"
 },
 "memos":
 {"memoicon": "$path/memo.png",
  "style": "background-color: #5f5e77; background-image:url($path/convobg.png); background-repeat: no-repeat; border:2px solid white; font-family: 'Courier'; font: bold; selection-background-color:#919191; ",
  "size": [500,325],
  "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#5f5e77",
      "tabstyle": 0
  },
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background:  rgba(255, 255, 0, 0%); border:0px;",
                 "handle": "background-color:#776c5e;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #776c5e;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #776c5e;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "label": { "text": "Bulletin Board: $channel",
             "style": "margin-bottom: 21px;background: rgb(106, 119, 94); color: white; border:0px; font-size: 14px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 47,
             "maxheight": 47
           },
  "input": { "style": "background: white; border:2px solid #776c5e;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
  "textarea": { "style": "background: white;  font-size: 14px;font:bold; border:2px solid #776c5e;text-align:center; margin-right:10px; margin-left:10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 150,
                "style": "border:2px solid #776c5e; background: white;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
              },
  "time": { "text": { "width": 75,
                      "style": " border: 2px solid white; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Courier';font:bold;"
                    },
            "slider": { "style": "border: 0px;",
                        "groove": "",
                        "handle": ""
                      },
            "buttons": { "style": "color: black; font: bold; border: 2px solid #776c5e; font: bold; font-size: 12px; background: white; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" },
            "arrows": { "left": "$path/leftarrow.png",
                        "right": "$path/rightarrow.png",
                        "style": " border:0px; margin-top: 5px; margin-right:10px;"
                      }
          },
  "systemMsgColor": "#646464",
  "op": { "icon": "$path/op.png" },
  "halfop": { "icon": "$path/halfop.png" },
  "voice": { "icon": "$path/voice.png" },
  "founder": { "icon": "$path/founder.png" },
  "admin": { "icon": "$path/admin.png" }
 },
 "toasts":
 {
   "width": 210,
   "height": 100,
   "style": "background: white;",
   "icon": { "signin": "$path/../enamel/chummy2.gif",
             "signout": "$path/../enamel/distraught2.gif",
             "style": "border: 2px solid black; border-width: 2px 0px 0px 2px;" },
   "title": { "minimumheight": 50,
              "style": "border: 2px solid black; border-width: 2px 2px 0px 0px; padding: 5px; font-weight:bold;"
            },
   "content": { "style": "background: black; color: white; padding: 5px;" }
 }
}
