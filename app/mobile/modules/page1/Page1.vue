<template>
<div>
  <mt-header fixed title="page1">
    <router-link to="/home" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
  <div class="has_title app_content">
    <div>
      <mt-button @click.native="startHacking()">{{msg}}</mt-button>
    </div>
    <div v-for="item in list">
      {{item.MC}}
    </div>
    <div v-for="item in list">
      {{item.MC}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'page1',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App page1',
      list: []
    };
  },
  methods: {
    startHacking() {
      // this.$toast('It Works!');
      // this.$router.back();
      this.$http.get('http://10.20.0.72/stuAdminWeixin/www/Api/getProvince/2').then((response) => {
        // success callback
        console.log(response);
        this.setList(response.data.content);
      }, (response) => {
        // error callback
        // console.log(response);
      });
    },
    setList(content) {
      this.list = content;
    }
  }
};
</script>

<!-- Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.<style lang="scss"></style> -->
