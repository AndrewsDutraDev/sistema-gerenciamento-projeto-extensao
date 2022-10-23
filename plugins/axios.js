export default function ({ $axios, app, store }) {
    if (process.client && store.getters.isAuth) {
        $axios.setToken(store.state.auth.access_token, 'Bearer');
    }
    // $axios.onRequest(config => {
    // })
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 401) {
            if (process.client && store.getters.isAuth) {
                store.dispatch('logout')
            }
        }
    })
}
