<!--
 * @Author: your name
 * @Date: 2021-04-03 10:26:11
 * @LastEditTime: 2021-04-06 22:21:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myproject\src\views\login.vue
-->
<template>
  <div>
    <form v-if="! isreg">
      <p>用户名</p>
      <input type="text" v-model="name">
      <p>密码</p>
      <input type="password" v-model="password">
      <div>
        <button type="button" @click="login()">登陆</button>
        <button type="button" @click="zhuce()">注册</button>
      </div>

    </form>
    <form v-else>
      <p>用户名</p>
      <input type="text" v-model="name">
      <p>密码</p>
      <input type="password" v-model="password">
      <p>再次输入密码</p>
      <input type="password" v-model="repeat">
      <div>
        <button type="button" @click="adduser()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </div>

    </form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      isreg: false,
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    login () {
      if (localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password) {
        this.name = ''
        this.password = ''
        this.$router.push('/home/list')
      } else {
        alert('输入用户名密码不正确')
      }
    },
    cancel () {
      this.isreg = false
    },
    zhuce () {
      this.isreg = true
    },
    adduser () {
      if (this.password === this.repeat) {
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
        this.name = ''
        this.password = ''
        this.isreg = false
      } else {
        alert('两次输入密码不正确')
      }
    }
  }
}

</script>
<style lang="postcss" scoped>

</style>
