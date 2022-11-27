export default function ({store, redirect, route}) {
  console.log(store.getters.isAuth)
  console.log(store.getters.role)
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
