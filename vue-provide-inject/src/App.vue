<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },

  data() {
    return {
      count: 0
    }
  },

  provide: {
    normalCount: this.count,
    reactiveCount: this.count
  },

  methods: {
    onCountChange() {
      this.count++
    }
  }
}
</script>
