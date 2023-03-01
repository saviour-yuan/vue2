<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="wo de zhu ye" />
     
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView", 
  components: {
     HelloWorld,
  }, 
  props:[]
};
</script>
