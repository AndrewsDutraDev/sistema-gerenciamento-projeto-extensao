<template>
  <div>
    <admin></admin>
    <b-container>
      <button @click="backForward()" class="btn backForward mt-4"> < Voltar </button>
    </b-container>
    <b-container class="novo-usuario">

      <b-form @submit="onSubmit">
        <div class="title-description">Criar novo acesso de usuário</div>
        <b-form-group
          id="name"
          label="Nome"
          label-for="name"
        >
          <b-form-input
            id="name"
            v-model="register.name"
            type="text"
            placeholder="Digite o nome do usuário"
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
            v-model="register.email"
            type="email"
            placeholder="Digite o email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="password"
          label="Senha"
          label-for="password"
        >
          <b-form-input
            id="password"
            v-model="register.password"
            type="password"
            placeholder="Digite a senha"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="role"
          label="Tipo de usuário"
          label-for="role"
        >
          <b-form-select v-model="register.role" :options="options"></b-form-select>
        </b-form-group>



        <div>
          <b-button type="submit" class="btn">Criar novo usuário
            <b-spinner variant="light" small class="ml-2" v-if="isLoading"></b-spinner>
          </b-button>
        </div>
      </b-form>

    </b-container>
  </div>
</template>

<script>
import admin from '../../components/layouts/admin.vue'
import Cookie from 'js-cookie';
export default {
  middleware: 'authenticated',
  components:{
    admin,
  },
  data() {
    return {
      isLoading: false,
      options:[
        { value: 1, text: 'Administrador' },
        { value: 2, text: 'Coordenador' },
      ],
      register: {
        email: '',
        password: '',
        role: 2,
        name: ''
      },
    }
  },
  methods: {
    backForward(){
      window.history.back()
    },
    async onSubmit(event) {
      event.preventDefault()
      this.isLoading = true
      let token = this.$store.state.auth.access_token
      let config = {
        headers: {
        'Authorization': `${token}`
        }
      }
      await this.$axios.$post(`/registrar`, {
        email: this.register.email,
        password: this.register.password,
        role: this.register.role,
        name: this.register.name
      }, config).then((res) => {
        this.isLoading = false
        this.postLogin(res);
      }).catch((e)=>{
        console.log(err);
        alert('Ocorreu um erro. Tente novamente')
        this.isLoading = false
      })
    },
    postLogin(response) {
      this.$router.push('/admin/todos-usuarios')
    },
  }
}
</script>
