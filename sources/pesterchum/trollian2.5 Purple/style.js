{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/tnbg.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "TROLLIAN",
  "menu" : { "style": "font-family: 'Arial'; font: bold; font-size: 14px; background-color: #49256E;border:2px solid #200F32", "loc": [3, 6] },
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 14px;" },
  "close": { "image": "$path/x.png",
             "loc": [275, 6]},
  "minimize": { "image": "$path/m.png",
                "loc": [260, 12]},
  "sounds": { "alertsound": "$path/honk.wav",
			  "ceasesound": "$path/honk.wav" },
  "defaultwindow": { "style": "background: #49256E; font-family:'Arial';font:bold;selection-background-color:#919191; " },
  "chums": { "style": "border:2px solid #200F32; background-color: black;color: white;font: bold;font-size:14px;font-family: 'Arial';selection-background-color:#646464; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#D5A7FF" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#440A7F" },

                 "offline": { "icon": "$path/offline.png", "color": "#646464"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#D5A7FF" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#D5A7FF" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#D5A7FF" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#D5A7FF" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#D5A7FF" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#D5A7FF" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#D5A7FF" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#D5A7FF" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#440A7F" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#440A7F" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#440A7F" },

                 "devious": { "icon": "$path/devious.png", "color": "#440A7F" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#440A7F" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#440A7F" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#440A7F" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#440A7F" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#440A7F" },

                 "perky": { "icon": "$path/perky.png", "color": "#440A7F" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#440A7F" },

                 "protective": { "icon": "$path/protective.png", "color": "#8914FF" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "TROLLTAG:",
                      "style": "color: black ;font:bold; font-family: 'Arial';" 
                    },
					"handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:white; font-family:'Arial'; font:bold; text-align:left; border:2px solid #D5A7FF;" }
                  },
  "addchum":  { "text": "ADD CHUMP", "style": "background: #D5A7FF; border:2px solid #27123C; font: bold; color: black; font-family:'Arial';"
              },
  "pester": { "text": "TROLL", "style": "background: #D5A7FF; border:2px solid #27123C; font: bold; color: black; font-family:'Arial';"
            },
  "block": { "style": "background: #D5A7FF; border:2px solid #27123C; font: bold; color: black; font-family:'Arial';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Arial';color:black;"
			   },
  "defaultmood": 7,
  "moods": [
      { "style": "text-align:left; background:#D5A7FF;border:2px solid #27123C;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #27123C; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [135, 30],
	    "text": "ECSTATIC",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#D5A7FF;border:2px solid #27123C;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #27123C; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 513],
		"size": [135, 30],
	    "text": "RELAXED",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#D5A7FF;border:2px solid #27123C;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #27123C; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 541],
		"size": [135, 30],
	    "text": "DISCONTENT",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#D5A7FF;border:2px solid #27123C;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #27123C; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [148, 485],
		"size": [135, 30],
	    "text": "DEVIOUS",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#D5A7FF;border:2px solid #27123C;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #27123C; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [148, 513],
		"size": [135, 30],
	    "text": "SLEEK",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#D5A7FF;border:2px solid #27123C;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #27123C; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [148, 541],
		"size": [135, 30],
	    "text": "DETESTFUL",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:center; border:2px solid #27123C; background:black;color: white; font-family:'Arial'; font:bold;padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #27123C; padding: 5px;color: black; font-family:'Arial'; font:bold;padding-left:3px;",
		"loc": [15, 569],
		"size": [268, 30],
		"text": "ABSCOND",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #49256E;border:2px solid #200F32; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #D5A7FF; color: black; border:0px; font-size: 14px;",
					"text" : ":: trolling: $handle ::" },
	 "textarea": {
		 "style": "background: white;  font-size: 14px;font:bold; border:2px solid #D5A7FF;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
 	 },
  "input": { "style": "background: white; border:2px solid #D5A7FF;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": "background-color: #49256E;border:2px solid #200F32;"
	 },
  "text": {
      "beganpester": "began trolling",
      "ceasepester": "gave up trolling",
      "blocked": "blocked",
      "unblocked": "mercifully forgave",
      "openmemo": "opened memo on board",
      "joinmemo": "responded to memo",
      "closememo": "ceased responding to memo",
      "kickedmemo": "You have been banned from this memo!"
  },
	 "tabs": {
		 "style": "",
		 "selectedstyle": "",
		 "newmsgcolor": "#8914FF"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #49256E;border:2px solid #200F32; font-family: 'Courier';",
   "label": { "style": "margin-bottom: 21px;background: #D5A7FF; color: white; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: white;  font-size: 14px;font:bold; border:2px solid #D5A7FF;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #49256E; background: white;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: white; border:2px solid #D5A7FF;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #200F32; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #200F32; font: bold; font-size: 12px; background: #49256E; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },


   "tabs": {
       "style": "",
       "selectedstyle": "",
       "newmsgcolor": "#8914FF",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}
