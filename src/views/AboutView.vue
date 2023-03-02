<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ num }}</p>
    <button @click="btn1">点我执行mutations</button>
    <br />
    <button @click="btn2">点我执行actions</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["num"]),
  },
  methods: {
    // ...mapMutations(["addNum"]),
    btn1() {
      // console.log(this);
      this.$store.commit("addNum");
    },
    btn2() {
      // console.log(this);
      this.$store.dispatch("sub");
    },
  },
};
</script>

<style></style>
