<template>
  <!-- <div class="app-wrapper">
    <div class="navbar">
      testing floating navbar
    </div>
    <section class="app-main">
      <router-view :key="key" />
    </section>
  </div> -->
  <div class="app-wrapper">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Header portion test</span>
    </el-header>
    <el-main class="app-main">
      <router-view :key="key" />
    </el-main>
  </div>

</template>

<script>
export default {
  name: 'Layout',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
