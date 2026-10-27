// Categories for ITEMS (the entity categories are in categories.js). To add one: add a line below, then set that key to true in the
// .json files in properties/items/ that belong to it. difficulty: "easy", "medium" or "hard" (anything else only shows up on "Any").
// Keys in the item .json files that are not listed here are ignored.
const ITEM_CATEGORIES = [
  { key: "light_source", label: "light source", difficulty: "easy" },
  { key: "food", label: "Healing/Foods", difficulty: "easy" },
  { key: "key", label: "key", difficulty: "easy" },
  { key: "utility", label: "Utility", difficulty: "easy" },
  { key: "essential", label: "Essentials", difficulty: "easy" },
  { key: "currencies", label: "Currencies", difficulty: "easy" },
  { key: "salvage", label: "Salvages", difficulty: "medium" },
  { key: "drives", label: "Drives", difficulty: "medium" },
  { key: "miscellaneous", label: "Miscellaneous", difficulty: "medium" },
  { key: "battle", label: "Battle Mode", difficulty: "medium" },
  { key: "appears_in_hotel", label: "appears in the Hotel", difficulty: "easy" },
  { key: "appears_in_mines", label: "appears in the Mines", difficulty: "easy" },
  { key: "appears_in_backdoor", label: "appears in the Backdoor", difficulty: "medium" },
  { key: "appears_in_outdoors", label: "appears in the Outdoors", difficulty: "medium" },
  { key: "appears_in_archives", label: "appears in the Archives", difficulty: "medium" },
  { key: "appears_in_stairwell", label: "appears in the Stairwell", difficulty: "medium" },
  { key: "sold_in_pre_run_shop", label: "sold in pre-run shop", difficulty: "hard" },
  { key: "uses_battery", label: "uses battery", difficulty: "hard" },
  { key: "minor_item", label: "Minor item", difficulty: "hard" },
];
