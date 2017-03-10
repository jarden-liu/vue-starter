<template>
<div>

  <div style='text-align:center;'>
    <img src='./assets/logo.jpg' />
  </div>
  <div class='content'>
    <h1 class='title'>WELCOME</h1>
    <div>
      {{message}}
    </div>
  </div>

</div>
</template>



<script>
let vm;

export default {
  name: 'app',
  data() {
    return {
      message: 'Hello Vue!'
    };
  },
  mounted() {
    this.appShow();
  },
  methods: {
    appShow() {
      const {
        PAGE_START_TIME
      } = window;
      const PAGE_END_TIME = new Date().getTime() // 结束时间
      const diffTime = PAGE_END_TIME - PAGE_START_TIME
      const timer = setTimeout(() => {
        clearTimeout(timer)
        document.querySelector('.page-preloading ').className += ' hide';

      }, diffTime > 1000 ? 0 : 1000 - diffTime);
    }
  }

};
</script>


<style lang="sass">
.title {
    font-weight: 600;

}
</style>
