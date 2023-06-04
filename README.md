# pesterchum-themes
Repository &amp; host for pesterchum themes for various clients  

The `db.json` file holds metadata on all the themes. It should be the entrypoint for clients.  
You can fetch a CORS-free raw copy of it at: 
`https://raw.githubusercontent.com/mocchapi/pesterchum-themes/main/db.json`  
The format of the entries can be found in the `format.json` file.  

## Updating the database
To add a new theme, or update an existing theme, the `alter.py` tool should be used.  
The `db.json` should not be edited manually.

### The easy way 
```sh
python3 alter.py ingest <path_to_theme_folder_or_zip> 
```
The `ingest` command can be used to easily add or update a theme. It will make informed guesses at the required fields, such as version number & compatible client, and query the user for ones it cannot guess (defaults can be assumed if you provide `--noinput`).  
All fields can be overridden if needed, by providing the field name as an optional argument (IE `--version 10`).


## In this repository
- **sources**: source files of themes
- **themes**: downloadable theme files of themes. `.tres` for pesterchum godot, `.zip` for QT pesterchum
- **db.json**: the most current database version
- **format.json**: the annotated structure of db.json entries
- **alter.py**: the database update tool
- **README.md**: this file :D