{"main":
 {"style": "background-repeat: no-repeat; font-family: Comic Sans MS; font-size: 14px;",
  "background-image": "$path/gbg.png",
  "size": [333, 290],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "gecsterchum",
  "close": { "image": "$path/x.png",
             "loc": [319, 28]},
  "minimize": { "image": "$path/m.png",
                "loc": [304, 34]},
  "menu" : { "style": "font-family: 'Comic Sans MS'; font: bold; font-size: 12px; color: #FFFFFF; background-color: #4ea4c4;border:2px solid #183b48",
             "menuitem": "margin-right:15px;",
             "selected": "background-color: #acdff2",
             "loc": [150,22]
           },
  "menubar": { "style": "font-family: 'Comic Sans MS'; font:bold; font-size: 12px; color: #FFFFFF;" },
  "sounds": { "alertsound": "$path/alarm.wav",
                          "memosound": "$path/alarm2.wav",
                          "ceasesound": "$path/cease.wav" },
  "menus": {"client": {"_name": "Client",
                       "options": "Options",
                       "memos": "Memos",
                       "logviewer": "Pesterlogs",
                       "randen": "Random Encounter",
                       "userlist": "Userlist",
                       "addgroup": "Add Group",
                       "talk": "Pester",
                       "import": "Import",
                       "reconnect": "Reconnect",
                       "idle": "Idle",
                       "exit": "Exit",
                       "console": "Console"},
            "profile": {"_name": "Profile",
                        "switch": "Switch",
                        "color": "Color",
                        "theme": "Theme",
                        "block": "Trollslum",
                        "quirks": "Quirks"},
            "help": { "_name": "Help",
                      "about": "About",
                      "help": "Help",
                      "rules": "Rules",
                      "calsprite": "CalSprite",
                      "chanserv": "ChanServ",
                      "nickserv": "NickServ",
                      "reportbug": "Report Bug"},
            "rclickchumlist": {"pester": "Pester",
                               "removechum": "Remove Chum",
                               "report": "Report",
                               "blockchum": "Block",
                               "addchum": "Add Chum",
                               "viewlog": "View Pesterlog",
                               "notes": "Edit Notes...",
                               "unblockchum": "Unblock",
                               "removegroup": "Remove Group",
                               "renamegroup": "Rename Group",
                               "movechum": "Move To",
                               "banuser": "Ban User",
                               "opuser": "Make OP",
                               "voiceuser": "Give Voice",
                               "quirkkill": "Kill Quirk",
                               "quirksoff": "Quirks Off",
                               "invitechum": "Invite Chum",
                               "memosetting": "Memo Settings",
                               "memonoquirk": "Disable Quirks",
                               "memohidden": "Hidden",
                               "memoinvite": "Invite-Only",
                               "memomute": "Mute",
                               "beeponmessage": "Beep on Message",
                               "flashonmessage": "Flash on Message",
                               "mutenotifications": "Mute Notifications"
                              }
           },
  "chums": { "style": "border:0px; background-image:url($path/chumbg.png); background-color: rgb(252,252,252); background-repeat: no-repeat; color: black; font-family: 'Comic Sans MS';selection-background-color:#646464; font-size:14px; ",
             "loc": [123, 88],
             "size": [190, 65],
             "userlistcolor": "black",
             "moods": {

                 "chummy": { "icon": "$path/chummy.png", "color": "black" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "red" },

                 "offline": { "icon": "$path/offline.png", "color": "#bebebe"},


                 "pleasant": { "icon": "$path/pleasant.png", "color": "black" },

                 "distraught": { "icon": "$path/distraught.png", "color": "black" },

                 "pranky": { "icon": "$path/pranky.png", "color": "black" },


                 "smooth": { "icon": "$path/smooth.png", "color": "black" },

                 "mystified": { "icon": "$path/mystified.png", "color": "black" },

                 "amazed": { "icon": "$path/amazed.png", "color": "black" },

                 "insolent": { "icon": "$path/insolent.png", "color": "black" },

                 "bemused": { "icon": "$path/bemused.png", "color": "black" },


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
  "trollslum": {
      "style": "background: #4ea4c4; border:2px solid black; font-family: 'Impact'",
      "size": [195, 200],
      "label": { "text": "TROLLSLUM",
                 "style": "color: rgba(0, 0, 0, 100%) ;font:bold; font-family: 'Impact';border:0px;" },
      "chumroll": {"style": "border:2px solid black; background-color: black;color: black;font: bold;font-family: 'Comic Sans MS';selection-background-color:#646464; " }
  },
  "mychumhandle": { "label": { "text": "Gechandle:",
                               "loc": [0,0],
                               "style": "color: rgba(255, 255, 0, 0%) ;font:bold; font-family: 'Comic Sans MS';" },
                    "handle": { "style": "background: rgba(255, 255, 0, 0%); color:black; font-family:'Comic Sans MS'; font-size:14px; text-align:left;",
                                "loc": [157,170],
                                "size": [191, 26] },
                    "colorswatch": { "loc": [0,0],
                                     "size": [0,0],
                                     "text": "" },
                    "currentMood": [129, 176]
                  },
  "defaultwindow": { "style": "background: #4ea4c4; font-family:'Comic Sans MS';font:bold;selection-background-color:#919191; "
                   },
  "addchum":  { "style": "background: rgba(255, 255, 0, 0%); border:0px; color: rgba(0, 0, 0, 0%);",
              "loc": [25,0],
              "size": [69, 70],
                "text": ""
              },
  "pester": { "style": "background:  rgba(0, 40, 240, 0%); border:0px; font: bold; color:  rgba(0, 40, 240, 0%); font-family:'Comic Sans MS';",
              "pressed" : "background-image:url($path/pesterhold.png);",
                "loc": [15,83],
                "size": [95, 75],
              "text": ""
            },
  "block": { "style": "background:  rgba(0, 40, 240, 0%); border:2px solid #c48a00; font: bold; color:  rgba(0, 40, 240, 0%); font-family:'Impact';",
             "loc": [0,0],
             "size": [0, 0],
             "text": ""
           },
  "defaultmood": 3,
  "moodlabel": { "style": "",
                                 "loc": [20, 430],
                                 "text": "MOODS"
                           },
  "moods": [
      { "style": "border:0px;",
                "selected": "background-image:url($path/moodcheck1.png); border:0px;",
                "loc": [13, 204],
                "size": [101, 27],
                 "text": "",
                "icon": "",
                "mood": 0
          },
      { "style": "border:0px;",
                "selected": "background-image:url($path/moodcheck2.png); border:0px;",
                "loc": [13, 231],
                "size": [101, 27],
                 "text": "",
                "icon": "",
                "mood": 19
          },
      { "style": "border:0px;",
                "selected": "background-image:url($path/moodcheck3.png); border:0px;",
                "loc": [13, 258],
                "size": [101, 27],
                 "text": "",
                "icon": "",
                "mood": 20
          },
      { "style": "border:0px;",
                "selected": "background-image:url($path/moodcheck4.png); border:0px;",
                "loc": [116, 204],
                "size": [101, 27],
                 "text": "",
                "icon": "",
                "mood": 21
          },
      { "style": "border:0px;",
                "selected": "background-image:url($path/moodcheck5.png); border:0px;",
                "loc": [116, 231],
                "size": [101, 27],
                 "text": "",
                "icon": "",
                "mood": 22
          },
      { "style": "border:0px;",
                "selected": "background-image:url($path/moodcheck6.png); border:0px;",
                "loc": [116, 258],
                "size": [101, 27],
                 "text": "",
                "icon": "",
                "mood": 5
          },
      { "style": "border:0px;",
                "selected": "background-image:url($path/moodcheck7.png); border:0px;",
                "loc": [219, 204],
                "size": [101, 27],
                 "text": "",
                "icon": "",
                "mood": 6
          },
      { "style": "border:0px;",
                "selected": "background-image:url($path/moodcheck8.png); border:0px;",
                "loc": [219, 231],
                "size": [101, 27],
                 "text": "",
                "icon": "",
                "mood": 3
          },
      { "style": "border:0px;",
                "selected": "background-image:url($path/moodcheck9.png); border:0px;",
                "loc": [219, 258],
                "size": [101, 27],
                 "text": "",
                "icon": "",
                "mood": 1
          },
      { "style": "border:0px;",
                "selected": "border:0px;",
                "loc": [13, 175],
                "size": [101, 27],
                 "text": "",
                "icon": "",
                "mood": 2
          }
  ]
 },
 "convo":
 {"style": "background-color: rgba(0, 40, 240, 0%);border-width: 5px; border-image:url($path/convobg.png) 5px; font-family: 'Comic Sans MS'",
  "tabstyle": "background-color: #4ea4c4; font-family: 'Comic Sans MS'",
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background:  rgba(0, 40, 240, 0%); border:0px;",
                 "handle": "background-color:#8772c1;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #0028f0;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #0028f0;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "size": [500, 325],
  "chumlabel": { "style": "margin-bottom: 7px; margin-top: 10px; background:  rgba(0, 40, 240, 0%); color: black; border:0px; font-family: 'Castellar'; font-size: 16px;",
                 "align": { "h": "center", "v": "center" },
                 "minheight": 47,
                 "maxheight": 47,
                 "text" : ":: $handle ::"
               },
  "textarea": {
      "style": "background: white; font-family: 'Comic Sans MS'; font-size: 14px; border:2px solid #0028f0;text-align:center; margin-right:10px; margin-left:10px; margin-bottom:5px;"
  },
  "input": {
      "style": "background: white; font-family: 'Comic Sans MS'; border:2px solid #0028f0; margin-right:10px; margin-left:10px; font-size: 14px;"
  },
  "tabwindow" : {
          "style": "background-color:#4ea4c4;border:0px"
  },
  "tabs": {
      "style": "background-color: #ffffff; font-family: 'Comic Sans MS';font:bold;font-size:12px;min-height:25px;",
      "selectedstyle": "border:0px;background-color:#247a9a;border-top:2px #4ea4c4; border-left:2px solid white;border-right:2px solid white; border-top-left-radius: 4px; border-top-right-radius: 4px;",
      "newmsgcolor": "#4ea4c4",
      "tabstyle": 0
  },
  "text": {
      "beganpester": "started geccing with",
      "ceasepester": "stopped geccing with",
      "blocked": "blocked",
      "unblocked": "unblocked",
          "blockedmsg": "did not gecceive message from",
      "openmemo": "opened memo on board",
      "joinmemo": "gecsponded to memo",
      "closememo": "stopped gecsponding to memo",
      "kickedmemo": "you have been banned from this memo dipshit!",
          "idle": "has gone idle :/"
  },
  "systemMsgColor": "#000000"
 },
 "memos":
 {"memoicon": "$path/memo.png",
  "style": "background-color: rgba(0,0,0,0); background-image:url($path/convobg.png); background-repeat: no-repeat; border:0px; font-family: 'Comic Sans MS'; selection-background-color:#919191; ",
  "size": [500,325],
  "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#4ea4c4",
      "tabstyle": 0
  },
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background:  rgba(0, 40, 240, 0%); border:0px;",
                 "handle": "background-color:#8772c1;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #0028f0;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #0028f0;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "label": { "text": "Bulletin Board: $channel",
             "style": "margin-bottom: 7px; margin-top: 10px; background:  rgba(0, 40, 240, 0%); color: white; border:0px; font-family: 'Castellar'; font-size: 16px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 47,
             "maxheight": 47
           },
  "input": { "style": "background: white; border:2px solid #c48a00;margin-top:5px; margin-right:10px; margin-left:10px; font-family: 'Comic Sans MS'; font-size: 14px;" },
  "textarea": { "style": "background: white; font-family: 'Comic Sans MS'; font-size: 14px; border:2px solid #4ea4c4;text-align:center; margin-right:10px; margin-left:10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 150,
                "style": "border:2px solid #c48a00; background: white; font-family: 'Comic Sans MS';selection-background-color:#646464; font-size: 14px;  margin-left:0px; margin-right:10px;"
              },
  "time": { "text": { "width": 75,
                      "style": " border: 2px solid black; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Comic Sans MS';font:bold;"
                    },
            "slider": { "style": "border: 0px;",
                        "groove": "",
                        "handle": ""
                      },
            "buttons": { "style": "color: black; font: bold; border: 2px solid #c48a00; font-size: 12px; background: black; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" },
            "arrows": { "left": "$path/leftarrow.png",
                        "right": "$path/rightarrow.png",
                        "style": " border:0px; margin-top: 5px; margin-right:10px;"
                      }
          },
  "systemMsgColor": "#000000",
  "op": { "icon": "$path/smooth.png" },
  "voice": { "icon": "$path/voice.png" }
  },
  "toasts":
 {
   "width": 210,
   "height": 100,
   "style": "background: rgb(190,170,151);",
   "icon": { "signin": "$path/../gec/trayicon2.png",
             "signout": "$path/../gec/trayicon.png",
             "style": "border: 2px solid white; border-width: 2px 0px 0px 2px;" },
   "title": { "minimumheight": 50,
              "style": "border: 2px solid white; border-width: 2px 2px 0px 0px; padding: 5px; font-weight:bold;"
            },
   "content": { "style": "background: #992277; color: white; padding: 5px;" }
 }

}
