<template>
  <div>
    <slot name="header">我是一个小插槽1</slot>
    <slot name="footer">我是一个小插槽2</slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  created() {},
};
</script>

<style></style>
