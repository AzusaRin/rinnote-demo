<template>
  <div id="note">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'NoteList',
  data () {
    return {
      msg: 'This is note page'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
