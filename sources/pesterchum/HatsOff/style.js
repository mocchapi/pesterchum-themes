{"main":
 {"style": "background-repeat: no-repeat;",
  "background-image": "$path/pcbg.png",
  "size": [232, 380],
  "icon": "$path/trayicon.png",
  "newmsgicon": "$path/trayicon2.png",
  "windowtitle": "HatsOff",
  "close": { "image": "$path/x.png",
             "loc": [214, 4]},
  "minimize": { "image": "$path/m.png",
                "loc": [198, 10]},
  "menubar": { "style": "font-family: 'Courier'; font:bold; font-size: 12px; color: black;" },
  "menu" : { "style": "font-family: 'Courier'; font: bold; font-size: 12px; color: black; background-color: #00ffff;border:2px solid #007F7F",
             "menuitem": "margin-right:10px;",
             "selected": "background-color: #00ff00",
             "disabled": "color: grey",
             "loc": [10,0]
           },
  "sounds": { "alertsound": "$path/alarm.wav",
                          "memosound": "$path/alarm2.wav",
                          "ceasesound": "$path/cease.wav" },
  "menus": {"client": {"_name": "Client",
                       "options": "Options",
                       "memos": "Meetings",
                       "logviewer": "TipLogs",
                       "randen": "Random Encounter",
                       "userlist": "User List",
                       "addgroup": "Add Group",
                       "talk": "Tip",
                       "import": "Import",
                       "reconnect": "Reconnect",
                       "idle": "Idle",
                       "exit": "Exit",
                       "console": "Console"},
            "profile": {"_name": "Profile",
                        "switch": "Switch",
                        "color": "Color",
                        "theme": "Theme",
                        "block": "Blocked Users",
                        "quirks": "Styles"},
            "help": { "_name": "Help",
                      "rules": "Rules",
                      "about": "About",
                      "help": "Help",
                      "calsprite": "Calsprite",
                      "chanserv": "Chanserv"
                      ,"nickserv": "Nickserv" },
            "rclickchumlist": {"pester": "Tip Hat",
                               "removechum": "Remove User",
                               "report": "Report",
                               "blockchum": "Block",
                               "addchum": "Add User",
                               "viewlog": "View TipLog",
                               "notes": "Edit Notes",
                               "unblockchum": "Unblock",
                               "removegroup": "Remove Group",
                               "renamegroup": "Rename Group",
                               "movechum": "Move To",
                               "banuser": "Ban User",
                               "opuser": "Make OP",
                               "voiceuser": "Give Voice",
                               "quirkkill": "Kill Style",
                               "quirksoff": "Styles Off",
                               "ooc": "OOC",
                               "invitechum": "Invite User",
                               "memosetting": "Meeting Settings",
                               "memonoquirk": "Disable Styles",
                               "memohidden": "Hidden",
                               "memoinvite": "Invite-Only",
                               "memomute": "Mute",
                               "beeponmessage": "Beep On Message",
                               "flashonmessage": "Flash On Message",
                               "mutenotifications": "Mute Notifications"
                              }
           },
  "chums": { "style": "border:2px solid cyan; background-color: black;color: white;font: bold;font-family: 'Courier';selection-background-color:#646464; ",
             "loc": [12, 117],
             "size": [209, 82],
             "userlistcolor": "white",
             "moods": {

                 "chummy": { "icon": "$path/chummy.png", "color": "white" },

                 "rancorous": { "icon": "$path/rancorous.png", "color": "red" },

                 "offline": { "icon": "$path/offline.png", "color": "#111111"},


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
  "trollslum": {
      "style": "background: #00FFFF; border:2px solid cyan; font-family: 'Courier'",
      "size": [195, 200],
      "label": { "text": "Blocked Users",
                 "style": "color: rgba(0, 0, 0, 100%) ;font:bold; font-family: 'Courier';border:0px;" },
      "chumroll": {"style": "border:2px solid cyan; background-color: black;color: white;font: bold;font-family: 'Courier';selection-background-color:#00FFFF; " }
  },
  "mychumhandle": { "label": { "text": "Username:",
                               "loc": [19,232],
                               "style": "color: rgba(255, 255, 0, 0%) ;font:bold; font-family: 'Courier';" },
                    "handle": { "style": "background: rgba(0,0,0,0); padding: 3px; color:white; font-family:'Courier'; font:bold; text-align:left;",
                                "loc": [36,246],
                                "size": [180, 21] },
                    "colorswatch": { "loc": [196,246],
                                     "size": [23,21],
                                     "text": "" },
                    "currentMood": [18, 249]
                  },
  "defaultwindow": { "style": "background: #00FFFF; font-family:'Courier';font:bold;selection-background-color:#15ff00; "
                   },
  "addchum":  { "style": "background: rgba(255, 255, 0, 0%); border:2px solid #208000; font: bold; color: rgba(0, 0, 0, 0%); font-family:'Courier';",
                "pressed" : "background: rgb(255, 255, 255, 30%);",
                "loc": [12,202],
                "size": [71, 22],
                "text": ""
              },
  "pester": { "style": "background:  rgba(255, 255, 0, 0%); border:2px solid #208000; font: bold; color:  rgba(255, 255, 0, 0%); font-family:'Courier';",
              "pressed" : "background: rgb(255, 255, 255, 30%);",
              "loc": [150,202],
              "size": [71, 22],
              "text": ""
            },
  "block": { "style": "background:  rgba(255, 255, 0, 0%); border:2px solid #800000; font: bold; color:  rgba(255, 255, 0, 0%); font-family:'Courier';",
             "pressed" : "background: rgb(255, 255, 255, 30%);",
             "loc": [81,202],
             "size": [71, 22],
             "text": ""
           },
  "defaultmood": 0,
  "moodlabel": { "style": "",
                                 "loc": [20, 430],
                                 "text": "Moods"
                           },
  "moods": [
      { "style": "text-align:left; border:2px solid #208000; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier'",
                "selected": "text-align:left; background-image:url($path/moodcheck1.png); border:2px solid #ffffff; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier';",
                "loc": [12, 288],
                "size": [104, 22],
            "text": "Cheerful",
                "icon": "$path/chummy.png",
                "mood": 0
          },
      { "style": "text-align:left; border:2px solid #208000; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier'",
                "selected": "text-align:left; background-image:url($path/moodcheck3.png); border:2px solid #ffffff; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier';",
                "loc": [12, 308],
                "size": [104, 22],
                "text": "Peaceful",
                "icon": "$path/chummy.png",
                "mood": 3
          },
      { "style": "text-align:left; border:2px solid #208000; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier'",
                "selected": "text-align:left; background-image:url($path/moodcheck4.png); border:2px solid #ffffff; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier';",
                "loc": [12, 328],
                "size": [104, 22],
                "text": "Remorseful",
                "icon": "$path/chummy.png",
                "mood": 4
          },
      { "style": "text-align:left; border:2px solid #208000; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier'",
                "selected": "text-align:left; background-image:url($path/moodcheck2.png); border:2px solid #ffffff; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier';",
                "loc": [117, 288],
                "size": [104, 22],
                "text": "Playful",
                "icon": "$path/chummy.png",
                "mood": 5
          },
      { "style": "text-align:left; border:2px solid #208000; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier'",
                "selected": "text-align:left; background-image:url($path/moodcheck3.png); border:2px solid #ffffff; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier';",
                "loc": [117, 308],
                "size": [104, 22],
                "text": "Graceful",
                "icon": "$path/chummy.png",
                "mood": 6
          },
      { "style": "text-align:left; border:2px solid #800000; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier'",
                "selected": "text-align:left; background-image:url($path/moodcheck4.png); border:2px solid #ffffff; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier';",
                "loc": [117, 328],
                "size": [104, 22],
                "text": "Resentful",
                "icon": "$path/rancorous.png",
                "mood": 1
          },
      { "style": "text-align:left; border:2px solid #616161; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier'",
                "selected": "text-align:left; background-image:url($path/moodcheck5.png); border:2px solid #ffffff; padding: 5px;color: rgba(0, 0, 0, 0%); font-family:'Courier';",
                "loc": [12, 348],
                "size": [209, 22],
                "text": "Vanish",
                "icon": "",
                "mood": 2
          }
  ]
 },
 "convo":
 {"style": "background-color: #00FFFF;background-image:url($path/convobg.png);background-repeat: no-repeat; border:2px solid cyan; font-family: 'Courier'",
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background: white; border:2px solid #007f80;",
                 "handle": "background-color:#007f80;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #007f80;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #007f80;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "size": [500, 325],
  "chumlabel": { "style": "margin-bottom: 21px;background: rgb(0, 127, 128); color: white; border:0px; font-size: 14px;font-family: 'Courier'",
                 "align": { "h": "center", "v": "center" },
                 "minheight": 47,
                 "maxheight": 47,
                 "text" : ":: $handle ::"
               },
  "textarea": {
      "style": "background: white;  font-size: 14px;font:bold; border:2px solid #007f80;text-align:center; margin-right:10px; margin-left:10px;font-family: 'Courier'"
  },
  "input": {
      "style": "background: white; border:2px solid #007f80;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;font-family: 'Courier'"
  },
  "tabwindow" : {
          "style": "background-color:#00FFFF;border:0px"
  },
  "tabs": {
      "style": "background-color: #00807b; font-family: 'Courier';font:bold;font-size:12px;min-height:25px;",
      "selectedstyle": "border:0px;background-color:#00FFFF;border-top:2px solid cyan; border-left:2px solid cyan;border-right:2px solid cyan; border-top-left-radius: 4px; border-top-right-radius: 4px;",
      "newmsgcolor": "#00FFFF",
      "tabstyle": 0
  },
  "text": {
      "beganpester": "began tipping",
      "ceasepester": "ceased tipping",
      "blocked": "blocked",
      "unblocked": "unblocked",
          "blockedmsg": "did not receive message from",
      "openmemo": "opened meeting on board",
      "joinmemo": "responded to meeting",
      "closememo": "ceased responding to meeting",
      "kickedmemo": "You have been banned from this meeting!",
          "idle": "is now an idle user!"
  },
  "systemMsgColor": "#00c774"
 },
 "memos":
 {"memoicon": "$path/memo.png",
  "style": "background-color: #00FFFF; background-image:url($path/convobg.png); background-repeat: no-repeat; border:2px solid cyan; font-family: 'Courier'; font: bold; selection-background-color:#919191; ",
  "size": [500,325],
  "tabs": {
      "style": "",
      "selectedstyle": "",
      "newmsgcolor": "#00FFFF",
      "tabstyle": 0
  },
  "scrollbar": { "style" : "padding-top:17px; padding-bottom:17px;width: 18px; background:  rgba(255, 255, 0, 0%); border:0px;",
                 "handle": "background-color:#007f80;min-height:20px;",
                 "downarrow": "height:17px;border:0px solid #007f80;",
                 "darrowstyle": "image:url($path/downarrow.png);",
                 "uparrow": "height:17px;border:0px solid #007f80;",
                 "uarrowstyle": "image:url($path/uparrow.png);"
               },
  "label": { "text": "Bulletin Board: $channel",
             "style": "margin-bottom: 21px;background: rgb(196, 138, 0); color: white; border:0px; font-size: 14px;",
             "align": { "h": "center", "v": "center" },
             "minheight": 47,
             "maxheight": 47
           },
  "input": { "style": "background: white; border:2px solid #007f80;margin-top:5px; margin-right:10px; margin-left:10px; font-size: 12px;" },
  "textarea": { "style": "background: white;  font-size: 14px;font:bold; border:2px solid #007f80;text-align:center; margin-right:10px; margin-left:10px;" },
  "margins": {"top": 0, "bottom": 6, "left": 0, "right": 0 },
  "userlist": { "width": 150,
                "style": "border:2px solid #c48a00; background: white;font: bold;font-family: 'Courier';selection-background-color:#646464; font-size: 12px;  margin-left:0px; margin-right:10px;"
              },
  "time": { "text": { "width": 75,
                      "style": " border: 2px solid cyan; background: white; font-size: 12px; margin-top: 5px; margin-right: 5px; margin-left: 5px; font-family:'Courier';font:bold;"
                    },
            "slider": { "style": "border: 0px;",
                        "groove": "",
                        "handle": ""
                      },
            "buttons": { "style": "color: black; font: bold; border: 2px solid #007f80; font: bold; font-size: 12px; background: lime; margin-top: 5px; margin-right: 5px; margin-left: 5px; padding: 2px; width: 50px;" },
            "arrows": { "left": "$path/leftarrow.png",
                        "right": "$path/rightarrow.png",
                        "style": " border:0px; margin-top: 5px; margin-right:10px;"
                      }
          },
  "systemMsgColor": "#00c774",
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
