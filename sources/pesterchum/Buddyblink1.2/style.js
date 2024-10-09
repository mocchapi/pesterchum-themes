{"main":
 {"style": "background-repeat: no-repeat;",
  "background-image": "$path/pcbg.png",
  "size": [232, 380],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "Buddyblink",
  "close": { "image": "$path/x.png",
             "loc": [210, 2]},
  "minimize": { "image": "$path/m.png",
                "loc": [194, 8]},
  "menubar": { "style": "font-family: 'Courier'; font: bold; font-size: 12px;"
 			 },
  "menu" : { "style": "font-family: 'Courier'; font: bold; font-size: 12px; background-color: #FFFFFF; border: 2px solid #6889f9",
             "menuitem": "margin-right: 10px;",
             "selected": "background-color: #ebb70b",
             "loc": [10,0]
           },
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "menus": {"client": {"_name": "CLIENT",
                       "options": "OPTIONS",
                       "memos": "MEMOS",
                       "logviewer": "PESTERLOGS",
                       "userlist": "USERLIST",
                       "import": "IMPORT",
                       "reconnect": "RECONNECT",
					   "idle": "IDLE",
                       "exit": "EXIT"},
            "profile": {"_name": "PROFILE",
                        "switch": "SWITCH",
                        "color": "COLOR",
                        "theme": "THEME",
                        "block": "BLOCKED",
                        "quirks": "QUIRKS"},
            "help": { "_name": "HELP",
                      "about": "ABOUT" },
            "rclickchumlist": {"pester": "BLINK",
                               "removechum": "REMOVE CHUM",
                               "report": "REPORT",
                               "blockchum": "BLOCK",
                               "addchum": "ADD CHUM",
                               "viewlog": "VIEW PESTERLOG",
                               "unblockchum": "UNBLOCK",
                               "banuser": "BAN USER",
                               "opuser": "MAKE OP",
                               "quirksoff": "QUIRKS OFF"
                              }
           },
  "chums": { "style": "font-family: 'Courier'; font: bold; background-color: #000000; color: #ffffff; selection-background-color: #646464; border: 2px solid #ffffff; border-top-left-radius: 10px; border-bottom-left-radius: 10px;",
             "loc": [12, 117],
             "size": [209, 82],
             "userlistcolor": "#ffffff",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#6889f9" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#6889f9" },

                 "offline": { "icon": "$path/offline.png", "color": "#646464"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#6889f9" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#6889f9" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#6889f9" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#6889f9" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#6889f9" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#6889f9" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#6889f9" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#6889f9" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#ebb70b" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#ebb70b" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#ebb70b" },

                 "devious": { "icon": "$path/devious.png", "color": "#ebb70b" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#ebb70b" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#ebb70b" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#ebb70b" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#ebb70b" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#ebb70b" },

                 "perky": { "icon": "$path/perky.png", "color": "#ebb70b" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#ebb70b" },

                 "protective": { "icon": "$path/protective.png", "color": "#f0f0f0" },

                 "blocked": { "icon": "$path/blocked.png", "color": "#646464" }

             }
           },
  "trollslum": { 
      "style": "font-family: 'Courier'; background: #c3c3c3; border: 2px solid #ffffff;",
      "size": [195, 200],
      "label": { "text": "TROLLSLUM",
                 "style": "font-family: 'Courier'; color: #000000; font: bold; border: 0px;" },
      "chumroll": {"style": "font-family: 'Courier'; color: #ffffff; font: bold; background-color: #000000; selection-background-color: #646464; border: 2px solid #6889f9; border-top-left-radius: 10px; border-bottom-left-radius: 10px;"}
  },
  "mychumhandle": { "label": { "text": "CHUMHANDLE:",
                               "loc": [19,232],
                               "style": "font-family: 'Courier'; color: rgba(255, 255, 255, 0%); font: bold;" },
                    "handle": { "style": "font-family:'Courier'; color: #ffffff; font: bold; text-align: left; background: #000000; padding: 3px;",
                                "loc": [36,246],
                                "size": [180, 21] },
                    "colorswatch": { "loc": [196,246],
                                     "size": [23,21],
                                     "text": "" },
                    "currentMood": [18, 248]
                  },
  "defaultwindow": { "style": "font-family: 'Courier'; color: #000000; font: bold; background: #c3c3c3; selection-background-color:#6889f9;" 
                   },
  "addchum":  { "style": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); font: bold; background: rgba(255, 255, 0, 0%); border:0px solid #6889f9; border-top-left-radius: 10px; border-bottom-left-radius: 10px;",
                "pressed" : "background: rgb(255, 255, 255, 30%);",
                "loc": [12,202],
                "size": [71, 22],
                "text": ""
              },
  "pester": { "style": "font-family: 'Courier'; color: rgba(255, 255, 0, 0%); font: bold; background: rgba(255, 255, 0, 0%); border: 0px solid #6889f9;",
              "pressed" : "background: rgb(255, 255, 255, 30%);",
              "loc": [150,202],
              "size": [71, 22],
              "text": ""
            },
  "block": { "style": "font-family: 'Courier'; color:  rgba(255, 255, 0, 0%); font: bold; background: rgba(255, 255, 0, 0%); border: 0px solid #6889f9; border-top-right-radius: 10px; border-bottom-right-radius: 10px;",          
             "pressed" : "background: rgb(255, 255, 255, 30%);",
             "loc": [81,202],
             "size": [71, 22],
             "text": ""
           },
  "defaultmood": 3,
  "moodlabel": { "style": "",
				 "loc": [20, 430],
				 "text": "MOODS"
			   },
  "moods": [
      { "style": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; border: 0px solid #6889f9; border-top-left-radius: 10px; padding: 5px;", 
		"selected": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; background-image: url($path/moodcheck1.png); border: 0px solid #ebb70b; padding: 5px;",
		"loc": [12, 288],
		"size": [104, 22],
	                  "text": "Joyful",
		"icon": "$path/chummy.png",
		"mood": 0
	  },
      { "style": "font-family: 'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; border: 0px solid #6889f9; padding: 5px;", 
		"selected": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; background-image: url($path/moodcheck3.png); border: 0px solid #ebb70b; padding: 5px;",
		"loc": [12, 308],
		"size": [104, 22],
		"text": "Pleasant",
		"icon": "$path/pleasant.png",
		"mood": 3
	  },
      { "style": "font-family: 'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; border: 0px solid #6889f9; padding: 5px;", 
		"selected": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; background-image: url($path/moodcheck3.png); border: 0px solid #ebb70b; padding: 5px;",
		"loc": [12, 328],
		"size": [104, 22],
		"text": "Troubled",
		"icon": "$path/distraught.png",
		"mood": 4
	  },
      { "style": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; border: 0px solid #6889f9; border-top-right-radius: 10px; padding: 5px;", 
		"selected": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; background-image: url($path/moodcheck2.png); border: 0px solid #ebb70b; padding: 5px;",
		"loc": [117, 288],
		"size": [104, 22],
		"text": "Playful",
		"icon": "$path/pranky.png",
		"mood": 5
	  },
      { "style": "font-family: 'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; border: 0px solid #6889f9; padding: 5px;", 
		"selected": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; background-image: url($path/moodcheck3.png); border: 0px solid #ebb70b; padding: 5px;",
		"loc": [117, 308],
		"size": [104, 22],
		"text": "Smooth",
		"icon": "$path/smooth.png",
		"mood": 6
	  },
      { "style": "font-family: 'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; border: 0px solid #6889f9; padding: 5px;", 
		"selected": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; background-image: url($path/moodcheck3.png); border: 0px solid #ebb70b; padding: 5px;",
		"loc": [117, 328],
		"size": [104, 22],
		"text": "Pissed",
		"icon": "$path/rancorous.png",
		"mood": 1
	  },
      { "style": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; border: 0px solid #6889f9; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; padding: 5px;", 
		"selected": "font-family:'Courier'; color: rgba(0, 0, 0, 0%); text-align: left; background-image: url($path/moodcheck4.png); border: 0px solid #ebb70b; padding: 5px;",
		"loc": [12, 348],
		"size": [209, 22],
		"text": "ABSCOND",
		"icon": "",
		"mood": 2
	  }
  ]
 },
 "convo":
 {"style": "font-family: 'Courier'; background-color: #c3c3c3; background-image: url($path/convobg.png); background-repeat: no-repeat; border: 0px solid #c3c3c3;",
  "scrollbar": { "style" : "width: 18px; background: #ffffff; border: 2px solid #6889f9; padding-top: 17px; padding-bottom: 17px;  ",
                 "handle": " min-height: 20px; background-color: #ebb70b;",
                 "downarrow": "height: 17px; border: 0px solid #000000;", 
                 "darrowstyle": "image: url($path/downarrow.png);",
                 "uparrow": "height: 17px; border: 0px solid #000000;",
                 "uarrowstyle": "image: url($path/uparrow.png);"
               },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "size": [500, 325],
  "chumlabel": { "style": "font-family: 'Courier'; color: #ffffff; font: bold; font-size: 14px; background: #000000; border: 2px solid #ffffff; border-radius: 10px; margin-bottom: 21px;",
                 "align": { "h": "center", "v": "center" },
                 "minheight": 47,
                 "maxheight": 47,
                 "text" : "( $handle )"
               },
  "textarea": {
      "style": "font-family: 'Courier'; font: bold; font-size: 14px; text-align: center; background: #ffffff; border: 2px solid #6889f9; border-top-left-radius: 10px; border-bottom-left-radius: 10px; margin-right: 10px; margin-left: 10px;"
  },
  "input": {
      "style": "font-family: 'Courier'; color: #ffffff; font: bold; font-size: 12px; background: #000000; border: 2px solid #ffffff; border-radius: 10px; margin-top: 5px; margin-right: 10px; margin-left: 10px;"
  },
  "tabwindow" : {
	  "style": "background-color: #c3c3c3; border: 0px"
  },
  "tabs": {
      "style": "min-height: 25px; font-family: 'Courier'; color: #000000; font: bold; font-size: 12px; background-color: #c3c3c3;",
      "selectedstyle": "color: #000000;  background-color: #c3c3c3; border-top: 2px solid #6889f9; border-left: 2px solid #6889f9; border-right: 2px solid #6889f9; border-top-left-radius: 10px; border-top-right-radius: 10px;",
      "newmsgcolor": "#6889f9",
      "tabstyle": 1
  },
  "text": {
      "beganpester": "began blinking",
      "ceasepester": "ceased blinking",
      "blocked": "blocked",
      "unblocked": "unblocked",
	  "blockedmsg": "did not receive blink from",
      "openmemo": "opened memo on board",
      "joinmemo": "responded to memo",
      "closememo": "ceased responding to memo",
      "kickedmemo": "You have been banned from this memo!",
	  "idle": "is now an idle buddy!"
  },
  "systemMsgColor": "#c3c3c3"
 },
 "memos":
 {"memoicon": "$path/memo.png",
  "style": "font-family: 'Courier'; font: bold; background-color: #c3c3c3; selection-background-color:#919191; background-image: url($path/convobg.png); background-repeat: no-repeat; border: 0px solid #000000;",
  "size": [500,325],
  "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#6889f9",
      "tabstyle": 1
  },
  "scrollbar": { "style" : "width: 18px; background: #ffffff; border: 2px solid #6889f9; padding-top: 17px; padding-bottom: 17px;",
                 "handle": "background-color:#ebb70b; min-height:20px;",
                 "downarrow": "height:17px; border:0px solid #000000;", 
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px; border:0px solid #000000;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "label": { "text": "( $channel )",
             "style": "font-family: 'Courier'; color: #ffffff; font: bold; font-size: 14px; background: #000000;  border: 2px solid #ffffff; border-radius:10px; margin-bottom: 21px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 47,
             "maxheight": 47
           },
  "input": { "style": "font-family: 'Courier'; color:#ffffff; font: bold; font-size: 12px; background: #000000; border: 2px solid #ffffff; border-radius: 10px; margin-top: 5px; margin-right: 10px; margin-left: 10px;" },
  "textarea": { "style": "font-family: 'Courier'; font: bold; font-size: 14px; text-align: center; background: #ffffff; border: 2px solid #6889f9; border-top-left-radius: 10px; border-bottom-left-radius: 10px; margin-right: 10px; margin-left: 10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 200,
                "style": "font-family: 'Courier'; font: bold; font-size: 12px; background: #ffffff; selection-background-color:#646464; border: 2px solid #6889f9; border-radius: 10px;   margin-left: 0px; margin-right: 10px;"
              },
  "time": { "text": { "width": 75, 
                      "style": "font-family:'Courier'; color: #ffffff; font: bold; font-size: 12px; background: #000000; border: 2px solid #ffffff; border-radius: 10px; margin-top: 5px; margin-right: 5px; margin-left: 5px;" 
                    },
            "slider": { "style": "border: 0px;",
                        "groove": "",
                        "handle": ""
                      },
            "buttons": { "style": "width: 50px; font-family: 'Courier'; color: #ffffff; font: bold; font-size: 12px; background: #ebb70b; border: 2px solid #6889f9; border-radius: 10px; padding: 2px; margin-top: 5px; margin-right: 5px; margin-left: 5px;" }, 
            "arrows": { "left": "$path/leftarrow.png", 
                        "right": "$path/rightarrow.png",
                        "style": " border: 0px; margin-top: 5px; margin-right: 10px;" 
                      }
          },
  "systemMsgColor": "#c3c3c3",
  "op": { "icon": "$path/op.png" }
 }
}