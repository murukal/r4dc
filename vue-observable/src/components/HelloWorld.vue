<template>
  <div>
    <button @click="onClick">grow</button>
  </div>
</template>

<script>
import { grow } from '../store'

export default {
  methods: {
    onClick() {
      grow()
    }
  }
}
</script>
