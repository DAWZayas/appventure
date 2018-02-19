import firebaseApp from '~/firebaseapp'

async function getId (rp) {
  const ref = firebaseApp.database().ref(`/urls`)

  return ref.once('value').then((snapshot) => {
    return snapshot.child(rp.date).child(rp.slug).val()
  })
}

export default async function ({ app, params, router }) {
  return new Promise(() => {
    if (!params.id) {
      const id = getId(params)
      console.log(id)
      const parama = { name: 'tournaments', params: { date: params.date, slug: params.slug, id: id } }
      return app.router.push(parama)
    }
  })
}
