<template>
  <div>
      <h1>
        Counter:{{ counter }}
      </h1>
      <button @click="increment">Increment</button> 
      <button @click="reset">Reset</button>
      <button @click="decrement">Decrement</button>
      <input
      type="number"
      placeholder="setValue"
      ref="inputField"
      />
      <button @click="setValue">Set Value</button>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  computed: {
    counter(){
      return this.$store.getters.counter;
    }
  } ,
  methods: {
    increment(){
      this.$store.commit('increment');
    },
    reset(){
      this.$store.commit('reset');
    },
    decrement(){
      this.$store.commit('decrement');
    },
    setValue(){
      this.$store.commit('setValue', this.$refs.inputField.value);
    }
  }
}
</script>

<style scoped>
button {
  color: purple;
}
</style>
