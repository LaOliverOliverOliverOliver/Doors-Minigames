// "Name them all" groups the names by where they belong. A name that belongs to several places is listed under all of them
// (for example "The Hotel, The Mines"); a name with none is listed under NO_PLACE.
// key = a true/false property in the .json file. For entities these are the "appears in" categories; for items they are the
// floor_* keys. The order here is the order of the headings.
const NO_PLACE = "No native";
const PLACES = {
  entities: [
    { name: "The Hotel",     key: "appears_in_hotel" },
    { name: "The Mines",     key: "appears_in_mines" },
    { name: "The Backdoor",  key: "appears_in_backdoor" },
    { name: "The Outdoors",  key: "appears_in_outdoors" },
    { name: "The Archives",  key: "appears_in_archives" },
    { name: "The Stairwell", key: "appears_in_stairwell" },
    { name: "Visions",       key: "appears_in_visions" }
  ],
  items: [
    { name: "The Hotel",     key: "floor_hotel" },
    { name: "The Mines",     key: "floor_mines" },
    { name: "The Backdoor",  key: "floor_backdoor" },
    { name: "The Outdoors",  key: "floor_outdoors" },
    { name: "The Archives",  key: "floor_archives" },
    { name: "The Stairwell", key: "floor_stairwell" }
  ]
};
