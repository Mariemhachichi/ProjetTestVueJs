<template>
  <div style="margin: 5em;">
    <h1>Welcome</h1>
    <h2>{{ NomEtuidiant }}</h2>

    <table border="1" >
      <thead>
      <tr>
          <th>Id</th>
          <th>Title</th>
      </tr>
    </thead>
    <tr v-for="i in list" :key="i.id"> 
      <td>{{i.id}}</td>
      <td>{{i.title}}</td>
    </tr>
  </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Welcome',
  computed : {
    NomEtuidiant(){
      return this.$store.state.A.nom +" "+ this.$store.state.A.prenom
    }
  },
  data(){
    return {list:undefined}
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
  
     this.list=response.data;
    // console.log(this.list);
      })
      ;
  }
};
</script>
