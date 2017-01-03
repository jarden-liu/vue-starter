<template>
<div>
  <mt-header fixed title="主页2">
  </mt-header>
  <div class="has_title app_content">
    <img src="../../assets/logo.png">
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
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    startHacking () {
      this.$toast('It Works!');
    }
  }
};
</script>

<style lang="scss">
* {
    margin: 0;
}

body,
html {
    height: 100%;
    width: 100%;
}

.app_content {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.has_title {
    padding-top: 40px;
}

.slide-fade-enter-active {
  transition: all .9s ease;
}
.slide-fade-leave-active {
  transition: all .9s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(300px);
  opacity: 1;

}
</style>
