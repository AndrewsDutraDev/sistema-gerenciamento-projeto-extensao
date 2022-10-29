<template>
  <div>
    <div v-if="$store.state.auth.role == 1">
      <admin></admin>
    </div>
    <div v-else>
      <coordenador></coordenador>
    </div>
    <b-container class="novo-usuario">
      <sidebar/>
      <b-form @submit="onSubmit">
        <div class="title-description">Editar meu usuário</div>
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

        <div class="form-group">
          <label for="inputPassword5" class="form-label"> Senha </label>
          <div class="input-password">
            <input :type="isPasswordType ? 'password' : 'text'" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" v-model="password" placeholder="Digite a nova senha do usuário">
            <div class="icon-see-password" @click="isPasswordType = !isPasswordType">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="442.04px" height="442.04px" viewBox="0 0 442.04 442.04" style="enable-background:new 0 0 442.04 442.04;"
                xml:space="preserve">
                <g>
                  <g>
                    <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203
                      c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219
                      c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367
                      c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021
                      c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212
                      c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071
                      c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"/>
                  </g>
                <g>
                  <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188
                    c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993
                    c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5
                    s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"/>
                  </g>
                  <g>
                    <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"/>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <b-form-group
          id="role"
          label="Tipo de usuário"
          label-for="role"
        >
          <b-form-select v-model="user.role" :options="options"></b-form-select>
        </b-form-group>

        <div>
          <b-button type="submit" class="btn">Salvar edição</b-button>
        </div>
      </b-form>

    </b-container>
  </div>

</template>

<script>
import Cookie from 'js-cookie';
import admin from '../components/layouts/admin.vue';
import coordenador from '../components/layouts/coordenador.vue';
export default {
  middleware: 'authenticated',
  components:{
    admin,
    coordenador,
  },
  data() {
    return {
      isPasswordType: true,
      password: '',
      options:[
        { value: 1, text: 'Administrador' },
        { value: 2, text: 'Coordenador' },
      ],
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      await this.$axios.$put(`/usuarios/${this.query_id.id}`, {
        name: this.user.name,
        email: this.user.email,
        password: this.password,
        role: this.user.role
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
