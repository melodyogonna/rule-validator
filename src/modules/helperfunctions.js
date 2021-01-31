function validationSuccess(rule, field) {
  return {
    message: `field ${rule.field} successfully validated.`,
    status: 'success',
    data: {
      validation: {
        error: false,
        field: rule.field,
        field_value: field[rule.field],
        condition: rule.condition,
        condition_value: rule.condition_value,
      },
    },
  };
}

function validationFailure(rule, field) {
  return {
    message: `field ${rule.field} failed validation.`,
    status: 'error',
    data: {
      validation: {
        error: true,
        field: rule.field,
        field_value: field[rule.field],
        condition: rule.condition,
        condition_value: rule.condition_value,
      },
    },
  };
}

module.exports = { validationSuccess, validationFailure };
