<template>
  <div class="sidebar-layout">
    <b-button v-b-toggle.sidebar-right>Abrir menu</b-button>
    <b-sidebar id="sidebar-right" :title="'Olá, '+username" right shadow>
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
        <b-button @click="logout()" class="sidebar-logout">Sair</b-button>
      </div>
    </b-sidebar>
    <div>
      <a href="https://www.furg.br/" target="_blank">
        <img src="../../assets/img/logofurg.png" alt="Logo da FURG" title="Logo da FURG"></img>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  computed:{
    username(){
      return this.$store.state.auth.name;
    }
  },
  methods:{
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
