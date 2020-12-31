<template>
  <div class="menu-list">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-sub-menu v-for="item in menuList" :key="item.path">
        <template #title>
          <span
            ><MailOutlined /><span>{{ item.name }}</span></span
          >
        </template>
        <a-menu-item
          v-for="t in item.children"
          :key="t.path"
          @click="navTo(t.path)"
          >{{ t.name }}</a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";

@Options({
  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  watch: {
    openKeys(val, oldVal) {
      oldVal;
    },
  },
})
export default class Menu extends Vue {
  created() {
    this.selectedKeys = [(this as any).$router.options.history.location];
    this.openKeys = [
      (this as any).$router.options.history.location.split("/")[1],
    ];
  }
  [x: string]: any;
  private collapsed = false;
  private selectedKeys: string[] = [];
  private openKeys: string[] = [];
  private menuList: any = [
    {
      name: "首页",
      path: "index",
      icon: "",
      children: [
        {
          name: "内容1",
          path: "/index/home",
        },
        {
          name: "内容2",
          path: "/index/about",
        },
      ],
    },
    {
      name: "news",
      path: "news",
      icon: "",
      children: [
        {
          name: "内容1",
          path: "/news/news1",
        },
        {
          name: "内容2",
          path: "/news/news2",
        },
      ],
    },
  ];

  navTo(path: string) {
    this.$path(path);
  }
}
</script>
