<template>
  <div>
    <h4>Detail</h4>
    <button @click="back">Back</button>
  </div>
</template>

<script>
    export default {
      name: 'Details',
      methods: {
        back() {
          this.$router.go(-1);
        },
      },
    };
</script>

<style scoped>

</style>
