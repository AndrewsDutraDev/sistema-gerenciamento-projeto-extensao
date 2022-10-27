<template>
  <b-container class="main-page">
    <coordenador>

    </coordenador>
  </b-container>
</template>

<script>
import coordenador from '../../components/layouts/coordenador.vue';
export default {
  middleware: 'authenticated',
  components:{
    coordenador,
  },
}
</script>
