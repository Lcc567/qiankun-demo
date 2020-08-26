<template>
  <el-container>
    <el-header>qiankun</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="activeMenu"
          @select="handleSelect"
          class="el-menu-demo"
          :router="true"
        >
          <template v-for="menu in menus">
            <el-menu-item :index="menu.key" :key="menu.key">{{menu.name}}</el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <v-tags v-model="tags" @changeActiveMenu="changeActiveMenu"></v-tags>
        <div class="content">
          <router-view />
          <div id="vue"></div>
          <div id="react"></div>
        </div>
        <el-footer>Footer</el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import vTags from "./components/Tags.vue";
import { loadMicroApp } from "qiankun";
import { find } from "lodash";
import apps from "./micro/app";

export default {
  data() {
    return {
      tags: [
        {
          name: "系统首页",
          key: "/",
        },
      ],
      menus: [
        {
          name: "系统首页",
          key: "/",
        },
        {
          name: "vue微应用",
          key: "/vue",
        },
        {
          name: "react微应用",
          key: "/react",
        },
      ],
      activeMenu: "/",
    };
  },
  // watch: {
  //   $route: {
  //     immediate: true,
  //     handler(to, from) {
  //       console.log("-------21", to, from);

  //       //  TODOS 保存打开的tag,刷新的时候，根据路由进行跳转，加载对应的应用
  //       const prefix = to.path.slice(1);
  //       loadMicroApp({
  //         name: prefix + "App",
  //         entry: "//localhost:8000",
  //         container: "#vue",
  //         activeRule: "/vue",
  //       });

  //       this.handleSelect(to.path);
  //     },
  //   },
  // },
  methods: {
    handleSelect(index) {
      const selectMenu = find(this.menus, ["key", index]);
      console.log("menu2", selectMenu);
      if (!find(this.tags, ["key", index])) {
        this.tags.push(selectMenu);

        this.activeMenu = selectMenu.key;
      }
    },
    changeActiveMenu(active) {
      this.activeMenu = active;
    },
  },
  components: {
    vTags,
  },
};
</script>

<style>
@import "./assets/main.css";
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background: #f0f0f0;
  padding: 0;
  height: calc(100vh - 60px);
}

.el-footer {
  position: absolute;
  bottom: 0;
  left: 200px;
  right: 0;
}

.content {
  padding: 5px 10px;
}
</style>
