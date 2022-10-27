<template>
  <div>
    <coordenador>

    </coordenador>
    <b-container class="main-page">
    </b-container>
  </div>

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
