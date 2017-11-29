export default function ({ store, redirect }) {
  const isAuthenticated = (store.getters['isAuthenticated'])

  if (!isAuthenticated) {
    return redirect('/login')
  } else {
    return redirect('/appventure')
  }
}
