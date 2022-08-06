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

  provide() {
    return {
      normalCount: this.count,
      reactiveCount: () => this.count,
      onCountChange: this.onCountChange
    }
  },

  methods: {
    onCountChange() {
      this.count++
    }
  }
}
</script>
