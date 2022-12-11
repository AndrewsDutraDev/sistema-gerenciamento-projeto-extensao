const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined

export const getters = {
  isAuth: state => {
    return !!state.auth.access_token
  },
  role: state => {
    return state.auth.role
  },
}

export const state = () => {
  return {
    auth: {
      access_token: '',
      email: '',
      role: '',
      name: '',
      id: ''
    }
  }
}

export const mutations = {
  setAuth(state, auth = {
    access_token: '',
    email: '',
    role: '',
    name: '',
    id: ''
  }) {
      state.auth = auth
  },
}

export const actions = {
  async nuxtServerInit({commit, state}, {req, app}) {
      const cookieRes = this.$cookies.get('auth')
      let auth = {
          access_token: '',
          email: '',
          role: '',
          name: '',
          id: ''
      }
      if (cookieRes) {
          try {
              auth = cookieRes
          } catch (err) {
              // No valid cookie found
          }
      }

      commit('setAuth', auth)
  },
  logout({commit}) {
    this.$router.push('/')
    commit('setAuth', {
      access_token: '',
      email: '',
      role: '',
      name: '',
      id: ''
    })
    Cookie.remove('auth')
  }
}
