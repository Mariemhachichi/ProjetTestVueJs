
import { createStore } from 'vuex';


const store = createStore({
  state: {
      count: 5,
      nom: 'ahmed',
      Etudiants : [
        {id:1, name:'sami',age:20},
        {id:2,name:'rami',age:30},
        {id:3,name:'mounir',age:36},
        {id:4,name:'samia',age:45}
      ]
    },
    getters: {
        triple(state){
          return state.count*3
        }
    },
    mutations:{
      inc(state,n){
        return state.count=state.count+n
      },
      dec(state,n){
        return state.count=state.count-n
    }
  }
  }
);


export default store;

