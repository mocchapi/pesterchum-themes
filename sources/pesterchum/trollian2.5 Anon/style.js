{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/tnbg.png",
  "size": [300,620],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "TROLLIAN",
  "menu" : { "style": "font-family: 'Arial'; font: bold; font-size: 14px; background-color: #323232;border:2px solid #232323", "loc": [3, 6] },
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 14px;" },
  "close": { "image": "$path/x.png",
             "loc": [275, 6]},
  "minimize": { "image": "$path/m.png",
                "loc": [260, 12]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #323232; font-family:'Arial';font:bold;selection-background-color:#919191; " },
  "chums": { "style": "border:2px solid #999999; background-color: black;color: white;font: bold;font-size:14px;font-family: 'Arial';selection-background-color:#646464; ",
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "#999999" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "#626262" },

                 "offline": { "icon": "$path/offline.png", "color": "#646464"},

			     
                 "pleasant": { "icon": "$path/pleasant.png", "color": "#999999" },

                 "distraught": { "icon": "$path/distraught.png", "color": "#999999" },

                 "pranky": { "icon": "$path/pranky.png", "color": "#999999" },


                 "smooth": { "icon": "$path/smooth.png", "color": "#999999" },

                 "mystified": { "icon": "$path/mystified.png", "color": "#999999" },

                 "amazed": { "icon": "$path/amazed.png", "color": "#999999" },

                 "insolent": { "icon": "$path/insolent.png", "color": "#999999" },

                 "bemused": { "icon": "$path/bemused.png", "color": "#999999" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "#626262" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "#626262" },

                 "discontent": { "icon": "$path/discontent.png", "color": "#626262" },

                 "devious": { "icon": "$path/devious.png", "color": "$626262" },

                 "sleek": { "icon": "$path/sleek.png", "color": "#626262" },
			     
                 "detestful": { "icon": "$path/detestful.png", "color": "#626262" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "#626262" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "#626262" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "#626262" },

                 "perky": { "icon": "$path/perky.png", "color": "#626262" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "#626262" },

                 "protective": { "icon": "$path/protective.png", "color": "red" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": "TROLLTAG:",
                      "style": "color: black ;font:bold; font-family: 'Arial';" 
                    },
					"handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:white; font-family:'Arial'; font:bold; text-align:left; border:2px solid #999999;" }
                  },
  "addchum":  { "text": "ADD CHUMP", "style": "background: #999999; border:2px solid #232323; font: bold; color: black; font-family:'Arial';"
              },
  "pester": { "text": "TROLL", "style": "background: #999999; border:2px solid #232323; font: bold; color: black; font-family:'Arial';"
            },
  "block": { "style": "background: #999999; border:2px solid #232323; font: bold; color: black; font-family:'Arial';"
           },
  "moodlabel": { "style": "font:bold;font-family:'Arial';color:black;"
			   },
  "defaultmood": 7,
  "moods": [
      { "style": "text-align:left; background:#999999;border:2px solid #232323;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #232323; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 485],
		"size": [135, 30],
	    "text": "ECSTATIC",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#999999;border:2px solid #232323;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #232323; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 513],
		"size": [135, 30],
	    "text": "RELAXED",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#999999;border:2px solid #232323;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #232323; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [15, 541],
		"size": [135, 30],
	    "text": "DISCONTENT",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#999999;border:2px solid #232323;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #232323; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [148, 485],
		"size": [135, 30],
	    "text": "DEVIOUS",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#999999;border:2px solid #232323;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #232323; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [148, 513],
		"size": [135, 30],
	    "text": "SLEEK",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#999999;border:2px solid #232323;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #232323; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [148, 541],
		"size": [135, 30],
	    "text": "DETESTFUL",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:center; border:2px solid #232323; background:black;color: white; font-family:'Arial'; font:bold;padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #232323; padding: 5px;color: black; font-family:'Arial'; font:bold;padding-left:3px;",
		"loc": [15, 569],
		"size": [268, 30],
		"text": "ABSCOND",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #323232;border:2px solid #232323; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #999999; color: black; border:0px; font-size: 14px;",
					"text" : ":: trolling: $handle ::" },
	 "textarea": {
		 "style": "background: white;  font-size: 14px;font:bold; border:2px solid #999999;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
 	 },
  "input": { "style": "background: white; border:2px solid #999999;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": "background-color: #323232;border:2px solid #232323;"
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
		 "newmsgcolor": "#ff0000"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #323232;border:2px solid #232323; font-family: 'Courier';",
   "label": { "style": "margin-bottom: 21px;background: #999999; color: white; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: white;  font-size: 14px;font:bold; border:2px solid #999999;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #232323; background: white;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: white; border:2px solid #999999;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #232323; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #232323; font: bold; font-size: 12px; background: #323232; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
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
