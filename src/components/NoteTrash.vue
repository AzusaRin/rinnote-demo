<template>
  <div id="noteTrash">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'NoteTrash',
  data () {
    return {
      msg: 'This is NoteTrash page'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
