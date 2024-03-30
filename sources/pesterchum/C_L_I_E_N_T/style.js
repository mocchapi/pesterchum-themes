{
	"main": {
		"style": "background-repeat: no-repeat; ",
		"background-image": "$path/pcbg.png",
		"size": [
			232,
			380
		],
		"icon": "$path/trayicon.png",
		"newmsgicon": "$path/trayicon2.png",
		"windowtitle": "C H A T  C L I E N T",
		"close": {
			"image": "$path/x.png",
			"loc": [
				220,
				5
			]
		},
		"minimize": {
			"image": "$path/m.png",
			"loc": [
				210,
				10
			]
		},
		"menubar": {
			"style": "font-family: 'Calibri'; font: bold; font-size: 10px; color: #ffffffff; "
		},
		"menu": {
			"style": "font-family: 'Calibri'; font: bold; font-size: 10px; color: #ffffffff; background-color: #ff000000; border: 2px solid #6abe30; ",
			"menuitem": "margin-right: 10px; ",
			"selected": "background-color: #ffffff00; ",
			"disabled": "color: #ff000000; ",
			"loc": [
				5,
				0
			]
		},
		"sounds": {
			"alertsound": "$path/alarm.wav",
			"memosound": "$path/alarm2.wav",
			"ceasesound": "$path/cease.wav"
		},
		"menus": {
			"client": {
				"_name": "C L I E N T",
				"options": "OPTIONS",
				"memos": "MEMOS",
				"logviewer": "PESTERLOGS",
				"randen": "RANDOM ENCOUNTER",
				"userlist": "USERLIST",
				"addgroup": "ADD GROUP",
				"talk": "PESTER",
				"import": "IMPORT",
				"reconnect": "RECONNECT",
				"idle": "IDLE",
				"exit": "EXIT",
				"console": "CONSOLE"
			},
			"profile": {
				"_name": "P R O F I L E",
				"switch": "SWITCH",
				"color": "COLOR",
				"theme": "THEME",
				"block": "TROLLSLUM",
				"quirks": "QUIRKS"
			},
			"help": {
				"_name": "H E L P",
				"rules": "RULES",
				"about": "ABOUT",
				"help": "HELP",
				"calsprite": "CALSPRITE",
				"chanserv": "MEMO REGISTER",
				"nickserv": "NAME REGISTER"
			},
			"rclickchumlist": {
				"pester": "PESTER",
				"removechum": "REMOVE CHUM",
				"report": "REPORT",
				"blockchum": "BLOCK",
				"addchum": "ADD CHUM",
				"viewlog": "VIEW PESTERLOG",
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
				"invitechum": "INVITE CHUM",
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
			"style": "border: 2px solid #6abe30; background-color: #ff000000; color: #ff6abe30; font: bold; font-family: 'Calibri'; selection-background-color: #ff646464; ",
			"loc": [
				12,
				117
			],
			"size": [
				209,
				82
			],
			"userlistcolor": "#ffffffff",
			"moods": {
				"chummy": {
					"icon": "$path/chummy.png",
					"color": "#ffffffff"
				},
				"rancorous": {
					"icon": "$path/rancorous.png",
					"color": "#ffff0000"
				},
				"offline": {
					"icon": "$path/offline.png",
					"color": "#ff646464"
				},
				"pleasant": {
					"icon": "$path/pleasant.png",
					"color": "#ffffffff"
				},
				"distraught": {
					"icon": "$path/distraught.png",
					"color": "#ffffffff"
				},
				"pranky": {
					"icon": "$path/pranky.png",
					"color": "#ffffffff"
				},
				"smooth": {
					"icon": "$path/smooth.png",
					"color": "#ffffffff"
				},
				"mystified": {
					"icon": "$path/mystified.png",
					"color": "#ffffffff"
				},
				"amazed": {
					"icon": "$path/amazed.png",
					"color": "#ffffffff"
				},
				"insolent": {
					"icon": "$path/insolent.png",
					"color": "#ffffffff"
				},
				"bemused": {
					"icon": "$path/bemused.png",
					"color": "#ffffffff"
				},
				"ecstatic": {
					"icon": "$path/ecstatic.png",
					"color": "#ffff0000"
				},
				"relaxed": {
					"icon": "$path/relaxed.png",
					"color": "#ffff0000"
				},
				"discontent": {
					"icon": "$path/discontent.png",
					"color": "#ffff0000"
				},
				"devious": {
					"icon": "$path/devious.png",
					"color": "#ffff0000"
				},
				"sleek": {
					"icon": "$path/sleek.png",
					"color": "#ffff0000"
				},
				"detestful": {
					"icon": "$path/detestful.png",
					"color": "#ffff0000"
				},
				"mirthful": {
					"icon": "$path/mirthful.png",
					"color": "#ffff0000"
				},
				"manipulative": {
					"icon": "$path/manipulative.png",
					"color": "#ffff0000"
				},
				"vigorous": {
					"icon": "$path/vigorous.png",
					"color": "#ffff0000"
				},
				"perky": {
					"icon": "$path/perky.png",
					"color": "#ffff0000"
				},
				"acceptant": {
					"icon": "$path/acceptant.png",
					"color": "#ffff0000"
				},
				"protective": {
					"icon": "$path/protective.png",
					"color": "#ff00ff00"
				},
				"blocked": {
					"icon": "$path/blocked.png",
					"color": "#ff000000"
				}
			}
		},
		"trollslum": {
			"style": "background: #fdb302; border: 2px solid yellow; font-family: 'Courier'; ",
			"size": [
				195,
				200
			],
			"label": {
				"text": "TROLLSLUM",
				"style": "color: #ff000000; font: bold; font-family: 'Courier'; border: 0px; "
			},
			"chumroll": {
				"style": "border: 2px solid yellow; background-color: #ff000000; color: #ffffffff; font: bold; font-family: 'Courier'; selection-background-color: #ff646464; "
			}
		},
		"mychumhandle": {
			"label": {
				"text": "CHUMHANDLE:",
				"loc": [
					19,
					232
				],
				"style": "color: #00ffff00; font: bold; font-family: 'Calibri'; "
			},
			"handle": {
				"style": "background: rgba(0,0,0,0); padding: 3px; color: #ffffffff; font-family: 'Calibri'; font: bold; text-align: left; ",
				"loc": [
					36,
					246
				],
				"size": [
					180,
					21
				]
			},
			"colorswatch": {
				"loc": [
					196,
					246
				],
				"size": [
					23,
					21
				],
				"text": ""
			},
			"currentMood": [
				18,
				249
			]
		},
		"defaultwindow": {
			"style": "color: #ff6abe30; background: #000000; font-family: 'Calibri'; font: bold; selection-background-color: #ff919191; font-size: 12px; "
		},
		"addchum": {
			"style": "background: rgba(255, 255, 0, 0%); border: 2px solid #6abe30; font: bold; color: #00000000; font-family: 'Courier'; ",
			"pressed": "background: rgb(255, 255, 255, 30%); ",
			"loc": [
				12,
				202
			],
			"size": [
				71,
				22
			],
			"text": ""
		},
		"pester": {
			"style": "background: rgba(255, 255, 0, 0%); border: 2px solid #6abe30; font: bold; color: #00ffff00; font-family: 'Calibri'; ",
			"pressed": "background: rgb(255, 255, 255, 30%); ",
			"loc": [
				150,
				202
			],
			"size": [
				71,
				22
			],
			"text": ""
		},
		"block": {
			"style": "background: rgba(255, 255, 0, 0%); border: 2px solid #6abe30; font: bold; color: #00ffff00; font-family: 'Calibri'; ",
			"pressed": "background: rgb(255, 255, 255, 30%); ",
			"loc": [
				81,
				202
			],
			"size": [
				71,
				22
			],
			"text": ""
		},
		"defaultmood": 6,
		"moodlabel": {
			"style": "border: 2px solid #6abe30; ",
			"loc": [
				20,
				430
			],
			"text": "MOODS"
		},
		"moods": [
			{
				"style": "text-align: left; border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"selected": "text-align: left; background-image: url($path/moodcheck1.png); border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"loc": [
					12,
					288
				],
				"size": [
					104,
					22
				],
				"text": "CHUMMY",
				"icon": "$path/chummy.png",
				"mood": 0
			},
			{
				"style": "text-align: left; border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"selected": "text-align: left; background-image: url($path/moodcheck2.png); border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"loc": [
					12,
					308
				],
				"size": [
					104,
					22
				],
				"text": "PALSY",
				"icon": "$path/pleasant.png",
				"mood": 3
			},
			{
				"style": "text-align: left; border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"selected": "text-align: left; background-image: url($path/moodcheck3.png); border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"loc": [
					12,
					328
				],
				"size": [
					104,
					22
				],
				"text": "CHIPPER",
				"icon": "$path/distraught.png",
				"mood": 4
			},
			{
				"style": "text-align: left; border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"selected": "text-align: left; background-image: url($path/moodcheck2.png); border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"loc": [
					117,
					288
				],
				"size": [
					104,
					22
				],
				"text": "BULLY",
				"icon": "$path/pranky.png",
				"mood": 5
			},
			{
				"style": "text-align: left; border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"selected": "text-align: left; background-image: url($path/moodcheck2.png); border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"loc": [
					117,
					308
				],
				"size": [
					104,
					22
				],
				"text": "PEPPY",
				"icon": "$path/smooth.png",
				"mood": 6
			},
			{
				"style": "text-align: left; border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"selected": "text-align: left; background-image: url($path/moodcheck4.png); border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"loc": [
					117,
					328
				],
				"size": [
					104,
					22
				],
				"text": "RANCOROUS",
				"icon": "$path/rancorous.png",
				"mood": 1
			},
			{
				"style": "text-align: left; border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"selected": "text-align: left; background-image: url($path/moodcheck5.png); border: 2px solid #6abe30; padding: 5px; color: #00000000; font-family: 'Courier'; ",
				"loc": [
					12,
					348
				],
				"size": [
					209,
					22
				],
				"text": "ABSCOND",
				"icon": "$path/offline.png",
				"mood": 2
			}
		]
	},
	"convo": {
		"style": "background-color: #ff000000; background-image: url($path/convobg.png); background-repeat: no-repeat; border: 2px solid #6abe30; font-family: 'Calibri'; ",
		"scrollbar": {
			"style": "padding-top: 17px; padding-bottom: 17px; width: 18px; background: white; border: 2px solid #c48a00; ",
			"handle": "background-color: #ff6abe30; min-height: 20px; ",
			"downarrow": "height: 17px; border: 0px solid #c48a00; ",
			"darrowstyle": "image: url($path/downarrow.png); ",
			"uparrow": "height: 17px; border: 0px solid #c48a00; ",
			"uarrowstyle": "image: url($path/uparrow.png); "
		},
		"margins": {
			"top": 0,
			"bottom": 6,
			"left": 0,
			"right": 0
		},
		"size": [
			500,
			325
		],
		"chumlabel": {
			"style": "margin-bottom: 21px; background: black; color: #ff6abe30; border: 1px solid #6abe30; font-size: 14px; font-family: 'Calibri'; ",
			"align": {
				"h": "center",
				"v": "center"
			},
			"minheight": 47,
			"maxheight": 47,
			"text": "- hello $handle -"
		},
		"textarea": {
			"style": "background: #212121; font-size: 12px; font: bold; border: 2px solid #6abe30; text-align: center; margin-right: 10px; margin-left: 10px; font-family: 'Calibri'; "
		},
		"input": {
			"style": "color: #ff6abe30; background: black; border: 2px solid #6abe30; margin-top: 5px; margin-right: 10px; margin-left: 10px; font-size: 12px; font-family: 'Courier'; "
		},
		"tabwindow": {
			"style": "background-color: #ff000000; border: 0px; "
		},
		"tabs": {
			"style": "background-color: #ff50a715; font-family: 'Calibri'; font: bold; font-size: 12px; min-height: 25px; ",
			"selectedstyle": "border: 0px; background-color: #ff6abe30; border-top: 2px solid yellow; border-left: 2px solid yellow; border-right: 2px solid yellow; border-top-left-radius: 4px; border-top-right-radius: 4px; border-color: #ff6abe30; ",
			"newmsgcolor": "#ff50a715",
			"tabstyle": 0
		},
		"text": {
			"beganpester": "- began pestering -",
			"ceasepester": "- ceased pestering -",
			"blocked": "- block -",
			"unblocked": "- unblocked -",
			"blockedmsg": "- blocked message from",
			"openmemo": "- opened chatroom -",
			"joinmemo": "- entered chatroom -",
			"closememo": "- escaped chatroom -",
			"kickedmemo": "- you have been removed from this memo -",
			"idle": "- is now idle -"
		},
		"systemMsgColor": "#ff6abe30"
	},
	"memos": {
		"memoicon": "$path/memo.png",
		"style": "background-color: #ff6abe30; background-image: url($path/convobg.png); background-repeat: no-repeat; border: 2px solid #6abe30; font-family: 'Calibri'; font: bold; selection-background-color: #ff919191; ",
		"size": [
			500,
			325
		],
		"tabs": {
			"style": "",
			"selectedstyle": "",
			"newmsgcolor": "#ff6abe30",
			"tabstyle": 0
		},
		"scrollbar": {
			"style": "padding-top: 17px; padding-bottom: 17px; width: 18px; background: rgba(255, 255, 0, 0%); border: 0px; ",
			"handle": "background-color: #ff6abe30; min-height: 20px; ",
			"downarrow": "height: 17px; border: 0px solid #c48a00; ",
			"darrowstyle": "image: url($path/downarrow.png); ",
			"uparrow": "height: 17px; border: 0px solid #c48a00; ",
			"uarrowstyle": "image: url($path/uparrow.png); "
		},
		"label": {
			"text": "- chatroom: $channel -",
			"style": "margin-bottom: 21px; background: #000000; color: #ff6abe30; border: 1px solid #6abe30; font-size: 14px; ",
			"align": {
				"h": "center",
				"v": "center"
			},
			"minheight": 47,
			"maxheight": 47
		},
		"input": {
			"style": "color: #ff6abe30; background: black; border: 2px solid #6abe30; margin-top: 5px; margin-right: 10px; margin-left: 10px; font-size: 12px; "
		},
		"textarea": {
			"style": "color: #ff6abe30; background: #212121; font-size: 14px; font: bold; border: 2px solid #6abe30; text-align: center; margin-right: 10px; margin-left: 10px; "
		},
		"margins": {
			"top": 0,
			"bottom": 6,
			"left": 0,
			"right": 0
		},
		"userlist": {
			"width": 150,
			"style": "border: 2px solid #6abe30; background: black; font: bold; font-family: 'Calibri'; selection-background-color: #ffc9c9c9; font-size: 12px; margin-left: 0px; margin-right: 10px; "
		},
		"time": {
			"text": {
				"width": 75,
				"style": "border: 2px solid #6abe30; background: black; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family: 'Calibri'; font: bold; "
			},
			"slider": {
				"style": "border: 0px; ",
				"groove": "",
				"handle": ""
			},
			"buttons": {
				"style": "color: #ffffffff; font: bold; border: 2px solid #6abe30; font: bold; font-size: 12px; background: black; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px; "
			},
			"arrows": {
				"left": "$path/leftarrow.png",
				"right": "$path/rightarrow.png",
				"style": "border: 0px; margin-top: 5px; margin-right: 10px; "
			}
		},
		"systemMsgColor": "#ff6abe30",
		"op": {
			"icon": "$path/op.png"
		},
		"halfop": {
			"icon": "$path/halfop.png"
		},
		"voice": {
			"icon": "$path/voice.png"
		},
		"founder": {
			"icon": "$path/founder.png"
		},
		"admin": {
			"icon": "$path/admin.png"
		}
	},
	"toasts": {
		"width": 210,
		"height": 100,
		"style": "background: white; ",
		"icon": {
			"signin": "$path/../enamel/chummy2.gif",
			"signout": "$path/../enamel/distraught2.gif",
			"style": "border: 2px solid black; border-width: 2px 0px 0px 2px; "
		},
		"title": {
			"minimumheight": 50,
			"style": "border: 2px solid black; border-width: 2px 2px 0px 0px; padding: 5px; font-weight: bold; "
		},
		"content": {
			"style": "background: black; color: #ffffffff; padding: 5px; "
		}
	}
}