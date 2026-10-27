# DOORS: Minigames

Two sections, **Entities** and **Items**.

| | Groups | Venn diagram | Size up |
|---|---|---|---|
| Entities | yes | yes | yes |
| Items | yes | yes | no |

## Play
Run `python serve.py` (or double-click `start.bat` on Windows). It opens the game in your browser and loads every `.json`
in the properties folders live. On GitHub Pages the game reads the folders through the GitHub API, so adding a `.json` on
github.com is enough. Opening `index.html` directly only shows the built-in snapshot (`bundle.js`).

## Folders
```
properties/entities/  one .json per entity       categories: categories.js
properties/items/     one .json per item         categories: item_categories.js
images/entities/      entity pictures            images/items/  item pictures
images/player.png     gray 1.7 m reference in "View heights"
heights.js            entity heights in meters (Size up and View heights)
bundle.js             snapshot of the properties folders (made by build_bundle.py / serve.py)
config.js             only for custom domains
```

## Add an entity or an item
Create a `.json` in `properties/entities/` or `properties/items/`:
```json
{ "name": "Guiding Beetle", "image": "images/entities/Guiding_Beetle.png", "passive": true, "appears_in_hotel": true }
```
Only `name` is required. `image` defaults to `images/<section>/<Name_with_underscores>.png`. Missing categories count as false.
Entities also need a height in `heights.js` to appear in Size up and View heights.

## Add a category
Add a line to `categories.js` (entities) or `item_categories.js` (items), then set that key to `true` in the matching `.json` files:
```js
{ key: "has_wings", label: "has wings", difficulty: "medium" },
```
