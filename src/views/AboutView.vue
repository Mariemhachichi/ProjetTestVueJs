<template>
  <div>
    <h1>This is an about page</h1>
    <h1>{{ count }}</h1>
   
    <button v-on:click="Decrmnt">--</button>
    <button v-on:click="Increment">++</button>
    <table border="2">
        <thead>
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Age</th>
          </tr>
        </thead>
      <tbody>
      <tr v-for="i in Etudiants" :key='i.id'>
        <td>{{ i.id }}</td>
        <td>{{ i.name }}</td>
        <td>{{ i.age }}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';



export default {
  name: 'AboutView',
  computed: mapState([
    'count',
    'nom',
    'Etudiants'
  ]),


  methods: {
    Decrmnt(){
      return this.$store.dispatch('Adec')
    },
    Increment(){
      return this.$store.dispatch('Aincr')

    }
  }
}
</script>
