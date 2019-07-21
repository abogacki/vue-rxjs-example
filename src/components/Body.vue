<template>
  <section class="hero is-secondary">
    <div class="hero-body">
      <hello-world />
    </div>
  </section>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  components: {
    'hello-world': HelloWorld,
  },
}
</script>

<style lang="scss" scoped>
</style>