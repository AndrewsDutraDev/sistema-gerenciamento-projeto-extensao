<template>
  <b-container class="login-container">
    <div class="login">
      <b-form @submit="onSubmit">
        <b-form-group id="login-name" label="E-mail" label-for="name">
          <b-form-input id="name" v-model="login.email" type="email" placeholder="Digite seu e-mail" required>
          </b-form-input>
        </b-form-group>

        <b-form-group id="login-password" label="Senha" label-for="password">
          <b-form-input id="password" v-model="login.password" type="password" placeholder="Digite sua senha" required>
          </b-form-input>
        </b-form-group>

        <b-button type="submit" class="btn">Entrar
          <b-spinner variant="light" small class="ml-2" v-if="isLoading"></b-spinner>
        </b-button>
      </b-form>
    </div>
  </b-container>

</template>

<script>
import Cookie from 'js-cookie';
export default {
  // middleware: ['notAuthenticated'],
  data() {
    return {
      isLoading: false,
      login: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      this.isLoading = true
      await this.$axios.$post(`/login`, {
        email: this.login.email,
        password: this.login.password
      }).then((res) => {
        this.postLogin(res);
        this.isLoading = false
      }).catch ((err) =>{
        console.log(err);
        alert('Ocorreu um erro. Tente novamente')
        this.isLoading = false
      })
    },
    postLogin(response) {
      const auth = {
        access_token: response.token,
        email: response.user_email,
        role: response.role,
        name: response.name,
        id: response.id
      }
      this.$store.commit('setAuth', auth)
      // Cookie.set('auth', auth, {expires: 1, path: '/'})
      console.log(auth)
      this.$cookies.set('auth', auth)
      if (response.role){
        if (response.role == 1){
          this.$router.push('/admin/projetos-publicados')
        }else{
          this.$router.push('/coordenador/projetos-publicados')
        }
      }
    },
  },
}
</script>
