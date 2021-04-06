<!--
 * @Author: your name
 * @Date: 2021-04-03 10:38:32
 * @LastEditTime: 2021-04-03 11:06:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myproject\src\views\home.vue
-->
<template>
<div>
    <router-view />
    <ul>
        <li><router-link :to="{name: 'list'}">新闻列表</router-link></li>
        <li><router-link :to="{name: 'user'}">个人中心</router-link></li>
    </ul>
    </div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style lang="postcss" scoped>
li{ list-style:none; }
</style>
