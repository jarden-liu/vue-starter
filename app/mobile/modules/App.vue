<template>
<div>
  <div class="header_bar"></div>
  <transition :name="transitionName" mode="out-in">
    <router-view class="child-view"></router-view>
  </transition>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left'
    };
  },
  watch: {
    '$route'(to, from) {
      // const toDepth = to.path.split('/').length;
      // const fromDepth = from.path.split('/').length;
      console.log(to);
      this.transitionName = from.meta.backRouter === to.name ? 'slide-right' : 'slide-left';
      console.log(this.transitionName);
    }
  },
  methods: {
    // startHacking() {
    //   this.$toast('It Works!');
    // }
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
    transition: all 0.9s ease;
}
.slide-fade-leave-active {
    transition: all 0.9s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter,
.slide-fade-leave-active {
    transform: translateX(300px);
    opacity: 1;

}

.header_bar{
  width: 100%;
  background-color: #26a2ff;
  height: 40px;
  position: fixed;
  top: 0;
}

.child-view {
    transition: all 0.3s cubic-bezier(0,1,.4,1);
}

.slide-left-enter,
.slide-right-leave-active {
    opacity: .25;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
    opacity: 0.25;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}
</style>
