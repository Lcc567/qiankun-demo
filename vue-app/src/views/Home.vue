<template>
  <div class="home">
    <button v-on:click="handleClick">改变座右铭</button>
  </div>
</template>

<script>
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
    actions.onGlobalStateChange((state, prev) => {
      console.log(111111111, state, prev);
    }, true);
  },
  methods: {
    handleClick() {
      actions.setGlobalState({ name: "chao", motto: "just do it" });
    },
  },
};
</script>
