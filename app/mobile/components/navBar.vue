<template>
<mt-header fixed :title="title">
  <router-link to="/home" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
</mt-header>
</template>



<script>
let navBar = {
  name: 'navBar',
  data() {
    return {

    };
  },
  computed: {
    title: function() {
      return this.$store.state.navBar.title;
    }
  },
  beforeCreate: function() {
    // this.$store.state.mobile_components.navBar = {};
    this.$store.registerModule('navBar', {
      state: {
        title: '主页'
      },
      mutation: {
        'navBar/updateNavBarTitle': function() {
          console.log(666);
          console.log(213);
        }
      }
    });

  },
  methods: {

  }
};



export default navBar;
</script>


<style lang='sass'>
.temp {}</style>
