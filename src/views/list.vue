<!--
 * @Author: your name
 * @Date: 2021-04-03 10:27:00
 * @LastEditTime: 2021-04-06 20:40:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myproject\src\views\list.vue
-->
<template>
    <div>
        <ul>
            <li v-for="(item,index) in pagelist" :key="index">
{{item.title}}--{{item.conent}}
            </li>
        </ul>
    </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'list',
  store,
  computed: {
    pagelist () {
      return store.state.list
    }
  }
}
</script>
<style lang="postcss" scoped>
ul li{
    list-style-type: none;
}
</style>
