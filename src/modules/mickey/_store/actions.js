import api from '../_api';

const getValues = (context) => {
  api.fetchValues
    .then((response) => {
      context.commit('VALUES_UPDATED', response);
      context.commit('OLD_VALUES_UPDATED', response);
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    });
};

export default {
  getValues,
};
