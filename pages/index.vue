<template>
  <b-container class="main-page">
    <Filtro/>
    <Projects />
  </b-container>
</template>

<script>
import Filtro from '../components/filtro.vue';
import Projects from '../components/projects_list.vue';
export default {
  // middleware: 'authenticated',
  components:{
    Filtro,
    Projects
  },
}
</script>
