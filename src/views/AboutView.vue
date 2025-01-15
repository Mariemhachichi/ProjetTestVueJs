<template>
  <div>
    <h1>This is an about page</h1>
    <h1>{{ calc }}</h1>
    <h1>{{ Nom }}</h1>
    <button v-on:click="Decrmnt">--</button>
    <button v-on:click="Increment">++</button>
    <table border="2">
      <tr>
        <td>Nom</td>
        <td>Age</td>
      </tr>
      <tr v-for="i in list" :key='i.age'>
        <td>{{ i.name }}</td>
        <td>{{ i.age }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  computed: {
    calc() {
      return this.$store.state.count;
    },
    Nom(){
      return this.$store.state.nom
    },
    list(){
        return this.$store.state.Etudiants
    }
  },
  methods: {
    Decrmnt(){
      return this.$store.state.count--
    },
    Increment(){
      return this.$store.state.count++

    }
  }
}
</script>
