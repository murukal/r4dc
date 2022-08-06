<template>
  <div>
    <div>{{ normalCount }}</div>
    <div>{{ reactiveCount }}</div>
  </div>
</template>

<script>
export default { inject: ['normalCount', 'reactiveCount'] }
</script>
