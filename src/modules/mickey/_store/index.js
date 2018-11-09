import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  values: {
    reaction: {
      active: false,
    },
  },
  old_values: {
    reaction: {
      active: false,
      list: [],
    },
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
