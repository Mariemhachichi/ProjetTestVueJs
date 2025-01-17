
import { createStore } from 'vuex';

const ModuleAff = {
  state:{
    nom:'sami',
    prenom: 'Said'
  },
  getters:{},
  mutations:{},
  actions:{}
}
const ModuleUti = {
  state:{
    nom:'salem',
    prenom: 'ben salah'
  },
  getters:{},
  mutations:{},
  actions:{}
}


const store = createStore({
  state: {
      count: 0,
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
      inc(state){
        return state.count++
      },
      dec(state){
        return state.count--
    }
  },
    actions:{
      Aincr({commit}){
       setTimeout(()=>{
        commit('inc');
       },2000);
      },
      Adec({commit}){
        setTimeout(()=>{
          commit('dec');
        },2000)
      }
    },
   modules:{
    A:ModuleAff,
    B:ModuleUti
   }
  }
)


export default store;

