<template>
  <b-container class="novo-usuario">
    <sidebar/>
    <b-form @submit="onSubmit">
      <b-form-group
        id="name"
        label="Nome"
        label-for="name"
      >
        <b-form-input
          id="name"
          v-model="user.name"
          type="text"
          placeholder="Digite nome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="email"
        label="E-mail"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="user.email"
          type="text"
          placeholder="Digite e-mail do usuário"
          required
        ></b-form-input>
      </b-form-group>

      <!-- <b-form-group
        id="password"
        label="Unidade"
        label-for="password"
      >
        <b-form-input
          id="password"
          v-model="user.password"
          type="text"
          placeholder="Digite a senha"
          required
        ></b-form-input>
      </b-form-group> -->

      <div>
        <b-button type="submit" class="btn">Salvar edição</b-button>
      </div>
    </b-form>

  </b-container>
</template>

<script>
import Cookie from 'js-cookie';
import sidebar from '../components/admin/sidebar.vue';
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
    async onSubmit(event) {
      event.preventDefault()
      await this.$axios.$put(`/usuarios/${this.query_id.id}`, {
        name: this.user.name,
        email: this.user.email,
      }, this.config).then((res) => {
        if (this.$store.state.auth.role == 1){
          this.$router.push('/admin/')
        }else{
          this.$router.push('/coordenador/')
        }
      }).catch ((e) => {
        console.log(e)
      })
    },
  },
  async asyncData({params, query, res, $axios, req, app, error, store}) {
    try {
      let query_id = query
      let token = store.state.auth.access_token
      let user = {}
      let config = {
        headers: {
        'Authorization': `${token}`
        }
      }
      await $axios.$get(`/usuarios/${query.id}`, config).then((res) => {
        if (res) {
          user = res
        }
      })
      return {
        user: user,
        query_id: query_id,
        config: config,
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
