<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ num }}</p>
    <button @click="addNum">点我长个猪</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["num"]),
  },
  methods: {
    ...mapMutations(["addNum"]),
  },
};
</script>

<style></style>
