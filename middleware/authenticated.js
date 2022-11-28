export default function ({store, redirect, route, $cookies}) {
  console.log(store.getters.isAuth)
  console.log(store.getters.role)
  const cookieRes = $cookies.get('auth')
  console.log(cookieRes)
  console.log('dentro do middleware')
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
