<template>
  <div>
    <div>{{ normalCount }}</div>
    <div>{{ reactiveCount() }}</div>
    <button @click="onClick">count ++</button>
  </div>
</template>

<script>
export default {
  inject: ['normalCount', 'reactiveCount', 'onCountChange'],

  methods: {
    onClick() {
      this.onCountChange()
    }
  }
}
</script>
