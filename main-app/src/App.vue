<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown trigger="click">
        <i class="el-icon-setting" style="margin-right: 15px">
          <span style="margin-left: 15px">{{user.username|| '登录'}}</span>
        </i>

        <el-dropdown-menu slot="dropdown" class="dropdown-wrap">
          <ul class="user-info">
            <li>用户</li>
            <li>{{user.username}}</li>
            <li>用户角色</li>
            <li>{{user.role}}</li>
          </ul>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
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
          <keep-alive>
            <router-view />
          </keep-alive>
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
import { mapState } from "vuex";

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
  computed: {
    ...mapState(["user"]),
  },
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

.dropdown-wrap {
  /* width: 300px; */
}

.user-info {
  display: grid;
  width: 150px;
  padding: 10px;
  font-size: 12px;
  grid-template-columns: 50% 50%;
}

.user-info li {
  line-height: 25px;
}
</style>
