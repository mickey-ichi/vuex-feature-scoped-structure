<template>
  <div>
    <h4>Mickey Ichi</h4>
    <button @click="back">Back</button>
    <MickeyContainer/>
  </div>
</template>

<script>
  import MickeyContainer from '@/modules/mickey';

  export default {
    name: 'Mickey',
    components: {
      MickeyContainer,
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
    },
  };
</script>

<style scoped>

</style>
