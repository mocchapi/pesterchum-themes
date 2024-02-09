{"main":
 {"style": "background-repeat: no-repeat;",
  "background-image": "$path/msnbg.png",
  "size": [219, 450],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "MSN Messenger",
  "close": { "image": "$path/x.png",
             "loc": [192,6]},
  "minimize": { "image": "$path/m.png",
                "loc": [169, 6]},
  "menubar": { "style": "font-family: 'Tahoma'; font-size: 11px; color: black;" },
  "menu" : { "style": "font-family: 'Tahoma'; font-size: 12px; color: black; background-color: #FFFFFF;border:0px",
             "menuitem": "margin-right:10px;",
             "selected": "background-color: #316ac5;color: white",
             "disabled": "color: grey",
             "loc": [10,33]
           },
  "sounds": { "alertsound": "$path/alarm.wav",
                          "memosound": "$path/alarm2.wav",
                          "ceasesound": "$path/cease.wav" },
  "menus": {"client": {"_name": "Client",
                       "options": "Options",
                       "memos": "Groups",
                       "logviewer": "Logs",
                       "randen": "Random",
                       "userlist": "Users",
                       "addgroup": "Add Group",
                       "talk": "Talk",
                       "import": "Import",
                       "reconnect": "Reconnect",
                       "idle": "Idle",
                       "exit": "Exit",
                       "console": "Console"},
            "profile": {"_name": "Profile",
                        "switch": "Switch Identity",
                        "color": "Color",
                        "theme": "Theme",
                        "block": "Block List",
                        "quirks": "Typing Quirks"},
            "help": { "_name": "Help",
                      "rules": "Rules",
                      "about": "About",
                      "help": "Help",
                      "calsprite": "calSprite",
                      "chanserv": "chanServ",
                      "nickserv": "nickServ" },
            "rclickchumlist": {"pester": "Send an Instant Message",
                               "removechum": "Delete Contact",
                               "report": "Report",
                               "blockchum": "Block",
                               "addchum": "Add as Contact",
                               "viewlog": "View Logs",
                               "notes": "Edit Notes",
                               "unblockchum": "Unblock",
                               "removegroup": "Remove Group",
                               "renamegroup": "Rename Group",
                               "movechum": "Move To",
                               "banuser": "Ban User",
                               "opuser": "Make Operator",
                               "voiceuser": "Give Voice",
                               "quirkkill": "Kill Typing Quirk",
                               "quirksoff": "Typing Quirk Off",
                               "ooc": "Out Of Character",
                               "invitechum": "Invite Contact",
                               "memosetting": "Group Settings",
                               "memonoquirk": "Disable Typing Quirk",
                               "memohidden": "Hiddene",
                               "memoinvite": "Invite-Only",
                               "memomute": "Mute",
                               "beeponmessage": "Beep On Message",
                               "flashonmessage": "Flash On Message",
                               "mutenotifications": "Mute Notifications"
                              }
           },
  "chums": { "style": "border:0px transparent; background-color: white;font-family: 'Tahoma';color: black;selection-background-color:#316ac5; ",
             "loc": [6, 117],
             "size": [207, 226],
             "userlistcolor": "#000000",
             "moods": {

                 "chummy": { "icon": "$path/chummy.png", "color": "black" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "black" },

                 "offline": { "icon": "$path/offline.png", "color": "black"},


                 "pleasant": { "icon": "$path/pleasant.png", "color": "black" },

                 "distraught": { "icon": "$path/distraught.png", "color": "black" },

                 "pranky": { "icon": "$path/pranky.png", "color": "black" },


                 "smooth": { "icon": "$path/smooth.png", "color": "black" },

                 "mystified": { "icon": "$path/mystified.png", "color": "black" },

                 "amazed": { "icon": "$path/amazed.png", "color": "black" },

                 "insolent": { "icon": "$path/insolent.png", "color": "black" },

                 "bemused": { "icon": "$path/bemused.png", "color": "black" },


                 "ecstatic": { "icon": "$path/ecstatic.png", "color": "black" },

                 "relaxed": { "icon": "$path/relaxed.png", "color": "black" },

                 "discontent": { "icon": "$path/discontent.png", "color": "black" },

                 "devious": { "icon": "$path/devious.png", "color": "black" },

                 "sleek": { "icon": "$path/sleek.png", "color": "black" },

                 "detestful": { "icon": "$path/detestful.png", "color": "black" },

                 "mirthful": { "icon": "$path/mirthful.png", "color": "black" },

                 "manipulative": { "icon": "$path/manipulative.png", "color": "black" },

                 "vigorous": { "icon": "$path/vigorous.png", "color": "black" },

                 "perky": { "icon": "$path/perky.png", "color": "black" },

                 "acceptant": { "icon": "$path/acceptant.png", "color": "black" },

                 "protective": { "icon": "$path/protective.png", "color": "black" },

                 "blocked": { "icon": "$path/blocked.png", "color": "black" }

             }
           },
  "trollslum": {
      "style": "background: #ece9d8; border:1px solid #716f64; font-family: 'Tahoma'",
      "size": [195, 200],
      "label": { "text": "Block List",
                 "style": "color: rgba(0, 0, 0, 100%) ;font:bold; font-size:16; font-family: 'Tahoma';border:0px;" },
      "chumroll": {"style": "border:0px soild ; background-color: white;color: black;font-family: 'Tahoma';selection-background-color:#646464; " }
  },
  "mychumhandle": { "label": { "text": "To:",
                               "loc": [1143,232],
                               "style": "color:green;font:bold; font-family: 'Comic Sans MS';" },
                    "handle": { "style": "background: rgba(0,0,0,0); padding: 3px; color:black; font-family:'Tahoma';font-size:11; text-align:left;",
                                "loc": [21,424],
                                "size": [180, 21] },
                    "colorswatch": { "loc": [198,429],
                                     "size": [14,14],
                                     "text": "" },
                    "currentMood": [174, 428]
                  },
  "defaultwindow": { "style": "background: #ece9d8; font-family:'Tahoma';selection-background-color:#316ac5; "
                   },
  "addchum":  { "style": "background:transparent; border:0px; font: bold; color: rgba(0, 0, 0, 0%); font-family:'Tahoma';",
                "pressed" : "background: rgb(255, 255, 255, 30%);",
                "loc": [81,55],
                "size": [22, 33],
                "text": ""
              },
  "pester": { "style": "background:transparent; border:0px; font: bold; color:  rgba(255, 255, 0, 0%); font-family:'Tahoma';",
              "pressed" : "background: rgb(255, 255, 255, 30%);",
              "loc": [1380150,202],
              "size": [0, 0],
              "text": "losser"
            },
  "block": { "style": "background:transparent; border:0px; font: bold; color:  rgba(255, 255, 0, 0%); font-family:'Tahoma';",
             "pressed" : "background: rgb(255, 255, 255, 30%);",
             "loc": [114,55],
             "size": [22, 33],
             "text": ""
           },
  "defaultmood": 0,
  "moodlabel": { "style": "",
                                 "loc": [29420, 430],
                                 "text": "MOODS"
                           },
  "moods": [
  ]
 },
 "convo":
 {"style": "background-color: #ece9d8;background-repeat: no-repeat; border:1px solid #716f64; font-family: 'Tahoma'",
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background: #afcefb; border:2px solid #afcefb;",
                 "handle": "background-color:#afcefb;min-height:20px;",
                 "downarrow": "image:url($path/downarrow.png);",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "image:url($path/uparrow.png);",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "size": [402, 376],
  "chumlabel": { "style": "margin-bottom: 1px;background:#ece9d8; color: black; border:0px; font-size: 11px;font-family: 'Tahoma'",
                 "align": { "h": "center", "v": "center" },
                 "minheight": 47,
                 "maxheight": 47,
                 "text" : "To: $handle"
               },
  "textarea": {
      "style": "background: white;  font-size: 11px; border:3px solid #aca899;text-align:center; margin-right:6px; margin-left:6px;font-family: 'Tahoma'"
  },
  "input": {
      "style": "color: black; background: white; border:2px solid #716f64;margin-top:50px; margin-right:10px; margin-left:10px; font-size: 11px;font-family: 'Tahoma'"
  },
  "tabwindow" : {
          "style": "background-color:#ece9d8;border:0px"
  },
  "tabs": {
      "style": "background-color:#ece9d8; font-family: 'Tahoma';font:bold;font-size:12px;min-height:25px;",
      "selectedstyle": "border:0px;background-color:#ece9d8;border-top:2px solid #716f64; border-left:2px solid #716f64;border-right:2px solid #716f64; border-top-left-radius: 4px; border-top-right-radius: 4px;",
      "newmsgcolor": "#ece9d8",
      "tabstyle": 0
  },
  "text": {
      "beganpester": "started messaging",
      "ceasepester": "stopped messaging",
      "blocked": "blocked",
      "unblocked": "unblocked",
          "blockedmsg": "did not receive message from",
      "openmemo": "opened memo on board",
      "joinmemo": "responded to the memo",
      "closememo": "stopped responding to the memo",
      "kickedmemo": "You have been banned from this memo.",
          "idle": "has gone idle."
  },
  "systemMsgColor": "#008080"
 },
 "memos":
 {"memoicon": "$path/memo.png",
  "style": "background-color: #ece9d8; border:2px solid #716f64;color: black; font-family: 'Tahoma'; font: bold; selection-background-color:#919191; ",
  "size": [500,325],
  "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#ece9d8",
      "tabstyle": 0
  },
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background:  rgba(255, 255, 0, 0%); border:0px;",
                 "handle": "background-color:#ece9d8;min-height:20px;",
                 "downarrow": "image:url($path/downarrow.png);",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "image:url($path/uparrow.png);",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "label": { "text": "Bulletin Board: $channel",
             "style": "margin-bottom: 21px;background: #716f64; color: white; border:0px; font-size: 14px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 47,
             "maxheight": 47
           },
  "input": { "style": "color: black; background: white; border:2px solid #716f64;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
  "textarea": { "style": "background: white; font-family:Tahoma;font-size: 11px; border:2px solid #716f64;text-align:center; margin-right:10px; margin-left:10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 150,
                "style": "border:2px solid #716f64; background: white;font: bold;font-family: 'Tahoma';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
              },
  "time": { "text": { "width": 75,
                      "style": " border: 2px solid #716f64; background: #ece9d8; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Tahoma';font:bold;"
                    },
             "slider": { "style": " border:0px solid #c2c2c2;margin-top:3px;",
                        "groove": "background:#f2eae2;border:1px solid #9b9b9b;",
                        "handle": "image:url($path/handle.png);"
                      },
            "buttons": { "style": "color: black; font: bold; border: 2px solid #716f64; font: bold; font-size: 12px; background: #ece9d8; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" },
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
   "style": "background: #ece9d8;",
   "icon": { "signin": "$path/trayicon.png",
             "signout": "$path/trayicon.png",
             "style": "border: 0px solid black; border-width: 0px 0px 0px 0px;" },
   "title": { "minimumheight": 50,
              "style": "border: 0px solid black; border-width: 0px 0px 0px 0px; padding: 5px; font-weight:bold;"
            },
   "content": { "style": "background: #ece9d8; color: black; padding: 5px;" }
 }
}
