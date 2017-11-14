export default function ({ redirect, store }) {
  const isAuthenticated = (store.getters['getIsAuthenticated'].isAuthenticated)

  if (!isAuthenticated) {
    return redirect('/login')
  } else {
    return redirect('/appventure')
  }
}
