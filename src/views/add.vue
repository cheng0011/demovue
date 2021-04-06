<!--
 * @Author: your name
 * @Date: 2021-04-03 10:27:19
 * @LastEditTime: 2021-04-06 20:32:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myproject\src\views\add.vue
-->
<template>
<div>
    <p>标题</p>
    <input type="text" v-model="title">
    <p>内容</p>
    <input type="text" v-model="conent">
    <div>
    <button type="button" @click="add()">添加</button>
    </div>
</div>
</template>
<script>
import store from '@/store'
export default {
  name: 'add',
  store,
  data () {
    return {
      title: '',
      conent: ''
    }
  },
  methods: {
    add () {
      store.commit('addItem', {
        title: this.title,
        conent: this.conent
      })
      this.title = ''
      this.conent = ''
      this.$router.push('/home/list')
    }
  }
}
</script>
<style lang="postcss" scoped>

</style>
