const VALUES_UPDATED = (state, values) => {
  state.values = values;
};

const OLD_VALUES_UPDATED = (state, values) => {
  state.old_values = values;
};

const VALUE_UPDATED = (state, action) => {
  state.values[action.key] = action.value;
};

export default {
  VALUES_UPDATED,
  OLD_VALUES_UPDATED,
  VALUE_UPDATED,
};
