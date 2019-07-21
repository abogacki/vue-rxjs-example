<template>
  <section class="hero is-secondary">
    <div class="hero-body">
      <hello-world />
      <div v-for="product in products" :key="product.price">{{ product.name }}</div>
    </div>
  </section>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  components: {
    'hello-world': HelloWorld,
  },
  computed: {
    products() {
      return this.$store.state.products
    },
  },
}
</script>

<style lang="scss" scoped>
</style>