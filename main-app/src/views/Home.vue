<template>
  <div class="home">
    系统首页
    姓名：{{name}}
    座右铭{{motto}}
  </div>
</template>

<script>
// @ is an alias to /src
import actions from "@/shared/actions";
export default {
  name: "home",
  data() {
    return {
      name: "",
      motto: "",
    };
  },
  mounted() {
    console.log("actionsactions", actions);
    actions.onGlobalStateChange((state, pre) => {
      console.log("2222", state, pre);
      this.name = state.name;
      this.motto = state.motto;
    }, true);
  },
  components: {},
};
</script>
