<template>
  <div class="sidebar-layout">
    <b-button v-b-toggle.sidebar-1>Abrir menu</b-button>
    <b-sidebar id="sidebar-1" title="Menu do ADMIN" shadow>
      <div class="sidebar-title-kit">
        <div class="sidebar-title-kit-name">Usuários</div>
        <div class="sidebar-title-kit-items">
          <a href="/admin/todos-usuarios">
            Todos usuários do sistema
          </a>
          <a href="/admin/novo-usuario">
            Criar novo usuário
          </a>
        </div>

        <div class="sidebar-title-kit-name">Projetos</div>
        <div class="sidebar-title-kit-items">
          <a href="/novo-projeto">
            Criar novo projeto
          </a>
          <a href="/admin/projetos-pendentes">
            Projetos pendentes
          </a>
          <a href="/admin/projetos-publicados">
            Projetos publicados
          </a>
        </div>
        <b-button @click="logout()" class="sidebar-logout">Sair</b-button>
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
