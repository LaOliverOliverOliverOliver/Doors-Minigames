// Categories for ITEMS (the entity categories are in categories.js). To add one: add a line below, then set that key to true in the
// .json files in properties/items/ that belong to it. difficulty: "easy", "medium" or "hard" (anything else only shows up on "Any").
// Keys in the item .json files that are not listed here are ignored.
const ITEM_CATEGORIES = [
  { key: "light_source", label: "light source", difficulty: "easy" },
  { key: "edible", label: "edible", difficulty: "easy" },
  { key: "key", label: "key", difficulty: "easy" },
  { key: "appears_in_hotel", label: "appears in hotel", difficulty: "easy" },
  { key: "appears_in_mines", label: "appears in mines", difficulty: "easy" },
  { key: "sold_in_shop", label: "sold in shop", difficulty: "medium" },
  { key: "consumable", label: "consumable", difficulty: "medium" },
  { key: "magical", label: "magical", difficulty: "medium" },
  { key: "uses_battery", label: "uses battery", difficulty: "hard" },
  { key: "puzzle_item", label: "puzzle item", difficulty: "hard" },
  { key: "appears_in_the_rooms", label: "appears in the rooms", difficulty: "hard" }
];
