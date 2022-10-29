<template>
  <div>
    <div class="header-index">
      <div>
        <a href="https://www.furg.br/" target="_blank">
          <img src="../assets/img/logofurg.png" alt="Logo da FURG" title="Logo da FURG"></img>
        </a>
      </div>
      <div>
        <a href="/login" class="btn">Login</a>
      </div>
    </div>
    <b-container class="main-page">
      <div class="main-page-title">Visualização Pública de Ações de Extensão</div>
      <Filtro/>
      <Projects />
    </b-container>
  </div>
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
