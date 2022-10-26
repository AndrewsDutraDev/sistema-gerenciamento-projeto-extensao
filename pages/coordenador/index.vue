<template>
  <b-container class="main-page">
    <sidebar_coord/>
  </b-container>
</template>

<script>
import sidebar_coord from '../../components/coordenador/sidebarcoord.vue';
export default {
  middleware: 'authenticated',
  components:{
    sidebar_coord,
  },
}
</script>
