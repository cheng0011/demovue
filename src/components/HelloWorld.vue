<!--
 * @Author: your name
 * @Date: 2021-03-25 21:48:30
 * @LastEditTime: 2021-04-02 21:56:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myproject\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <ul>
      <li
      v-for="(item,index) in lists"
      :key="index"
      @click="choose(index)"
      :class="{active:index==current && current !==''}"
      >
      {{item}}
    </li>
    </ul>
    <button type="button" @click="select()">add</button>
    <ul>
      <li v-for="(item,index) in targets" :key="index">
        {{item}}
      </li>
    </ul>
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
      // console.log('1111')
      store.commit('increase')
    },
    choose (index) {
      // console.log(index)
      this.current = index
    },
    select () {
      this.targets.push(this.lists[this.current])
      this.current = ''
    }
  },
  data () {
    return {
      current: ' ',
      msg: store.state.count,
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      targets: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.active{
  background-color: red;
}
</style>
