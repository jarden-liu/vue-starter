<template>
<div v-nav-title="'主页'">
  <!-- <mt-header fixed title="主页">
  </mt-header> -->
  <div class="has_title app_content">
    <img src="../../../assets/logo.png" >
    <div>
      <router-link to="/page1">
        <mt-button>Go page1</mt-button>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {};
  },
  methods: {
    startHacking() {
      this.$toast('It Works!');
    }
  }
};
</script>
