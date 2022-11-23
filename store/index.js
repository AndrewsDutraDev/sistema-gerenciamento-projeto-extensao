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
      email: ''
  }) {
      state.auth = auth
  },
}

export const actions = {
  async nuxtServerInit({commit, state}, {req, app}) {
      let auth = {
          access_token: '',
          email: '',
          role: '',
          name: '',
          id: ''
      }
      // if (req.headers.cookie) {
      //     const parsed = cookieparser.parse(req.headers.cookie)
      //     try {
      //         auth = JSON.parse(parsed.auth)
      //     } catch (err) {
      //         // No valid cookie found
      //     }
      // }
      commit('setAuth', auth)
  },
  logout({commit}) {
    this.$router.push('/login')
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
