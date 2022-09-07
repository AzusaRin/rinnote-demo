<template>
  <div id="noteInfo">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'NoteInfo',
  data () {
    return {
      msg: 'This is noteInfo page'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
