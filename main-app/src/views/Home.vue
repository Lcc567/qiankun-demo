<template>
  <div class="home">
    系统首页
    姓名：{{user.username}}
    电话{{user.phone}}
    <button @click="handleVerify">jiao眼</button>
  </div>
</template>

<script>
// @ is an alias to /src
import actions from "@/shared/actions";
import { mapState } from "vuex";
import store from "../store/index";
import { verify } from "@/api/login";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async handleVerify() {
      await verify();
    },
  },
  async mounted() {
    // const historyToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjM2MDAsImRhdGEiOlt7InVzZXJuYW1lIjoiYWRtaW4iLCJwaG9uZSI6IjEzMDUxNjA3Nzc3IiwiZW1haWwiOiIxMjNAdGVzdC5jb20iLCJhZ2UiOjMwfV0sImlhdCI6MTU5OTY0NjA1N30.vb_DoIV-R5ReTeJiJvfbSLaNC25h90IjUV67k4JLBng

    let token = localStorage.getItem("token");
    if (token) {
      try {
        await verify();
        let user = localStorage.getItem("user");
        if (user) {
          store.commit("setUser", JSON.parse(user));
        }
      } catch (error) {
        console.log(error, "_____________");
      }
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
