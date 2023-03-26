<template>
  <div class="wrapper">
    <div class="content">
      <h1>{{ counter }}</h1>
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
    <div class="circle"><span class="dot"></span></div>
    <div class="circle"><span class="dot"></span></div>
    <div class="circle"><span class="dot"></span></div>
    <div class="circle"><span class="dot"></span></div>
    <div class="circle"><span class="dot"></span></div>
    <div class="circle"><span class="dot"></span></div>
    <div class="circle"><span class="dot"></span></div>
    <div class="circle"><span class="dot"></span></div>
    <div class="circle"><span class="dot"></span></div>
    <div class="circle"><span class="dot"></span></div>
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
 .wrapper {
  top: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #04fafd 5%, #119dff 50%, #030423);
  position: absolute;
  overflow: hidden;
 }

 .content{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  text-align: center;
 }
  .wrapper .circle {
    height: 60px;
    width: 60px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    position: absolute;
    top: 10%;
    left:10%;
    animation: bubble 4s linear infinite;
  }

  input {
    padding: 10px 20px;
    border: 1px solid #fff;
  }

  input:focus {
    outline: none;
  }

  button {
    padding: 10px 20px;
    border: 1px solid #fff;
    background: #030423;
    color: #fff;
    margin: 10px;
  }

  .circle .dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 20%;
    right: 20%;
  }

  .wrapper .circle:nth-child(1) {
    top: 20%;
    right: 20%;
    animation: bubble 8s linear infinite;
  }
  .wrapper .circle:nth-child(2) {
    top: 60%;
    right: 80%;
    animation: bubble 10s linear infinite;
  }
  .wrapper .circle:nth-child(3) {
    top: 40%;
    right:40%;
    animation: bubble 5s linear infinite;
  }
  .wrapper .circle:nth-child(4) {
    top: 66%;
    right: 30%;
    animation: bubble 7s linear infinite;
  }
  .wrapper .circle:nth-child(5) {
    top: 90%;
    right:10%;
    animation: bubble 9s linear infinite;
  }
  .wrapper .circle:nth-child(6) {
    top: 30%;
    right:60%;
    animation: bubble 5s linear infinite;
  }
  .wrapper .circle:nth-child(7) {
    top: 70%;
    right:20%;
    animation: bubble 9s linear infinite;
  }
  .wrapper .circle:nth-child(8) {
    top: 75%;
    right:60%;
    animation: bubble 10s linear infinite;
  }
  .wrapper .circle:nth-child(9) {
    top: 50%;
    right:50%;
    animation: bubble 6s linear infinite;
  }
  .wrapper .circle:nth-child(10) {
    top: 45%;
    right:20%;
    animation: bubble 10s linear infinite;
  }

  @keyframes bubble {
    0% {
      transform: scale(0) translateY(0) rotate(70deg);
      opacity: 1;
    }
    100% {
      transform: scale(1.3) translateY(-100px) rotate(360deg);
      opacity: 0;
    }
  }
</style>
