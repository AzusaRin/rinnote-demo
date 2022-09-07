<template>
  <span :title="user.username">{{ Initials }}</span>
</template>

<script>
export default {
  name: 'avatar',
  data () {
    return {
      user: {
        username: 'Azusa'
      },
      Initials: 'A'
    }
  }
}
</script>

<style scoped>
span{
  display: inline-block;
  width: 38px;
  height: 38px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  background: #f2b81c;
  color: #fff;
  text-shadow: 1px 0 1px #795c19;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 15px;
  cursor: pointer;
}

</style>
