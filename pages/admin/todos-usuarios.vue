<template>
  <b-container class="novo-usuario">
    <sidebar/>

    <b-container class="projects">
      <b-row>
        <b-col sm="3">
          Nome
        </b-col>
        <b-col sm="3" class="mobile-none">
          E-mail
        </b-col>
        <b-col sm="2">
          Cargo
        </b-col>
        <b-col sm="4">
          Ações
        </b-col>
      </b-row>
      <div v-for="user in users" :key="user._id">
        <b-row>
          <b-col sm="3">
            {{ user.name }}
          </b-col>
          <b-col sm="3" class="mobile-none">
            {{ user.email }}
          </b-col>
          <b-col sm="2">
            <div v-if="user.role == 1">
              Adminstrador
            </div>
            <div v-else>
              Coordenador
            </div>
          </b-col>
          <b-col sm="4">
            <b-row>
              <b-col sm="6">
                <a :href="userLink(user)">
                  Editar
                </a>
              </b-col>
              <b-col sm="6" @click="userDelete(user)">
                Excluir
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </b-container>
</template>

<script>
import Cookie from 'js-cookie';
import sidebar from '../../components/admin/sidebar.vue';
export default {
  middleware: 'authenticated',
  components:{
    sidebar,
  },
  data() {
    return {

    }
  },
  methods: {
    userLink(user){
      return `/usuario/${user._id}`
    },
    async userDelete(user){
      let token = this.$store.state.auth.access_token
      let config = {
        headers: {
        'Authorization': `${token}`
        }
      }
      await this.$axios.$delete(`/usuarios/${user._id}`, config).then((res) => {
        this.$router.go(0)
      }).catch((err) => {
        alert('Não foi possível excluir o usuário.')
      })
    }
  },
  async asyncData({params, query, res, $axios, req, app, error, store}) {
    try {
      let token = store.state.auth.access_token
      let config = {
        headers: {
        'Authorization': `${token}`
        }
      }
      let users = {}
      await $axios.$get(`/usuarios`, config).then((res) => {
        if (res) {
          users = res
        }
      }).catch((err) => {
        alert('Houve um erro ao carregar a página.')
      })
      return {
        users: users,
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
