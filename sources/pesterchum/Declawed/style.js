{
  "inherits": "pesterchum2.5",
  "main": {
    "style": "",
    "background-image": "$path/pcbg.png",
    "size": [
      300,
      620
    ],
    "icon": "$path/trayicon.png",
    "newmsgicon": "$path/trayicon2.png",
    "windowtitle": "Declawed",
    "menu": {
      "style": "font-family: 'Courier'; font: bold; font-size: 14px; color: black; background-color: #60C1FF;border:2px solid #44418F; selection-background-color:#736396;",
      "menuitem": "font-size:14px;selection-background-color:#736396;",
      "selected": "background-color:#736396;"
    },
    "menubar": {
      "style": "font-family: 'Courier'; font:bold; font-size: 14px; color: white;"
    },
    "close": {
      "image": "$path/x.png",
      "loc": [
        286,
        6
      ]
    },
    "minimize": {
      "image": "$path/m.png",
      "loc": [
        268,
        6
      ]
    },
    "sounds": {
      "alertsound": "$path/alarm.wav",
      "ceasesound": "$path/cease.wav",
      "memosound": "$path/alarm2.wav"
    },
    "defaultwindow": {
      "style": "background: #59566F; font-family:'Courier'; font: bold; color: black; selection-background-color:#736396;"
    },
    "menus": {
      "client": {
        "_name": "CLIENT",
        "options": "SETTINGS",
        "memos": "MEMOS",
        "logviewer": "CHATLOGS",
        "randen": "RANDOM ENCOUNTER",
        "userlist": "USERLIST",
        "addgroup": "ADD GROUP",
        "talk": "MESSAGE",
        "import": "IMPORT",
        "reconnect": "RECONNECT",
        "idle": "IDLE",
        "exit": "EXIT",
        "console": "CONSOLE"
      },
      "profile": {
        "_name": "PROFILE",
        "switch": "SWITCH",
        "color": "COLOR",
        "theme": "THEME",
        "block": "BLOCKLIST",
        "quirks": "QUIRKS"
      },
      "help": {
        "_name": "HELP",
        "rules": "RULES",
        "about": "ABOUT",
        "help": "HELP",
        "calsprite": "CALSPRITE",
        "chanserv": "CHANSERV",
        "nickserv": "NICKSERV"
      },
      "rclickchumlist": {
        "pester": "MESSAGE",
        "removechum": "UNFRIEND",
        "report": "REPORT",
        "blockchum": "BLOCK",
        "addchum": "ADD FRIEND",
        "viewlog": "VIEW CHATLOG",
        "notes": "EDIT NOTES...",
        "unblockchum": "UNBLOCK",
        "removegroup": "REMOVE GROUP",
        "renamegroup": "RENAME GROUP",
        "movechum": "MOVE TO",
        "banuser": "BAN USER",
        "opuser": "MAKE OP",
        "voiceuser": "GIVE VOICE",
        "quirkkill": "KILL QUIRK",
        "quirksoff": "QUIRKS OFF",
        "ooc": "OOC",
        "invitechum": "INVITE FRIEND",
        "memosetting": "MEMO SETTINGS",
        "memonoquirk": "DISABLE QUIRKS",
        "memohidden": "HIDDEN",
        "memoinvite": "INVITE-ONLY",
        "memomute": "MUTE",
        "beeponmessage": "BEEP ON MESSAGE",
        "flashonmessage": "FLASH ON MESSAGE",
        "mutenotifications": "MUTE NOTIFICATIONS"
      }
    },
    "chums": {
      "style": "border:2px solid #44418F; background-color: black;color: white;font: bold;font-size:14px;font-family: 'Courier';selection-background-color:#646464; ",
      "loc": [
        15,
        70
      ],
      "size": [
        270,
        300
      ]
    },
    "trollslum": {
      "style": "background: #59566F; border:2px solid #44418F; font-family: 'Courier'",
      "size": [
        450,
        312
      ],
      "label": {
        "text": "BLOCKLIST",
        "style": "color: white;font:bold;font-size:14px;font-family: 'Courier';border:0px;"
      },
      "chumroll": {
        "style": "border:2px solid #44418F; background-color: black;color: white;font: bold;font-family: 'Courier';selection-background-color:#646464; "
      }
    },
    "mychumhandle": {
      "label": {
        "text": "USERNAME:",
        "loc": [
          12,
          415
        ],
        "style": "color: white; font:bold; font-family: 'Courier';"
      },
      "handle": {
        "loc": [
          15,
          435
        ],
        "size": [
          240,
          25
        ],
        "style": "background-color: black; padding: 3px; padding-left: 25px; color:white; font-family:'Courier'; font:bold; text-align:left; border:2px solid #44418F;"
      },
      "colorswatch": {
        "loc": [
          255,
          435
        ],
        "size": [
          30,
          25
        ],
        "text": " "
      },
      "currentMood": [
        20,
        440
      ]
    },
    "addchum": {
      "style": "background: solid #59566F; border:2px solid #44418F; font: bold; color: white; font-family:'Courier';",
      "loc": [
        15,
        380
      ],
      "size": [
        90,
        30
      ],
      "text": "ADD FRIEND"
    },
    "pester": {
      "style": "background: solid #59566F; border:2px solid #44418F; font: bold; color: white; font-family:'Courier';",
      "loc": [
        193,
        380
      ],
      "size": [
        89,
        30
      ],
      "text": "MESSAGE"
    },
    "block": {
      "style": "background: #736396; border:2px solid #44418F; font: bold; color: white; font-family:'Courier';",
      "loc": [
        104,
        380
      ],
      "size": [
        90,
        30
      ],
      "text": "BLOCK"
    },
    "moodlabel": {
      "style": "font:bold;font-family:'Courier';color:white;",
      "loc": [
        12,
        466
      ],
      "text": "MOOD:"
    },
    "moods": [
      {
        "style": "text-align:left; background:#59566F;border:2px solid #44418F;color: white; font-family:'Courier'; font:bold; padding-left:3px;",
        "selected": "text-align:left; background: solid #DDBFFF; border:2px solid #44418F; color: black; font-family:'Courier'; font:bold; padding-left:3px;",
        "loc": [
          15,
          485
        ],
        "size": [
          135,
          30
        ],
        "text": "CHUMMY",
        "icon": "$path/chummy.png",
        "mood": 0
      },
      {
        "style": "text-align:left; background:#59566F;border:2px solid #44418F;color: white; font-family:'Courier'; font:bold;padding-left:3px;",
        "selected": "text-align:left; background: solid #DDBFFF; border:2px solid #44418F; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
        "loc": [
          15,
          513
        ],
        "size": [
          135,
          30
        ],
        "text": "PLEASANT",
        "icon": "$path/pleasant.png",
        "mood": 3
      },
      {
        "style": "text-align:left; background:#59566F;border:2px solid #44418F;color: white; font-family:'Courier'; font:bold;padding-left:3px;",
        "selected": "text-align:left; background: solid #DDBFFF; border:2px solid #44418F; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
        "loc": [
          15,
          541
        ],
        "size": [
          135,
          30
        ],
        "text": "DISTRAUGHT",
        "icon": "$path/distraught.png",
        "mood": 4
      },
      {
        "style": "text-align:left; background:#59566F;border:2px solid #44418F;color: white; font-family:'Courier'; font:bold;padding-left:3px;",
        "selected": "text-align:left; background: solid #DDBFFF; border:2px solid #44418F; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
        "loc": [
          148,
          485
        ],
        "size": [
          135,
          30
        ],
        "text": "PRANKY",
        "icon": "$path/pranky.png",
        "mood": 5
      },
      {
        "style": "text-align:left; background:#59566F;border:2px solid #44418F;color: white; font-family:'Courier'; font:bold;padding-left:3px;",
        "selected": "text-align:left; background: solid #DDBFFF; border:2px solid #44418F; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
        "loc": [
          148,
          513
        ],
        "size": [
          135,
          30
        ],
        "text": "SMOOTH",
        "icon": "$path/smooth.png",
        "mood": 6
      },
      {
        "style": "text-align:left; background:#59566F;border:2px solid #44418F;color: white; font-family:'Courier'; font:bold;padding-left:3px;",
        "selected": "text-align:left; background: solid #DDBFFF; border:2px solid #44418F; color: black; font-family:'Courier'; font:bold;padding-left:3px;",
        "loc": [
          148,
          541
        ],
        "size": [
          135,
          30
        ],
        "text": "RANCOROUS",
        "icon": "$path/rancorous.png",
        "mood": 1
      },
      {
        "style": "text-align:center; border:2px solid #44418F; background:black;color: white; font-family:'Courier'; font:bold;padding-left:3px;",
        "selected": "text-align:left; background: solid #DDBFFF; border:2px solid #44418F; padding: 5px;color: black; font-family:'Courier'; font:bold;padding-left:3px;",
        "loc": [
          15,
          569
        ],
        "size": [
          270,
          30
        ],
        "text": "ABSCOND",
        "icon": "$path/offline.png",
        "mood": 2
      }
    ]
  },
  "convo": {
    "style": "background: #59566F; font:bold; font-family: 'Courier';",
    "scrollbar": {
      "style": "",
      "handle": ""
    },
    "margins": {
      "top": 22,
      "bottom": 9,
      "left": 10,
      "right": 4
    },
    "size": [
      900,
      623
    ],
    "chumlabel": {
      "style": "background: #736396; color: white; padding: 2px; border:2px solid #44418F; margin-bottom: 4px;",
      "align": {
        "h": "left",
        "v": "center"
      },
      "minheight": 22,
      "maxheight": 36,
      "text": "Messaging: $handle"
    },
    "textarea": {
      "style": "background: #38354C; border:2px solid #44418F; font-size: 14px; color: white;"
    },
    "input": {
      "style": "background: 38354C;margin-top:5px; border:2px solid #44418F; margin-right: 54px; font-size: 12px; color: white;"
    },
    "tabwindow": {
      "style": "background: #59566F; font:bold; font-family: 'Courier'"
    },
    "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "pink",
      "tabstyle": 0
    },
    "text": {
      "beganpester": "began messaging",
      "ceasepester": "stopped messaging",
      "blocked": "blocked",
      "unblocked": "unblocked",
      "openmemo": "opened memo on board",
      "joinmemo": "joined memo",
      "closememo": "closed memo",
      "kickedmemo": "You have been banned from this memo!"
    },
    "systemMsgColor": "#736396"
  },
  "memos": {
    "size": [
      1300,
      900
    ],
    "style": "background-color: #59566F;border:2px solid #44418F; font:bold; font-family: 'Courier';",
    "label": {
      "style": "margin-bottom: 21px;background: #59566F; color: white; border:0px; font-size: 14px;"
    },
    "textarea": {
      "style": "background: #38354C;  font-size: 14px;font:bold; border:2px solid #44418F;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
    },
    "userlist": {
      "style": "border:2px solid #44418F; background: #38354C; font: bold;font-family: 'Courier'; selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
    },
    "input": {
      "style": "background: #38354C; border:2px solid #44418F;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px; color: white;"
    },
    "time": {
      "text": {
        "style": " border: 2px solid #44418F; background: #38354C; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Courier';font:bold;"
      },
      "buttons": {
        "style": "color: black; font: bold; border: 2px solid #44418F; font: bold; font-size: 12px; background: #736396; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;"
      }
    },
    "systemMsgColor": "#736396",
    "op": {
      "icon": "$path/opcrown.png"
    },
    "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#pink",
      "tabstyle": 0
    },
    "scrollbar": null
  }
}