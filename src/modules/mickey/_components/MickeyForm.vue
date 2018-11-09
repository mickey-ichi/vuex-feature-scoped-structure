<template>
  <ul>
    <div>
      <input type="text" :value="values.title" @input="(e) => {
        onChangeInput('title', e)
      }"/>
    </div>
    <div>
      <input type="checkbox" name="vehicle1"
             :checked="values.reaction.active" :value="values.reaction.active"
             @input="onReaction('reaction')"
      />
      <div v-if="values.reaction.active">
        mickey
        <div v-for="item in values.reaction.list">
          {{item}}
        </div>
        <div>
          <button @click="onAddNew">add new</button>
        </div>
      </div>
    </div>
    <pre>
          {{values}}
    </pre>
  </ul>
</template>

<script>

  export default {
    name: 'MickeyForm',
    components: {},
    props: {
      values: {
        type: Object,
      },
    },
    methods: {
      onChangeInput(key, e) {
        this.$emit('onChange', key, e.target.value);
      },
      onReaction(key) {
        const active = !this.values.reaction.active;
        const reaction = {
          active,
          list: this.values.reaction.list,
        };
        this.$emit('onChange', key, reaction);
      },
      onAddNew() {
        this.$emit('onAddNew');
      },
    },
  };
</script>
