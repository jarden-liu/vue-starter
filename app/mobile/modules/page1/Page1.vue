<template>
<div>
  <mt-header fixed title="page1">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
  <div class="has_title app_content">
    <div>
      <router-link to="/page1">
        <mt-button @click:native="startHacking()">{{msg}}</mt-button>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App page1'
    };
  },
  methods: {
    startHacking () {
      this.$toast('It Works!');
    }
  }
};
</script>

<!-- <style lang="scss"></style> -->
