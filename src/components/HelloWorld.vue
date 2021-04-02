<!--
 * @Author: your name
 * @Date: 2021-03-25 21:48:30
 * @LastEditTime: 2021-04-02 15:54:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \myproject\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>info component: {{msg}}</h1>
    <button @click="add">添加</button>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'HelloWorld',
  methods: {
    add () {
      console.log('1111')
      store.commit('increase')
    }
  },
  data () {
    return {
      msg: store.state.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
