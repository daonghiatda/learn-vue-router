<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
  </nav>
  <router-view/>
</template>

<script>
export default {

  methods: {
    increase() {
      this.$store.commit('increment')
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  }
}
</script>