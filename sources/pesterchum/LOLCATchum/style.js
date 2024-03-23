{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/tnbg.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "LOLCATchum",
  "menu" : { "style": "font-family: 'Arial'; font: bold; font-size: 14px; background-color: #EC4083;border:2px solid #992955", "loc": [3, 6] },
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 14px;" },
  "close": { "image": "$path/x.png",
             "loc": [275, 6]},
  "minimize": { "image": "$path/m.png",
                "loc": [260, 12]},
  "sounds": { "alertsound": "$path/alarm.wav",
              "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #d44fe3; font-family:'Arial';font:bold;selection-background-color:#EC4083; " },
  "chums": { "style": "border:2px solid #84318A; background-color: black;color: #F45BFF;font: bold;font-size:14px;font-family: 'Arial';selection-background-color:#EC4083; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#F45BFF" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#E047B3" },

                 "offline": { "icon": "$path/offline.png", "color": "#646464"},

                 
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#F45BFF" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#F45BFF" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#F45BFF" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#F45BFF" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#F45BFF" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#F45BFF" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#F45BFF" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#F45BFF" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#E047B3" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#E047B3" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#E047B3" },

                 "devious": { "icon": "$path/devious.png", "color": "#E047B3" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#E047B3" },
                 
                 "detestful": { "icon": "$path/detestful.png", "color": "#E047B3" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#E047B3" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#E047B3" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#E047B3" },

                 "perky": { "icon": "$path/perky.png", "color": "#E047B3" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#E047B3" },

                 "protective": { "icon": "$path/protective.png", "color": "#EC4083" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
             }
           },
  "mychumhandle": { "label": 
                    { "text": "KITTYTAG:",
                      "style": "color: black ;font:bold; font-family: 'Arial';" 
                    },
                    "handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:#F45BFF; font-family:'Arial'; font:bold; text-align:left; border:2px solid #84318A;" }
                  },
  "addchum":  { "text": "ADD BUDDY", "style": "background: #d44fe3; border:2px solid #84318A; font: bold; color: black; font-family:'Arial';"
              },
  "pester": { "text": "BAP", "style": "background: #d44fe3; border:2px solid #84318A; font: bold; color: black; font-family:'Arial';"
            },
  "block": { "style": "background: #d44fe3; border:2px solid #84318A; font: bold; color: black; font-family:'Arial';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Arial';color:black;"
               },
  "defaultmood": 7,
  "moods": [
      { "style": "text-align:left; background:#d44fe3;border:2px solid #84318A;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
        "selected": "text-align:left; background:#ff3333; border:2px solid #BD2626; color: white; font-family:'Arial'; font:bold; padding-left:3px;",
        "loc": [15, 485],
        "size": [135, 30],
        "text": "GLEEFUL",
        "icon": "$path/estatic.png",
        "mood": 7
      },

      { "style": "text-align:left; background:#d44fe3;border:2px solid #84318A;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
        "selected": "text-align:left; background:#ff931f; border:2px solid #A86114; color: white; font-family:'Arial'; font:bold; padding-left:3px;",
        "loc": [15, 513],
        "size": [135, 30],
        "text": "LOAFING",
        "icon": "$path/relaxed.png",
        "mood": 8
      },

      { "style": "text-align:left; background:#d44fe3;border:2px solid #84318A;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
        "selected": "text-align:left; background:#ffc30f; border:2px solid #AD850A; color: white; font-family:'Arial'; font:bold; padding-left:3px;",
        "loc": [15, 541],
        "size": [135, 30],
        "text": "IRRITATED",
        "icon": "$path/discontent.png",
        "mood": 9
      },

      { "style": "text-align:left; background:#d44fe3;border:2px solid #84318A;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
        "selected": "text-align:left; background:#2a9c4a; border:2px solid #134722; color: white; font-family:'Arial'; font:bold; padding-left:3px;",
        "loc": [148, 485],
        "size": [135, 30],
        "text": "DITSY",
        "icon": "$path/devious.png",
        "mood": 10
      },

      { "style": "text-align:left; background:#d44fe3;border:2px solid #84318A;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
        "selected": "text-align:left; background:#4757ff; border:2px solid #2D37A1; color: white; font-family:'Arial'; font:bold; padding-left:3px;",
        "loc": [148, 513],
        "size": [135, 30],
        "text": "FLAMBOYANT",
        "icon": "$path/sleek.png",
        "mood": 11
      },

      { "style": "text-align:left; background:#d44fe3;border:2px solid #84318A;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
        "selected": "text-align:left; background:#E800B6; border:2px solid #a60082; color: white; font-family:'Arial'; font:bold; padding-left:3px;",
        "loc": [148, 541],
        "size": [135, 30],
        "text": "NO TALK ME!!",
        "icon": "$path/detestful.png",
        "mood": 12
      },

      { "style": "text-align:center; border:2px solid #84318A; background:#d44fe3;color: black; font-family:'Arial'; font:bold;padding-left:3px;", 
        "selected": "text-align:center; background:#444444; border:2px solid #222222; padding: 5px;color: white; font-family:'Arial'; font:bold;padding-left:3px;",
        "loc": [15, 569],
        "size": [268, 30],
        "text": "AWAY",
        "icon": "$path/offline.png",
        "mood": 2
      }
  ]
},
 "convo": {
     "style": "background-color: #d44fe3;border:2px solid #84318A; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #EF64FF; color: black; border:0px; font-size: 14px;",
                    "text" : ":: trolling: $handle ::" },
     "textarea": {
         "style": "background: #EFC8FF;  font-size: 14px;font:bold; border:2px solid #84318A;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
     },
  "input": { "style": "background: #EFC8FF; border:2px solid #84318A;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
     "tabwindow" : {
         "style": "background-color: #d44fe3;border:2px solid #84318A;"
     },
  "text": {
      "beganpester": "began bapping",
      "ceasepester": "gave up bapping",
      "blocked": "scratched",
      "unblocked": "licks",
      "openmemo": "joined the gathering",
      "joinmemo": "responded to gathering",
      "closememo": "ceased responding to gathering",
      "kickedmemo": "You have been exiled from this gathering!"
  },
     "tabs": {
         "style": "",
         "selectedstyle": "",
         "newmsgcolor": "#ff0000"
     },
     "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #d44fe3;border:2px solid #84318A; font-family: 'Arial';",
   "label": { "style": "margin-bottom: 21px;background: #EF64FF; color: black; border:0px; font-size: 14px;"
            },
   "textarea": {
       "style": "background: #EFC8FF;  font-size: 14px;font:bold; border:2px solid #84318A;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #84318A; background: #EFC8FF;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: #EFC8FF; border:2px solid #84318A;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #84318A; background: #EFC8FF; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #84318A; font: bold; font-size: 12px; background: #EF64FF; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },


   "tabs": {
       "style": "",
       "selectedstyle": "",
       "newmsgcolor": "#ff0000",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}