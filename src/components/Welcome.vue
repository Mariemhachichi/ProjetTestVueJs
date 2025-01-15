<template>
  <div>
    <h1>Welcome</h1>
    <table border="1">
      <tr>
    <td>Id</td>
    <td>Title</td>
  </tr>
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
