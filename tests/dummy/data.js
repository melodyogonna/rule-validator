/** Return data to validate gte rule
 * @param {boolean} correct - If returned is correct, should pass validation
 */
function GTEData(correct = true) {
  const rule = {
    field: 'missions',
    condition: 'gte',
    condition_value: correct ? 30 : 55,
  };

  const data = {
    name: 'James Holden',
    crew: 'Rocinante',
    age: 34,
    position: 'Captain',
    missions: 45,
  };
  return { rule, data };
}

module.exports = { GTEData };
