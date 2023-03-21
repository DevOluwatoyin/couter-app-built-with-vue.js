import {createStore} from 'vuex';
const store=createStore({
state:{
  count: 0
},
getters:{
  counter(state){
    return state.count;
  }
},
actions:{
  increment({commit}){
    commit('increment')
  },
  reset({commit}){    
    commit('reset')
  },
  decrement({commit}){
    commit('decrement')
  },
  setValue({commit},value){
    commit('setValue',value)
  }
},

mutations:{
  increment(state){
    state.count++;
  },
  reset(state){
    state.count=0;
  },
  decrement(state){
    state.count--;
  },
  setValue(state,value){
    state.count=value;
  }
}
})
export default store;