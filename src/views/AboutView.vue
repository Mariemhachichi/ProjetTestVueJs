<template>
  <div>
    <h1>This is an about page</h1>
    <h1>{{ calc }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  computed: {
    calc() {
    
      return this.$store.state.count;
    }
  }
}
</script>
