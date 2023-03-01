<template>
  <div>
    <h1>我是登录页</h1>
    {{str }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['str'])
    }
};
</script>

<style></style>
