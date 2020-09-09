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
import store from '../store/index';
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    let user = localStorage.getItem('user')
    console.log("actionsactions", actions, this.user, user);
    if (user) {
      store.commit('setUser', JSON.parse(user))
    }
    actions.onGlobalStateChange((state, pre) => {
      // console.log("2222", state, pre);
      // this.name = state.name;
      // this.motto = state.motto;
    }, true);
  },
  components: {},
};
</script>
