<template>
  <div>
    <MickeyForm :values="values"
                @onChange="changeForm"
                @onAddNew="addNew"

    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import MickeyForm from './_components/MickeyForm';

  export default {
    name: 'MickeyModule',
    components: {
      MickeyForm,
    },
    computed: {
      ...mapGetters({
        values: '$_mickey/values',
      }),
    },
    created() {
      const STORE_KEY = '$_mickey';
      // eslint-disable-next-line no-underscore-dangle
      if (!(STORE_KEY in this.$store._modules.root._children)) {
        this.$store.registerModule(STORE_KEY, store);
      }
    },
    mounted() {
      this.$store.dispatch('$_mickey/getValues');
    },
    methods: {
      changeForm(key, value) {
        this.$store.commit('$_mickey/VALUE_UPDATED', {
          key, value,
        });
      },
      addNew(key, value) {
        this.$store.commit('$_mickey/VALUE_UPDATED', {
          key, value,
        });
      },
    },
  };
</script>
