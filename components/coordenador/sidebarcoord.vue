<template>
  <div class="sidebar-layout">
    <b-button v-b-toggle.sidebar-1>Abrir menu</b-button>
    <b-sidebar id="sidebar-1" title="Menu coordenador" shadow>
      <div class="sidebar-title-kit">
        <div class="sidebar-title-kit-name">Meu usuário</div>
        <div class="sidebar-title-kit-items">
          <a :href="`/editar-usuario?id=${$store.state.auth.id}`">
            Editar meu usuário
          </a>
        </div>

        <div class="sidebar-title-kit-name">Projetos</div>
        <div class="sidebar-title-kit-items">
          <a href="/novo-projeto">
            Criar novo projeto
          </a>
          <a href="/coordenador/projetos-pendentes">
            Projetos pendentes
          </a>
          <a href="/coordenador/projetos-publicados">
            Projetos publicados
          </a>
        </div>
        <b-button @click="logout()">Sair</b-button>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
