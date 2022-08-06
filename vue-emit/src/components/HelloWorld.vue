<template>
  <div class="hello">
    <button @click="onClick">switch</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('switch', 'fanfan', 17)
    }
  }
}
</script>
