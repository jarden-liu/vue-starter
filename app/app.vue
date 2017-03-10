<template>
  <div>

    <div style="text-align:center;">
      <img src="./assets/logo.jpg"/>
    </div>
    <div class="content">
      <h1 class="title">WELCOME</h1>
      <div >
        {{message}}
      </div>
    </div>

  </div>
</template>



<script>
let vm;

export default  {
  name:'app',
  data(){
    return {
      message:'Hello Vue!'
    }
  }
};


</script>


<style lang="sass">
  .title{
    font-weight: 600;
  }
</style>
