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

        <b-button type="submit" class="btn">Entrar</b-button>
      </b-form>
    </div>
  </b-container>

</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.login))
    },
  }
}
</script>
