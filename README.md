# pesterchum-themes
Repository &amp; host for pesterchum themes for various clients  

The `db.json` file holds metadata on all the themes. It should be the entrypoint for clients.  
You can fetch a CORS-free raw copy of it at: 
https://raw.githubusercontent.com/mocchapi/pesterchum-themes/main/db.json  
The format of the entries can be found in the `format.json` file.  

## What's this for???
This repo exists to keep track of all the themes that dont get bundled with pesterchum builds (both original qt pesterchum & pesterchum godot). Having this repository provides an easy way to find new themes, push updates to your own themes, & have them all together in one place.  
It's also a better way of keeping track who made what.

## Browsing
You can browse this repository & direct download themes in a friendlier way over at https://mocchapi.gitlab.io/PCtrb/  
Alternatively, you can run the latest developer version of [pesterchum](https://github.com/dpeta/pesterchum-alt-servers) to browse, install, and manage themes from this repository from inside the settings menu


## Updating the database
To add a new theme, or update an existing theme, the `alter.py` tool should be used.  
The `db.json` should not be edited manually.  

```sh
python3 alter.py ingest <path_to_theme_folder_or_zip> 
```  
The `ingest` command can be used to easily add or update a theme. It will make informed guesses at the required fields, such as version number & compatible client, and query the user for ones it cannot guess (defaults can be assumed if you provide `--noinput`).  
All fields (except the `sha256` fields) can be overridden if needed, by providing the field name as an optional argument (IE `--version 10`).


## Contributing
Made a theme/update? Wanna put it in the repo? awesome!  
Here's what to do:
- Put your theme source files in the `sources` directory under a folder with the name of your theme
- Run the alter tool with `python3 alter.py ingest sources/<your_them_here>`
- Answer any questions it may ask you
- Touch nothing else
- Make a commit & open a PR request on this repository with your changes  

Can't figure it out? You may also [open an issue](https://github.com/mocchapi/pesterchum-themes/issues/new?assignees=&labels=import+request&projects=&template=theme-import-request.md&title=Add+theme%3A+THEME_NAME_HERE) as long as you fill out all the info.  

Alternatively, you can just @ me on discord if you're in one of the pesterchum servers

### Things to consider when making a theme for the repository
- Please keep the file size low, preferably under 500KB, with a max of about 2MB
- If you are making one or more variations on a theme, IE a 2.5x version, consider using `inherits` & not copying over assets & properties needlessly
- Make sure the theme name contains no potentially filesystem-forbidden characters for any platform, like "/" or ":". It should also be URL safe
- It would be nice (but in no way required) if the style.js had well formatted whitespace indenting
- Also you may want to check the TROLLSLUM window, ppl forget to theme it sometimes


## In this repository
- **sources/**: source files of themes
- **format_version_history/**: archive of previous versions of the format, for validating a database against 
- **themes/**: downloadable theme files of themes. `.tres` for pesterchum godot, `.zip` for QT pesterchum
- **db.json**: the most current database version
- **format.json**: the annotated structure of db.json entries
- **alter.py**: the database update tool, used for modifying the database as well as retreiving info & statistics
- **utils.py**: small functions required by `alter.py`
- **hasher.py**: sha256 hasher for generating hashes of themes, can be useful for db clients
- **integrity.txt**: automatically generated on ingest, holds a copy of each theme's `sha256_download` field. useful for hosting seperately & checking with a client in case the database gets compromised. the theme's index in the database array corrosponds with the line in integrity.txt
- **README.md**: this file :D