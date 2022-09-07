<template>
  <div id="login">
    <div class="outerWrapper">
      <div class="wrapper">
        <div class="container">
          <div class="main"></div>
          <div class="form">
            <h3>登录</h3>
            <div v-show="showLogin" class="login">
              <input placeholder="输入用户名" type="text" v-model="login.username">
              <input placeholder="密码" type="password" v-model="login.password">
              <p :class="{error:login.isError}">{{ login.tip }}</p>
              <button class="button">登录</button>
            </div>
            <h3>注册账户</h3>
            <div v-show="showRegister" class="register">
              <input placeholder="请输入用户名" type="text" v-model="register.username">
              <input placeholder="请输入密码" type="password" v-model="register.password">
              <p :class="{error:register.isError}">{{ register.tip }}</p>
              <button class="button">注册账户</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      showLogin: true,
      showRegister: false,
      login: {
        username: '',
        password: '',
        tip: '请输入用户名以及密码',
        isError: false
      },
      register: {
        username: '',
        password: '',
        tip: '请保存好用户名及密码',
        isError: false
      }
    }
  }

}
</script>

<style lang="less" scoped>
.outerWrapper {
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  display: table;
  transition: opacity .3s ease;

  .wrapper {
    display: table-cell;
    vertical-align: middle;

    .container {
      width: 800px;
      height: 500px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      font-family: Helvetica, Arial, sans-serif;
      display: flex;

      .main {
        flex: 1;
        background: #36bc64 url(//cloud.hunger-valley.com/17-12-13/38476998.jpg-middle) center center no-repeat;
        background-size: contain;
      }

      .form {
        width: 270px;
        border-left: 1px solid #ccc;

        h3 {
          padding: 10px 20px;
          font-weight: normal;
          font-size: 16px;
          border-top: 1px solid #eee;
          cursor: pointer;

          &:nth-of-type(2) {
            border-bottom: 1px solid #eee;
          }
        }

        .register, .login {
          padding: 10px 20px;
          border-top: 1px solid #eee;

          input {
            display: block;
            width: 100%;
            height: 35px;
            line-height: 35px;
            border-radius: 4px;
            padding: 0 6px;
            border: 1px solid #ccc;
            outline: none;
            font-size: 14px;
            margin-top: 10px;

            &:focus {
              border: 1.5px solid #9dcaf8;
            }
          }

          .button {
            background-color: #2bb964;
            height: 36px;
            line-height: 36px;
            text-align: center;
            color: #fff;
            border-radius: 4px;
            margin-top: 18px;
            cursor: pointer;
            width: 100%;
            border: none;
            transition: all .3s;

            &:hover {
              background: #a0e7ba;
              color: #5e6266;
            }
          }
          p{
            font-size: 12px;
            margin-top: 10px;
            color: #444;
          }
          .error {
            color: red;
          }
        }
        .login{
          border-top: 0;
        }
      }
    }
  }
}
</style>
