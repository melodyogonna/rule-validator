const rule = {
  field: "missions",
  condition: "gte",
  condition_value: 30,
};

const data = {
  name: "James Holden",
  crew: "Rocinante",
  age: 34,
  position: "Captain",
  missions: 45,
};

module.exports = { rule, data };