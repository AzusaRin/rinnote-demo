<template>
  <div id="app">
    <sider></sider>
    <router-view/>
  </div>
</template>

<script>
import Sider from './components/Sider'
import Icon from './components/Icon'

export default {
  name: 'App',
  components: {
    Sider: Sider,
    Icon: Icon
  }
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
}

body {
  font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eee;
  height: 100%;
}
a{
  text-decoration: none;
  color: #444;
}

ul,li{
  list-style: none;
}

#app{
  display: flex;
  height: 100%;
  align-items: stretch;
}

</style>
