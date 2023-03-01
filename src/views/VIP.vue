<template>
  <div>
    <h1>会员</h1>
    <button @click="backToHome">点我跳转回首页</button>
  </div>
</template>

<script>
export default {
  methods: {
    backToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
