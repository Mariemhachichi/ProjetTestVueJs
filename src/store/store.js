
import { createStore } from 'vuex';


const store = createStore({
  state() {
    return {
      count: 0,
      nom: 'ahmed',
      Etudiants : [
        {id:1, name:'sami',age:20},
        {id:2,name:'rami',age:30},
        {id:3,name:'mounir',age:36},
        {id:4,name:'samia',age:45}
      ]
    };
  }
});


export default store;

