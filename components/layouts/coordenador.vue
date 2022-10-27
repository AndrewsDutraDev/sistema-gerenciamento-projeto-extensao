<template>
  <div class="basic-layout">

    <sidebarcoord/>

    <slot/>


  </div>
</template>
<script>
  import sidebarcoord from '../coordenador/sidebarcoord.vue';
  export default {
    middleware: 'authenticated',
    components:{
      sidebarcoord,
    },
  }
</script>
