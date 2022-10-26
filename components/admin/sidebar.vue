<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Menu" shadow>
      <div class="sidebar-title-kit">
        <div class="sidebar-title-kit-name">Usuários</div>
        <div class="sidebar-title-kit-items">
          <a href="/admin/usuarios">
            Todos usuários do sistema
          </a>
        </div>

        <div class="sidebar-title-kit-name">Projetos</div>
        <div class="sidebar-title-kit-items">
          <a href="/admin/projetos-pendentes">
            Projetos pendentes
          </a>
          <a href="/admin/projetos-publicados">
            Projetos publicados
          </a>
        </div>
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
}
</script>
