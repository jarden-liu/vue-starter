<template>
  <!-- v-nav-title="page1" -->
<div v-nav-title="'page1'">
  <div class="has_title app_content" >
    <div>
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
  created: function() {
  },
  methods: {
    startHacking() {
      // this.$bus.$emit('change-abc', 1);
      //
      // this.$bus.$on('change-abc', function() {
      // });
      this.$http.get('http://10.20.0.72/stuAdminWeixin/www/Api/getProvince/2').then((response) => {
        // success callback
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

<!-- Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.<style lang="scss"></style> -->
<style lang="scss">
.text {}</style>
