<template>
  <div class="home">
    系统首页
    姓名：{{user.username}}
    电话{{user.phone}}
  </div>
</template>

<script>
// @ is an alias to /src
import actions from "@/shared/actions";
import { mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"]),
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
