<template>
  <div class="home">Home page111</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import {getData} from "@/api/system";
import { personFace } from "@/interface/person";

@Options({
  components: {},
})
export default class Home extends Vue {
  [x: string]: any;
  private person: personFace = {
    name: "toyo",
    age: 18,
  };
  created(){
    console.info(this.$store.state.mod1.userStatus)
  }
}
</script>