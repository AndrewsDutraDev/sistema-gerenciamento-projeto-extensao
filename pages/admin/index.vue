<template>
  <b-container class="main-page">
    <sidebar/>
  </b-container>
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
