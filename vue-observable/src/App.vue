<template>
  <div>
    <span>我是{{ name }}，年龄: {{ age }}</span>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { store } from './store'

export default {
  components: {
    HelloWorld
  },

  computed: {
    name() {
      return store.name
    },
    age() {
      return store.age
    }
  }
}
</script>
