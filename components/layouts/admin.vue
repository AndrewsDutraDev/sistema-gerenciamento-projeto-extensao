<template>
  <div class="basic-layout">

    <sidebar/>

    <slot/>


  </div>
</template>
<script>
  import sidebar from '../../components/admin/sidebar.vue';
  export default {
    middleware: 'authenticated',
    components:{
      sidebar,
    },
  }
</script>
