{"inherits": "pesterchum2.5",
 "main":
 {"background-image": "$path/sgrubonline.png",
  "size": [569,510],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "TROLLIAN",
  "menu" : { "style": "font-family: 'Arial'; font: bold; font-size: 14px; background-color: #57755b;border:2px solid #000000", "loc": [289, 19] },
  "menubar": { "style": "font-family: 'Arial'; font:bold; font-size: 14px;" },
  "close": { "image": "$path/x.png",
             "loc": [524, 18]},
  "minimize": { "image": "$path/m.png",
                "loc": [503, 18]},
  "sounds": { "alertsound": "$path/alarm.wav",
			  "ceasesound": "$path/cease.wav" },
  "defaultwindow": { "style": "background: #57755b; font-family:'Arial';font:bold;selection-background-color:#57755b; " },
  "chums": { "style": "border:2px solid #c2fcc2; border-radius: 8px; background-color: black;color: white;font: bold;font-size:14px;font-family: 'Arial';selection-background-color:#57755b; ",
            "loc": [289, 85],
            "size": [226, 215],
             "moods": { 

                 "chummy": { "icon": "$path/chummy.png", "color": "white" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "red" },

                 "offline": { "icon": "$path/offline.png", "color": "#465646"},

			     
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
			 }
		   },
  "mychumhandle": { "label": 
                    { "text": " ",
                      "style": "color: black ;font:bold; font-family: 'Arial';" 
                    },
                    "handle": { "style": "background-color: black; padding: 3px; padding-left: 25px; color:white; font-family:'Arial'; font:bold; text-align:left; border:2px solid #57755b; border-radius: 8px;", "loc": [16, 249], "size": [186, 37] },
                    "colorswatch": { "size": [37, 36], 
                    "loc": [207, 249] },
                    "currentMood": [22, 260]
                    
                  },
  "addchum":  { "text": "ADD", "style": "background: #c7e6c8; border:2px solid #c7e6c8; border-radius: 8px; font: bold; color: black; font-family:'Arial';", "loc": [293, 307], "size": [66, 40]
              },
  "pester": { "text": "TROLL", "style": "background: #c7e6c8; border:2px solid #c7e6c8;border-radius: 8px; font: bold; color: black; font-family:'Arial';", "loc": [369, 307], "size": [66, 40]
            },
  "block": { "style": "background: #c7e6c8; border:2px solid #c7e6c8;border-radius: 8px; font: bold; color: black; font-family:'Arial';", "loc": [445, 307], "size": [66, 40]
           },
  "moodlabel": { "text": " ", "style": "font:bold;font-family:'Arial';color:black;"
			   },
  "defaultmood": 7,
  "moods": [
      { "style": "text-align:left; background:#c7e6c8;border:2px solid #c7e6c8;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #c7e6c8; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [284, 355],
		"size": [125, 33],
	    "text": "ECSTATIC",
		"icon": "$path/estatic.png",
		"mood": 7
	  },

      { "style": "text-align:left; background:#c7e6c8;border:2px solid #c7e6c8;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #c7e6c8; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [284, 388],
		"size": [125, 33],
	    "text": "RELAXED",
		"icon": "$path/relaxed.png",
		"mood": 8
	  },

      { "style": "text-align:left; background:#c7e6c8;border:2px solid #c7e6c8;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #c7e6c8; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [284, 421],
		"size": [125, 33],
	    "text": "DISCONTENT",
		"icon": "$path/discontent.png",
		"mood": 9
	  },

      { "style": "text-align:left; background:#c7e6c8;border:2px solid #c7e6c8;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #c7e6c8; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [409, 355],
		"size": [125, 33],
	    "text": "DEVIOUS",
		"icon": "$path/devious.png",
		"mood": 10
	  },

      { "style": "text-align:left; background:#c7e6c8;border:2px solid #c7e6c8;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #c7e6c8; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [409, 388],
		"size": [125, 33],
	    "text": "SLEEK",
		"icon": "$path/sleek.png",
		"mood": 11
	  },

      { "style": "text-align:left; background:#c7e6c8;border:2px solid #c7e6c8;color: black; font-family:'Arial'; font:bold; padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #c7e6c8; color: black; font-family:'Arial'; font:bold; padding-left:3px;",
		"loc": [409, 421],
		"size": [125, 33],
	    "text": "DETESTFUL",
		"icon": "$path/detestful.png",
		"mood": 12
	  },

      { "style": "text-align:center; border:2px solid #c7e6c8; background:black;color: white; font-family:'Arial'; font:bold;padding-left:3px;", 
		"selected": "text-align:left; background:white; border:2px solid #c7e6c8; padding: 5px;color: black; font-family:'Arial'; font:bold;padding-left:3px;",
		"loc": [284, 454],
		"size": [250, 33],
		"text": "ABSCOND",
		"icon": "$path/offline.png",
		"mood": 2
	  }
  ]
},
 "convo": {
     "style": "background-color: #57755b;border:2px solid #57755b; font-family: 'Arial';",
     "chumlabel": { "style": "margin-bottom: 21px;background: #80f069; color: black; border:0px; font-size: 14px;",
					"text" : ":: trolling: $handle ::" },
	 "textarea": {
		 "style": "background: white;  font-size: 14px;font:bold; border:2px solid #80f069;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
 	 },
  "input": { "style": "background: white; border:2px solid #80f069;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
	 "tabwindow" : {
		 "style": ""
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
		 "newmsgcolor": "#80f069"
	 },
	 "scrollbar": null
 },
 "memos":
 { "size": [600,425],
   "style": "background-color: #57755b;border:2px solid #57755b; font-family: 'Arial';",
   "label": { "style": "margin-bottom: 21px;background: #57755b; color: white; border:0px; font-size: 14px;"
			},
   "textarea": {
	   "style": "background: white;  font-size: 14px;font:bold; border:2px solid #57755b;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Arial'"
   },
   "userlist": { "style": "border:2px solid #57755b; background: white;font: bold;font-family: 'Courier';selection-background-color:#57755b; font-size: 12px;  margin-left:0px; margin-right:10px;"
               },
   "input": { "style": "background: white; border:2px solid #80f069;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
   "time": { "text": { "style": " border: 2px solid #57755b; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Arial';font:bold;" 
                    },
             "buttons": { "style": "color: black; font: bold; border: 2px solid #57755b; font: bold; font-size: 12px; background: #98f898; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" }
          },


   "tabs": {
       "style": "",
       "selectedstyle": "",
       "newmsgcolor": "#80f069",
       "tabstyle": 0
   },
   "scrollbar": null
 }
}