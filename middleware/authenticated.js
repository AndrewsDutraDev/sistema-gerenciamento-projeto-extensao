export default function ({store, redirect, route, $cookies}) {
  console.log(store.getters.isAuth)
  console.log(store.getters.role)
  const cookieRes = $cookies.get('auth')
  console.log(cookieRes)
  store.commit('setAuth', auth)
  console.log('dentro do middleware')
  console.log(store.getters.isAuth)
  console.log('-------')
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
