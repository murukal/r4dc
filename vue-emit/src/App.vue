<template>
  <div>
    <span>我是：{{ name }}，年龄：{{ age }}</span>
    <HelloWorld @switch="onSwitchUser(...arguments)" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },

  data() {
    return {
      name: 'tutu',
      age: 18
    }
  },

  methods: {
    onSwitchUser(name, age) {
      this.name = name
      this.age = age
    }
  }
}
</script>
