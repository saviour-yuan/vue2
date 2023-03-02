<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>嘞是我的猪的数量捏:{{ num }}</p>
    <Card>
      <template #header>
        <div>我是Home里面用的插槽哦</div>
      </template>
      <template #footer>
        <div>我是Footer里面用的插槽哦</div>
      </template>
    </Card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { Card },
  computed: { ...mapState(["num"]) },
  created() {},
  mounted() {
    console.log(this.$children[0]);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
