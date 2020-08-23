<template>
  <div class="tag-container">
    <el-tag
      v-for="(tag, index) in value"
      size="small"
      closable
      :key="tag.key"
      @close="handleClose(tag, index)"
    >
      <router-link :to="tag.key">{{tag.name}}</router-link>
    </el-tag>
  </div>
</template> 


<script lang="ts">
import Vue from "vue";
export default {
  data() {
    return {};
  },
  props: {
    value: {
      type: Array,
      default: [],
    },
    changeActiveMenu: Function,
  },
  methods: {
    handleClose(tag, index) {
      // 指定下一个tag
      const nextTag = this.value[index + 1] || this.value[index - 1];
      if (nextTag) {
        // 跳转到下一个tag的路由
        this.$router.push(nextTag.key);
      }

      // 左侧菜单进行修改
      // this.$emit("changeActiveMenu", nextTag.key);

      const newVal = this.value.filter((val) => val.name !== tag.name);

      this.$emit("input", newVal);
    },
  },
  watch: {
    $route(to, from) {
      console.log("route", to, from);
      this.$emit("changeActiveMenu", to.path);
    },
  },
  mounted() {},
};
</script>

<style>
.tag-container {
  width: 100%;
  /* height: 28px; */
  background: #fff;
  box-shadow: #333;
}
.el-tag {
  margin: 2px 5px;
}
.el-tag a {
  color: #409eff;
}
</style>