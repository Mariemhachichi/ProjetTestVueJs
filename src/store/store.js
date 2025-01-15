
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      nom: 'ahmed',
      Etudiants : [
        {name:'sami',age:20},
        {name:'rami',age:30},
        {name:'mounir',age:36},
        {name:'samia',age:45}
      ]
    };
  }
});


export default store;

