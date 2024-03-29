export default function ({store, redirect, route, $cookies}) {
  const cookieRes = $cookies.get('auth')
  store.commit('setAuth', cookieRes)
  if (!store.getters.isAuth) {
    return redirect('/login')
  }
  if (store.getters.isAuth && route.fullPath.includes('coordenador') && store.getters.role == 1) {
    return redirect('/admin')
  }
  if (store.getters.isAuth && route.fullPath.includes('admin') && store.getters.role == 2) {
    return redirect('/coordenador')
  }
}
