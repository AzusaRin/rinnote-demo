<template>
<div id="sider">
  <avatar></avatar>
  <div class="icons">
    <router-link to="/note/1" title="笔记"><Icon name="note"></Icon></router-link>
    <router-link to="/notebooks" title="笔记本"><Icon name="notebook"></Icon></router-link>
    <router-link to="/trash/2" title="回收站"><Icon name="trash"></Icon></router-link>
  </div>
  <div class="logout" @click="logout">
    <Icon name="logout"></Icon>
  </div>
</div>
</template>

<script>
import Icon from './Icon'
import avatar from './Avatar'
export default {
  components: {Icon, avatar}
}
</script>

<style scoped lang="less">
#sider{
  position: relative;
  background: #42b983;
  text-align: center;
  width: 100px;
  .icons {
    margin-top: 15px;
    font-size: 24px;
    a{
      padding: 6px 0;
      display: block;
    }
    .router-link-active {
      background-color: #5e6266;
      fill: white;
    }
  }
  .logout {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
}

</style>
