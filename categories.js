// All categories live here. To add one: add a line below, then set that key to true in the entity .json files that belong to it.
// key: the property name used in the .json files   label: the text shown in the game   difficulty: "easy", "medium" or "hard"
// (a category with no difficulty, or any other value, only shows up in the "Any" difficulty).
// Entities that don't list a category count as false for it. Keys in the .json files that are not listed here are ignored.
// Special keys: "appears_in_visions" and "reskins" are used by the Allow visions / Allow reskins buttons.
const CATEGORIES = [
  { key: "hostile", label: "hostile", difficulty: "easy" },
  { key: "passive", label: "passive", difficulty: "easy" },
  { key: "appears_in_hotel", label: "appears in hotel", difficulty: "easy" },
  { key: "appears_in_mines", label: "appears in mines", difficulty: "easy" },
  { key: "can_be_crucified", label: "can be crucified", difficulty: "easy" },
  { key: "insta_kills", label: "insta kills", difficulty: "easy" },
  { key: "damages", label: "damages", difficulty: "easy" },
  { key: "glitched", label: "glitched", difficulty: "easy" },
  { key: "appears_in_backdoor", label: "appears in backdoor", difficulty: "medium" },
  { key: "appears_in_archives", label: "appears in archives", difficulty: "medium" },
  { key: "appears_in_outdoors", label: "appears in outdoors", difficulty: "medium" },
  { key: "appears_in_stairwell", label: "appears in stairwell", difficulty: "medium" },
  { key: "appears_in_visions", label: "appears in visions", difficulty: "medium" },
  { key: "cannot_be_crucified", label: "cannot be crucified", difficulty: "medium" },
  { key: "boss", label: "boss", difficulty: "medium" },
  { key: "rush_variant", label: "rush variant", difficulty: "medium" },
  { key: "speaks", label: "speaks", difficulty: "medium" },
  { key: "female", label: "female", difficulty: "hard" },
  { key: "item_associated", label: "item associated", difficulty: "hard" },
  { key: "main_antagonist_of_their_floor", label: "main antagonist of their floor", difficulty: "hard" },
  { key: "reskins", label: "reskins", difficulty: "hard" }
];
