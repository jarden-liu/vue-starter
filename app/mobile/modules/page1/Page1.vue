<template>
<div>
  <mt-header fixed title="page1">
    <router-link to="/home" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
  <div class="has_title app_content">
    <div>
      <mt-button v-on:click="startHacking()">{{msg}}</mt-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'page1',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App page1'
    };
  },
  methods: {
    startHacking() {
      this.$toast('It Works!');
      // this.$router.back();
      this.$http.get('http://gc.ditu.aliyun.com/geocoding?a=%E8%8B%8F%E5%B7%9E%E5%B8%82').then((response) => {
        // success callback
        console.log(response);
      }, (response) => {
        // error callback
      });
    }
  }
};
</script>

<!-- Error: Source sample is missing.Error: Source sample is missing.<style lang="scss"></style> -->
