<template>
  <svg class="icons">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
import '../assets/svg'
export default {
  name: 'Icon',
  props: ['name']
}
</script>
<style scoped>
.icons{
  width: 1em;
  height: 1em;
}
</style>
